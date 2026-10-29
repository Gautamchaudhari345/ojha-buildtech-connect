import { cn } from "@/lib/utils";
import logoColor from "@/assets/obt-logo-concept-b.png";
import logoWhite from "@/assets/obt-logo-white.png";
import { site } from "@/config/site";

/**
 * OBT logo variants. `color` = full-color lockup (light surfaces),
 * `white` = white/gold variant (navy surfaces).
 */
export function Logo({
  variant = "color",
  className,
}: {
  variant?: "color" | "white";
  className?: string;
}) {
  return (
    <img
      src={variant === "white" ? logoWhite : logoColor}
      alt={`${site.name} logo`}
      width={1024}
      height={1024}
      className={cn("h-12 w-auto object-contain", className)}
    />
  );
}
