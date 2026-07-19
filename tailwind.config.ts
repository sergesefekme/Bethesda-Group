import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bethesda Group brand system — single source of truth.
        navy: {
          DEFAULT: "#1E3A5F", // primary backgrounds, headers, primary UI (lighter blue)
          900: "#12263D",
          800: "#1E3A5F",
          700: "#274A75",
          600: "#325A89",
        },
        cognac: {
          DEFAULT: "#9A5A24", // accent / CTA — rich copper; legible (AA) as small text on offwhite
          light: "#D6A24A", // luminous gold — for accents on dark navy backgrounds
          dark: "#7C4418", // deep bronze — hover / pressed states
        },
        offwhite: {
          DEFAULT: "#FBF9F6", // warm base — bright enough to recede behind content
          dark: "#F1EDE6",
        },
        warmgray: {
          DEFAULT: "#C9C2B8", // muted warm gray — secondary text / borders
          dark: "#9A9284",
        },
        // Institutional-track accent: a deeper, more muted tone that differentiates
        // the institutional path without breaking the shared brand system.
        institutional: {
          DEFAULT: "#3E5C74",
          dark: "#2C4457",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fluid editorial hero type.
        hero: ["clamp(2.5rem, 6vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        display: ["clamp(2rem, 4.5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        title: ["clamp(1.5rem, 2.5vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        content: "1280px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.15)" },
        },
        "scroll-cue": {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(12px)", opacity: "0.4" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "scroll-cue": "scroll-cue 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
