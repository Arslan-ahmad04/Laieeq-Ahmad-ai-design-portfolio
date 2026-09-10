export interface SkillGroup { category: string; items: readonly string[] }
export interface ExperienceItem { period: string; role: string; company: string; summary: string }
export interface ProjectItem {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: readonly string[];
  outcome: string;
  href: string | null;
  featured: boolean;
}
export interface ServiceItem { title: string; description: string; icon: "code" | "layers" | "sparkles" | "chart" }
export interface PortfolioItem { slug: string; title: string; category: string; description: string }
export interface TimelineItem { title: string; meta: string; description: string }
export interface TestimonialItem { quote: string; name: string; role: string }
export interface PublicationItem { title: string; publication: string; year: string; href: string | null }
