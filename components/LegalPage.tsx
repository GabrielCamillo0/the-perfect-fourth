import Link from "next/link";

type LegalPageProps = {
  title: string;
  description: string;
  updated: string;
  sections: ReadonlyArray<{
    heading: string;
    body: string;
  }>;
};

export function LegalPage({ title, description, updated, sections }: LegalPageProps) {
  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-[var(--color-cranberry)] hover:text-[var(--color-cranberry-dark)]">
          Back to home
        </Link>
        <p className="section-kicker mt-10">Policy</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl">{title}</h1>
        <p className="mt-5 text-base leading-8 text-[var(--color-ink-soft)]">{description}</p>
        <p className="mt-4 text-sm text-[var(--color-ink-soft)]">Last updated: {updated}</p>
        <div className="mt-12 grid gap-8">
          {sections.map((section) => (
            <section key={section.heading} className="border-t border-[var(--color-line)] pt-8">
              <h2 className="font-serif text-3xl text-[var(--color-ink)]">{section.heading}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
