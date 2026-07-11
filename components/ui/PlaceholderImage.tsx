import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  /** Describes the intended real photo, e.g. "Lagos skyline at dusk". */
  label: string;
  className?: string;
  /** Tailwind aspect ratio utility, e.g. "aspect-[4/3]". */
  aspect?: string;
  /** Softer variant for use as a subtle background. */
  subtle?: boolean;
  rounded?: boolean;
}

/**
 * Self-contained cinematic image placeholder (navy/cognac duotone + grain).
 * Every instance is clearly marked so real photography can replace it later —
 * see README for the /public/images filename map. No external requests.
 */
export function PlaceholderImage({
  label,
  className,
  aspect = "aspect-[4/3]",
  subtle = false,
  rounded = true,
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder image: ${label}`}
      className={cn(
        "placeholder-duotone placeholder-grain relative overflow-hidden",
        aspect,
        rounded && "rounded-xl",
        subtle && "opacity-90",
        className
      )}
    >
      <div className="absolute inset-0 flex items-end p-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-900/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-warmgray backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-cognac" />
          [PLACEHOLDER-IMAGE] {label}
        </span>
      </div>
    </div>
  );
}
