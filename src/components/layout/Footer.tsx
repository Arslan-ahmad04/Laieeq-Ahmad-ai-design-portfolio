import { clientConfig } from "@/config/client.config";
export function Footer() { return <footer className="site-footer page-width"><p>© {new Date().getFullYear()} {clientConfig.name}</p><a href="#hero">Back to top ↑</a></footer>; }
