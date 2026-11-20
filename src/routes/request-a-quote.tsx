import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";

const steps = ["Share your requirement", "We discuss and arrange a site inspection", "You receive a written, itemised quotation"];

export const Route = createFileRoute("/request-a-quote")({
  component: QuotePage,
  head: () => ({
    meta: [
      { title: `Request a Quote — ${site.name}` },
      { name: "description", content: "Request a quotation for waterproofing, civil or infrastructure work. We inspect first and quote in writing." },
      { property: "og:title", content: `Request a Quote — ${site.name}` },
      { property: "og:description", content: "Request a quotation for waterproofing, civil or infrastructure work. We inspect first and quote in writing." },
      { property: "og:url", content: "/request-a-quote" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/request-a-quote" }],
  }),
});

function QuotePage() {
  return (
    <>
      <PageHero eyebrow="Request a quote" title="Get a clear, written quotation" description="No blind pricing — we understand your site first, then quote what's actually needed." />
      <section className="bg-surface py-16">
        <div className="container-site grid gap-10 lg:grid-cols-3">
          <ol className="space-y-5">
            {steps.map((s, i) => (
              <li key={s} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-gold">{i + 1}</span>
                <p className="pt-1">{s}</p>
              </li>
            ))}
          </ol>
          <div className="lg:col-span-2"><EnquiryForm source="quote" /></div>
        </div>
      </section>
    </>
  );
}
