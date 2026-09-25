import { SingleContact } from "@/components/single-page/ContactSection";
import { SingleProjects } from "@/components/single-page/ProjectsSection";
import { SingleExperience } from "@/components/single-page/ExperienceSection";
import { SingleSkills } from "@/components/single-page/SkillsSection";
import { SingleAbout } from "@/components/single-page/AboutSection";
import type { ComponentType } from "react";
import type { EnabledSection, SectionId } from "@/types/section";
import { HeroRenderer } from "@/components/hero/HeroRenderer";

type RendererProps = { section: EnabledSection };
const sectionRegistry = {
  hero: () => <HeroRenderer />,
  about: SingleAbout,
  skills: SingleSkills,
  experience: SingleExperience,
  portfolio: SingleProjects,
  contact: SingleContact,
} satisfies Record<SectionId, ComponentType<RendererProps>>;
export function SectionRenderer({ section }: RendererProps) {
  const Component = sectionRegistry[section.id];
  return <Component section={section} />;
}
