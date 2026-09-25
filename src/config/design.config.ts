import type { DesignConfig } from "@/types/design";
export const designConfig: DesignConfig = {
  navigation: { variant: "classic", position: "top-right", sticky: true },
  theme: { defaultMode: "dark", allowToggle: false },
  colors: { accent: "#38bdf8", accentAlt: "#38bdf8" },
  typography: { preset: "modern" },
  surface: { style: "glass", glassEnabled: true },
  cards: { style: "outlined", shadow: "none" },
  radius: { size: "small" },
  density: { preset: "comfortable" },
  hero: { variant: "split" },
  sections: {
    about: { variant: "split" },
    skills: { variant: "categories" },
    projects: { variant: "grid" },
    portfolio: { variant: "grid" },
    services: { variant: "grid" },
    testimonials: { variant: "quotes" },
    contact: { variant: "split" },
  },
  animation: { enabled: true, preset: "subtle" },
  transitions: { preset: "fast" },
  background: { style: "gradient" },
  personality: "restrained",
} satisfies DesignConfig;

