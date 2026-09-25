import type { ThemeMode } from "@/types/design";
export function getThemeScript(mode: ThemeMode) {
  return `(()=>{const configured=${JSON.stringify(mode)};let stored;try{stored=localStorage.getItem('portfolio-sky-theme')}catch{}document.documentElement.dataset.theme=(stored==='dark'||stored==='light')?stored:configured==='system'?(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):configured})();`;
}

