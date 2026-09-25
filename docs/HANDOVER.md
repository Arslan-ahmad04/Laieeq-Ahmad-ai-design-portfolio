# Portfolio handover

## Implemented

The portfolio is a single page: Hero, About, Skills, Experience, Projects, Contact, and Footer. Seven project details expand inline, with a full-image viewer. Former section and project routes redirect to matching anchors. The compact transparent text navbar highlights the current section while scrolling. A vertically centered social rail and a single black-and-sky-blue theme complete the layout; outer section borders are removed.

See [Section design guide](SECTION-DESIGN-GUIDE.md) for independent section editing. All existing verified content and reference-preview labels are retained.

## Content status

- The supplied brief overrides conflicting demo details, including AI title, September 2025 study start, and contact information.
- All seven case-study descriptions, roles, process steps, and outcomes came from their individual demo pages. Deliverable lists summarize those descriptions. Outcomes are the portfolio owner's descriptions, not independently measured results.
- The demo portrait is available locally at public/profile/laieeq-ahmad.png (500 × 500). A higher-resolution original would improve large-screen sharpness.
- On September 11, 2026, the user chose to retain the seven demo project images as labeled reference previews. They are not represented as verified original artwork. Each case study, the portfolio listing, and the homepage stay noindex while reference imagery remains.
- No downloadable CV link was found on the inspected homepage, About, Skills, Services, Portfolio, Experience, Contact, or seven case-study pages. resumeUrl is null and the old sample resume was removed.
- No specific AI coursework, projects, certifications, or technical proficiencies were confirmed. AI positioning is education-focused.
- The production domain is unknown. Canonicals are omitted locally rather than guessed. Configure it before launching.
- Employment dates, project dates, and a total completed-project count were not supplied. Experience is labeled project-based/freelance; the demo's 76+ statistic is omitted.

The machine-readable [source inventory](source-inventory.json) lists every source page and image URL, corresponding local file, dimensions for the portrait, and verification status. Project image files are all 1200 × 900 pixels. The original framework files are not modified.

## Customize

| Change | File |
|---|---|
| Name, biography, contact, portrait, optional CV | src/config/client.config.ts |
| Theme, colour accents, layout options | src/config/design.config.ts |
| Homepage sections, order, labels, preview counts | src/config/sections.config.ts |
| Full-page introductions and metadata copy | src/data/pages.ts |
| Case studies, galleries, category groups | src/data/portfolio.ts |
| Skills, services, education | src/data/skills.ts, services.ts, qualifications.ts |
| Production origin and indexing | .env.local or hosting environment |

To replace a reference preview, put the actual image in public/portfolio, update src, alt, width, height, and caption in the matching project's images array, and set artworkVerified to true only after confirming the artwork. Multiple images are supported. Remove the reference wording from that image's alt/caption when it no longer applies. Cards use the first image. With all seven projects verified, the homepage and listing become eligible for indexing when production indexing is enabled. A case study can become eligible individually.

To offer a CV, add the real PDF under public/resume and set resumeUrl to its public path; the About section will show the button. Do not add a placeholder resume. To add AI work, populate src/data/projects.ts with real case studies and enable the projects section.

Reusable extensions include shared full-page layout, section route/intro/preview settings, portfolio image types, filters, native dialog viewing, and centralized SEO logic. Client content remains in config and data.

## Repository setup

Existing Git history was preserved. The package is named laieeq-ahmad-portfolio; the prepared folder was not renamed or nested. The actual source folder is D:/Projects/Portfolio/Laieeq-Ahmad-ai-design-portfolio. The task's old configured directory was recreated empty only to let image tools launch; it contains no duplicate website.

The existing origin is https://github.com/Arslan-ahmad04/Laieeq-Ahmad-ai-design-portfolio.git and was left unchanged. Before creating or changing a remote, review git status and git remote -v. Use a new repository named laieeq-ahmad-portfolio with this description: Personal portfolio of Laieeq Ahmad, an Artificial Intelligence student and graphic designer, showcasing design projects, services, skills, and experience.

Do not reinitialize this prepared repository or remove its history. Review and commit the client changes on a client branch, then connect the new remote when authorized. The .work directory contains local reference snapshots and browser screenshots and is ignored. No remote repository was created, no commit or public push was made, and no deployment was performed.

## Deployment after approval

Use a host that supports this installed Next.js version and Node.js 22+. Install with npm ci, build with npm run build, and run npm start for a Node host. A compatible managed Next.js host can use its Next.js preset. Static file-only hosting is not the configured output mode. Keep the lockfile.

Copy .env.example to .env.local for local configuration, or set those variables in the host. Set NEXT_PUBLIC_SITE_URL to the confirmed HTTPS origin without a path and enable SITE_INDEXING=true only on the approved production deployment. Keep preview environments at SITE_INDEXING=false. Rebuild after changing either value. Set redirects between alternate domain variants at the host so one origin is canonical. Then follow the SEO launch checklist and recheck every route and asset on the deployed domain.
