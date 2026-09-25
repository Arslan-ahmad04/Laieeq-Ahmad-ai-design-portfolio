import Image from "next/image";
import { MapPin, GraduationCap, ArrowDownRight } from "lucide-react";
import { clientConfig } from "@/config/client.config";
import { singlePageCopy } from "@/data/single-page";
import { qualifications } from "@/data/qualifications";
import { ButtonLink } from "@/components/common/ButtonLink";
export function HeroSplit() {
 return <div className="poster-hero">
   <p className="poster-intro"><span aria-hidden="true">👋</span> Hello, I’m <strong>{clientConfig.name}</strong></p>
   {clientConfig.availability && <p className="poster-availability"><i aria-hidden="true"/>{clientConfig.availability}</p>}
   <h1 className="poster-title"><span>Graphic Designer</span><span className="poster-outline">&amp; AI Student</span></h1>
   <div className="poster-stage">
     <div className="poster-location">{clientConfig.location && <p><MapPin size={17} aria-hidden="true"/><span>Based in<br/><strong>{clientConfig.location}</strong></span></p>}<a href="#about">A little more about me <ArrowDownRight size={17} aria-hidden="true"/></a></div>
     {clientConfig.profileImage && <div className="poster-portrait"><Image src={clientConfig.profileImage} alt={clientConfig.profileImageAlt} width={500} height={500} sizes="(max-width:760px) 80vw, 500px" preload/></div>}
     <div className="poster-study">{qualifications[0] && <><GraduationCap size={24} aria-hidden="true"/><span>Currently studying</span><strong>{qualifications[0].title}</strong><p>{qualifications[0].meta.split(" · ")[0]}</p></>}<p className="poster-note">{singlePageCopy.portraitNote}</p></div>
   </div>
   <div className="poster-bottom"><div className="poster-actions"><ButtonLink href={clientConfig.hero.primaryCtaHref}>{clientConfig.hero.primaryCtaLabel}</ButtonLink>{clientConfig.hero.secondaryCtaHref && clientConfig.hero.secondaryCtaLabel && <ButtonLink href={clientConfig.hero.secondaryCtaHref} variant="secondary">{clientConfig.hero.secondaryCtaLabel}</ButtonLink>}</div><p className="poster-description">{clientConfig.heroDescription}</p></div>
 </div>;
}
