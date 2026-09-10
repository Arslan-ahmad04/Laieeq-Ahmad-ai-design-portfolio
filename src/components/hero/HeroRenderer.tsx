import { designConfig } from "@/config/design.config";
import type { HeroVariant } from "@/types/design";
import { HeroCentered } from "./HeroCentered"; import { HeroEditorial } from "./HeroEditorial"; import { HeroSplit } from "./HeroSplit"; import { HeroTerminal } from "./HeroTerminal";
const heroRegistry = { centered: HeroCentered, split: HeroSplit, terminal: HeroTerminal, editorial: HeroEditorial } satisfies Record<HeroVariant, React.ComponentType>;
export function HeroRenderer() { const Hero = heroRegistry[designConfig.hero.variant]; return <section id="hero" className="hero-section"><Hero /></section>; }
