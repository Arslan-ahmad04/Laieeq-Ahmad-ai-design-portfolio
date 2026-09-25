"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { ArtworkGallery } from "@/components/portfolio/ArtworkGallery";
import type { PortfolioItem } from "@/types/content";
export function ProjectCollection({
  items,
}: {
  items: readonly PortfolioItem[];
}) {
  useEffect(() => {
    const open = () => {
      const id = location.hash.slice(1);
      if (!id.startsWith("work-")) return;
      const target = document.getElementById(id);
      if (target instanceof HTMLDetailsElement) {
        target.open = true;
        requestAnimationFrame(() => target.scrollIntoView());
      }
    };
    open();
    addEventListener("hashchange", open);
    return () => removeEventListener("hashchange", open);
  }, []);
  return (
    <div className="inline-projects">
      {items.map((item) => (
        <details
          id={"work-" + item.slug}
          className="inline-project"
          key={item.slug}
        >
          <summary>
            <div className="project-thumb">
              <Image
                src={item.images[0].src}
                alt={item.images[0].alt}
                width={1200}
                height={900}
                sizes="(max-width:760px) 80vw, 500px"
              />
              {!item.artworkVerified && (
                <span className="preview-label">Reference preview</span>
              )}
            </div>
            <div className="project-summary">
              <div>
                <p>{item.category}</p>
                <h3>{item.title}</h3>
              </div>
              <Plus size={20} aria-hidden="true" />
            </div>
            <span className="project-hint">View project details</span>
          </summary>
          <div className="inline-case">
            <p>{item.description}</p>
            <p className="case-role">
              {item.role} · {item.client}
            </p>
            <ArtworkGallery images={item.images} />
            <h4>Process</h4>
            <ol>
              {item.process.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ol>
            <h4>Deliverables</h4>
            <p>{item.deliverables.join(" · ")}</p>
            <h4>Outcome</h4>
            <p>{item.outcome}</p>
            <a className="text-link" href="#contact">
              Discuss a similar project ↗
            </a>
          </div>
        </details>
      ))}
    </div>
  );
}
