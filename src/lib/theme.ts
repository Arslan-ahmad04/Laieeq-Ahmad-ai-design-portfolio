import type { ThemeMode } from "@/types/design";

export function getThemeScript(mode: ThemeMode) {
  return `(() => { try { const configured = ${JSON.stringify(mode)}; const stored = localStorage.getItem("portfolio-theme"); const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; document.documentElement.dataset.theme = stored || (configured === "system" ? preferred : configured); } catch (_) {} })();`;
}
