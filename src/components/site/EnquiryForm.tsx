import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { submitEnquiry, enquirySchema, type EnquiryInput } from "@/lib/enquiries.functions";
import { coreServices } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const serviceOptions = [
  ...coreServices.map((s) => s.title),
  "Other / Not sure yet",
];

const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function EnquiryForm({
  source,
  defaultService,
}: {
  source: "contact" | "quote";
  defaultService?: string;
}) {
  const [form, setForm] = useState<EnquiryInput>({
    source,
    name: "",
    phone: "",
    email: "",
    service: defaultService ?? "",
    location: "",
    propertyType: "",
    message: "",
    contactMethod: "phone",
    website: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [error, setError] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);

  const set = (key: keyof EnquiryInput) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    try {
      const parsed = enquirySchema.parse(form);
      setStatus("submitting");
      const result = await submitEnquiry({ data: parsed });
      setReference(result.reference ?? null);
      setStatus("done");
    } catch (err) {
      setStatus("idle");
      if (err && typeof err === "object" && "issues" in err && Array.isArray(err.issues) && err.issues[0]?.message) {
        setError(String(err.issues[0].message));
      } else {
        setError(
          "Something went wrong while sending your enquiry. Please try again, or reach us directly by phone or email.",
        );
      }
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold-deep" aria-hidden />
        <h3 className="mt-4 text-xl font-semibold text-foreground">Enquiry received</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Thank you — your {source === "quote" ? "quote request" : "message"} has been recorded.
          Our team will get back to you using your preferred contact method.
        </p>
        {reference && (
          <p className="mt-4 rounded-md bg-secondary px-4 py-3 text-sm">
            Your reference code:{" "}
            <span className="font-semibold text-gold-deep">{reference}</span>
          </p>
        )}
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setStatus("idle");
            setForm((f) => ({ ...f, name: "", phone: "", email: "", message: "" }));
          }}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="enquiry-name">Full name *</Label>
          <Input
            id="enquiry-name"
            required
            autoComplete="name"
            placeholder="Your name"
            value={form.name}
            onChange={set("name")}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="enquiry-phone">Phone *</Label>
          <Input
            id="enquiry-phone"
            required
            type="tel"
            autoComplete="tel"
            placeholder="+91 00000 00000"
            value={form.phone}
            onChange={set("phone")}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="enquiry-email">Email (optional)</Label>
          <Input
            id="enquiry-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={set("email")}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="enquiry-service">Service required *</Label>
          <select
            id="enquiry-service"
            required
            className={inputClass}
            value={form.service}
            onChange={set("service")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="enquiry-location">Project location (optional)</Label>
          <Input
            id="enquiry-location"
            placeholder="City / area"
            value={form.location}
            onChange={set("location")}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="enquiry-property">Property type (optional)</Label>
          <Input
            id="enquiry-property"
            placeholder="e.g. Residential, Commercial, Industrial"
            value={form.propertyType}
            onChange={set("propertyType")}
          />
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="enquiry-message">Describe your requirement *</Label>
          <Textarea
            id="enquiry-message"
            required
            rows={5}
            placeholder="Tell us about the problem or work you need — where it is, how long it has been happening, and anything else that helps us understand it."
            value={form.message}
            onChange={set("message")}
          />
        </div>
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-medium">Preferred contact method</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {(["phone", "email", "whatsapp"] as const).map((method) => (
            <label
              key={method}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-sm capitalize transition-colors",
                form.contactMethod === method
                  ? "border-gold-deep bg-accent text-accent-foreground"
                  : "border-input text-muted-foreground hover:bg-secondary",
              )}
            >
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={form.contactMethod === method}
                onChange={set("contactMethod")}
                className="sr-only"
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Honeypot — hidden from users, catches bots. */}
      <div className="hidden" aria-hidden>
        <label htmlFor="enquiry-website">Website</label>
        <input
          id="enquiry-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={set("website")}
        />
      </div>

      {error && (
        <p role="alert" className="mt-4 rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </p>
      )}

      <Button type="submit" variant="gold" size="lg" className="mt-6 w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden />
            Send {source === "quote" ? "quote request" : "enquiry"}
          </>
        )}
      </Button>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        We use your details only to respond to this enquiry — see our{" "}
        <a href="/privacy-policy" className="underline underline-offset-2 hover:text-gold-deep">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
