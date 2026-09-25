import { portfolio } from "./portfolio";
import type { ExperienceItem } from "@/types/content";
export const experience: readonly ExperienceItem[] = portfolio.map(
  (item, index) => ({
    period: index < 4 ? "Project-based" : "Freelance / Project-based",
    role: item.role,
    company: item.title,
    summary: item.description,
  }),
);
