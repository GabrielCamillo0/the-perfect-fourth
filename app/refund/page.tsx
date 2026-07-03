import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { LEGAL_PAGES, SITE } from "@/lib/constants";

const page = LEGAL_PAGES.refund;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: "/refund"
  },
  openGraph: {
    title: `${page.title} | ${SITE.name}`,
    description: page.description,
    url: "/refund"
  }
};

export default function RefundPage() {
  return <LegalPage {...page} />;
}
