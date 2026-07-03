import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.name} for purchase, access, or policy questions.`,
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: `Contact | ${SITE.name}`,
    description: `Contact ${SITE.name} for purchase, access, or policy questions.`,
    url: "/contact"
  }
};

export default function ContactPage() {
  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Link href="/" className="text-sm font-semibold text-[var(--color-cranberry)] hover:text-[var(--color-cranberry-dark)]">
            Back to home
          </Link>
          <p className="section-kicker mt-10">Contact</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl">Get in touch</h1>
          <p className="mt-5 text-base leading-8 text-[var(--color-ink-soft)]">
            Send purchase, access, product, or policy questions to {SITE.contactEmail}. The form opens your email app with the message prepared.
          </p>
        </div>
        <div className="rounded-lg border border-[var(--color-line)] bg-white p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
