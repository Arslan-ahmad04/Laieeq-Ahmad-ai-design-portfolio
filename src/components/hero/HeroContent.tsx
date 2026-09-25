
import { MapPin, ArrowDownRight } from "lucide-react";
import { ButtonLink } from "@/components/common/ButtonLink";
import { clientConfig } from "@/config/client.config";
export function HeroContent({ terminal = false }: { terminal?: boolean }) {
  return (
    <div className="hero-copy">
      <div className="hero-meta">
        {clientConfig.availability && (
          <span className="availability">
            <i />
            {clientConfig.availability}
          </span>
        )}
      </div>
      <p className="hero-greeting">Hello, I’m</p>
      <h1>
        {terminal ? " > " : ""}
        {clientConfig.name.split(" ").map((word, i) => (
          <span key={i}>
            {word}
            {i === clientConfig.name.split(" ").length - 1 && (
              <span className="name-dot">.</span>
            )}
          </span>
        ))}
      </h1>
      <p className="hero-role">{clientConfig.professionalTitle}</p>
      <p className="hero-description">{clientConfig.heroDescription}</p>
      <div className="hero-actions">
        <ButtonLink href={clientConfig.hero.primaryCtaHref}>
          {clientConfig.hero.primaryCtaLabel}
        </ButtonLink>
        {clientConfig.hero.secondaryCtaLabel &&
          clientConfig.hero.secondaryCtaHref && (
            <ButtonLink
              href={clientConfig.hero.secondaryCtaHref}
              variant="secondary"
            >
              {clientConfig.hero.secondaryCtaLabel}
            </ButtonLink>
          )}
      </div>
      {clientConfig.location && (
        <p className="location">
          <MapPin aria-hidden="true" size={14} />
          {clientConfig.location}
        </p>
      )}
      <a className="hero-explore" href="#about">
        <ArrowDownRight size={17} aria-hidden="true" />A little more about me
      </a>
    </div>
  );
}

