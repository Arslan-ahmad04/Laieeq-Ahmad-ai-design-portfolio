import type { CSSProperties } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/navigation/Navigation";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { designConfig } from "@/config/design.config";
import { sectionsConfig } from "@/config/sections.config";
import { getEnabledSections } from "@/lib/getEnabledSections";

export default function Home() {
  const styles = { "--accent": designConfig.colors.accent, "--accent-alt": designConfig.colors.accentAlt } as CSSProperties;
  return (
    <div className="site-shell" style={styles} data-nav-variant={designConfig.navigation.variant} data-nav-position={designConfig.navigation.position} data-background={designConfig.background.style} data-typography={designConfig.typography.preset} data-surface={designConfig.surface.style} data-glass={designConfig.surface.glassEnabled} data-card-style={designConfig.cards.style} data-shadow={designConfig.cards.shadow} data-radius={designConfig.radius.size} data-density={designConfig.density.preset} data-transition={designConfig.transitions.preset} data-personality={designConfig.personality}>
      <Navigation />
      <main className="site-main">{getEnabledSections(sectionsConfig).map((section) => <SectionRenderer key={section.id} section={section} />)}</main>
      <Footer />
    </div>
  );
}
