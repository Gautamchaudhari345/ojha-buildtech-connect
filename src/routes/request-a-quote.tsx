import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";

const steps = [
  "You describe the problem, the building and the deadline.",
  "We say if a site visit is required, and on what terms.",
  "You receive a written quotation: scope, materials, stages and exclusions.",
];

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
      <PageHero eyebrow="Request a quote" title="A number you can read, after we have looked" description="Send what you know. If the price depends on seeing the building, we will say that before anyone gives you a figure." />
      <section className="bg-surface py-16">
        <div className="container-site grid gap-10 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">How quoting works</p>
            <ol className="mt-4 space-y-4">
            {steps.map((s, i) => (
              <li key={s} className="flex items-start gap-4 border-t border-border pt-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy text-sm font-semibold text-gold">{i + 1}</span>
                <p className="pt-1.5 text-sm leading-relaxed sm:text-base">{s}</p>
              </li>
            ))}
            </ol>
          </div>
          <div className="lg:col-span-2"><EnquiryForm source="quote" /></div>
        </div>
      </section>
    </>
  );
}
