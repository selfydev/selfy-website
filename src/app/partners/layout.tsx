import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us — Venues & Agencies",
  description:
    "Partner with Selfy. We work with venues, event planners and agencies across the UK to deliver premium open-air photo booth experiences for every event.",
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    title: "Partner With Us — Venues & Agencies",
    description:
      "Partner with Selfy. We work with venues, event planners and agencies across the UK to deliver premium open-air photo booth experiences for every event.",
  },
};

export default function PartnersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
