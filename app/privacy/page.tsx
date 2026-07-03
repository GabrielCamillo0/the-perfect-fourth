import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { LEGAL_PAGES, SITE } from "@/lib/constants";

const page = LEGAL_PAGES.privacy;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: "/privacy"
  },
  openGraph: {
    title: `${page.title} | ${SITE.name}`,
    description: page.description,
    url: "/privacy"
  }
};

export default function PrivacyPage() {
  return <LegalPage {...page} />;
}
