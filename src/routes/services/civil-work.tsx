import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { civilWork } from "@/data/service-details";
import { ServiceDetailPage } from "@/components/site/ServiceDetailPage";

export const Route = createFileRoute("/services/civil-work")({
  component: () => <ServiceDetailPage detail={civilWork} />,
  head: () => ({
    meta: [
      { title: `Civil Construction Work — ${site.name}` },
      { name: "description", content: "Residential and commercial construction, renovation, masonry, plastering, concrete and finishing with clear scope and supervision." },
      { property: "og:title", content: `Civil Construction Work — ${site.name}` },
      { property: "og:description", content: "Residential and commercial construction, renovation, masonry, plastering, concrete and finishing with clear scope and supervision." },
      { property: "og:url", content: "/services/civil-work" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services/civil-work" }],
  }),
});
