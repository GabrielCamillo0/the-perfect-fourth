"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FAQS } from "@/lib/constants";
import { sendAnalyticsEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(FAQS[0]?.question ?? null);

  function toggle(question: string) {
    setOpenQuestion((current) => {
      const next = current === question ? null : question;
      if (next) {
        sendAnalyticsEvent("faq_open", { question });
      }
      return next;
    });
  }

  return (
    <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
      {FAQS.map((faq) => {
        const isOpen = openQuestion === faq.question;
        const panelId = `faq-${faq.question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

        return (
          <div key={faq.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-cranberry)]"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(faq.question)}
            >
              <span className="min-w-0 pr-2 text-base font-semibold text-[var(--color-ink)]">{faq.question}</span>
              <ChevronDown
                aria-hidden
                className={cn("h-5 w-5 shrink-0 transition", isOpen && "rotate-180")}
              />
            </button>
            <div id={panelId} hidden={!isOpen} className="pb-5 text-sm leading-7 text-[var(--color-ink-soft)]">
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
