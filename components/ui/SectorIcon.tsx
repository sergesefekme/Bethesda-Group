import type { Sector } from "@/lib/content/sectors";

interface SectorIconProps {
  icon: Sector["icon"];
  className?: string;
}

/**
 * Lightweight inline line-icons per sector (stroke = currentColor).
 * Kept minimal and consistent so the sector grid reads as one system.
 */
export function SectorIcon({ icon, className = "h-6 w-6" }: SectorIconProps) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (icon) {
    case "energy":
      return (
        <svg {...common}>
          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
        </svg>
      );
    case "tech":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="1.5" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      );
    case "health":
      return (
        <svg {...common}>
          <path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z" />
          <path d="M12 8v6M9 11h6" />
        </svg>
      );
    case "education":
      return (
        <svg {...common}>
          <path d="M22 9 12 4 2 9l10 5 10-5Z" />
          <path d="M6 11v5c0 1 2.7 3 6 3s6-2 6-3v-5" />
        </svg>
      );
    case "realestate":
      return (
        <svg {...common}>
          <path d="M3 21h18M5 21V8l7-5 7 5v13" />
          <path d="M9 21v-6h6v6" />
        </svg>
      );
    case "agro":
      return (
        <svg {...common}>
          <path d="M12 21c0-5 0-8 0-8M12 13c-4 0-6-2-6-6 4 0 6 2 6 6ZM12 13c4 0 6-2 6-6-4 0-6 2-6 6Z" />
        </svg>
      );
    case "advisory":
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="M7 15l4-4 3 3 5-6" />
        </svg>
      );
    default:
      return null;
  }
}
