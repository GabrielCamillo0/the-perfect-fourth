"use client";

import { AlertCircle, ArrowRight, ExternalLink, ShoppingBag } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { PRODUCTS, type ProductKey } from "@/lib/constants";
import { appendTrackedParams, sendAnalyticsEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type LemonSqueezyButtonProps = {
  product: ProductKey;
  location: string;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  children?: React.ReactNode;
};

export function LemonSqueezyButton({
  product,
  location,
  variant = "primary",
  className,
  children
}: LemonSqueezyButtonProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [missingConfig, setMissingConfig] = useState(false);
  const item = PRODUCTS[product];

  useEffect(() => {
    window.createLemonSqueezy?.();
  }, []);

  const buttonClass = useMemo(
    () =>
      cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-70",
        variant === "primary" &&
          "bg-[var(--color-cranberry)] text-white shadow-[0_10px_26px_rgba(144,31,42,0.22)] hover:bg-[var(--color-cranberry-dark)] focus-visible:outline-[var(--color-cranberry)]",
        variant === "secondary" &&
          "border border-[var(--color-ink)] bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white focus-visible:outline-[var(--color-ink)]",
        variant === "light" &&
          "bg-white text-[var(--color-ink)] shadow-[0_10px_26px_rgba(20,28,37,0.16)] hover:bg-[var(--color-cream)] focus-visible:outline-white",
        className
      ),
    [className, variant]
  );

  function handleClick() {
    sendAnalyticsEvent("checkout_click", {
      product,
      location,
      price: item.price
    });

    if (!item.checkoutUrl) {
      setMissingConfig(true);
      return;
    }

    setMissingConfig(false);
    setIsOpening(true);

    const checkoutUrl = appendTrackedParams(item.checkoutUrl, {
      product,
      source_location: location
    });

    try {
      if (window.LemonSqueezy?.Url?.Open) {
        window.LemonSqueezy.Url.Open(checkoutUrl);
      } else {
        window.open(checkoutUrl, "_blank", "noopener,noreferrer");
      }
    } finally {
      window.setTimeout(() => setIsOpening(false), 900);
    }
  }

  return (
    <div className={cn("inline-flex flex-col items-start gap-2", className?.includes("w-full") && "w-full")}>
      <button
        type="button"
        className={buttonClass}
        onClick={handleClick}
        data-product={product}
        data-location={location}
        aria-busy={isOpening}
      >
        <ShoppingBag aria-hidden className="h-4 w-4" />
        <span>{children ?? item.cta}</span>
        {isOpening ? (
          <ExternalLink aria-hidden className="h-4 w-4 animate-pulse" />
        ) : (
          <ArrowRight aria-hidden className="h-4 w-4" />
        )}
      </button>
      {missingConfig ? (
        <span className="inline-flex items-center gap-2 text-xs font-medium text-[var(--color-cranberry-dark)]">
          <AlertCircle aria-hidden className="h-3.5 w-3.5" />
          Checkout URL is not configured yet.
        </span>
      ) : null}
    </div>
  );
}
