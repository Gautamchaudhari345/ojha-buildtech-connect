import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Image as ImageIcon, Play, Video } from "lucide-react";

import { site } from "@/config/site";
import { photo } from "@/lib/images";
import { cn } from "@/lib/utils";
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
  { key: "hero-construction", title: "Construction site", alt: "Construction project under active execution" },
  { key: "site-engineer", title: "Site supervision", alt: "Engineer reviewing plans at a construction site" },
  { key: "service-waterproofing", title: "Waterproofing work", alt: "Waterproofing system being applied to a structure" },
  { key: "service-civil", title: "Civil construction", alt: "Civil construction work in progress" },
  { key: "service-infrastructure", title: "Infrastructure development", alt: "Infrastructure and site development project" },
  { key: "project-glass-facade", title: "Commercial facade", alt: "Modern commercial building facade" },
  { key: "project-residential", title: "Residential project", alt: "Completed residential construction project" },
  { key: "project-architecture", title: "Architectural design", alt: "Contemporary architecture and structural design" },
  { key: "project-industrial", title: "Industrial facility", alt: "Industrial construction and facility work" },
  { key: "project-commercial", title: "Commercial building", alt: "Large scale commercial building project" },
];

const videoGallery = [
  { key: "site-engineer", title: "Site walk-through", status: "Video coming soon" },
  { key: "service-waterproofing", title: "Waterproofing process", status: "Video coming soon" },
  { key: "project-industrial", title: "Project highlights", status: "Video coming soon" },
];

export const Route = createFileRoute("/media")({
  component: MediaPage,
  head: () => ({
    meta: [
      { title: `Media Gallery — ${site.name}` },
      { name: "description", content: "Explore construction, waterproofing and infrastructure images and project videos from OJHA BUILDTECH." },
      { property: "og:title", content: `Media Gallery — ${site.name}` },
      { property: "og:description", content: "Images and project videos from OJHA BUILDTECH." },
      { property: "og:url", content: "/media" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/media" }],
  }),
});

function MediaPage() {
  const [tab, setTab] = useState<"photos" | "videos">("photos");
  const [selectedImage, setSelectedImage] = useState<(typeof imageGallery)[number] | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Media"
        title="See our work in pictures"
        description="Project views, site activity and construction highlights — a closer look at how we work."
        image="hero-construction"
      />

      <section className="bg-background py-16 lg:py-20">
        <div className="container-site">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Media type">
            <button
              type="button"
              role="tab"
              aria-selected={tab === "photos"}
              onClick={() => setTab("photos")}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                tab === "photos"
                  ? "border-navy bg-navy text-primary-foreground"
                  : "border-input bg-card hover:bg-secondary",
              )}
            >
              <ImageIcon className="h-4 w-4" aria-hidden />
              Photos
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === "videos"}
              onClick={() => setTab("videos")}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                tab === "videos"
                  ? "border-navy bg-navy text-primary-foreground"
                  : "border-input bg-card hover:bg-secondary",
              )}
            >
              <Video className="h-4 w-4" aria-hidden />
              Videos
            </button>
          </div>

          {tab === "photos" ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {imageGallery.map((image) => (
                <button
                  key={image.key}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className="group overflow-hidden rounded-xl border border-border bg-card text-left shadow-sm"
                  aria-label={`Open ${image.title} image`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={photo(image.key)}
                      alt={image.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-sm font-semibold">{image.title}</h2>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {videoGallery.map((video) => (
                <article key={video.title} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                  <div className="relative">
                    <img
                      src={photo(video.key)}
                      alt=""
                      loading="lazy"
                      className="aspect-video w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-navy-deep/35" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-white/90 text-navy shadow-lg">
                        <Play className="ml-1 h-6 w-6 fill-current" aria-hidden />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h2 className="text-base font-semibold">{video.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{video.status}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
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
