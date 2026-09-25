import { notFound, permanentRedirect } from "next/navigation";
import { portfolio } from "@/data/portfolio";
export function generateStaticParams() {
  return portfolio.map(({ slug }) => ({ slug }));
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!portfolio.some((p) => p.slug === slug)) notFound();
  permanentRedirect("/#work-" + slug);
}
