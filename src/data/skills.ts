import type { SkillGroup } from "@/types/content";
export const skills = [
  { category: "Product engineering", items: ["TypeScript", "React", "Next.js", "Node.js"] },
  { category: "Systems", items: ["API design", "PostgreSQL", "Cloud architecture", "Testing"] },
  { category: "Ways of working", items: ["Product discovery", "Technical strategy", "Design collaboration", "Mentoring"] },
] satisfies readonly SkillGroup[];
