import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Event Inspiration & Tips",
  description:
    "Event inspiration, planning tips and photo booth ideas from the Selfy team — helping you make weddings, parties and corporate events unforgettable.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog — Event Inspiration & Tips",
    description:
      "Event inspiration, planning tips and photo booth ideas from the Selfy team — helping you make weddings, parties and corporate events unforgettable.",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
