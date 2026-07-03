"use client";

import { useEffect, useState } from "react";
import { CTA_COPY, PRODUCTS } from "@/lib/constants";
import { LemonSqueezyButton } from "@/components/LemonSqueezyButton";

export function StickyMobileCta() {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (footerVisible) {
    return null;
  }

  return (
    <div className="safe-bottom fixed inset-x-0 bottom-0 z-30 border-t border-white/30 bg-[rgba(249,244,236,0.94)] px-4 pt-3 shadow-[0_-10px_28px_rgba(20,28,37,0.12)] backdrop-blur-xl md:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-[var(--color-ink)]">{PRODUCTS.guide.displayPrice}</p>
          <p className="truncate text-xs text-[var(--color-ink-soft)]">{PRODUCTS.guide.shortName}</p>
        </div>
        <LemonSqueezyButton product="guide" location="sticky_mobile" className="min-h-11 shrink-0 px-4 py-2">
          {CTA_COPY.sticky}
        </LemonSqueezyButton>
      </div>
    </div>
  );
}
