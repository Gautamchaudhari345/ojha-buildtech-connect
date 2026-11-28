import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { photo } from "@/lib/images";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Button } from "@/components/ui/button";
import type { ServiceDetail } from "@/data/service-details";

export function ServiceDetailPage({ detail }: { detail: ServiceDetail }) {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={detail.heroTitle}
        description={detail.heroDescription}
        image={detail.image}
        imageAlt={detail.imageAlt}
        imageClassName={detail.imageClassName}
      />

      <section className="bg-background py-16 lg:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="What we handle"
            title="Solutions and the problems they solve"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {detail.solutions.map((solution) => (
              <article
                key={solution.title}
                className="card-lift overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                {solution.image && (
                  <img
                    src={photo(solution.image)}
                    alt={solution.imageAlt ?? ""}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover"
                  />
                )}
                <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{solution.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {solution.applications}
                </p>
                <ul className="mt-4 space-y-2">
                  {solution.problemsAddressed.map((problem) => (
                    <li key={problem} className="flex items-start gap-2 text-sm text-foreground/90">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden />
                      {problem}
                    </li>
                  ))}
                </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="How we work"
              title="Our process, stage by stage"
            />
            <ol className="mt-8 space-y-4">
              {detail.process.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-gold"
                  >
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-foreground sm:text-base">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="self-start overflow-hidden rounded-2xl border border-border shadow-lg ring-1 ring-border">
            <img
              src={photo(detail.image)}
              alt={detail.imageAlt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container-site">
          <div className="rounded-2xl border border-gold/30 border-l-4 border-l-gold bg-accent/70 p-6 shadow-sm sm:p-8">
            <p className="eyebrow">Scope note</p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground sm:text-base">
              {detail.scopeNote}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg">
              <Link to="/request-a-quote">Request a quote for {detail.heroTitle.toLowerCase()}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">All services</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
