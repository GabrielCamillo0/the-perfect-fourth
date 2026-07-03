"use client";

import Image, { type ImageProps } from "next/image";
import { ImageOff } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type SafeImageProps = Omit<ImageProps, "src" | "alt" | "className"> & {
  src: string;
  alt: string;
  containerClassName?: string;
  imageClassName?: string;
  fallbackLabel?: string;
};

const loggedMissingImages = new Set<string>();

export function SafeImage({
  src,
  alt,
  containerClassName,
  imageClassName,
  fallbackLabel = "Image unavailable",
  ...props
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  function handleError() {
    setFailed(true);
    if (!loggedMissingImages.has(src)) {
      loggedMissingImages.add(src);
      console.info(`[SafeImage] Missing image asset: ${src}`);
    }
  }

  return (
    <div className={cn("relative overflow-hidden bg-[var(--color-surface-muted)]", containerClassName)}>
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          className={cn("object-cover", imageClassName)}
          onError={handleError}
          {...props}
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,#f6f0e7,#dfe8dc)] p-6 text-center text-sm text-[var(--color-ink-soft)]">
          <div>
            <ImageOff aria-hidden className="mx-auto mb-3 h-8 w-8" />
            <span>{fallbackLabel}</span>
          </div>
        </div>
      )}
    </div>
  );
}
