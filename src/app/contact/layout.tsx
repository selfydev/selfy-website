import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get a Quote",
  description:
    "Get in touch with Selfy for a photo booth hire quote. Call +44 203 488 2312 or email hello@selfy.photo — we cover London and events across the UK.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us — Get a Quote",
    description:
      "Get in touch with Selfy for a photo booth hire quote. Call +44 203 488 2312 or email hello@selfy.photo — we cover London and events across the UK.",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
