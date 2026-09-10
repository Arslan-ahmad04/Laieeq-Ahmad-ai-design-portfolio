# Portfolio Framework Customization Guide

This framework is designed so normal client work happens in configuration, content data, and public assets—not reusable React components.

## Quick start

1. Duplicate the starter project.
2. Edit `src/config/client.config.ts`.
3. Edit `src/config/design.config.ts`.
4. Edit `src/config/sections.config.ts`.
5. Edit the relevant files in `src/data`.
6. Replace files in `public/profile` and `public/resume`.
7. Run `npm run dev`.
8. Test mobile, tablet, laptop, and desktop layouts.
9. Run `npm run lint`.
10. Run `npm run build`.
11. Deploy.

TypeScript checks every configuration file. When you type a property such as `variant:`, VS Code suggests supported values and marks unsupported values as errors.

## The three main files

### `src/config/client.config.ts` — who

Use this file for the client’s name, profession, professional title, tagline, biography, location, profile image, resume, contact details, social links, calls to action, availability, and SEO description. Optional values accept `null`; the corresponding UI disappears safely.

Do not put layout or animation decisions here.

### `src/config/design.config.ts` — how

Use this file for the navbar, theme behavior, colors, typography, surface and glass treatment, cards, radius, density, hero layout, section layouts, motion, transitions, background, and visual personality.

Do not put biographies or project content here.

### `src/config/sections.config.ts` — what and where

Use this file to show or hide sections, change their order, rename headings, set navigation labels, and change section calls to action. The page and navbar both read this file, so no page JSX edits are needed.

## File reference

| Requirement | File |
|---|---|
| Change client name | `src/config/client.config.ts` |
| Change profession | `src/config/client.config.ts` |
| Change email or social links | `src/config/client.config.ts` |
| Change hero wording or CTA | `src/config/client.config.ts` |
| Change navbar position or type | `src/config/design.config.ts` |
| Change theme or theme toggle | `src/config/design.config.ts` |
| Enable or disable glass | `src/config/design.config.ts` |
| Change animation | `src/config/design.config.ts` |
| Change hero or section layout | `src/config/design.config.ts` |
| Change typography, cards, or spacing | `src/config/design.config.ts` |
| Hide or show a section | `src/config/sections.config.ts` |
| Change section order or title | `src/config/sections.config.ts` |
| Change projects | `src/data/projects.ts` |
| Change services | `src/data/services.ts` |
| Change skills | `src/data/skills.ts` |
| Change experience | `src/data/experience.ts` |
| Change designer work | `src/data/portfolio.ts` |
| Change doctor specializations | `src/data/specializations.ts` |
| Change qualifications | `src/data/qualifications.ts` |
| Change certificates | `src/data/certificates.ts` |
| Change testimonials | `src/data/testimonials.ts` |
| Change publications | `src/data/publications.ts` |
| Change profile photo | `public/profile` and `client.config.ts` |
| Change resume | `public/resume` and `client.config.ts` |

## Supported design options

| Setting | Values |
|---|---|
| Navbar variant | `classic`, `floating`, `dock`, `sidebar`, `minimal` |
| Navbar position | `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`, `left`, `right` |
| Theme | `light`, `dark`, `system` |
| Typography | `modern`, `technical`, `editorial`, `clinical`, `creative`, `luxury` |
| Surface | `glass`, `solid`, `outlined`, `flat`, `minimal`, `soft` |
| Card | `soft`, `sharp`, `outlined`, `floating`, `minimal` |
| Shadow | `none`, `soft`, `medium`, `dramatic` |
| Radius | `none`, `small`, `medium`, `large` |
| Density | `compact`, `comfortable`, `spacious` |
| Hero (initial set) | `centered`, `split`, `terminal`, `editorial` |
| About | `centered`, `split`, `editorial`, `image-left`, `image-right` |
| Skills | `badges`, `cards`, `categories`, `minimal-list` |
| Projects | `grid`, `bento`, `slider`, `horizontal`, `case-study` |
| Portfolio | `grid`, `masonry`, `slider`, `case-study` |
| Services | `grid`, `list`, `accordion`, `cards` |
| Testimonials | `cards`, `slider`, `quotes`, `minimal` |
| Contact | `minimal`, `split`, `classic` |
| Animation | `none`, `subtle`, `smooth`, `creative`, `luxury`, `technical` |
| Transition | `none`, `fast`, `smooth`, `cinematic` |
| Background | `plain`, `gradient`, `mesh`, `pattern`, `image` |

The initial hero set deliberately contains four production-ready layouts. Add `image-dominant`, `asymmetric`, or `fullscreen` only when a real client calls for it, following the reusable variant process below.

## Navbar compatibility and mobile behavior

| Variant | Supported desktop positions | Mobile fallback |
|---|---|---|
| `classic` | `top-left`, `top-center`, `top-right` | Compact top menu |
| `floating` | all `top-*` and `bottom-*` positions | Compact top menu |
| `dock` | `bottom-left`, `bottom-center`, `bottom-right` | Compact top menu |
| `sidebar` | `left`, `right` | Compact top menu |
| `minimal` | `top-left`, `top-center`, `top-right` | Compact top menu |

Unsupported pairs stop the development server or production build with a clear error instead of silently creating a broken layout.

## Client setup sheet

Copy and complete this before configuring a new client.

```text
CLIENT INFORMATION
Name:
Profession:
Professional Title:
Tagline:

NAVIGATION
Variant:
Position:

THEME
Default Mode:
Allow Toggle:

VISUAL STYLE
Accent:
Secondary Accent:
Typography:
Surface:
Glass:
Card Style:
Shadow:
Radius:
Density:

HERO
Variant:

SECTIONS
About:
Skills:
Experience:
Projects:
Services:
Portfolio:
Testimonials:
Contact:

ANIMATION
Enabled:
Preset:

BACKGROUND
Style:
```

## Example: software engineer

```ts
navigation: { variant: "dock", position: "bottom-center", sticky: true },
theme: { defaultMode: "dark", allowToggle: true },
typography: { preset: "technical" },
surface: { style: "glass", glassEnabled: true },
hero: { variant: "terminal" },
sections: {
  // other section settings stay unchanged
  projects: { variant: "bento" },
},
animation: { enabled: true, preset: "technical" },
```

Suggested enabled sections: Hero, About, Skills, Experience, Projects, Certificates, Contact.

## Example: doctor

```ts
navigation: { variant: "classic", position: "top-center", sticky: true },
theme: { defaultMode: "light", allowToggle: false },
typography: { preset: "clinical" },
surface: { style: "solid", glassEnabled: false },
hero: { variant: "split" },
animation: { enabled: true, preset: "subtle" },
```

Suggested enabled sections: Hero, About Doctor, Specializations, Services, Clinical Experience, Qualifications, Publications, Testimonials, Appointment. Use client-appropriate titles and `Book appointment` as the primary CTA.

## Example: graphic designer

```ts
navigation: { variant: "sidebar", position: "left", sticky: true },
theme: { defaultMode: "dark", allowToggle: false },
typography: { preset: "creative" },
surface: { style: "minimal", glassEnabled: false },
hero: { variant: "editorial" },
sections: {
  // other section settings stay unchanged
  portfolio: { variant: "masonry" },
},
animation: { enabled: true, preset: "creative" },
```

Suggested enabled sections: Hero, About, Services, Tools, Portfolio, Clients, Testimonials, Contact. Use `View my work` as the primary CTA.

The profession recommendations are also recorded in `src/config/professions.config.ts`. They are defaults and examples, not restrictions; any client may use any compatible design.

## Adding a reusable variant

Only edit reusable code when the requested result cannot be expressed by an existing option.

For a new hero named `immersive`:

1. Add `"immersive"` to `HeroVariant` in `src/types/design.ts`.
2. Create `src/components/hero/HeroImmersive.tsx` with no hardcoded client information.
3. Add it to `heroRegistry` in `src/components/hero/HeroRenderer.tsx`.
4. Add responsive and reduced-motion styles in `src/app/globals.css`.
5. Document the new value here.
6. Run `npm run lint` and `npm run build`.

Every future client can then select it with:

```ts
hero: { variant: "immersive" }
```

## What normally stays unchanged

Routing, reusable components, registries, accessibility infrastructure, responsive behavior, theme and animation systems, SEO utilities, types, and deployment configuration.

## Final client checklist

- Check that the navbar contains only enabled sections.
- Check section order and profession-appropriate wording.
- Check every social link; set unused links to `null`.
- Check the profile image alt text.
- Check contrast in every enabled theme.
- Test keyboard navigation and visible focus.
- Test reduced motion.
- Test long names, titles, and descriptions on small screens.
- Open every project/portfolio detail route.
- Run `npm run lint` and `npm run build`.
