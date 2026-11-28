import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { site } from "@/config/site";
import { faqs, faqCategories } from "@/data/faqs";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: `Frequently Asked Questions — ${site.name}` },
      { name: "description", content: "Answers about waterproofing, civil work, site inspections, quotations, timelines and workmanship at OJHA BUILDTECH." },
      { property: "og:title", content: `Frequently Asked Questions — ${site.name}` },
      { property: "og:description", content: "Answers about waterproofing, civil work, site inspections, quotations, timelines and workmanship at OJHA BUILDTECH." },
      { property: "og:url", content: "/faq" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
});

function FaqPage() {
  const [cat, setCat] = useState<(typeof faqCategories)[number]>("All");
  const list = cat === "All" ? faqs : faqs.filter((f) => f.category === cat);
  return (
    <>
      <PageHero eyebrow="FAQ" title="Ask this before you hire anyone" description="The questions we hear before a visit. If we cannot promise it, the answer says so — and the quotation will match." />
      <section className="bg-background py-16">
        <div className="container-site max-w-4xl">
          <div className="flex flex-wrap gap-2">
            {faqCategories.map((c) => (
              <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={cn("rounded-full border px-4 py-2 text-sm font-medium transition-colors", cat === c ? "border-navy bg-navy text-gold" : "border-border bg-card text-foreground hover:border-gold/60")}>{c}</button>
            ))}
          </div>
          <Accordion type="single" collapsible className="mt-8 space-y-3">
            {list.map((f) => (
              <AccordionItem key={f.question} value={f.question} className="rounded-2xl border border-border bg-card px-5 shadow-sm">
                <AccordionTrigger className="text-left font-semibold">{f.question}</AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
