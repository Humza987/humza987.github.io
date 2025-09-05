import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  // broaden content paths so Tailwind sees all class names
  content: [
    "./index.html",
    "./client/**/*.{js,ts,jsx,tsx,html}",
    "./shared/**/*.{js,ts,jsx,tsx,html}",
    "./public/**/*.html"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Portfolio specific colors
        portfolio: {
          bg: "#151C25",
          accent: "#3B82F6",
          "accent-dark": "#26313F",
          text: {
            primary: "#FFFFFF",
            secondary: "#D1D5DB",
            muted: "#9CA3AF",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  // safety net for classes generated at runtime or otherwise hard-to-find in static analysis
  safelist: [
    // animation/visibility translations used by your components
    "opacity-0",
    "opacity-100",
    "translate-y-10",
    "translate-y-0",
    "scale-105",
    "animate-fade-in",
    "animate-fade-in-delay",
    "animate-slide-up",
    "animate-width-expand",
    "animate-float",
    "animate-bounce-subtle",
    // explicit portfolio color classes
    { pattern: /^bg-portfolio/ },
    { pattern: /^text-portfolio/ },
    { pattern: /^hover:bg-portfolio/ },
    { pattern: /^lg:/ }, // keep responsive prefixed classes if used dynamically
  ],

  plugins: [require("tailwindcss-animate")],
} satisfies Config;
