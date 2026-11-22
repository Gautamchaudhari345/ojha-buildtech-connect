import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  HardHat,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { site } from "@/config/site";
import { photo } from "@/lib/images";
import { coreServices } from "@/data/services";
import { industries } from "@/data/industries";
import { projects } from "@/data/projects";
import { faqs } from "@/data/faqs";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Home, Building2, Factory, Warehouse, School, Route as RouteIcon } from "lucide-react";

const industryIcons = {
  home: Home,
  building: Building2,
  factory: Factory,
  warehouse: Warehouse,
  school: School,
  route: RouteIcon,
} as const;

const commitments = [
  {
    icon: ClipboardCheck,
    title: "Inspection before quotation",
    text: "We diagnose the actual cause on site before proposing any treatment or price — never a guess over the phone.",
  },
  {
    icon: BadgeCheck,
    title: "Written, itemised scope",
    text: "Every quotation states what is included, the materials, the stages — and what is excluded. No surprises later.",
  },
  {
    icon: ShieldCheck,
    title: "Quality checks at each stage",
    text: "Work is supervised and verified stage by stage, with water testing where the method calls for it.",
  },
  {
    icon: HardHat,
    title: "Executed around your operations",
    text: "Occupied homes, running offices and live industrial sites get phased, protected execution plans.",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: `${site.name} — Waterproofing, Civil Construction & Infrastructure`,
      },
      {
        name: "description",
        content:
          "Terrace, bathroom and basement waterproofing, civil construction and infrastructure development — inspection-led planning, itemised quotations and quality-checked execution.",
      },
      { property: "og:title", content: `${site.name} — Waterproofing, Civil Construction & Infrastructure` },
      {
        property: "og:description",
        content:
          "Waterproofing, civil work and infrastructure delivered with inspection-led planning and quality-checked execution.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const featuredProjects = projects.slice(0, 3);
  const homeFaqs = faqs.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep text-primary-foreground">
        <img
          src={photo("hero-construction")}
          alt="Construction site with structural framework at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" aria-hidden />
        <div className="container-site relative flex min-h-[70vh] flex-col justify-center py-20">
          <p className="fade-up text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {site.tagline}
          </p>
          <h1 className="fade-up mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl" style={{ animationDelay: "0.1s" }}>
            Waterproofing, civil construction and infrastructure — done right the first time.
          </h1>
          <p className="fade-up mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg" style={{ animationDelay: "0.2s" }}>
            We begin with inspection, quote what we actually see, and execute with quality checks
            at every stage. Terraces, basements, buildings and full sites — protected and built to last.
          </p>
          <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.3s" }}>
            <Button asChild variant="gold" size="lg">
              <Link to="/request-a-quote">
                Request a Quote
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-white/30 bg-transparent text-primary-foreground hover:bg-white/10"
            >
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-background py-16 lg:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why OJHA BUILDTECH"
            title="What you can count on, on every project"
            description="No permanent-result promises and no blind pricing — just disciplined process, transparent scope and accountable execution."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="motion-reveal card-lift rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent">
                  <Icon className="h-5 w-5 text-gold-deep" aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our services"
            title="Three core capabilities, one accountable team"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <Link
                key={service.slug}
                to={service.path}
                className="motion-reveal card-lift group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={photo(service.image)}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-deep">
                    {service.tagline}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-deep">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="navy-section py-16 lg:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Industries we serve"
            title="From homes to heavy industry"
            onDark
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industryIcons[industry.icon];
              return (
                <div
                  key={industry.name}
                  className="motion-reveal rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <Icon className="h-6 w-6 text-gold" aria-hidden />
                  <h3 className="mt-3 text-base font-semibold text-primary-foreground">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <Button
              asChild
              variant="outline"
              className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10"
            >
              <Link to="/industries">See how we work in each sector</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-background py-16 lg:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our work"
            title="Projects in focus"
            description="Illustrative examples of how we approach waterproofing, civil and infrastructure scopes. Real project records will replace these samples."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link to="/projects">
                View all projects
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Common questions"
              title="Straight answers, before you call"
              description="The questions we hear most — answered honestly, with no blanket promises."
            />
            <Button asChild variant="gold" className="mt-6">
              <Link to="/faq">
                Read the full FAQ
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="space-y-3">
              {homeFaqs.map((faq) => (
                <AccordionItem
                  key={faq.question}
                  value={faq.question}
                  className="rounded-lg border border-border bg-card px-5"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not sure what your building needs?"
        text="Tell us the symptom — the leak, the crack, the timeline. We will inspect, diagnose and quote the work that is actually needed."
      />
    </>
  );
}
