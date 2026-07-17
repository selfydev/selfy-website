import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Event Gallery",
  description:
    "Browse our event gallery — weddings, brand activations and corporate events captured by Selfy's premium open-air photo booths in London and across the UK.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Our Work — Event Gallery",
    description:
      "Browse our event gallery — weddings, brand activations and corporate events captured by Selfy's premium open-air photo booths in London and across the UK.",
  },
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
