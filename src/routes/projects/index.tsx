import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { site } from "@/config/site";
import { projects, projectCategories } from "@/data/projects";
import { PageHero } from "@/components/site/PageHero";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CtaBanner } from "@/components/site/CtaBanner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: `Projects — ${site.name}` },
      { name: "description", content: "How OJHA BUILDTECH approaches waterproofing, civil and infrastructure projects — scope, challenge, approach and outcome." },
      { property: "og:title", content: `Projects — ${site.name}` },
      { property: "og:description", content: "How OJHA BUILDTECH approaches waterproofing, civil and infrastructure projects — scope, challenge, approach and outcome." },
      { property: "og:url", content: "/projects" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

function ProjectsPage() {
  const [cat, setCat] = useState<(typeof projectCategories)[number]>("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.category === cat);
  return (
    <>
      <PageHero eyebrow="Projects" title="Our approach, project by project" description="Illustrative sample projects showing how we plan and execute. Real project records will replace these." />
      <section className="bg-background py-16">
        <div className="container-site">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {projectCategories.map((c) => (
              <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)} className={cn("rounded-full border px-4 py-2 text-sm transition-colors", cat === c ? "border-navy bg-navy text-primary-foreground" : "border-input hover:bg-secondary")}>{c}</button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
