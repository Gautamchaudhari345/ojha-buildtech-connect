import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/config/site";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: `Contact Us — ${site.name}` },
      { name: "description", content: "Call, email or send OJHA BUILDTECH your requirement — we respond with next steps and arrange a site inspection where needed." },
      { property: "og:title", content: `Contact Us — ${site.name}` },
      { property: "og:description", content: "Call, email or send OJHA BUILDTECH your requirement — we respond with next steps and arrange a site inspection where needed." },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const wa = whatsappLink(site.whatsappNumber, "Hello OJHA BUILDTECH, I'd like to discuss a project.");
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us what you are seeing" description="The damp patch, the crack, the date you cannot move. We will say whether a visit comes next, then follow with a written step." />
      <section className="bg-background py-16">
        <div className="container-site grid gap-10 lg:grid-cols-3">
          <div className="space-y-4">
            <a href={`tel:${site.phoneHref}`} className="card-lift flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <span className="icon-well"><Phone className="h-5 w-5" aria-hidden /></span>
              <span><span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Call</span><span className="mt-1 block font-medium">{site.phoneDisplay}</span></span>
            </a>
            <a href={`mailto:${site.email}`} className="card-lift flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <span className="icon-well"><Mail className="h-5 w-5" aria-hidden /></span>
              <span><span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Email</span><span className="mt-1 block font-medium">{site.email}</span></span>
            </a>
            {wa && (
              <a href={wa} target="_blank" rel="noreferrer noopener" className="card-lift flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                <span className="icon-well"><MessageCircle className="h-5 w-5" aria-hidden /></span>
                <span><span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">WhatsApp</span><span className="mt-1 block font-medium">Message the team</span></span>
              </a>
            )}
            {site.address && (
              <p className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                <span className="icon-well"><MapPin className="h-5 w-5" aria-hidden /></span>
                <span><span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Visit</span><span className="mt-1 block font-medium leading-relaxed">{site.address}</span></span>
              </p>
            )}
          </div>
          <div className="lg:col-span-2"><EnquiryForm source="contact" /></div>
        </div>
      </section>
    </>
  );
}
