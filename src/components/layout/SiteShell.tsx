import { ContactRail } from "./ContactRail";
import type { CSSProperties } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/navigation/Navigation";
import type { ReactNode } from "react";
import { designConfig } from "@/config/design.config";

export function SiteShell({ children }: { children: ReactNode }) {
  const styles = {
    "--accent": designConfig.colors.accent,
    "--accent-alt": designConfig.colors.accentAlt,
  } as CSSProperties;
  return (
    <div
      className="site-shell"
      style={styles}
      data-nav-variant={designConfig.navigation.variant}
      data-nav-position={designConfig.navigation.position}
      data-background={designConfig.background.style}
      data-typography={designConfig.typography.preset}
      data-surface={designConfig.surface.style}
      data-glass={designConfig.surface.glassEnabled}
      data-card-style={designConfig.cards.style}
      data-shadow={designConfig.cards.shadow}
      data-radius={designConfig.radius.size}
      data-density={designConfig.density.preset}
      data-transition={designConfig.transitions.preset}
      data-personality={designConfig.personality}
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation /><ContactRail />
      <main id="main-content" className="site-main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

