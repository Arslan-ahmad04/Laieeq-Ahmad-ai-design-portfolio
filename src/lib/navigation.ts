import type { NavbarPosition, NavbarVariant } from "@/types/design";

export const navigationCompatibility = {
  classic: ["top-left", "top-center", "top-right"],
  floating: ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"],
  dock: ["bottom-left", "bottom-center", "bottom-right"],
  sidebar: ["left", "right"],
  minimal: ["top-left", "top-center", "top-right"],
} as const satisfies Record<NavbarVariant, readonly NavbarPosition[]>;

export function assertNavigationCompatibility(variant: NavbarVariant, position: NavbarPosition) {
  const supported = navigationCompatibility[variant] as readonly NavbarPosition[];
  if (!supported.includes(position)) {
    throw new Error(`Unsupported navigation combination: "${variant}" cannot use "${position}". Supported positions: ${supported.join(", ")}.`);
  }
}
