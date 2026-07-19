import Image from "next/image";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  /** Alt text / description of the image. */
  label: string;
  /** Real image path under /public. When omitted, a duotone placeholder renders. */
  src?: string;
  className?: string;
  /** Tailwind aspect ratio utility, e.g. "aspect-[4/3]". */
  aspect?: string;
  /** Softer variant for use as a subtle background. */
  subtle?: boolean;
  rounded?: boolean;
  /** Navy gradient overlay for text legibility over the photo. */
  overlay?: boolean;
  /** Pass true for above-the-fold images. */
  priority?: boolean;
  /** next/image sizes hint. */
  sizes?: string;
}

/**
 * Renders a real photo via next/image when `src` is provided; otherwise falls
 * back to a self-contained navy/cognac duotone placeholder (clearly labelled).
 * This keeps a single call-site API as real photography is dropped in — see
 * public/images/README.md for the filename map.
 */
export function PlaceholderImage({
  label,
  src,
  className,
  aspect = "aspect-[4/3]",
  subtle = false,
  rounded = true,
  overlay = false,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: PlaceholderImageProps) {
  return (
    <div
      role={src ? undefined : "img"}
      aria-label={src ? undefined : `Placeholder image: ${label}`}
      className={cn(
        "relative overflow-hidden",
        aspect,
        rounded && "rounded-xl",
        !src && "placeholder-duotone placeholder-grain",
        subtle && "opacity-90",
        className
      )}
    >
      {src ? (
        <>
          <Image src={src} alt={label} fill sizes={sizes} priority={priority} className="object-cover" />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" aria-hidden />
          )}
        </>
      ) : (
        // No image supplied: fall back to the duotone field alone, with no
        // visible marker chip. `label` still describes the slot for a11y.
        <span className="sr-only">{label}</span>
      )}
    </div>
  );
}
