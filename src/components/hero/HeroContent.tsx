import { MapPin } from "lucide-react";
import { ButtonLink } from "@/components/common/ButtonLink";
import { SocialLinks } from "@/components/common/SocialLinks";
import { clientConfig } from "@/config/client.config";

export function HeroContent({ terminal = false }: { terminal?: boolean }) {
  return (
    <div className="hero-copy">
      <div className="hero-meta"><span className="eyebrow">{terminal ? "> " : ""}{clientConfig.hero.eyebrow}</span>{clientConfig.availability ? <span className="availability"><i />{clientConfig.availability}</span> : null}</div>
      <h1>{terminal ? <><span>const builder =</span><br />“{clientConfig.name}”</> : clientConfig.tagline}</h1>
      {terminal ? <p className="hero-terminal-role">{`// ${clientConfig.professionalTitle}`}</p> : null}
      <p className="hero-description">{clientConfig.heroDescription}</p>
      {clientConfig.location ? <p className="location"><MapPin aria-hidden="true" size={15} />{clientConfig.location}</p> : null}
      <div className="hero-actions"><ButtonLink href={clientConfig.hero.primaryCtaHref}>{clientConfig.hero.primaryCtaLabel}</ButtonLink>{clientConfig.hero.secondaryCtaLabel && clientConfig.hero.secondaryCtaHref ? <ButtonLink href={clientConfig.hero.secondaryCtaHref} variant="secondary">{clientConfig.hero.secondaryCtaLabel}</ButtonLink> : null}</div>
      <SocialLinks />
    </div>
  );
}
