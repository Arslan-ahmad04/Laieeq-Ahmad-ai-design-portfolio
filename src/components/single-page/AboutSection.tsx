import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { clientConfig } from "@/config/client.config";
import { singlePageCopy } from "@/data/single-page";
import { additionalServices } from "@/data/services";
import { SectionPanel } from "./SectionPanel";
import type { EnabledSection } from "@/types/section";
export function SingleAbout({ section }: { section: EnabledSection }) {
  return (
    <SectionPanel section={section} className="single-about">
      <div className="about-split">
        {clientConfig.profileImage && (
          <div className="about-portrait">
            <Image
              src={clientConfig.profileImage}
              alt={clientConfig.profileImageAlt}
              width={500}
              height={500}
              sizes="(max-width:760px) 65vw, 260px"
            />
          </div>
        )}
        <div>
          {clientConfig.about.paragraphs.map((paragraph) => <p className="about-short" key={paragraph}>{paragraph}</p>)}
          <p className="about-short">My design experience includes university societies, events, local businesses, and book projects. From a logo to a full promotional layout, I focus on clear typography, thoughtful color, and visuals that fit the message.</p>
          <div className="education-chip">
            <GraduationCap aria-hidden="true" />
            <div>
              <strong>{singlePageCopy.education}</strong>
              <span>{singlePageCopy.studyPeriod}</span>
            </div>
          </div>
          <div className="mini-services">
            <span>Also available</span>
            {additionalServices.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </SectionPanel>
  );
}
