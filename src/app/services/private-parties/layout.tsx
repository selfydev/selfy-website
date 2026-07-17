import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Party Photo Booth Hire",
  description:
    "Private party photo booth hire in London and across the UK. Open-air booths, fun props and instant sharing for birthdays, celebrations and gatherings.",
  alternates: {
    canonical: "/services/private-parties",
  },
  openGraph: {
    title: "Private Party Photo Booth Hire",
    description:
      "Private party photo booth hire in London and across the UK. Open-air booths, fun props and instant sharing for birthdays, celebrations and gatherings.",
  },
};

export default function PrivatePartiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
