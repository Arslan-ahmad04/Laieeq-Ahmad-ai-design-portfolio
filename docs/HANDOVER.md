# Portfolio handover

This is Laieeq Ahmad’s single-page portfolio. It contains the editorial portrait hero, About Me, Skills, Experience, seven inline project case studies, Contact, and Footer. Desktop navigation is a transparent text menu; mobile navigation is an icon-only bottom bar. Both follow the active section. The site uses one black-and-sky-blue theme.

## Edit content

- Identity, biography, contact details: src/config/client.config.ts
- Section order and labels: src/config/sections.config.ts
- Colors: src/config/design.config.ts
- Hero layout: src/components/hero/HeroSplit.tsx
- Individual sections: src/components/single-page
- Skills, experience, education, project content: src/data
- Responsive styling: src/app/globals.css

See SECTION-DESIGN-GUIDE.md for section editing. Former section URLs and portfolio case URLs redirect into the page. The full-size artwork dialog supports Escape and restores focus.

## Content still needed

The seven project images remain labeled reference previews, as requested. Replace them with original artwork and update captions, alt text, dimensions, and artworkVerified flags before enabling indexing. The source inventory preserves their provenance. LinkedIn and Facebook await genuine profile URLs. No CV has been supplied. No production domain is configured.

## Run and verify

Use npm ci, npm run dev, npm run lint, npm run build, and npm run test:seo. Start the production preview on port 3003 and run npm run verify:preview. Keep the lockfile. See SEO-LAUNCH.md before publishing.

Source: D:/Projects/Portfolio/Laieeq-Ahmad-ai-design-portfolio. Existing Git history and remote are preserved. No deployment or push was performed.

## Cleanup

Unused template variants, profession configuration, sample datasets, theme switching, and the empty AI-project route were removed. The motion dependency and its unused packages were uninstalled. The deletion audit is in cleanup-audit.json. A recovery archive was saved outside the repository at C:/Users/arsla/AppData/Local/Temp/laieeq-before-cleanup-20260925.zip. Build output and installed dependencies are retained because they support local preview and development.
