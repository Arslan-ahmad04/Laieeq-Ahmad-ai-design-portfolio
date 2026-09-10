"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggleTheme() {
    const current = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("portfolio-theme", next);
  }
  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle color theme">
      <Sun className="theme-icon theme-icon--sun" aria-hidden="true" size={17} />
      <Moon className="theme-icon theme-icon--moon" aria-hidden="true" size={17} />
    </button>
  );
}
