import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Enquiry submission schema — shared by the contact form and the quote wizard.
 * The same schema is validated again inside the server function handler, so
 * nothing reaches the database without passing these rules.
 */
export const enquirySchema = z.object({
  source: z.enum(["contact", "quote"]),
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[\d\s()-]{8,20}$/, "Please enter a valid phone number"),
  email: z
    .union([z.literal(""), z.string().trim().email("Please enter a valid email").max(255)])
    .optional(),
  service: z.string().trim().min(2).max(120),
  location: z.string().trim().max(200).optional().or(z.literal("")),
  propertyType: z.string().trim().max(120).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please describe your requirement (at least 10 characters)")
    .max(2000),
  contactMethod: z.enum(["phone", "email", "whatsapp"]).default("phone"),
  /** Honeypot: real users never fill this. */
  website: z.string().max(0).optional(),
});

export type EnquiryInput = z.input<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => enquirySchema.parse(input))
  .handler(async ({ data }) => {
    // Honeypot hit: silently accept without storing anything.
    if (data.website) {
      return { reference: null, discarded: true as const };
    }

    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const { createClient } = await import("@supabase/supabase-js");
    type Database = await import("@/integrations/supabase/types").then((m) => m.Database);
    const supabasePublic = createClient<Database>(
      process.env["SUPABASE_URL"]!,
      key,
      {
        auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
        // Opaque sb_ keys are not JWTs — send apikey only, no bearer header.
        global: {
          fetch: (input, init) => {
            const h = new Headers(init?.headers);
            if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
              h.delete("Authorization");
            }
            h.set("apikey", key);
            return fetch(input, { ...init, headers: h });
          },
        },
      },
    );

    const { data: row, error } = await supabasePublic
      .from("enquiries")
      .insert({
        source: data.source,
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        service: data.service,
        location: data.location || null,
        property_type: data.propertyType || null,
        message: data.message,
        contact_method: data.contactMethod,
      })
      .select("reference_code")
      .single();

    if (error || !row) {
      throw new Error(
        "We could not save your enquiry right now. Please try again, or reach us directly by phone or email.",
      );
    }

    return { reference: row.reference_code, discarded: false as const };
  });
