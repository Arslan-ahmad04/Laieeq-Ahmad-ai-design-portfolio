import { BriefcaseBusiness, Globe, Mail, MessageCircle } from "lucide-react";
import { siBehance, siDribbble, siGithub, siInstagram } from "simple-icons/icons";
import { clientConfig } from "@/config/client.config";

const contactItems = [
  { key: "email", label: "Email", icon: Mail, href: clientConfig.contact.email ? `mailto:${clientConfig.contact.email}` : null },
  { key: "whatsapp", label: "WhatsApp", icon: MessageCircle, href: clientConfig.contact.whatsapp ? `https://wa.me/${clientConfig.contact.whatsapp.replace(/\D/g, "")}` : null },
  { key: "linkedin", label: "LinkedIn", icon: BriefcaseBusiness, href: clientConfig.contact.linkedin },
  { key: "website", label: "Website", icon: Globe, href: clientConfig.contact.website },
] as const;

const brandItems = [
  { key: "github", label: "GitHub", icon: siGithub, href: clientConfig.contact.github },
  { key: "instagram", label: "Instagram", icon: siInstagram, href: clientConfig.contact.instagram },
  { key: "behance", label: "Behance", icon: siBehance, href: clientConfig.contact.behance },
  { key: "dribbble", label: "Dribbble", icon: siDribbble, href: clientConfig.contact.dribbble },
] as const;

export function SocialLinks({ showLabels = false }: { showLabels?: boolean }) {
  return (
    <div className="social-links" aria-label="Social and contact links">
      {contactItems.filter((item) => item.href).map(({ key, label, icon: Icon, href }) => (
        <a key={key} href={href!} aria-label={label} target={href!.startsWith("http") ? "_blank" : undefined} rel={href!.startsWith("http") ? "noreferrer" : undefined}>
          <Icon aria-hidden="true" size={17} />{showLabels ? <span>{label}</span> : null}
        </a>
      ))}
      {brandItems.filter((item) => item.href).map(({ key, label, icon, href }) => (
        <a key={key} href={href!} aria-label={label} target="_blank" rel="noreferrer">
          <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d={icon.path} /></svg>{showLabels ? <span>{label}</span> : null}
        </a>
      ))}
    </div>
  );
}
