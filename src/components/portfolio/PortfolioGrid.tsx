"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioItem } from "@/types/content";
export function PortfolioGrid({
  items,
  filters = false,
}: {
  items: readonly PortfolioItem[];
  filters?: boolean;
}) {
  const [selected, setSelected] = useState("All work");
  const categories = ["All work", ...new Set(items.map((p) => p.group))];
  const visible = items.filter(
    (p) => selected === "All work" || p.group === selected,
  );
  return (
    <>
      {filters && (
        <div
          className="portfolio-filters"
          aria-label="Filter portfolio by category"
        >
          {categories.map((c) => (
            <button
              type="button"
              aria-pressed={selected === c}
              onClick={() => setSelected(c)}
              key={c}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      {filters && (
        <p className="filter-count" role="status">
          {visible.length}{" "}
          {visible.length === 1 ? "case study" : "case studies"}
        </p>
      )}
      <div className="work-grid">
        {visible.map((item, i) => (
          <article className="work-card" key={item.slug}>
            <Link
              href={"/portfolio/" + item.slug}
              className="work-image"
              aria-label={"View " + item.title}
            >
              {item.images[0] && (
                <Image
                  src={item.images[0].src}
                  alt={item.images[0].alt}
                  width={item.images[0].width}
                  height={item.images[0].height}
                  sizes="(max-width: 760px) 92vw, 560px"
                />
              )}
              {!item.artworkVerified && (
                <span className="preview-label">Reference preview</span>
              )}
              <span className="work-open">
                <ArrowUpRight aria-hidden="true" size={20} />
              </span>
            </Link>
            <div className="work-meta">
              <span>{item.group}</span>
              <span>{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3>
              <Link href={"/portfolio/" + item.slug}>{item.title}</Link>
            </h3>
            <p>{item.category}</p>
          </article>
        ))}
      </div>
    </>
  );
}
