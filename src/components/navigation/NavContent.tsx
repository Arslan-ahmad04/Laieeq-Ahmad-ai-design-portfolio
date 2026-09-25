"use client";
import Link from "next/link";
import { UserRound, Shapes, BriefcaseBusiness, PanelsTopLeft, Send, Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { clientConfig } from "@/config/client.config";

import type { NavbarProps } from "./types";
const sectionIcons = { about: UserRound, skills: Shapes, experience: BriefcaseBusiness, portfolio: PanelsTopLeft, contact: Send };
export function NavContent({ items }: Pick<NavbarProps, "items">) {
  const [active, setActive] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    if (pathname !== "/") return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = Math.min(innerHeight * 0.32, 260);
      let current = "";
      for (const item of items) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= line)
          current = item.id;
      }
      if (scrollY + innerHeight >= document.documentElement.scrollHeight - 4) current = items.at(-1)?.id ?? current;
      if (scrollY < 80) current = "";
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    addEventListener("hashchange", schedule);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      removeEventListener("hashchange", schedule);
    };
  }, [items, pathname]);
  return (
    <>
      <Link
        className="nav-brand"
        href="/"
        aria-label={clientConfig.name + ", back to start"}
        onClick={(e) => {
          if (pathname === "/") {
            e.preventDefault();
            history.replaceState(null, "", "/");
            window.scrollTo({ top: 0, behavior: "instant" });
            setActive("");
          }
        }}
      >
        <span>
          {clientConfig.name
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </span>
        <b>
          {clientConfig.name}
          <i>.</i>
        </b>
      </Link>
      <div className="text-navigation" aria-label="Page sections">
        {items.map((item) => {
          const Icon = sectionIcons[item.id as keyof typeof sectionIcons] ?? Circle;
          return (
            <a
              key={item.id}
              href={item.href}
              className="menu-link"
              aria-label={item.label}
              aria-current={active === item.id ? "location" : undefined}
            >
              <Icon className="mobile-menu-icon" size={21} aria-hidden="true" />
              <span className="menu-label">{item.label}</span>
            </a>
          );
        })}
      </div>

    </>
  );
}
