# Design one section at a time

The portfolio is one page, in the order shown in your sketch. Start with the Hero, then refine About, Skills, Experience, Projects, and Contact. For each section, choose the layout and spacing first, then edit its short copy and images. Check both phone and desktop before moving on.

| Section | Layout file | Content |
| --- | --- | --- |
| Hero | src/components/hero/HeroSplit.tsx | src/config/client.config.ts and src/data/single-page.ts |
| About | src/components/single-page/AboutSection.tsx | src/data/single-page.ts |
| Skills | src/components/single-page/SkillsSection.tsx | src/data/skills.ts |
| Experience | src/components/single-page/ExperienceSection.tsx | src/data/experience.ts |
| Projects | src/components/single-page/ProjectsSection.tsx and ProjectCollection.tsx | src/data/portfolio.ts |
| Contact | src/components/single-page/ContactSection.tsx | src/config/client.config.ts |

Shared glass panels use SectionPanel.tsx in the same directory. White, black, sky-blue colors and responsive layouts are in src/app/globals.css, under the single-page redesign overrides. Section order and navigation labels are in src/config/sections.config.ts.

## Navigation and theme

On mobile, the navbar is a floating icon-only bottom bar with safe-area clearance. On desktop, the fixed, centered transparent navbar uses visible text links and highlights the current section while scrolling. The logo returns to the top. The site has one black-and-sky-blue theme with no toggle. Sections blend into the canvas without outer panels. The contact rail is vertically centered; social icons use brand colors on hover. LinkedIn and Facebook remain unavailable until profile URLs are configured.

## Project artwork

Seven images remain explicitly labeled reference previews. Expand a project for its details and click its image to open the viewer. Replace the previews with original artwork before enabling search indexing. Older section and project URLs redirect into this page.

## Editorial hero

The active hero is composed in HeroSplit.tsx. It preserves the name, availability, design and AI roles, location, current degree/university, portrait caption, description, and both calls to action. The oversized role title and outlined second line sit behind the centered portrait. On phones, location and education move below the portrait so information remains readable. Styling is under the Editorial hero comment in globals.css.
