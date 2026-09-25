import { BadgeCheck, Palette, Type, PanelsTopLeft, Megaphone, Image, Monitor, PenTool } from "lucide-react";
import { skills } from "@/data/skills";
import { SectionPanel } from "./SectionPanel";
import type { EnabledSection } from "@/types/section";
const skillIcons = { "Logo Design": PenTool, Branding: BadgeCheck, Typography: Type, "Poster Design": PanelsTopLeft, "Social Media Design": Megaphone, "Photo Editing": Image, "UI/UX Design": Monitor };
function SkillIcon({ name }: { name: string }) {
  if (name === "Adobe Photoshop" || name === "Adobe Illustrator" || name === "Canva") return <span aria-hidden="true" className={"software-mark " + (name === "Adobe Photoshop" ? "photoshop" : name === "Adobe Illustrator" ? "illustrator" : "canva")}>{name === "Adobe Photoshop" ? "Ps" : name === "Adobe Illustrator" ? "Ai" : "C"}</span>;
  const Icon = skillIcons[name as keyof typeof skillIcons] ?? Palette;
  return <Icon size={19} aria-hidden="true" />;
}
export function SingleSkills({ section }: { section: EnabledSection }) {
 return <SectionPanel section={section}><div className="single-skills">{skills.map(group => <article key={group.category}><h3>{group.category}</h3><div className="skill-pills">{group.items.map(skill => <span className="skill-item" key={skill}><SkillIcon name={skill}/>{skill}</span>)}</div></article>)}</div></SectionPanel>;
}
