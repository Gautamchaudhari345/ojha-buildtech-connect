import heroConstruction from "@/assets/photos/hero-construction.jpg";
import siteEngineer from "@/assets/photos/site-engineer.jpg";
import serviceWaterproofing from "@/assets/photos/service-waterproofing.jpg";
import serviceCivil from "@/assets/photos/service-civil.jpg";
import smallBuildingConstruction from "@/assets/photos/small-building-construction.png";
import turnkeyConstruction from "@/assets/photos/turnkey-construction.jpg";
import buildingRenovation from "@/assets/photos/building-renovation.jpg";
import rccStructuralWork from "@/assets/photos/rcc-structural-work.jpg";
import waterproofingRepairPipeline from "@/assets/photos/waterproofing-repair-pipeline.jpg";
import serviceInfrastructure from "@/assets/photos/service-infrastructure.jpg";
import projectGlassFacade from "@/assets/photos/project-glass-facade.jpg";
import projectResidential from "@/assets/photos/project-residential.jpg";
import projectArchitecture from "@/assets/photos/project-architecture.jpg";
import projectIndustrial from "@/assets/photos/project-industrial.jpg";
import projectCommercial from "@/assets/photos/project-commercial.jpg";

/** Name-keyed photo registry so data files stay plain strings. */
export const photos: Record<string, string> = {
  "hero-construction": heroConstruction,
  "site-engineer": siteEngineer,
  "service-waterproofing": serviceWaterproofing,
  "service-civil": serviceCivil,
  "small-building-construction": smallBuildingConstruction,
  "turnkey-construction": turnkeyConstruction,
  "building-renovation": buildingRenovation,
  "rcc-structural-work": rccStructuralWork,
  "waterproofing-repair-pipeline": waterproofingRepairPipeline,
  "service-infrastructure": serviceInfrastructure,
  "project-glass-facade": projectGlassFacade,
  "project-residential": projectResidential,
  "project-architecture": projectArchitecture,
  "project-industrial": projectIndustrial,
  "project-commercial": projectCommercial,
};

export function photo(name: string): string {
  return photos[name] ?? heroConstruction;
}
