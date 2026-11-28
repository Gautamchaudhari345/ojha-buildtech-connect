import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { site } from "@/config/site";
import { photo } from "@/lib/images";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const imageGallery = [
  { key: "small-building-construction", title: "Small Building Construction", alt: "Masons raising a small red-brick building on bamboo scaffolding" },
  { key: "turnkey-construction", title: "Turnkey Construction", alt: "Workers building a multi-storey concrete frame with scaffolding and a mixer on site" },
  { key: "building-renovation", title: "Building Renovation", alt: "Two workers finishing interior walls and a ceiling during a building renovation" },
  { key: "rcc-structural-work", title: "RCC & Structural Work", alt: "Crew placing concrete on a reinforced roof slab with steel bars and a pump line" },
  { key: "waterproofing-repair-pipeline", title: "Waterproofing, Civil Repair & Pipeline", alt: "Waterproofing a terrace, repairing a cracked wall, and jointing a pipeline" },
  { key: "service-civil", title: "Civil construction", alt: "Civil construction work in progress" },
];

export const Route = createFileRoute("/media")({
  component: MediaPage,
  head: () => ({
    meta: [
      { title: `Media Gallery — ${site.name}` },
      { name: "description", content: "Photographs of construction, waterproofing, renovation and structural work from OJHA BUILDTECH." },
      { property: "og:title", content: `Media Gallery — ${site.name}` },
      { property: "og:description", content: "Photographs of construction, waterproofing and structural work from OJHA BUILDTECH." },
      { property: "og:url", content: "/media" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/media" }],
  }),
});

function MediaPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof imageGallery)[number] | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Media"
        title="See our work in pictures"
        description="Sites, surfaces and structures — a closer look at the kind of work we take on."
        image="hero-construction"
      />

      <section className="bg-background py-16 lg:py-20">
        <div className="container-site">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {imageGallery.map((image) => (
              <button
                key={image.key}
                type="button"
                onClick={() => setSelectedImage(image)}
                className="card-lift group relative overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm"
                aria-label={`Open ${image.title} image`}
              >
                <img
                  src={photo(image.key)}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent p-4 pt-14">
                  <h2 className="text-sm font-semibold text-white">{image.title}</h2>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl overflow-hidden p-2 sm:p-3">
          {selectedImage && (
            <>
              <DialogHeader className="px-2 pb-1 pt-1">
                <DialogTitle>{selectedImage.title}</DialogTitle>
                <DialogDescription className="sr-only">{selectedImage.alt}</DialogDescription>
              </DialogHeader>
              <img
                src={photo(selectedImage.key)}
                alt={selectedImage.alt}
                className="max-h-[75vh] w-full rounded-md object-contain"
              />
            </>
          )}
        </DialogContent>
      </Dialog>

      <CtaBanner />
    </>
  );
}
