import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { site } from "@/config/site";

export function CtaBanner({
  title = "Describe the problem. We will say what happens next.",
  text = "A short note is enough to start. If the price depends on seeing the site, we will tell you that before anyone quotes a number.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden navy-mesh text-primary-foreground">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden />
      <div className="container-site relative flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Next step</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="gold" size="lg">
            <Link to="/request-a-quote">Request a Quote</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="border border-white/30 bg-transparent text-primary-foreground hover:bg-white/10"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
      <div className="sr-only">{site.name}</div>
    </section>
  );
}
