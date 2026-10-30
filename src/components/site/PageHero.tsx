import { photo } from "@/lib/images";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Optional name-keyed photo from the image registry. */
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-primary-foreground">
      {image && (
        <>
          <img
            src={photo(image)}
            alt={imageAlt ?? ""}
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden
          />
          <div className="hero-overlay absolute inset-0" aria-hidden />
        </>
      )}
      <div className="container-site relative py-16 sm:py-20 lg:py-24">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
