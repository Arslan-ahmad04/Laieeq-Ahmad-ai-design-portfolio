import { portfolio } from "@/data/portfolio";
import { singlePageCopy } from "@/data/single-page";
import { ProjectCollection } from "./ProjectCollection";
import { SectionPanel } from "./SectionPanel";
import type { EnabledSection } from "@/types/section";
export function SingleProjects({ section }: { section: EnabledSection }) {
  return (
    <SectionPanel section={section}>
      <p className="compact-intro">{singlePageCopy.projectNotice}</p>
      <ProjectCollection items={portfolio} />
    </SectionPanel>
  );
}
