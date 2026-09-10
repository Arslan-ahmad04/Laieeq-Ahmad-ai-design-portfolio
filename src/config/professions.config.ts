import type { Profession } from "@/types/client";
import type { DesignConfig } from "@/types/design";

export interface ProfessionPreset {
  label: string;
  suggestedSections: readonly string[];
  design: Pick<DesignConfig, "navigation" | "theme" | "typography" | "surface" | "hero" | "animation">;
}

/** Defaults are recommendations, never locks. Copy any value into design.config.ts to override it. */
export const professionPresets = {
  "software-engineer": {
    label: "Software Engineer",
    suggestedSections: ["about", "skills", "experience", "projects", "certificates", "contact"],
    design: { navigation: { variant: "dock", position: "bottom-center", sticky: true }, theme: { defaultMode: "dark", allowToggle: true }, typography: { preset: "technical" }, surface: { style: "glass", glassEnabled: true }, hero: { variant: "terminal" }, animation: { enabled: true, preset: "technical" } },
  },
  "ai-ml-engineer": { label: "AI/ML Engineer", suggestedSections: ["about", "skills", "projects", "publications", "contact"], design: { navigation: { variant: "floating", position: "top-center", sticky: true }, theme: { defaultMode: "dark", allowToggle: true }, typography: { preset: "technical" }, surface: { style: "glass", glassEnabled: true }, hero: { variant: "split" }, animation: { enabled: true, preset: "technical" } } },
  doctor: { label: "Doctor", suggestedSections: ["about", "specializations", "services", "experience", "qualifications", "publications", "appointment"], design: { navigation: { variant: "classic", position: "top-center", sticky: true }, theme: { defaultMode: "light", allowToggle: false }, typography: { preset: "clinical" }, surface: { style: "solid", glassEnabled: false }, hero: { variant: "split" }, animation: { enabled: true, preset: "subtle" } } },
  "graphic-designer": { label: "Graphic Designer", suggestedSections: ["about", "services", "portfolio", "clients", "testimonials", "contact"], design: { navigation: { variant: "sidebar", position: "left", sticky: true }, theme: { defaultMode: "dark", allowToggle: false }, typography: { preset: "creative" }, surface: { style: "minimal", glassEnabled: false }, hero: { variant: "editorial" }, animation: { enabled: true, preset: "creative" } } },
  photographer: { label: "Photographer", suggestedSections: ["about", "portfolio", "gallery", "services", "contact"], design: { navigation: { variant: "minimal", position: "top-right", sticky: true }, theme: { defaultMode: "dark", allowToggle: false }, typography: { preset: "editorial" }, surface: { style: "minimal", glassEnabled: false }, hero: { variant: "editorial" }, animation: { enabled: true, preset: "luxury" } } },
  lawyer: { label: "Lawyer", suggestedSections: ["about", "specializations", "experience", "qualifications", "contact"], design: { navigation: { variant: "classic", position: "top-center", sticky: true }, theme: { defaultMode: "light", allowToggle: false }, typography: { preset: "luxury" }, surface: { style: "outlined", glassEnabled: false }, hero: { variant: "editorial" }, animation: { enabled: true, preset: "subtle" } } },
  teacher: { label: "Teacher", suggestedSections: ["about", "experience", "qualifications", "publications", "contact"], design: { navigation: { variant: "classic", position: "top-left", sticky: true }, theme: { defaultMode: "light", allowToggle: true }, typography: { preset: "modern" }, surface: { style: "soft", glassEnabled: false }, hero: { variant: "centered" }, animation: { enabled: true, preset: "subtle" } } },
  "digital-marketer": { label: "Digital Marketer", suggestedSections: ["about", "services", "projects", "clients", "testimonials", "contact"], design: { navigation: { variant: "floating", position: "top-center", sticky: true }, theme: { defaultMode: "light", allowToggle: true }, typography: { preset: "modern" }, surface: { style: "soft", glassEnabled: false }, hero: { variant: "split" }, animation: { enabled: true, preset: "smooth" } } },
  architect: { label: "Architect", suggestedSections: ["about", "portfolio", "services", "qualifications", "contact"], design: { navigation: { variant: "minimal", position: "top-left", sticky: true }, theme: { defaultMode: "light", allowToggle: false }, typography: { preset: "editorial" }, surface: { style: "minimal", glassEnabled: false }, hero: { variant: "editorial" }, animation: { enabled: true, preset: "luxury" } } },
  freelancer: { label: "Freelancer", suggestedSections: ["about", "skills", "services", "projects", "testimonials", "contact"], design: { navigation: { variant: "floating", position: "top-center", sticky: true }, theme: { defaultMode: "system", allowToggle: true }, typography: { preset: "modern" }, surface: { style: "soft", glassEnabled: false }, hero: { variant: "split" }, animation: { enabled: true, preset: "smooth" } } },
  custom: { label: "Custom", suggestedSections: ["about", "services", "contact"], design: { navigation: { variant: "classic", position: "top-center", sticky: true }, theme: { defaultMode: "system", allowToggle: true }, typography: { preset: "modern" }, surface: { style: "solid", glassEnabled: false }, hero: { variant: "centered" }, animation: { enabled: true, preset: "smooth" } } },
} satisfies Record<Profession, ProfessionPreset>;
