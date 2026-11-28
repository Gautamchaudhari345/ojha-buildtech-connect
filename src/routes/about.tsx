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
    text: "The stain on the ceiling is not the diagnosis. We inspect first, so the treatment matches the path the water actually takes.",
  },
  {
    icon: Handshake,
    title: "Say what we will do, then do it",
    text: "Scope, materials, stages and exclusions go in the quotation. If the site shows something we did not expect, you hear it before the work changes.",
  },
  {
    icon: ShieldCheck,
    title: "Quality you can verify",
    text: "Someone is responsible at each stage. Where a water test belongs, we do it before the finish hides the work.",
  },
  {
    icon: Target,
    title: "Honest about limits",
    text: "If a job needs a skill or a machine we do not have, we say so. Taking it anyway is how buildings get repaired twice.",
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
        description="One bathroom or a full site, the order stays the same: look first, write the scope, do the work, then check it before we leave."
      />

      <section className="bg-background py-16 lg:py-20">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who we are" title="The unglamorous steps, done properly" />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Most of the buildings {site.name} is called to have already been repaired once.
                The coating went on before anyone asked where the water was coming from, or the
                plaster covered a crack that was still moving. We started from the other end:
                diagnose, prepare, then apply.
              </p>
              <p>
                The work sits in three places that usually meet. Waterproofing for terraces,
                bathrooms, basements, tanks and external walls. Civil work from structure through
                plaster and finish. And the ground around the building — levels, paving, drainage
                and the order those pieces have to happen in.
              </p>
              <p>
                We will not promise that a treatment lasts forever. Structures move, drains block,
                and later work can damage a good job. What you can hold us to is the diagnosis,
                a system chosen for that surface, application that is checked, and plain advice
                on how to look after it.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg ring-1 ring-navy/5">
            <img
              src={photo("site-engineer")}
              alt="Site engineer reviewing drawings and progress on a construction site"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our values"
            title="Four rules we do not bend to win a job"
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="reveal card-lift rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
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
            title="Bring us the problem, not a specification"
            description="Describe what you are seeing. We will say whether the next step is a visit, and the quote will follow what that visit finds."
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
