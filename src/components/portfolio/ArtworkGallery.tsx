"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import type { ArtworkImage } from "@/types/content";
export function ArtworkGallery({
  images,
}: {
  images: readonly ArtworkImage[];
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<ArtworkImage>(images[0]);
  const trigger = useRef<HTMLButtonElement | null>(null);
  if (!images.length) return null;
  return (
    <>
      <div className="artwork-gallery">
        {images.map((img) => (
          <figure key={img.src}>
            <button
              type="button"
              className="artwork-button"
              aria-label={"Enlarge " + img.alt}
              onClick={(e) => {
                trigger.current = e.currentTarget;
                setActive(img);
                dialog.current?.showModal();
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(max-width: 760px) 92vw, 1120px"
              />
              <span>
                <Maximize2 size={16} aria-hidden="true" />
                View full image
              </span>
            </button>
            {img.caption && <figcaption>{img.caption}</figcaption>}
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="artwork-dialog"
        aria-label="Full-size artwork"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = event.currentTarget.querySelectorAll<
            HTMLButtonElement | HTMLAnchorElement
          >("button, a[href]");
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClose={() => trigger.current?.focus()}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <div className="dialog-toolbar">
          <a href={active.src} target="_blank" rel="noreferrer">
            Open image file ↗
          </a>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label="Close full-size artwork"
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <Image
          src={active.src}
          alt={active.alt}
          width={active.width}
          height={active.height}
          unoptimized
        />
        <p>{active.caption}</p>
      </dialog>
    </>
  );
}
