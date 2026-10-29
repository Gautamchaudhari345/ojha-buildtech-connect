/**
 * Sample portfolio entries. Every item below is an ILLUSTRATIVE PLACEHOLDER —
 * it must be replaced (or removed) with real OJHA BUILDTECH projects before
 * launch. The UI labels these entries as samples so they are never presented
 * as completed real work.
 */

export type ProjectCategory = "Waterproofing" | "Civil Work" | "Infrastructure";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  image: string;
  imageAlt: string;
  summary: string;
  scope: string;
  challenge: string;
  approach: string;
  outcome: string;
  gallery: { image: string; imageAlt: string }[];
};

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Waterproofing",
  "Civil Work",
  "Infrastructure",
];

export const projects: Project[] = [
  {
    slug: "high-rise-terrace-waterproofing",
    title: "High-Rise Terrace Waterproofing",
    category: "Waterproofing",
    location: "Sample location — replace with real project",
    image: "project-glass-facade",
    imageAlt: "Modern glass high-rise building facade",
    summary:
      "Full terrace membrane renewal for a multi-storey residential tower suffering monsoon leakage into top-floor apartments.",
    scope:
      "Surface preparation, crack treatment and membrane application across the full terrace area, with parapet and detail treatment.",
    challenge:
      "Multiple older waterproofing layers had failed at different points, so leaks appeared in unpredictable locations rather than a single area.",
    approach:
      "Systematic leak mapping, removal of loose material, targeted crack repairs, and a new membrane system completed zone by zone with water testing between stages.",
    outcome:
      "Terrace secured ahead of the monsoon with staged testing records for each completed zone.",
    gallery: [
      { image: "project-glass-facade", imageAlt: "High-rise building exterior" },
      { image: "service-waterproofing", imageAlt: "Facade treatment work" },
    ],
  },
  {
    slug: "residential-complex-civil-package",
    title: "Residential Complex Civil Package",
    category: "Civil Work",
    location: "Sample location — replace with real project",
    image: "project-residential",
    imageAlt: "Contemporary residential building exterior",
    summary:
      "Civil package for a residential complex covering structure finishing, masonry, plaster and internal works.",
    scope:
      "Masonry, plastering, flooring preparation and finishing works across multiple blocks, executed against a stage-wise schedule.",
    challenge:
      "Handover dates required overlapping trades across three blocks with a shared material supply.",
    approach:
      "Zone-wise mobilisation with dedicated supervision per block, daily progress tracking and joint quality checks at each stage boundary.",
    outcome:
      "All blocks handed over on schedule with snag lists closed before final handover.",
    gallery: [
      { image: "project-residential", imageAlt: "Residential complex building" },
      { image: "service-civil", imageAlt: "Construction site supervision" },
    ],
  },
  {
    slug: "warehouse-site-development",
    title: "Warehouse Site Development",
    category: "Infrastructure",
    location: "Sample location — replace with real project",
    image: "project-industrial",
    imageAlt: "Industrial facility under development",
    summary:
      "Site development package for a warehouse including leveling, heavy-duty paving, drainage and boundary works.",
    scope:
      "Earthwork leveling, heavy-duty flooring for loading areas, stormwater drainage and external works.",
    challenge:
      "Water accumulation on the plot during the monsoon threatened both construction access and the finished levels.",
    approach:
      "Regraded levels with a stormwater network routed before paving, and phased paving so operations could begin in completed zones.",
    outcome:
      "Site handed over with dry, operational external areas ready for warehousing operations.",
    gallery: [
      { image: "project-industrial", imageAlt: "Industrial development works" },
      { image: "service-infrastructure", imageAlt: "Structural framework" },
    ],
  },
  {
    slug: "commercial-facade-repair",
    title: "Commercial Building Facade Repair",
    category: "Waterproofing",
    location: "Sample location — replace with real project",
    image: "project-architecture",
    imageAlt: "Curved modern architectural facade",
    summary:
      "External wall leakage treatment for a commercial building with damp streaks and peeling finishes on inner walls.",
    scope:
      "Crack mapping, external crack sealing, window-perimeter treatment and re-finished affected areas.",
    challenge:
      "The building remained occupied, so noisy and dusty work had to be restricted to agreed windows.",
    approach:
      "Floor-by-floor access planning with the building management, quiet-hours scheduling and daily protection of occupied areas.",
    outcome:
      "Internal dampness resolved floor by floor, with occupied areas protected throughout.",
    gallery: [
      { image: "project-architecture", imageAlt: "Architectural facade detail" },
      { image: "service-waterproofing", imageAlt: "Waterproofing preparation" },
    ],
  },
  {
    slug: "office-renovation",
    title: "Office Floor Renovation",
    category: "Civil Work",
    location: "Sample location — replace with real project",
    image: "project-commercial",
    imageAlt: "Modern office interior space",
    summary:
      "Turnkey renovation of an office floor including partitioning, flooring, painting and wet-area renewal.",
    scope:
      "Demolition of outdated finishes, bathroom waterproofing and retiling, flooring, painting and electrical coordination.",
    challenge:
      "The client operated from adjacent floors, so noise, dust and debris movement had strict limits.",
    approach:
      "Containment and debris-routing plan agreed upfront, with noisy work scheduled before business hours.",
    outcome:
      "Renovated floor handed over with zero disruption reported by neighbouring tenants.",
    gallery: [
      { image: "project-commercial", imageAlt: "Renovated office space" },
      { image: "site-engineer", imageAlt: "Engineer reviewing site work" },
    ],
  },
  {
    slug: "basement-seepage-treatment",
    title: "Basement Seepage Treatment",
    category: "Waterproofing",
    location: "Sample location — replace with real project",
    image: "site-engineer",
    imageAlt: "Site engineer inspecting basement construction",
    summary:
      "Basement wall and raft joint seepage treatment for a commercial property's parking level.",
    scope:
      "Joint identification, injection grouting, crystalline coating and drainage-point correction.",
    challenge:
      "Persistent seepage returned after two earlier cosmetic repairs, pointing to untreated joints beneath the surface.",
    approach:
      "Full joint mapping before any treatment, injection at the actual entry points, and protective coating across vulnerable areas.",
    outcome:
      "Seepage stopped at treated joints and the parking level stayed dry through subsequent rains.",
    gallery: [
      { image: "site-engineer", imageAlt: "Basement inspection" },
      { image: "service-waterproofing", imageAlt: "Surface preparation" },
    ],
  },
];

export function projectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
