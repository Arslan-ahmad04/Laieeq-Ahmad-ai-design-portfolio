import { experience } from "@/data/experience";
import { SectionPanel } from "./SectionPanel";
import type { EnabledSection } from "@/types/section";
export function SingleExperience({ section }: { section: EnabledSection }) {
  return (
    <SectionPanel section={section}>
      <p className="compact-intro">
        Project-based and freelance collaborations.
      </p>
      <div className="experience-rows">
        {experience.map((item, i) => (
          <article key={item.company}>
            <span className="card-index">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3>{item.company}</h3>
              <p>{item.role}</p>
            </div>
            <span className="engagement-tag">{item.period}</span>
          </article>
        ))}
      </div>
    </SectionPanel>
  );
}
