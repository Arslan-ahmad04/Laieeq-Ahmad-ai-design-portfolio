import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" }) {
  const external = href.startsWith("http");
  return (
    <a className={`button-link button-link--${variant}`} href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      <span>{children}</span><ArrowUpRight aria-hidden="true" size={16} />
    </a>
  );
}
