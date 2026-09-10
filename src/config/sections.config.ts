import type { SectionsConfig } from "@/types/section";

/**
 * ============================================================
 * MAIN CLIENT CUSTOMIZATION FILE — WHAT APPEARS, AND WHERE
 * ============================================================
 * Safe to edit for normal client work. Toggle enabled, change order,
 * and rename titles/navigation labels without touching page JSX.
 */
export const sectionsConfig = {
  hero: { enabled: true, order: 1 },
  about: { enabled: true, order: 2, title: "About", navLabel: "About" },
  skills: { enabled: true, order: 3, title: "Capabilities", navLabel: "Skills" },
  experience: { enabled: true, order: 4, title: "Experience", navLabel: "Experience" },
  projects: { enabled: true, order: 5, title: "Selected projects", navLabel: "Projects", ctaLabel: "View case study" },
  services: { enabled: false, order: 6, title: "Services", navLabel: "Services" },
  portfolio: { enabled: false, order: 7, title: "Selected work", navLabel: "Portfolio" },
  specializations: { enabled: false, order: 8, title: "Specializations", navLabel: "Specializations" },
  qualifications: { enabled: false, order: 9, title: "Qualifications", navLabel: "Qualifications" },
  certificates: { enabled: true, order: 10, title: "Credentials", navLabel: "Certificates" },
  testimonials: { enabled: false, order: 11, title: "Kind words", navLabel: "Testimonials" },
  clients: { enabled: false, order: 12, title: "Trusted by", navLabel: "Clients" },
  gallery: { enabled: false, order: 13, title: "Gallery", navLabel: "Gallery" },
  publications: { enabled: false, order: 14, title: "Publications", navLabel: "Publications" },
  appointment: { enabled: false, order: 15, title: "Book an appointment", navLabel: "Appointment", ctaLabel: "Choose a time" },
  contact: { enabled: true, order: 16, title: "Let’s build something useful.", navLabel: "Contact" },
} satisfies SectionsConfig;
