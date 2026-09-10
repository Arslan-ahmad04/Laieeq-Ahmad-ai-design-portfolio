import type { ComponentType } from "react";
import type { EnabledSection, SectionId } from "@/types/section";
import { HeroRenderer } from "@/components/hero/HeroRenderer";
import { AboutSection, AppointmentSection, CertificatesSection, ClientsSection, ContactSection, ExperienceSection, GallerySection, PortfolioSection, ProjectsSection, PublicationsSection, QualificationsSection, ServicesSection, SkillsSection, SpecializationsSection, TestimonialsSection } from "./sections";

type RendererProps = { section: EnabledSection };
const sectionRegistry = {
  hero: () => <HeroRenderer />, about: AboutSection, skills: SkillsSection, experience: ExperienceSection,
  projects: ProjectsSection, services: ServicesSection, portfolio: PortfolioSection, specializations: SpecializationsSection,
  qualifications: QualificationsSection, certificates: CertificatesSection, testimonials: TestimonialsSection,
  clients: ClientsSection, gallery: GallerySection, publications: PublicationsSection, appointment: AppointmentSection,
  contact: ContactSection,
} satisfies Record<SectionId, ComponentType<RendererProps>>;
export function SectionRenderer({ section }: RendererProps) { const Component = sectionRegistry[section.id]; return <Component section={section} />; }
