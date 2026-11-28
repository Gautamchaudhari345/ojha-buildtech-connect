import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow", onDark && "text-gold")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl",
          eyebrow && "mt-3",
          onDark && "text-primary-foreground",
        )}
      >
        {title}
      </h2>
      <div className={cn("gold-line mt-4", align === "center" && "mx-auto")} aria-hidden />
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
            onDark && "text-primary-foreground/80",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
