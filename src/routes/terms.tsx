import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { PageHero } from "@/components/site/PageHero";

const sections: [string, string][] = ;

export const Route = createFileRoute("/terms")({
  component: Page,
  head: () => ({
    meta: [
      { title: `Terms & Conditions — ${site.name}` },
      { name: "description", content: "Terms governing use of the OJHA BUILDTECH website and the information on it." },
      { property: "og:title", content: `Terms & Conditions — ${site.name}` },
      { property: "og:description", content: "Terms governing use of the OJHA BUILDTECH website and the information on it." },
      { property: "og:url", content: "/terms" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

function Page() {
  return (
    <>
      <PageHero title="Terms & Conditions" description="Draft for review — to be confirmed by the company before launch." />
      <section className="bg-background py-16">
        <div className="container-site max-w-3xl space-y-8">
          {sections.map(([h, t]) => (
            <div key={h}><h2 className="text-xl font-semibold">{h}</h2><p className="mt-2 leading-relaxed text-muted-foreground">{t}</p></div>
          ))}
          <p className="text-sm text-muted-foreground">Questions? Email {site.email}.</p>
        </div>
      </section>
    </>
  );
}
