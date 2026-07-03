"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { captureSessionAttribution, sendAnalyticsEvent } from "@/lib/tracking";

const MILESTONES = [25, 50, 75, 90] as const;

export function AnalyticsBridge() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    window.analyticsConsent = window.analyticsConsent ?? {
      analytics: true,
      marketing: Boolean(process.env.NEXT_PUBLIC_META_PIXEL_ID)
    };
    captureSessionAttribution();
  }, []);

  useEffect(() => {
    sendAnalyticsEvent("page_view", {
      path: pathname,
      query: searchParams.toString()
    });
  }, [pathname, searchParams]);

  useEffect(() => {
    const fired = new Set<number>();

    function handleScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) {
        return;
      }

      const progress = Math.round((window.scrollY / scrollable) * 100);
      MILESTONES.forEach((milestone) => {
        if (progress >= milestone && !fired.has(milestone)) {
          fired.add(milestone);
          sendAnalyticsEvent("scroll_milestone", {
            milestone,
            path: window.location.pathname
          });
        }
      });
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
