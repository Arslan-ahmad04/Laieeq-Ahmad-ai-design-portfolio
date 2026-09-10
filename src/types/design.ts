export type NavbarVariant = "classic" | "floating" | "dock" | "sidebar" | "minimal";
export type NavbarPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "left"
  | "right";
export type ThemeMode = "light" | "dark" | "system";
export type TypographyPreset = "modern" | "technical" | "editorial" | "clinical" | "creative" | "luxury";
export type SurfaceStyle = "glass" | "solid" | "outlined" | "flat" | "minimal" | "soft";
export type CardStyle = "soft" | "sharp" | "outlined" | "floating" | "minimal";
export type ShadowStyle = "none" | "soft" | "medium" | "dramatic";
export type RadiusSize = "none" | "small" | "medium" | "large";
export type DensityPreset = "compact" | "comfortable" | "spacious";
export type HeroVariant = "centered" | "split" | "terminal" | "editorial";
export type AboutVariant = "centered" | "split" | "editorial" | "image-left" | "image-right";
export type SkillsVariant = "badges" | "cards" | "categories" | "minimal-list";
export type ProjectsVariant = "grid" | "bento" | "slider" | "horizontal" | "case-study";
export type PortfolioVariant = "grid" | "masonry" | "slider" | "case-study";
export type ServicesVariant = "grid" | "list" | "accordion" | "cards";
export type TestimonialsVariant = "cards" | "slider" | "quotes" | "minimal";
export type ContactVariant = "minimal" | "split" | "classic";
export type AnimationPreset = "none" | "subtle" | "smooth" | "creative" | "luxury" | "technical";
export type TransitionPreset = "none" | "fast" | "smooth" | "cinematic";
export type BackgroundStyle = "plain" | "gradient" | "mesh" | "pattern" | "image";
export type VisualPersonality = "restrained" | "balanced" | "expressive";

export interface DesignConfig {
  navigation: { variant: NavbarVariant; position: NavbarPosition; sticky: boolean };
  theme: { defaultMode: ThemeMode; allowToggle: boolean };
  colors: { accent: string; accentAlt: string };
  typography: { preset: TypographyPreset };
  surface: { style: SurfaceStyle; glassEnabled: boolean };
  cards: { style: CardStyle; shadow: ShadowStyle };
  radius: { size: RadiusSize };
  density: { preset: DensityPreset };
  hero: { variant: HeroVariant };
  sections: {
    about: { variant: AboutVariant };
    skills: { variant: SkillsVariant };
    projects: { variant: ProjectsVariant };
    portfolio: { variant: PortfolioVariant };
    services: { variant: ServicesVariant };
    testimonials: { variant: TestimonialsVariant };
    contact: { variant: ContactVariant };
  };
  animation: { enabled: boolean; preset: AnimationPreset };
  transitions: { preset: TransitionPreset };
  background: { style: BackgroundStyle };
  personality: VisualPersonality;
}
