import { SingleContact } from "@/components/single-page/ContactSection";
import { SingleProjects } from "@/components/single-page/ProjectsSection";
import { SingleExperience } from "@/components/single-page/ExperienceSection";
import { SingleSkills } from "@/components/single-page/SkillsSection";
import { SingleAbout } from "@/components/single-page/AboutSection";
import type { ComponentType } from "react";
import type { EnabledSection, SectionId } from "@/types/section";
import { HeroRenderer } from "@/components/hero/HeroRenderer";
import {
  AppointmentSection,
  CertificatesSection,
  ClientsSection,
  GallerySection,
  ProjectsSection,
  PublicationsSection,
  QualificationsSection,
  ServicesSection,
  SpecializationsSection,
  TestimonialsSection,
} from "./sections";

type RendererProps = { section: EnabledSection };
const sectionRegistry = {
  hero: () => <HeroRenderer />,
  about: SingleAbout,
  skills: SingleSkills,
  experience: SingleExperience,
  projects: ProjectsSection,
  services: ServicesSection,
  portfolio: SingleProjects,
  specializations: SpecializationsSection,
  qualifications: QualificationsSection,
  certificates: CertificatesSection,
  testimonials: TestimonialsSection,
  clients: ClientsSection,
  gallery: GallerySection,
  publications: PublicationsSection,
  appointment: AppointmentSection,
  contact: SingleContact,
} satisfies Record<SectionId, ComponentType<RendererProps>>;
export function SectionRenderer({ section }: RendererProps) {
  const Component = sectionRegistry[section.id];
  return <Component section={section} />;
}
