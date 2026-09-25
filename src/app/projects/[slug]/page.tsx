import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const project = projects.find((item) => item.slug === slug); if (!project) notFound(); return pageMetadata(project.title, project.summary, `/projects/${slug}`); }
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params; const project = projects.find((item) => item.slug === slug); if (!project) notFound();
  return <article className="detail-page"><Link href="/#projects">← Back to projects</Link><p className="eyebrow">Case study</p><h1>{project.title}</h1><p className="detail-lead">{project.summary}</p><div className="detail-grid"><div><h2>The work</h2><p>{project.description}</p></div><aside><span>Outcome</span><strong>{project.outcome}</strong><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></aside></div></article>;
}
