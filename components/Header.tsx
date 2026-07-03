"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { LemonSqueezyButton } from "@/components/LemonSqueezyButton";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-[rgba(249,244,236,0.9)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-h-11 min-w-0 items-center gap-2 font-semibold text-[var(--color-ink)]">
          <Image
            src="/brand/logo-mark.svg"
            alt=""
            width={40}
            height={40}
            priority
            className="h-10 w-10 shrink-0 rounded-md"
          />
          <span className="truncate sm:whitespace-normal">{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <LemonSqueezyButton product="guide" location="header" className="min-h-10 px-4 py-2" />
        </div>

        <button
          type="button"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-[var(--color-line)] bg-white text-[var(--color-ink)] md:hidden"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu aria-hidden className="h-5 w-5" />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[var(--color-cream)] p-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))] md:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold text-[var(--color-ink)]" onClick={() => setOpen(false)}>
              <Image
                src="/brand/logo-mark.svg"
                alt=""
                width={40}
                height={40}
                priority
                className="h-10 w-10 rounded-md"
              />
              {SITE.name}
            </Link>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-md border border-[var(--color-line)] bg-white"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
            >
              <X aria-hidden className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-10 grid gap-2" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-[var(--color-line)] py-4 font-serif text-3xl text-[var(--color-ink)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-8">
            <LemonSqueezyButton product="guide" location="mobile_menu" className="w-full" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
