import Link from "next/link";
import { LEGAL_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer id="site-footer" className="bg-[var(--color-ink)] px-4 pb-[max(6rem,calc(4.5rem+env(safe-area-inset-bottom)))] pt-12 text-white sm:px-6 md:pb-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-serif text-3xl">{SITE.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">{SITE.tagline}</p>
          <p className="mt-4 text-xs text-white/55">
            Planning support only. Always follow local rules and official safety guidance.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-white/70" aria-label="Footer navigation">
          {LEGAL_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
