export type SectionId =
  | "hero"
  | "about"
  | "skills"
  | "experience"
  | "portfolio"
  | "contact";

export interface SectionConfig {
  enabled: boolean;
  order: number;
  title?: string;
  navLabel?: string;
  ctaLabel?: string;
  href?: string;
  eyebrow?: string;
  intro?: string;
  previewLimit?: number;
}

export type SectionsConfig = Record<SectionId, SectionConfig>;

export interface EnabledSection extends SectionConfig {
  id: SectionId;
}
