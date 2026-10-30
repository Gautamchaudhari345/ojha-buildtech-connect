import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Handshake, ShieldCheck, Target } from "lucide-react";

import { site } from "@/config/site";
import { photo } from "@/lib/images";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Compass,
    title: "Diagnose before you prescribe",
    text: "A leak is a symptom, not the disease. We inspect first so the treatment matches the actual cause.",
  },
  {
    icon: Handshake,
    title: "Say what we will do, then do it",
    text: "Scope, materials, stages and exclusions in writing. If something changes, you hear it from us first.",
  },
  {
    icon: ShieldCheck,
    title: "Quality you can verify",
    text: "Staged supervision, water testing where applicable, and handover documentation — evidence, not adjectives.",
  },
  {
    icon: Target,
    title: "Honest about limits",
    text: "We take the work we can execute well and say so plainly when a job falls outside that.",
  },
];

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: `About Us — ${site.name}` },
      {
        name: "description",
        content:
          "OJHA BUILDTECH is a construction and waterproofing company built on inspection-led planning, transparent quotations and quality-checked execution.",
      },
      { property: "og:title", content: `About Us — ${site.name}` },
      {
        property: "og:description",
        content:
          "Built on trust: how we diagnose, quote and execute waterproofing, civil and infrastructure work.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built on Trust. Protected for Life."
        description="A construction partner that treats every project — a single bathroom or a full site development — with the same discipline: inspect, plan, execute, verify."
      />

      <section className="bg-background py-16 lg:py-20">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who we are" title="Construction done with engineering discipline" />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                {site.name} was founded on a simple observation: most building failures people
                call us about are not acts of nature — they are the result of skipping diagnosis,
                cutting preparation or rushing application. We built our practice around doing
                those unglamorous steps properly.
              </p>
              <p>
                Our work spans three connected capabilities: waterproofing systems for terraces,
                bathrooms, basements and external walls; civil construction from structural work
                to finishing; and infrastructure development covering site works, concrete and
                coordinated project execution.
              </p>
              <p>
                We don't promise permanent results — no honest contractor can, because every
                structure and exposure is different. What we commit to is correct diagnosis,
                appropriate systems, careful application and quality checks at each stage, plus
                clear guidance on care after completion.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <img
              src={photo("site-engineer")}
              alt="Site engineer reviewing drawings and progress on a construction site"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our values"
            title="Four principles behind every quote and every site"
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="card-lift rounded-xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                  <Icon className="h-5 w-5 text-gold" aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container-site flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Work with us"
            title="Let's look at your project together"
            description="Tell us what you need — we'll inspect, diagnose and quote it clearly."
            align="center"
          />
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="gold" size="lg">
              <Link to="/request-a-quote">Request a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">See our approach to projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
