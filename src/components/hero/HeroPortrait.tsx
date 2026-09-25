import { singlePageCopy } from "@/data/single-page";
import Image from "next/image";
import { clientConfig } from "@/config/client.config";
import { qualifications } from "@/data/qualifications";
export function HeroPortrait() {
  return clientConfig.profileImage ? (
    <div className="portrait-composition">
      <div className="portrait-corner" aria-hidden="true">
        ✳
      </div>
      <div className="hero-portrait">
        <Image
          src={clientConfig.profileImage}
          alt={clientConfig.profileImageAlt}
          fill
          sizes="(max-width: 760px) 90vw, 430px"
          preload
        />
      </div>
      {qualifications[0] && (
        <div className="portrait-note">
          <span className="eyebrow">Currently studying</span>
          <strong>{qualifications[0].title}</strong>
          <span>{qualifications[0].meta.split(" · ")[0]}</span>
        </div>
      )}
      <p className="portrait-caption">{singlePageCopy.portraitNote}</p>
    </div>
  ) : null;
}

