import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// TODO: Add Helvetica Now Display font files to src/fonts/ and uncomment:
// import localFont from "next/font/local";
// const helveticaNowDisplay = localFont({
//   src: [
//     { path: "../fonts/HelveticaNowDisplay-Regular.woff2", weight: "400", style: "normal" },
//     { path: "../fonts/HelveticaNowDisplay-Medium.woff2", weight: "500", style: "normal" },
//     { path: "../fonts/HelveticaNowDisplay-Bold.woff2", weight: "700", style: "normal" },
//     { path: "../fonts/HelveticaNowDisplay-ExtraBold.woff2", weight: "800", style: "normal" },
//   ],
//   variable: "--font-helvetica-now",
//   display: "swap",
// });

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
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
