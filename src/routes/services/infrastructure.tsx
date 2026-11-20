import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { infrastructure } from "@/data/service-details";
import { ServiceDetailPage } from "@/components/site/ServiceDetailPage";

export const Route = createFileRoute("/services/infrastructure")({
  component: () => <ServiceDetailPage detail={infrastructure} />,
  head: () => ({
    meta: [
      { title: `Infrastructure Development — ${site.name}` },
      { name: "description", content: "Site development, concrete and foundational works, external development and coordinated project execution." },
      { property: "og:title", content: `Infrastructure Development — ${site.name}` },
      { property: "og:description", content: "Site development, concrete and foundational works, external development and coordinated project execution." },
      { property: "og:url", content: "/services/infrastructure" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services/infrastructure" }],
  }),
});
