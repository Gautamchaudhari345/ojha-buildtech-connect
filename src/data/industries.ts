export type Industry = {
  name: string;
  description: string;
  services: string[];
  icon: "home" | "building" | "factory" | "warehouse" | "school" | "route";
};

export const industries: Industry[] = [
  {
    name: "Residential Buildings",
    description:
      "Homes and apartments where people are still living. Terrace and bathroom work, repairs and finishing, timed so the house is usable at the end of each day.",
    services: ["Terrace waterproofing", "Bathroom treatment", "Renovation", "Plastering & painting"],
    icon: "home",
  },
  {
    name: "Commercial Buildings",
    description:
      "Offices, shops, hotels and mixed-use buildings. A leak here is also lost rent and a closed floor, so the work is sequenced around tenants, not against them.",
    services: ["Facade leakage treatment", "Basement waterproofing", "Fit-out civil work", "Phased execution"],
    icon: "building",
  },
  {
    name: "Industrial Facilities",
    description:
      "Factories and plants that cannot pause for a tidy site. Heavy flooring, foundations and waterproofing planned around shifts, machines and access routes.",
    services: ["Industrial flooring", "Foundational works", "Roof & deck systems", "Operational-area planning"],
    icon: "factory",
  },
  {
    name: "Warehouses",
    description:
      "Sheds and logistics yards where a wet slab or a failed drain damages stock and stops trucks. Levels, paving, roofs and stormwater, done in zones.",
    services: ["Site development", "Heavy-duty paving", "Roof waterproofing", "Drainage works"],
    icon: "warehouse",
  },
  {
    name: "Institutional Buildings",
    description:
      "Schools, hospitals and public buildings. Noisy and wet work is pushed into windows when the building can spare them — holidays, nights, or a closed wing.",
    services: ["Phased waterproofing", "Civil repairs", "Safety-first execution", "Vacation-period works"],
    icon: "school",
  },
  {
    name: "Infrastructure Projects",
    description:
      "The work outside the building: levels, internal roads, drainage, boundaries and the order in which those pieces have to land.",
    services: ["Site development", "External development", "Concrete works", "Project coordination"],
    icon: "route",
  },
];
