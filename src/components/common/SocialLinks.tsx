import type { CSSProperties } from "react";
import { Mail } from "lucide-react";
import { siWhatsapp, siFacebook, siInstagram } from "simple-icons/icons";
import { clientConfig } from "@/config/client.config";
const linkedinPath = "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z";
const c=clientConfig.contact;
const items=[
 {label:"Email",href:c.email ? "mailto:"+c.email:null,color:"#ea4335",path:null},
 {label:"WhatsApp",href:c.whatsapp ? "https://wa.me/"+c.whatsapp.replace(/\D/g,""):null,color:"#25d366",path:siWhatsapp.path},
 {label:"LinkedIn",href:c.linkedin,color:"#0a66c2",path:linkedinPath},
 {label:"Facebook",href:c.facebook,color:"#1877f2",path:siFacebook.path},
 {label:"Instagram",href:c.instagram,color:"#e4405f",path:siInstagram.path},
];
export function SocialLinks({showLabels=false}:{showLabels?:boolean}) {
 return <div className="social-links" aria-label="Social and contact links">{items.map(item=>{
 const icon=item.path ? <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d={item.path}/></svg>:<Mail size={19} aria-hidden="true"/>;
 const style={"--brand-color":item.color} as CSSProperties;
 return item.href ? <a key={item.label} href={item.href} style={style} aria-label={item.label} title={item.label} target={item.href.startsWith("http")?"_blank":undefined} rel={item.href.startsWith("http")?"noreferrer":undefined}>{icon}{showLabels && <span>{item.label}</span>}</a>:<span key={item.label} className="social-unavailable" role="link" aria-disabled="true" aria-label={item.label+" — profile link coming soon"} title={item.label+" — profile link coming soon"} style={style}>{icon}{showLabels && <span>{item.label}</span>}</span>;
 })}</div>;
}
