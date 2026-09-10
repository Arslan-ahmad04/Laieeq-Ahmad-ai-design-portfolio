import { designConfig } from "@/config/design.config";
import { sectionsConfig } from "@/config/sections.config";
import { getNavigationItems } from "@/lib/getEnabledSections";
import { assertNavigationCompatibility } from "@/lib/navigation";
import type { NavbarVariant } from "@/types/design";
import type { NavbarProps } from "./types";
import { NavbarClassic } from "./NavbarClassic";
import { NavbarDock } from "./NavbarDock";
import { NavbarFloating } from "./NavbarFloating";
import { NavbarMinimal } from "./NavbarMinimal";
import { NavbarSidebar } from "./NavbarSidebar";

const navbarRegistry = { classic: NavbarClassic, floating: NavbarFloating, dock: NavbarDock, sidebar: NavbarSidebar, minimal: NavbarMinimal } satisfies Record<NavbarVariant, React.ComponentType<NavbarProps>>;

export function Navigation() {
  const { variant, position, sticky } = designConfig.navigation;
  assertNavigationCompatibility(variant, position);
  const Component = navbarRegistry[variant];
  return <Component items={getNavigationItems(sectionsConfig)} position={position} sticky={sticky} allowThemeToggle={designConfig.theme.allowToggle} />;
}
