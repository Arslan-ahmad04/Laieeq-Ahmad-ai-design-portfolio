import type { ClientConfig } from "@/types/client";

/**
 * ============================================================
 * MAIN CLIENT CUSTOMIZATION FILE — WHO THE CLIENT IS
 * ============================================================
 * Safe to edit for normal client work. Keep layout and animation
 * choices in design.config.ts. Set optional links/assets to null
 * and their UI will be hidden automatically.
 */
export const clientConfig = {
  /** Public professional name, for example "Dr. Ahmed Khan". */
  name: "Arslan Ahmad",
  /** Choose a supported profession; VS Code will suggest valid values. */
  profession: "software-engineer",
  professionalTitle: "Software Engineer",
  tagline: "I turn complex product ideas into calm, reliable digital experiences.",
  heroDescription:
    "Full-stack engineer focused on thoughtful interfaces, resilient systems, and products that make a measurable difference.",
  /** Use null to hide the location. */
  location: "Pakistan",
  /** Replace this file in public/profile, or use null to hide the portrait. */
  profileImage: "/profile/profile.svg",
  profileImageAlt: "Abstract profile portrait for Arslan Ahmad",
  /** Set null when the client does not offer a downloadable resume. */
  resumeUrl: "/resume/resume.txt",
  availability: "Available for select projects",
  about: {
    eyebrow: "A little context",
    heading: "Engineering with intent, not just output.",
    paragraphs: [
      "I build digital products from the interface down to the system beneath it. My work combines product thinking, careful engineering, and a strong bias toward clarity.",
      "The goal is always the same: make the difficult parts feel simple for the people using the product and dependable for the teams maintaining it.",
    ],
    highlights: [
      { value: "5+", label: "Years building" },
      { value: "24", label: "Projects shipped" },
      { value: "8", label: "Long-term partners" },
    ],
  },
  contact: {
    email: "hello@example.com",
    whatsapp: "+923001234567",
    phone: null,
    github: "https://github.com/example",
    linkedin: "https://linkedin.com/in/example",
    instagram: null,
    behance: null,
    dribbble: null,
    website: null,
  },
  hero: {
    eyebrow: "Software engineer · Product builder",
    primaryCtaLabel: "Explore my work",
    primaryCtaHref: "#projects",
    secondaryCtaLabel: "Start a conversation",
    secondaryCtaHref: "#contact",
  },
  seo: {
    description: "Portfolio of Arslan Ahmad, a software engineer building reliable and human-centered digital products.",
    /** Set the production URL before deployment, or leave null locally. */
    siteUrl: null,
  },
} satisfies ClientConfig;
