import Image from "next/image";
import { clientConfig } from "@/config/client.config";
export function HeroPortrait() { return clientConfig.profileImage ? <div className="hero-portrait"><Image src={clientConfig.profileImage} alt={clientConfig.profileImageAlt} fill sizes="(max-width: 768px) 86vw, 42vw" priority /></div> : null; }
