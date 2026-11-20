import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { waterproofing } from "@/data/service-details";
import { ServiceDetailPage } from "@/components/site/ServiceDetailPage";

export const Route = createFileRoute("/services/waterproofing")({
  component: () => <ServiceDetailPage detail={waterproofing} />,
  head: () => ({
    meta: [
      { title: `Waterproofing Solutions — ${site.name}` },
      { name: "description", content: "Terrace, bathroom, basement, water tank and external wall waterproofing — inspection-led diagnosis and stage-checked application." },
      { property: "og:title", content: `Waterproofing Solutions — ${site.name}` },
      { property: "og:description", content: "Terrace, bathroom, basement, water tank and external wall waterproofing — inspection-led diagnosis and stage-checked application." },
      { property: "og:url", content: "/services/waterproofing" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services/waterproofing" }],
  }),
});
