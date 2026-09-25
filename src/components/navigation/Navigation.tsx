import { sectionsConfig } from "@/config/sections.config";
import { getNavigationItems } from "@/lib/getEnabledSections";
import { NavContent } from "./NavContent";
export function Navigation() { return <nav className="navbar navbar--classic" aria-label="Primary navigation"><NavContent items={getNavigationItems(sectionsConfig)} /></nav>; }
