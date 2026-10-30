import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { site } from "@/config/site";

export function CtaBanner({
  title = "Discuss your project with us",
  text = "Share your requirement — we will arrange a site inspection where needed and follow with a clear written proposal.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="navy-section">
      <div className="container-site flex flex-col items-start gap-6 py-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{title}</h2>
          <p className="mt-3 text-base leading-relaxed text-primary-foreground/80">{text}</p>
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
