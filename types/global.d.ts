export {};

declare global {
  interface Window {
    analyticsConsent?: {
      analytics?: boolean;
      marketing?: boolean;
    };
    createLemonSqueezy?: () => void;
    LemonSqueezy?: {
      Url?: {
        Open?: (url: string) => void;
      };
    };
    fbq?: (command: string, eventName: string, payload?: Record<string, unknown>) => void;
    gtag?: (
      command: "config" | "consent" | "event" | "js",
      target: string | Date,
      params?: Record<string, unknown>
    ) => void;
  }
}
