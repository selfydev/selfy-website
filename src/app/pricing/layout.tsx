import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Photo Booth Hire Packages",
  description:
    "Transparent photo booth hire pricing from £495. Compare Essential, Premium and All Day event packages plus corporate options — setup, attendant and Greater London travel included.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing — Photo Booth Hire Packages",
    description:
      "Transparent photo booth hire pricing from £495. Compare Essential, Premium and All Day event packages plus corporate options — setup, attendant and Greater London travel included.",
  },
};

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
