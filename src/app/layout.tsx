import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const helveticaNowDisplay = localFont({
  src: [
    {
      path: "../fonts/HelveticaNowDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNowDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNowDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNowDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-now",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://selfy.photo"),
  title: {
    default: "Selfy | Open Air Photo Booth Rental UK",
    template: "%s | Selfy",
  },
  description:
    "Premium open air photo booth rental for weddings, corporate events, and parties across the UK. Create unforgettable memories with Selfy.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Selfy",
    type: "website",
    locale: "en_GB",
    url: "https://selfy.photo",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Selfy open air photo booth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@selfyco",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Selfy",
  legalName: "Selfy LTD",
  url: "https://selfy.photo",
  telephone: "+442034882312",
  email: "hello@selfy.photo",
  image: "https://selfy.photo/images/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "20-22 Wenlock Road",
    addressLocality: "London",
    postalCode: "N1 7GU",
    addressCountry: "GB",
  },
  sameAs: [
    "https://instagram.com/selfyco",
    "https://tiktok.com/@selfyco",
    "https://facebook.com/selfyco",
    "https://twitter.com/selfyco",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${helveticaNowDisplay.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
