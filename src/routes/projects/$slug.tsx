import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { site } from "@/config/site";
import { photo } from "@/lib/images";
import { projectBySlug } from "@/data/projects";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return project;
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="container-site py-24 text-center">
      <h1 className="text-3xl font-bold">Project not found</h1>
      <Button asChild variant="gold" className="mt-6"><Link to="/projects">Back to projects</Link></Button>
    </div>
  ),
  errorComponent: () => <div className="container-site py-24 text-center">This project couldn't load.</div>,
  head: ({ params, loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — ${site.name}` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: `${loaderData.title} — ${site.name}` },
          { property: "og:description", content: loaderData.summary },
          { property: "og:url", content: `/projects/${params.slug}` },
          { property: "og:type", content: "article" },
        ]
      : [{ title: `Project unavailable — ${site.name}` }, { name: "robots", content: "noindex" }],
    links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
  }),
});

function ProjectPage() {
  const p = Route.useLoaderData();
  const blocks = [["Scope", p.scope], ["Challenge", p.challenge], ["Approach", p.approach], ["Outcome", p.outcome]];
  return (
    <>
      <PageHero eyebrow={p.category} title={p.title} description={p.summary} image={p.image} imageAlt={p.imageAlt} />
      <section className="bg-background py-16">
        <div className="container-site">
          <div className="grid gap-6 md:grid-cols-2">
            {blocks.map(([t, d]) => (
              <div key={t} className="card-lift rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="eyebrow">{t}</p>
                <p className="mt-3 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {p.gallery.map((g) => (
              <img key={g.imageAlt} src={photo(g.image)} alt={g.imageAlt} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md ring-1 ring-border" />
            ))}
          </div>
          <Button asChild variant="outline" className="mt-10"><Link to="/projects"><ArrowLeft className="h-4 w-4" aria-hidden />All projects</Link></Button>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
