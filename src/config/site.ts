/**
 * Central OJHA BUILDTECH configuration.
 *
 * IMPORTANT — before launch, replace every value marked `// TODO:` with the
 * company's verified details. Nothing here should stay a placeholder in
 * production: phone, email, WhatsApp, address, hours, socials, domain.
 */

export const site = {
  name: "OJHA BUILDTECH",
  shortName: "OBT",
  tagline: "Built on Trust. Protected for Life.",
  legalName: "OJHA BUILDTECH", // TODO: confirm registered legal entity name

  // TODO: replace with the real phone number before launch.
  phoneDisplay: "+91 XXXXX XXXXX",
  phoneHref: "+91XXXXXXXXXX",
  // TODO: replace with the real email address before launch.
  email: "hello@example.com",

  // TODO: set the real WhatsApp number (country code, digits only) before launch.
  whatsappNumber: null as string | null,

  // TODO: set once the verified registered office address is supplied.
  address: null as string | null,
  // TODO: set once business hours are confirmed.
  businessHours: null as string | null,

  // TODO: add verified social profile URLs (leave null to hide the link).
  social: {
    linkedin: null as string | null,
    facebook: null as string | null,
    instagram: null as string | null,
  },

  // TODO: set the production domain (e.g. "https://www.ojhabuildtech.com")
  // once configured — used for canonical URLs and the XML sitemap.
  siteUrl: null as string | null,
} as const;

export type Site = typeof site;

export function whatsappLink(number: string | null, message: string): string | null {
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
