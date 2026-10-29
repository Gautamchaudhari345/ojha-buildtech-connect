export type ServiceSummary = {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
};

export const coreServices: ServiceSummary[] = [
  {
    slug: "waterproofing",
    path: "/services/waterproofing",
    title: "Waterproofing Solutions",
    shortTitle: "Waterproofing",
    tagline: "Protection where water does the most damage",
    description:
      "Terraces, bathrooms, basements, water tanks and external walls treated with systematic waterproofing methods — beginning with inspection and surface preparation, not guesswork.",
    image: "service-waterproofing",
    imageAlt: "Concrete building facade prepared for waterproofing treatment",
    highlights: [
      "Terrace and roof waterproofing",
      "Bathroom and wet-area treatment",
      "Basement and water-tank systems",
      "Leakage repair and crack sealing",
    ],
  },
  {
    slug: "civil-work",
    path: "/services/civil-work",
    title: "Civil Construction Work",
    shortTitle: "Civil Work",
    tagline: "Sound structure, clean execution",
    description:
      "Residential and commercial civil work — construction, renovation, masonry, plastering, concrete and finishing — coordinated site to handover with clear quality checkpoints.",
    image: "service-civil",
    imageAlt: "Reinforced concrete structure under construction with steel formwork",
    highlights: [
      "Building and structural work",
      "Renovation and repair",
      "Plastering and masonry",
      "Concrete work and finishing",
    ],
  },
  {
    slug: "infrastructure",
    path: "/services/infrastructure",
    title: "Infrastructure Development",
    shortTitle: "Infrastructure",
    tagline: "Site to surroundings, built to coordinate",
    description:
      "Site development, foundational and external works, and coordinated project execution for commercial, industrial and residential developments.",
    image: "service-infrastructure",
    imageAlt: "Modern building structure viewed from below against the sky",
    highlights: [
      "Site development",
      "Concrete and foundational works",
      "External development",
      "Project execution and coordination",
    ],
  },
];

export function serviceBySlug(slug: string): ServiceSummary | undefined {
  return coreServices.find((s) => s.slug === slug);
}
