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
      <PageHero eyebrow="Contact" title="Talk to our team" description="Describe the problem or project — we'll get back with next steps." />
      <section className="bg-background py-16">
        <div className="container-site grid gap-10 lg:grid-cols-3">
          <div className="space-y-4">
            <a href={`tel:${site.phoneHref}`} className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 hover:border-gold"><Phone className="h-5 w-5 text-gold-deep" aria-hidden />{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 hover:border-gold"><Mail className="h-5 w-5 text-gold-deep" aria-hidden />{site.email}</a>
            {wa && <a href={wa} target="_blank" rel="noreferrer noopener" className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 hover:border-gold"><MessageCircle className="h-5 w-5 text-gold-deep" aria-hidden />WhatsApp us</a>}
            {site.address && <p className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"><MapPin className="h-5 w-5 text-gold-deep" aria-hidden />{site.address}</p>}
          </div>
          <div className="lg:col-span-2"><EnquiryForm source="contact" /></div>
        </div>
      </section>
    </>
  );
}
