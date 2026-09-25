import type { EnabledSection, SectionId, SectionsConfig } from "@/types/section";

export function getEnabledSections(config: SectionsConfig): EnabledSection[] {
  return (Object.entries(config) as [SectionId, SectionsConfig[SectionId]][])
    .filter(([, section]) => section.enabled)
    .map(([id, section]) => ({ id, ...section }))
    .sort((a, b) => a.order - b.order);
}

export function getNavigationItems(config: SectionsConfig) {
  return getEnabledSections(config)
    .filter((section) => section.id !== "hero" && section.navLabel)
    .map((section) => ({ id: section.id, label: section.navLabel!, href: section.href ?? `/#${section.id}` }));
}
