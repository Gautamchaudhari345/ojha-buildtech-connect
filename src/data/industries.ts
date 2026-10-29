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
      "Independent homes, apartments and housing complexes — from structural work and finishing to keeping terraces, bathrooms and walls dry through the monsoon.",
    services: ["Terrace waterproofing", "Bathroom treatment", "Renovation", "Plastering & painting"],
    icon: "home",
  },
  {
    name: "Commercial Buildings",
    description:
      "Offices, retail spaces, hotels and mixed-use buildings where leakage and downtime directly affect tenants and business operations.",
    services: ["Facade leakage treatment", "Basement waterproofing", "Fit-out civil work", "Phased execution"],
    icon: "building",
  },
  {
    name: "Industrial Facilities",
    description:
      "Factories and manufacturing units needing heavy-duty concrete works, machine-friendly flooring and waterproofing that survives industrial conditions.",
    services: ["Industrial flooring", "Foundational works", "Roof & deck systems", "Operational-area planning"],
    icon: "factory",
  },
  {
    name: "Warehouses",
    description:
      "Storage and logistics buildings where a dry structure and sound paving protect goods, racking and vehicle movement.",
    services: ["Site development", "Heavy-duty paving", "Roof waterproofing", "Drainage works"],
    icon: "warehouse",
  },
  {
    name: "Institutional Buildings",
    description:
      "Schools, colleges, hospitals and community buildings — executed with the scheduling discipline these occupied premises require.",
    services: ["Phased waterproofing", "Civil repairs", "Safety-first execution", "Vacation-period works"],
    icon: "school",
  },
  {
    name: "Infrastructure Projects",
    description:
      "Site development, external works and coordinated execution packages for larger developments and their surroundings.",
    services: ["Site development", "External development", "Concrete works", "Project coordination"],
    icon: "route",
  },
];
