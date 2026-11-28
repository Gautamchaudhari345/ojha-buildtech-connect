/**
 * Project entries use the site photographs. Copy describes the work in the
 * photo — no invented city, client, or finished-result claim.
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
];

export const projects: Project[] = [
  {
    slug: "small-building-construction",
    title: "Small Building Construction",
    category: "Civil Work",
    location: "Site work",
    image: "small-building-construction",
    imageAlt: "Masons raising a small red-brick building on bamboo scaffolding",
    summary:
      "A small brick building going up course by course, with bamboo scaffolding and the mortar mixed beside the wall.",
    scope: "Brick masonry, scaffolding, and on-site mixing while the walls are raised.",
    challenge: "A compact plot, so materials, the mix, and the masons all work in a tight space around the walls.",
    approach: "Walls are raised in stages. The next course goes on only after the one below has been laid and checked.",
    outcome: "The brick shell is standing, with the scaffolding still in place for the work that follows.",
    gallery: [
      { image: "small-building-construction", imageAlt: "Masons raising a small red-brick building on bamboo scaffolding" },
      { image: "turnkey-construction", imageAlt: "Workers building a multi-storey concrete frame with scaffolding and a mixer on site" },
    ],
  },
  {
    slug: "turnkey-construction",
    title: "Turnkey Construction",
    category: "Civil Work",
    location: "Site work",
    image: "turnkey-construction",
    imageAlt: "Workers building a multi-storey concrete frame with scaffolding and a mixer on site",
    summary:
      "A multi-storey frame under construction — columns, slabs and brick infill, with the crew and a mixer working floor by floor.",
    scope: "Frame, infill masonry, and the site setup that keeps materials moving while upper floors are built.",
    challenge: "Several trades on one building at once: concrete above, brickwork below, and access through the scaffolding.",
    approach: "The frame leads. Infill and the next lift follow the same sequence, so one floor is ready before the crew moves up.",
    outcome: "The structure is rising as one job — frame, walls and site plant in the same photograph.",
    gallery: [
      { image: "turnkey-construction", imageAlt: "Workers building a multi-storey concrete frame with scaffolding and a mixer on site" },
      { image: "rcc-structural-work", imageAlt: "Crew placing concrete on a reinforced roof slab with steel bars and a pump line" },
    ],
  },
  {
    slug: "rcc-structural-work",
    title: "RCC & Structural Work",
    category: "Civil Work",
    location: "Site work",
    image: "rcc-structural-work",
    imageAlt: "Crew placing concrete on a reinforced roof slab with steel bars and a pump line",
    summary:
      "A roof slab being cast over a steel grid, with the crew placing and levelling the concrete as it arrives.",
    scope: "Reinforcement, shuttering, and the pour — from the pump line to the finished surface of the slab.",
    challenge: "A slab has to be placed while the concrete is still workable, across the whole bay, not in patches.",
    approach: "Steel is fixed and checked first. The pour then moves in one pass, with people on the slab to place and level it.",
    outcome: "The reinforced slab is being cast in a single operation, steel and concrete visible together.",
    gallery: [
      { image: "rcc-structural-work", imageAlt: "Crew placing concrete on a reinforced roof slab with steel bars and a pump line" },
      { image: "turnkey-construction", imageAlt: "Workers building a multi-storey concrete frame with scaffolding and a mixer on site" },
    ],
  },
  {
    slug: "building-renovation",
    title: "Building Renovation",
    category: "Civil Work",
    location: "Site work",
    image: "building-renovation",
    imageAlt: "Two workers finishing interior walls and a ceiling during a building renovation",
    summary:
      "Interior finishing in progress — two workers on the walls and ceiling, making the room ready for the next coat.",
    scope: "Wall and ceiling preparation inside an existing room, before paint or other finishes.",
    challenge: "Work happens inside a finished building, so dust, edges and the surfaces already there have to be respected.",
    approach: "Surfaces are made good in place. The crew works the walls and ceiling together so the room is even before the finish.",
    outcome: "The room is in the finishing stage, with the old surfaces being brought back to a clean base.",
    gallery: [
      { image: "building-renovation", imageAlt: "Two workers finishing interior walls and a ceiling during a building renovation" },
      { image: "small-building-construction", imageAlt: "Masons raising a small red-brick building on bamboo scaffolding" },
    ],
  },
  {
    slug: "waterproofing-repair-pipeline",
    title: "Waterproofing, Repair & Pipeline",
    category: "Waterproofing",
    location: "Site work",
    image: "waterproofing-repair-pipeline",
    imageAlt: "Waterproofing a terrace, repairing a cracked wall, and jointing a pipeline",
    summary:
      "Three jobs in one frame: a terrace being waterproofed, a cracked wall opened for repair, and a pipeline being jointed.",
    scope: "Terrace waterproofing, civil repair of a damaged wall, and pipeline jointing.",
    challenge: "Water, cracks and a leaking line are different faults. Each one needs its own opening-up before it is closed.",
    approach: "The terrace is coated where water sits. The wall is cut back to sound material. The pipe is jointed and checked before it is covered.",
    outcome: "The photograph shows the work at the stage it is actually done — coating, repair and jointing — not a promised result.",
    gallery: [
      { image: "waterproofing-repair-pipeline", imageAlt: "Waterproofing a terrace, repairing a cracked wall, and jointing a pipeline" },
      { image: "building-renovation", imageAlt: "Two workers finishing interior walls and a ceiling during a building renovation" },
    ],
  },
];

export function projectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
