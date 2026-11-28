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
    tagline: "Find the entry, then stop it",
    description:
      "Terraces, bathrooms, basements, tanks and external walls. We trace where the water gets in, prepare the surface, and apply the system that fits that structure — not a coating chosen from a catalogue.",
    image: "waterproofing-repair-pipeline",
    imageAlt: "Waterproofing a terrace, repairing a cracked wall, and jointing a pipeline",
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
    tagline: "Built in stages you can see",
    description:
      "New construction, renovation, masonry, plaster, concrete and finishing. The quote names each stage, and the next trade starts only after that stage has been checked.",
    image: "small-building-construction",
    imageAlt: "Masons raising a small red-brick building on bamboo scaffolding",
    highlights: [
      "Small building construction",
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
    tagline: "Levels, access, drainage, sequence",
    description:
      "Site development, foundations, paving and the coordination that keeps a larger job in order. Planned around access, rain, and whatever still has to keep operating.",
    image: "rcc-structural-work",
    imageAlt: "Crew placing concrete on a reinforced roof slab with steel bars and a pump line",
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
