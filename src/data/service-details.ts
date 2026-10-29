/**
 * Service-page content. Every offering listed here should be confirmed with
 * OJHA BUILDTECH before launch — remove or adjust anything the company does
 * not actually provide. No permanent-results claims or fixed warranties are
 * made anywhere in this copy.
 */

export type SolutionBlock = {
  title: string;
  applications: string;
  problemsAddressed: string[];
};

export type ServiceDetail = {
  slug: string;
  heroTitle: string;
  heroDescription: string;
  image: string;
  imageAlt: string;
  solutions: SolutionBlock[];
  process: string[];
  scopeNote: string;
};

export const waterproofing: ServiceDetail = {
  slug: "waterproofing",
  heroTitle: "Waterproofing Solutions",
  heroDescription:
    "Water ingress rarely has a single cause. We begin every assignment with inspection and diagnosis, then match the treatment — membrane, coating, grouting or crystalline systems — to the surface, the structure and the exposure it faces.",
  image: "service-waterproofing",
  imageAlt: "Building exterior with scaffolding during waterproofing work",
  solutions: [
    {
      title: "Terrace and Roof Waterproofing",
      applications:
        "Flat and sloped RCC terraces, podiums, chajjas and roof decks of residential and commercial buildings.",
      problemsAddressed: [
        "Terrace leakage during monsoon",
        "Damp patches on ceiling below the roof",
        "Ponding water and surface deterioration",
        "Failed older waterproofing layers",
      ],
    },
    {
      title: "Bathroom and Wet-Area Waterproofing",
      applications:
        "Bathrooms, kitchens, utility areas and balconies in new construction and renovation projects.",
      problemsAddressed: [
        "Seepage into rooms adjoining bathrooms",
        "Leaks through sunken slabs and floor traps",
        "Deteriorating tile joints in wet zones",
        "Dampness on walls behind sanitary fittings",
      ],
    },
    {
      title: "Basement Waterproofing",
      applications:
        "Residential and commercial basements, podium levels, lift pits and retaining walls.",
      problemsAddressed: [
        "Water entering through walls and raft joints",
        "Persistent dampness and efflorescence",
        "Flooding during heavy rain",
        "Seepage at construction and expansion joints",
      ],
    },
    {
      title: "Water Tank Waterproofing",
      applications:
        "Overhead and underground water tanks, sumps and storage structures.",
      problemsAddressed: [
        "Contamination risk from surface seepage",
        "Leaks through tank walls and joints",
        "Cracking from settlement or age",
        "Algae and damp growth on inner surfaces",
      ],
    },
    {
      title: "External Wall Leakage Treatment",
      applications:
        "External facades, parapets, window perimeters and wall junctions of multi-storey buildings.",
      problemsAddressed: [
        "Rainwater entering through external cracks",
        "Damp streaks on internal walls",
        "Peeling paint and plaster deterioration",
        "Leaks at window and door perimeters",
      ],
    },
    {
      title: "Crack Sealing and Leakage Repair",
      applications:
        "Structural and non-structural cracks in slabs, beams, columns and masonry.",
      problemsAddressed: [
        "Active leaks through cracks and joints",
        "Honeycombs and voids in concrete",
        "Recurring leaks after partial repairs",
        "Deterioration around pipe and drain penetrations",
      ],
    },
    {
      title: "Commercial and Industrial Waterproofing",
      applications:
        "Factories, warehouses, malls, hotels, offices and institutional buildings, planned around operating schedules.",
      problemsAddressed: [
        "Large-area roof and deck leakage",
        "Production or storage areas affected by dampness",
        "Coordination with running operations",
        "Long-term maintenance planning for large assets",
      ],
    },
  ],
  process: [
    "Site inspection and leak diagnosis",
    "Surface preparation and substrate repair",
    "System selection matched to the surface and exposure",
    "Application with quality checks at each stage",
    "Water ponding or testing where applicable",
    "Handover with care and maintenance guidance",
  ],
  scopeNote:
    "Waterproofing performance depends on the structure, surfaces and site conditions. We recommend what inspection supports — no system is presented as a permanent guarantee.",
};

export const civilWork: ServiceDetail = {
  slug: "civil-work",
  heroTitle: "Civil Construction Work",
  heroDescription:
    "From new construction to repairs and finishing, our civil work is planned around drawings, materials and supervision — with clear scope, staged execution and quality checks you can see.",
  image: "service-civil",
  imageAlt: "Construction workers on a reinforced concrete building site",
  solutions: [
    {
      title: "Residential and Commercial Civil Work",
      applications:
        "Independent houses, apartment works, offices, showrooms and small commercial buildings.",
      problemsAddressed: [
        "New construction from foundation to finishing",
        "Additions and alterations to existing buildings",
        "Poor-quality earlier work needing correction",
        "Tight coordination between trades",
      ],
    },
    {
      title: "Building Construction and Structural Work",
      applications:
        "RCC frame construction, structural repairs and strengthening works under engineering guidance.",
      problemsAddressed: [
        "Foundation and framing for new builds",
        "Structural deterioration in older buildings",
        "Load-bearing modifications with proper design input",
        "Concrete repair and jacketing works",
      ],
    },
    {
      title: "Renovation and Repair",
      applications:
        "Refurbishment of homes, offices and commercial units, occupied or vacant.",
      problemsAddressed: [
        "Ageing interiors needing renewal",
        "Leaks and dampness before finishing work",
        "Layout changes and reconfiguration",
        "Phased work in occupied premises",
      ],
    },
    {
      title: "Plastering and Masonry",
      applications:
        "Internal and external plaster, brick and block masonry, boundary walls and compound structures.",
      problemsAddressed: [
        "Hollow and cracked plaster",
        "Uneven surfaces before painting",
        "Weak joints and poor bonding",
        "Water ingress through defective masonry",
      ],
    },
    {
      title: "Concrete Work and Finishing",
      applications:
        "Casting, flooring, waterproof concreting, tiling, painting and final finishing packages.",
      problemsAddressed: [
        "Slab and floor casting with proper curing",
        "Flooring and tiling finish quality",
        "Surface preparation before painting",
        "Final handover-ready finishing",
      ],
    },
    {
      title: "Site Development and Related Civil Works",
      applications:
        "Leveling, boundaries, drainage connections and ancillary works around a main structure.",
      problemsAddressed: [
        "Uneven or waterlogged plots",
        "Compound walls and gates",
        "External drainage and stormwater routing",
        "Miscellaneous site civil requirements",
      ],
    },
  ],
  process: [
    "Requirement review and site visit",
    "Scope, drawings and material schedule",
    "Transparent quotation with stages",
    "Execution with supervision and stage checks",
    "Snag review and finishing",
    "Handover with documentation",
  ],
  scopeNote:
    "Final scope for any project is confirmed in writing before work begins. Offerings listed here can be configured to match services the company confirms it provides.",
};

export const infrastructure: ServiceDetail = {
  slug: "infrastructure",
  heroTitle: "Infrastructure Development",
  heroDescription:
    "Infrastructure work is where coordination matters most — multiple agencies, sequences and site conditions. We plan execution around the programme and keep each stage verifiable.",
  image: "service-infrastructure",
  imageAlt: "Large structural framework under development",
  solutions: [
    {
      title: "Site Development",
      applications:
        "Land development, leveling, access works and enabling infrastructure for construction projects.",
      problemsAddressed: [
        "Preparation of raw or uneven sites",
        "Access roads and internal paths",
        "Site drainage and water management",
        "Enabling works before main construction",
      ],
    },
    {
      title: "Commercial and Industrial Infrastructure",
      applications:
        "Factories, warehouses, logistics units, commercial complexes and institutional campuses.",
      problemsAddressed: [
        "Heavy-duty flooring and pavements",
        "Service corridors and utility routing",
        "Structural works for industrial sheds",
        "Compliance with operational requirements",
      ],
    },
    {
      title: "Concrete and Foundational Works",
      applications:
        "Foundations, machine bases, retaining structures and heavy-duty concrete elements.",
      problemsAddressed: [
        "Foundations matched to soil and loading",
        "Machine foundations and anchor works",
        "Quality-controlled concreting and curing",
        "Structural durability in demanding conditions",
      ],
    },
    {
      title: "External Development",
      applications:
        "Roads, pathways, parking areas, landscaping hardworks, drainage and boundary services within a development.",
      problemsAddressed: [
        "Internal roads and paved areas",
        "Stormwater and drainage networks",
        "Boundary walls, gates and site utilities",
        "Finishing of external areas before handover",
      ],
    },
    {
      title: "Project Execution and Coordination",
      applications:
        "End-to-end coordination of agencies, schedules, materials and quality for infrastructure packages.",
      problemsAddressed: [
        "Multi-agency sequencing conflicts",
        "Material procurement and storage",
        "Progress reporting to owners and consultants",
        "Quality checkpoints across stages",
      ],
    },
  ],
  process: [
    "Site study and requirement mapping",
    "Execution plan and method statement",
    "Stage-wise mobilisation",
    "Supervised execution with progress reporting",
    "Quality review at defined checkpoints",
    "Handover with as-built documentation",
  ],
  scopeNote:
    "We take on infrastructure scopes that match our team's capability and equipment. Claims about specialized or government capabilities are made only when verified.",
};
