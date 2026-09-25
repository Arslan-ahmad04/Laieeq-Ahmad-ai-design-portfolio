import type { ReactNode } from "react";
import type { EnabledSection } from "@/types/section";
export function SectionPanel({
  section,
  children,
  className = "",
}: {
  section: EnabledSection;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={section.id}
      className={"single-section page-width " + className}
    >
      <div className="glass-panel">
        <header className="single-heading">

          <h2>{section.title}</h2>
          {section.intro && <p>{section.intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
