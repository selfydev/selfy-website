import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Photo Booth Hire",
  description:
    "Premium open-air wedding photo booth hire in London and across the UK. Elegant booths, instant sharing and beautiful keepsakes for your special day.",
  alternates: {
    canonical: "/services/weddings",
  },
  openGraph: {
    title: "Wedding Photo Booth Hire",
    description:
      "Premium open-air wedding photo booth hire in London and across the UK. Elegant booths, instant sharing and beautiful keepsakes for your special day.",
  },
};

export default function WeddingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
