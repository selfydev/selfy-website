import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exhibition & Trade Show Booths",
  description:
    "Exhibition and trade show photo booth hire across the UK. Draw visitors to your stand with branded open-air booths and instant digital photo sharing.",
  alternates: {
    canonical: "/services/exhibitions",
  },
  openGraph: {
    title: "Exhibition & Trade Show Booths",
    description:
      "Exhibition and trade show photo booth hire across the UK. Draw visitors to your stand with branded open-air booths and instant digital photo sharing.",
  },
};

export default function ExhibitionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
