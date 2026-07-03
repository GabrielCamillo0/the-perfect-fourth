"use client";

import { X, ZoomIn } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GALLERY } from "@/lib/constants";
import { sendAnalyticsEvent } from "@/lib/tracking";
import { SafeImage } from "@/components/SafeImage";

type GalleryItem = (typeof GALLERY)[number];

export function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (selected && !dialog.open) {
      dialog.showModal();
    }

    if (!selected && dialog.open) {
      dialog.close();
    }
  }, [selected]);

  function openItem(item: GalleryItem) {
    setSelected(item);
    sendAnalyticsEvent("gallery_open", {
      item: item.title
    });
  }

  return (
    <>
      <div className="grid gap-4 md:grid-cols-3">
        {GALLERY.map((item) => (
          <button
            key={item.title}
            type="button"
            className="group text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-cranberry)]"
            onClick={() => openItem(item)}
          >
            <SafeImage
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              containerClassName="aspect-[4/3] rounded-lg"
              imageClassName="transition duration-500 group-hover:scale-105"
            />
            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="font-serif text-2xl text-[var(--color-ink)]">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[var(--color-ink-soft)]">{item.description}</p>
              </div>
              <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-md border border-[var(--color-line)] bg-white text-[var(--color-ink)] transition group-hover:border-[var(--color-cranberry)] group-hover:text-[var(--color-cranberry)]">
                <ZoomIn aria-hidden className="h-4 w-4" />
              </span>
            </div>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="w-[min(1040px,calc(100%-32px))] rounded-lg bg-transparent p-0 text-[var(--color-ink)] backdrop:bg-black/70"
        onCancel={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            setSelected(null);
          }
        }}
      >
        {selected ? (
          <div className="bg-[var(--color-cream)] p-3 shadow-2xl">
            <div className="flex flex-col gap-3 px-1 pb-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="min-w-0 pr-2">
                <h3 className="font-serif text-xl sm:text-2xl">{selected.title}</h3>
                <p className="text-sm text-[var(--color-ink-soft)]">{selected.description}</p>
              </div>
              <button
                type="button"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-[var(--color-line)] bg-white text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cranberry)]"
                onClick={() => setSelected(null)}
                aria-label="Close gallery image"
              >
                <X aria-hidden className="h-5 w-5" />
              </button>
            </div>
            <SafeImage
              src={selected.image.src}
              alt={selected.image.alt}
              fill
              priority
              sizes="100vw"
              containerClassName="aspect-[3/2] rounded-lg"
            />
          </div>
        ) : null}
      </dialog>
    </>
  );
}
