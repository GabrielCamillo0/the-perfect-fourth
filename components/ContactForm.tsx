"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { SITE } from "@/lib/constants";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent("The Perfect Fourth contact");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:${SITE.contactEmail}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message prepared.");
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
        Name
        <input
          name="name"
          required
          className="min-h-12 rounded-md border border-[var(--color-line)] bg-white px-4 outline-none focus:border-[var(--color-cranberry)]"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
        Email
        <input
          name="email"
          type="email"
          required
          className="min-h-12 rounded-md border border-[var(--color-line)] bg-white px-4 outline-none focus:border-[var(--color-cranberry)]"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="rounded-md border border-[var(--color-line)] bg-white px-4 py-3 outline-none focus:border-[var(--color-cranberry)]"
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[var(--color-cranberry)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--color-cranberry-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cranberry)]"
      >
        <Send aria-hidden className="h-4 w-4" />
        Send message
      </button>
      {status ? <p className="text-sm text-[var(--color-ink-soft)]">{status}</p> : null}
    </form>
  );
}
