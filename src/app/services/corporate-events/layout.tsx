import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Event Photo Booths",
  description:
    "Corporate event photo booth hire in London and across the UK. Branded open-air booths that bring energy to conferences, award nights and staff parties.",
  alternates: {
    canonical: "/services/corporate-events",
  },
  openGraph: {
    title: "Corporate Event Photo Booths",
    description:
      "Corporate event photo booth hire in London and across the UK. Branded open-air booths that bring energy to conferences, award nights and staff parties.",
  },
};

export default function CorporateEventsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
