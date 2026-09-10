import type { DesignConfig } from "@/types/design";

/**
 * ============================================================
 * MAIN CLIENT CUSTOMIZATION FILE — HOW THE SITE LOOKS
 * ============================================================
 * Safe to edit for normal client work. Every option is type-safe,
 * so VS Code autocomplete will show supported values. Invalid navbar
 * variant/position pairs also fail fast during development and builds.
 */
export const designConfig = {
  navigation: {
    /** classic | floating | dock | sidebar | minimal */
    variant: "dock",
    /** top-* | bottom-* | left | right; compatibility is validated. */
    position: "bottom-center",
    sticky: true,
  },
  theme: {
    /** light | dark | system */
    defaultMode: "dark",
    /** false removes the visitor-facing theme control. */
    allowToggle: true,
  },
  colors: {
    accent: "#9eff6e",
    accentAlt: "#67e8f9",
  },
  typography: {
    /** modern | technical | editorial | clinical | creative | luxury */
    preset: "technical",
  },
  surface: {
    /** glass | solid | outlined | flat | minimal | soft */
    style: "glass",
    /** false removes backdrop blur even when style is glass. */
    glassEnabled: true,
  },
  cards: {
    /** soft | sharp | outlined | floating | minimal */
    style: "floating",
    /** none | soft | medium | dramatic */
    shadow: "soft",
  },
  radius: { size: "large" },
  density: { preset: "comfortable" },
  hero: {
    /** Initial supported set: centered | split | terminal | editorial */
    variant: "terminal",
  },
  sections: {
    about: { variant: "split" },
    skills: { variant: "categories" },
    projects: { variant: "bento" },
    portfolio: { variant: "masonry" },
    services: { variant: "grid" },
    testimonials: { variant: "quotes" },
    contact: { variant: "split" },
  },
  animation: {
    enabled: true,
    /** none | subtle | smooth | creative | luxury | technical */
    preset: "technical",
  },
  transitions: { preset: "smooth" },
  background: { style: "mesh" },
  personality: "balanced",
} satisfies DesignConfig;
