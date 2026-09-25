import Link from "next/link";
import { clientConfig } from "@/config/client.config";
import { SocialLinks } from "@/components/common/SocialLinks";
export function Footer() {
  return (
    <footer className="site-footer page-width">
      <div>
        <Link href="/" className="footer-name">
          {clientConfig.name}
          <span>.</span>
        </Link>
        <p>{clientConfig.professionalTitle}</p>
      </div>
      <SocialLinks showLabels />
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {clientConfig.name}
        </p>
        <a href="#main-content">Back to top ↑</a>
      </div>
    </footer>
  );
}
