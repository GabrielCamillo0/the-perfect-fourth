import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { LEGAL_PAGES, SITE } from "@/lib/constants";

const page = LEGAL_PAGES.terms;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: "/terms"
  },
  openGraph: {
    title: `${page.title} | ${SITE.name}`,
    description: page.description,
    url: "/terms"
  }
};

export default function TermsPage() {
  return <LegalPage {...page} />;
}
