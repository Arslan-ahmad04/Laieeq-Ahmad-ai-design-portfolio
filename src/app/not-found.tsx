import Link from "next/link";
export default function NotFound() {
  return (
    <div className="not-found page-width">
      <p className="eyebrow">404 / Page not found</p>
      <h1>This page isn’t here.</h1>
      <p>
        The link may have changed. You can explore the portfolio or return home.
      </p>
      <div className="hero-actions">
        <Link className="button-link button-link--primary" href="/">
          Back home
        </Link>
        <Link className="button-link button-link--secondary" href="/portfolio">
          View portfolio
        </Link>
      </div>
    </div>
  );
}
