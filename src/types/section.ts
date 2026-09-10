export type SectionId =
  | "hero"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "services"
  | "portfolio"
  | "specializations"
  | "qualifications"
  | "certificates"
  | "testimonials"
  | "clients"
  | "gallery"
  | "publications"
  | "appointment"
  | "contact";

export interface SectionConfig {
  enabled: boolean;
  order: number;
  title?: string;
  navLabel?: string;
  ctaLabel?: string;
}

export type SectionsConfig = Record<SectionId, SectionConfig>;

export interface EnabledSection extends SectionConfig {
  id: SectionId;
}
