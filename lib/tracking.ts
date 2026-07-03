"use client";

export const TRACKED_QUERY_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid"
] as const;

type EventPayload = Record<string, string | number | boolean | null | undefined>;

const SESSION_ATTRIBUTION_KEY = "tpf_first_origin";

export function captureSessionAttribution() {
  if (typeof window === "undefined") {
    return;
  }

  const current = new URLSearchParams(window.location.search);
  const tracked = new URLSearchParams();

  TRACKED_QUERY_KEYS.forEach((key) => {
    const value = current.get(key);
    if (value) {
      tracked.set(key, value);
    }
  });

  if (!tracked.size) {
    return;
  }

  try {
    if (!window.sessionStorage.getItem(SESSION_ATTRIBUTION_KEY)) {
      window.sessionStorage.setItem(SESSION_ATTRIBUTION_KEY, tracked.toString());
    }
  } catch {
    // sessionStorage pode estar indisponivel em navegadores restritos.
  }
}

export function getTrackedParams() {
  const params = new URLSearchParams();

  if (typeof window === "undefined") {
    return params;
  }

  try {
    const stored = window.sessionStorage.getItem(SESSION_ATTRIBUTION_KEY);
    if (stored) {
      const saved = new URLSearchParams(stored);
      TRACKED_QUERY_KEYS.forEach((key) => {
        const value = saved.get(key);
        if (value) {
          params.set(key, value);
        }
      });
    }
  } catch {
    // Mantem o checkout funcional mesmo sem sessionStorage.
  }

  const current = new URLSearchParams(window.location.search);
  TRACKED_QUERY_KEYS.forEach((key) => {
    const value = current.get(key);
    if (value && !params.has(key)) {
      params.set(key, value);
    }
  });

  return params;
}

export function appendTrackedParams(url: string, extra: EventPayload = {}) {
  const target = new URL(url, window.location.origin);
  const tracked = getTrackedParams();

  tracked.forEach((value, key) => {
    if (!target.searchParams.has(key)) {
      target.searchParams.set(key, value);
    }
  });

  Object.entries(extra).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      target.searchParams.set(key, String(value));
    }
  });

  return target.toString();
}

export function sendAnalyticsEvent(name: string, payload: EventPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new CustomEvent("tpf:analytics", { detail: { name, payload } }));

  if (window.analyticsConsent?.analytics === false) {
    return;
  }

  window.gtag?.("event", name, payload);

  if (window.fbq) {
    if (name === "page_view") {
      window.fbq("track", "PageView", payload);
    } else {
      window.fbq("trackCustom", name, payload);
    }
  }
}
