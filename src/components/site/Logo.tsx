import { cn } from "@/lib/utils";
import logoMark from "@/assets/ojha-logo.png";

/**
 * Shield plus the name OJHA BUILDTECH. The area outside the badge is
 * transparent, so the same mark works on white and navy surfaces.
 */
export function Logo({
  variant = "color",
  className,
}: {
  variant?: "color" | "white";
  className?: string;
}) {
  const onDark = variant === "white";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img
        src={logoMark}
        alt=""
        width={751}
        height={853}
        className="h-full w-auto object-contain"
      />
      <span className="flex flex-col justify-center leading-none">
        <span
          className={cn(
            "font-display text-[0.34em] font-extrabold tracking-[0.08em]",
            onDark ? "text-white" : "text-navy",
          )}
        >
          OJHA
        </span>
        <span
          className={cn(
            "mt-[0.28em] font-display text-[0.17em] font-bold tracking-[0.22em]",
            onDark ? "text-gold" : "text-gold-deep",
          )}
        >
          BUILDTECH
        </span>
      </span>
    </span>
  );
}
