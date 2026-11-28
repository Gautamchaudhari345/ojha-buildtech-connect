import { createFileRoute } from "@tanstack/react-router";
import { Home, Building2, Factory, Warehouse, School, Route as RouteIcon } from "lucide-react";
import { site } from "@/config/site";
import { industries } from "@/data/industries";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";

const icons = { home: Home, building: Building2, factory: Factory, warehouse: Warehouse, school: School, route: RouteIcon } as const;

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: `Industries We Serve — ${site.name}` },
      { name: "description", content: "Residential, commercial, industrial, warehouse, institutional and infrastructure projects — planned around how each building is used." },
      { property: "og:title", content: `Industries We Serve — ${site.name}` },
      { property: "og:description", content: "Residential, commercial, industrial, warehouse, institutional and infrastructure projects — planned around how each building is used." },
      { property: "og:url", content: "/industries" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
});

function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="The work follows how the building is used" description="People still living there, a line that cannot stop, a school on term time. The hours, the access and the protection change with the building." image="project-industrial" />
      <section className="bg-background py-16">
        <div className="container-site grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => {
            const Icon = icons[ind.icon];
            return (
              <article key={ind.name} className="card-lift rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="icon-well"><Icon className="h-5 w-5" aria-hidden /></div>
                <h2 className="mt-4 text-lg font-semibold">{ind.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {ind.services.map((s) => <span key={s} className="rounded-full bg-secondary px-3 py-1 text-xs">{s}</span>)}
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
