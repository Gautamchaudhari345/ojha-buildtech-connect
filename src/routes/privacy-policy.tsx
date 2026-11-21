import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { PageHero } from "@/components/site/PageHero";

const sections: [string, string][] = [
  ["What we collect", "Your name, phone, optional email, project location, property type and the requirement you describe when you submit an enquiry."],
  ["How we use it", "Only to respond to your enquiry, arrange inspections and prepare quotations. We do not sell your details."],
  ["Storage and security", "Enquiries are stored securely and accessed only by authorised staff."],
  ["Your choices", "You can ask us to update or delete your details at any time by contacting us."],
];

export const Route = createFileRoute("/privacy-policy")({
  component: Page,
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${site.name}` },
      { name: "description", content: "How OJHA BUILDTECH collects, uses and protects the details you share through enquiry forms." },
      { property: "og:title", content: `Privacy Policy — ${site.name}` },
      { property: "og:description", content: "How OJHA BUILDTECH collects, uses and protects the details you share through enquiry forms." },
      { property: "og:url", content: "/privacy-policy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
});

function Page() {
  return (
    <>
      <PageHero title="Privacy Policy" description="Draft for review — to be confirmed by the company before launch." />
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
