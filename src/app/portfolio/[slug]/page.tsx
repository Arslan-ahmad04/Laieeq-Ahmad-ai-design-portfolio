import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolio } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return portfolio.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const item = portfolio.find((entry) => entry.slug === slug); return item ? { title: item.title, description: item.description } : {}; }
export default async function PortfolioPage({ params }: Props) {
  const { slug } = await params; const item = portfolio.find((entry) => entry.slug === slug); if (!item) notFound();
  return <main className="detail-page detail-page--visual"><Link href="/#portfolio">← Back to portfolio</Link><p className="eyebrow">{item.category}</p><h1>{item.title}</h1><p className="detail-lead">{item.description}</p><div className="visual-placeholder"><span>Replace with client project imagery</span></div></main>;
}
