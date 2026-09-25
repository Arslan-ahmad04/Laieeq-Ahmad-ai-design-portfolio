export type Profession =
  | "software-engineer"
  | "ai-ml-engineer"
  | "doctor"
  | "graphic-designer"
  | "photographer"
  | "lawyer"
  | "teacher"
  | "digital-marketer"
  | "architect"
  | "freelancer"
  | "custom";

export interface ClientConfig {
  name: string;
  profession: Profession;
  professionalTitle: string;
  tagline: string;
  heroDescription: string;
  location: string | null;
  profileImage: string | null;
  profileImageAlt: string;
  resumeUrl: string | null;
  availability: string | null;
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: readonly string[];
    highlights: readonly { value: string; label: string }[];
  };
  contact: {
    email: string | null;
    whatsapp: string | null;
    phone: string | null;
    github: string | null;
    linkedin: string | null;
    facebook?: string | null;
    instagram: string | null;
    behance: string | null;
    dribbble: string | null;
    website: string | null;
  };
  hero: {
    eyebrow: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string | null;
    secondaryCtaHref: string | null;
  };
  seo: {
    description: string;
    siteUrl: string | null;
  };
}
