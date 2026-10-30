import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

import { photo } from "@/lib/images";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className={cn(
        "card-lift group block overflow-hidden rounded-xl border border-border bg-card shadow-sm",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={photo(project.image)}
          alt={project.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-navy-deep/90 px-3 py-1 text-xs font-medium text-primary-foreground">
          {project.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-gold-deep">
          {project.title}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-gold-deep" aria-hidden />
          {project.location}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <Badge variant="outline" className="mt-4 border-gold/40 text-gold-deep">
          Sample project — replace with real work
        </Badge>
      </div>
    </Link>
  );
}
