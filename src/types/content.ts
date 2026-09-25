export interface SkillGroup {
  category: string;
  items: readonly string[];
}
export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  summary: string;
}
export interface ArtworkImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}
export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  client: string;
  role: string;
  group: string;
  process: readonly string[];
  deliverables: readonly string[];
  outcome: string;
  images: readonly ArtworkImage[];
  artworkVerified: boolean;
  source: string;
}
export interface TimelineItem {
  title: string;
  meta: string;
  description: string;
}
