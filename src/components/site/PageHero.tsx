import { photo } from "@/lib/images";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imageClassName,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Optional name-keyed photo from the image registry. */
  image?: string;
  imageAlt?: string;
  /** Extra classes for the background photo, such as object position. */
  imageClassName?: string;
}) {
  return (
    <section className={image ? "relative overflow-hidden bg-navy-deep text-primary-foreground" : "relative overflow-hidden navy-mesh text-primary-foreground"}>
      {image && (
        <>
          <img
            src={photo(image)}
            alt={imageAlt ?? ""}
            className={cn("hero-zoom absolute inset-0 h-full w-full object-cover", imageClassName)}
            aria-hidden
          />
          <div className="hero-overlay absolute inset-0" aria-hidden />
        </>
      )}
      <div className="container-site relative py-20 sm:py-24 lg:py-28">
        {eyebrow && (
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-8 bg-gold" aria-hidden />
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
