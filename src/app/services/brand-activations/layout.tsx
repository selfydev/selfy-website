import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Activation Photo Booths",
  description:
    "Brand activation photo booths with full white-label customisation. Branded booth wraps, custom overlays and instant social sharing for UK campaigns.",
  alternates: {
    canonical: "/services/brand-activations",
  },
  openGraph: {
    title: "Brand Activation Photo Booths",
    description:
      "Brand activation photo booths with full white-label customisation. Branded booth wraps, custom overlays and instant social sharing for UK campaigns.",
  },
};

export default function BrandActivationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
