import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  HardHat,
  Quote,
  ShieldCheck,
} from "lucide-react";

import { site } from "@/config/site";
import { photo } from "@/lib/images";
import { coreServices } from "@/data/services";
import { industries } from "@/data/industries";
import { projects } from "@/data/projects";
import { faqs } from "@/data/faqs";
import { testimonials } from "@/data/testimonials";
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

const proof = [
  { label: "Look first", detail: "The cause, not just the stain" },
  { label: "Write it down", detail: "Materials, stages, exclusions" },
  { label: "Check the work", detail: "Before the next stage covers it" },
  { label: "Keep you open", detail: "Homes, offices and running plants" },
];

const flow = [
  {
    title: "Tell us what you see",
    text: "A damp patch, a crack, a deadline, a building that cannot shut. A short note is enough to start.",
  },
  {
    title: "We visit the site",
    text: "Most leaks are not where the water shows up. We trace the path before anyone names a price.",
  },
  {
    title: "You get a written quote",
    text: "What is included, what is not, and the order of work. If the scope changes, you hear it first.",
  },
  {
    title: "We build, then we check",
    text: "Supervision at each stage, a water test where the method needs one, then a clear handover.",
  },
];

const commitments = [
  {
    icon: ClipboardCheck,
    title: "A visit before a number",
    text: "A photo can start the conversation. It cannot set the price. We walk the site and name the cause.",
  },
  {
    icon: BadgeCheck,
    title: "A quote you can read",
    text: "Materials, stages and exclusions, in writing. Nothing important is hiding inside a single lump sum.",
  },
  {
    icon: ShieldCheck,
    title: "Checked before it is covered",
    text: "The work you will not see later is the work we verify first — including a water test when the method calls for it.",
  },
  {
    icon: HardHat,
    title: "The building stays in use",
    text: "People still live there, the office still opens, the plant still runs. The job is phased around that.",
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
          "Waterproofing, civil construction and site development. We find the cause, quote it in writing, and check each stage before we call the job finished.",
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
          className="hero-zoom absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" aria-hidden />
        <div className="container-site relative flex flex-col justify-center py-16 sm:py-20 lg:py-24">
          <p className="fade-up inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            <span className="h-px w-8 bg-gold" aria-hidden />
            {site.tagline}
          </p>
          <h1 className="fade-up mt-5 max-w-4xl text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl" style={{ animationDelay: "0.1s" }}>
            Waterproofing, civil construction and infrastructure —{" "}
            <span className="text-gold">done right the first time.</span>
          </h1>
          <p className="fade-up mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg" style={{ animationDelay: "0.2s" }}>
            A damp ceiling is a symptom. We find where the water enters, write the scope before work starts,
            and check each stage — terraces, basements, buildings and the ground around them.
          </p>
          <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.3s" }}>
            <Button asChild variant="gold" size="lg" className="cta-glow">
              <Link to="/request-a-quote">
                Request a Quote
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-white/30 bg-white/5 text-primary-foreground backdrop-blur-sm hover:border-white/50 hover:bg-white/15"
            >
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
          <dl className="fade-up mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4" style={{ animationDelay: "0.15s" }}>
            {proof.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-md transition-colors duration-300 hover:border-gold/50 hover:bg-white/15"
              >
                <dt className="text-sm font-semibold text-white">{item.label}</dt>
                <dd className="mt-1 text-xs leading-relaxed text-white/75">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-background py-16 lg:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why OJHA BUILDTECH"
            title="What you can hold us to"
            description="No lifetime guarantee, and no price guessed over the phone. A written scope, careful work, and a check before we call it finished."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className={`reveal reveal-${index + 1} card-lift relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm`}
              >
                <span className="absolute right-5 top-4 text-2xl font-bold text-gold/35" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="icon-well">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How a job moves */}
      <section className="border-y border-border bg-surface py-16 lg:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="From the first call"
            title="Four steps. Nothing important left unsaid."
            description="You should know what happens next before anyone arrives with materials."
          />
          <div className="relative mt-12">
            <div
              className="pointer-events-none absolute inset-x-8 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold to-transparent lg:block"
              aria-hidden
            />
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((step, index) => (
              <li
                key={step.title}
                className={`reveal reveal-${index + 1} relative rounded-2xl border border-border bg-card p-5 shadow-sm`}
              >
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold ring-4 ring-surface">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-16 lg:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our services"
            title="The water, the structure, and the ground around it"
            description="Leaks, civil work and site development usually meet on the same building. One team follows the problem through, instead of handing you to the next contractor."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => (
              <Link
                key={service.slug}
                to={service.path}
                className={`reveal reveal-${index + 1} card-lift group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={photo(service.image)}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-deep/50 to-transparent" aria-hidden />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-deep">
                    {service.tagline}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep">
                    See the method
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="navy-mesh py-16 text-primary-foreground lg:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Where we work"
            title="The schedule follows the building"
            description="A lived-in home, a factory that cannot stop, and a school on term time do not want the same site plan."
            onDark
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industryIcons[industry.icon];
              return (
                <div
                  key={industry.name}
                  className={`reveal reveal-${(index % 3) + 1} card-lift rounded-2xl border border-white/10 bg-white/[0.06] p-6 hover:border-gold/40 hover:bg-white/10`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 ring-1 ring-gold/30">
                    <Icon className="h-5 w-5 text-gold" aria-hidden />
                  </div>
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
              <Link to="/industries">How we plan each kind of site</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-background py-16 lg:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="How a job is thought through"
            title="Work from the site"
            description="Photographs of the building, renovation, structural and waterproofing work."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} className={`reveal reveal-${index + 1}`} />
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

      <section className="bg-surface py-16 lg:py-20">
        <div className="container-site">
          <SectionHeading
            align="center"
            eyebrow="From the people on site"
            title="What clients say after the work"
            description="Homeowners and building managers, on the visit, the written scope, and the order of work."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <figure
                key={item.name}
                className={`reveal reveal-${index + 1} card-lift flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm`}
              >
                <Quote className="h-6 w-6 text-gold-deep" aria-hidden />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{item.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Before you call"
              title="Questions we would rather answer now"
              description="Plain answers. If we cannot promise something, the page says so — the quotation will say the same."
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
                  className="reveal rounded-2xl border border-border bg-card px-5 shadow-sm transition-colors data-[state=open]:border-gold/40"
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
        title="Tell us what the building is doing."
        text="A damp patch, a crack, a date you cannot move. We will say if a visit is needed, then come back with the work that matches the cause."
      />
    </>
  );
}
