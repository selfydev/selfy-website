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
  title: "Selfy | Open Air Photo Booth Rental UK",
  description:
    "Premium open air photo booth rental for weddings, corporate events, and parties across the UK. Create unforgettable memories with Selfy.",
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
        {children}
      </body>
    </html>
  );
}
