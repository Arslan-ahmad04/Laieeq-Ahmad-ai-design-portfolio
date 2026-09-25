import type { ClientConfig } from "@/types/client";
export const clientConfig: ClientConfig = {
  name: "Laieeq Ahmad",
  profession: "custom",
  professionalTitle: "Graphic Designer | AI Student",
  tagline: "Thoughtful design. Curious by nature.",
  heroDescription:
    "I bring ideas to life through brand identities, posters, and digital visuals. Alongside studying Artificial Intelligence, I’m exploring how creative thinking and technology can make communication clearer, more useful, and more memorable.",
  location: "Kamalia, District Toba Tek Singh, Pakistan",
  profileImage: "/profile/laieeq-ahmad.png",
  profileImageAlt: "Laieeq Ahmad, AI student and graphic designer",
  resumeUrl: null,
  availability: "Available for freelance design projects",
  about: {
    eyebrow: "A little about me",
    heading: "Where creative thinking meets curiosity.",
    paragraphs: [
      "I’m Laieeq Ahmad, an Artificial Intelligence student and graphic designer based in Kamalia, Pakistan. My work spans brand identities, event posters, social media visuals, and editorial layouts.",
      "Alongside my design practice, I’m studying for a BS in Artificial Intelligence at the University of Kamalia. I’m interested in how technology and visual communication can inform one another.",
    ],
    highlights: [],
  },
  contact: {
    email: "laieeq.studio@gmail.com",
    whatsapp: "+923058883897",
    phone: "+923058883897",
    instagram: "https://www.instagram.com/LAIEEQ_AHMAD_/",
    github: null,
    linkedin: null,
    facebook: null,
    behance: null,
    dribbble: null,
    website: null,
  },
  hero: {
    eyebrow: "Visual artist · Based in Pakistan",
    primaryCtaLabel: "View My Work",
    primaryCtaHref: "/#portfolio",
    secondaryCtaLabel: "Let’s Work Together",
    secondaryCtaHref: "/#contact",
  },
  seo: {
    description:
      "Explore Laieeq Ahmad’s graphic design portfolio, featuring branding, posters, and social media work. BS Artificial Intelligence student at the University of Kamalia.",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || null,
  },
};

