import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { site } from "@/config/site";
import { photo } from "@/lib/images";
import { coreServices } from "@/data/services";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: `Our Services — ${site.name}` },
      { name: "description", content: "Waterproofing solutions, civil construction work and infrastructure development from one accountable team." },
      { property: "og:title", content: `Our Services — ${site.name}` },
      { property: "og:description", content: "Waterproofing solutions, civil construction work and infrastructure development from one accountable team." },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Waterproofing, civil work and infrastructure" description="Three connected capabilities, delivered with the same discipline: inspect, plan, execute, verify." image="hero-construction" />
      <section className="bg-background py-16 lg:py-20">
        <div className="container-site space-y-16">
          {coreServices.map((s, i) => (
            <div key={s.slug} className="grid items-center gap-10 lg:grid-cols-2">
              <img src={photo(s.image)} alt={s.imageAlt} loading="lazy" className={`aspect-[4/3] w-full rounded-xl object-cover shadow-sm ${i % 2 ? "lg:order-2" : ""}`} />
              <div>
                <p className="eyebrow">{s.tagline}</p>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.description}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden />{h}</li>
                  ))}
                </ul>
                <Button asChild variant="gold" className="mt-6"><Link to={s.path}>Explore {s.shortTitle}<ArrowRight className="h-4 w-4" aria-hidden /></Link></Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
