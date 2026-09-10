"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { clientConfig } from "@/config/client.config";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import type { NavbarProps } from "./types";

export function NavContent({ items, allowThemeToggle }: Pick<NavbarProps, "items" | "allowThemeToggle">) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="nav-brand" href="#hero" aria-label={`${clientConfig.name}, home`}><span>{clientConfig.name.charAt(0)}</span><b>{clientConfig.name}</b></a>
      <button className="nav-menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}>
        <span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <div className={`nav-content ${open ? "is-open" : ""}`} id="primary-navigation">
        <div className="nav-links">
          {items.map((item) => <a key={item.id} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        </div>
        {allowThemeToggle ? <ThemeToggle /> : null}
      </div>
    </>
  );
}
