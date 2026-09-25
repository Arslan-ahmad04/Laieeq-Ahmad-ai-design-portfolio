import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { clientConfig } from "@/config/client.config";
import { SocialLinks } from "@/components/common/SocialLinks";
import { SectionPanel } from "./SectionPanel";
import type { EnabledSection } from "@/types/section";
export function SingleContact({ section }: { section: EnabledSection }) {
  const c = clientConfig.contact;
  return (
    <SectionPanel section={section} className="single-contact">
      <div className="contact-buttons">
        {c.email && (
          <a
            className="button-link button-link--primary"
            href={"mailto:" + c.email}
          >
            <Mail size={18} />
            <span>Email me</span>
            <ArrowUpRight size={16} />
          </a>
        )}
        {c.whatsapp && (
          <a
            className="button-link button-link--secondary"
            href={"https://wa.me/" + c.whatsapp.replace(/\D/g, "")}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>
        )}
      </div>
      <div className="contact-details">
        {c.email && <a href={"mailto:" + c.email}>{c.email}</a>}
        {c.phone && <a href={"tel:" + c.phone}>{c.phone}</a>}
      </div>
      <SocialLinks showLabels />
    </SectionPanel>
  );
}
