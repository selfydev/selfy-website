"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useState } from "react";

const projects = [
  {
    title: "Google I/O 2024",
    category: "Brand Activation",
    description: "Custom branded booth with AR filters for Google's flagship developer conference.",
    stats: "5,000+ photos captured",
  },
  {
    title: "Royal Wedding Reception",
    category: "Wedding",
    description: "An elegant setup for an intimate royal family celebration in the English countryside.",
    stats: "300+ guests served",
  },
  {
    title: "Nike Air Max Day",
    category: "Brand Activation",
    description: "Multi-location activation across London celebrating the iconic sneaker.",
    stats: "12,000+ social shares",
  },
  {
    title: "HSBC Annual Conference",
    category: "Corporate",
    description: "Lead capture integration and branded experience for their global leadership summit.",
    stats: "2,500+ leads captured",
  },
  {
    title: "London Fashion Week",
    category: "Exhibition",
    description: "Backstage and front-of-house coverage for multiple designer showcases.",
    stats: "8,000+ photos",
  },
  {
    title: "50th Birthday Celebration",
    category: "Private Party",
    description: "A glamorous Hollywood-themed party in Mayfair with custom props and prints.",
    stats: "150 guests, 400+ prints",
  },
  {
    title: "Spotify Wrapped Party",
    category: "Brand Activation",
    description: "Interactive booth that generated personalised music-themed photo experiences.",
    stats: "3M+ impressions",
  },
  {
    title: "Dubai Expo Pavilion",
    category: "Exhibition",
    description: "Six-month deployment at the UK pavilion capturing visitor memories.",
    stats: "50,000+ photos",
  },
];

const categories = ["All", "Brand Activation", "Wedding", "Corporate", "Private Party", "Exhibition"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5]">
        {/* Hero Section */}
        <section className="relative w-full min-h-[50vh] flex items-center bg-[#1D1D1D] px-6 lg:px-24 pt-32 pb-20">
          <div className="max-w-7xl mx-auto w-full">
            <Reveal className="max-w-3xl">
              <p
                className="reveal-item"
                style={{
                  "--reveal-index": 0,
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgba(255, 255, 255, 0.5)",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                } as React.CSSProperties}
              >
                Our Work
              </p>
              <h1
                className="reveal-item"
                style={{
                  "--reveal-index": 1,
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "clamp(48px, 8vw, 80px)",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  letterSpacing: "-2px",
                } as React.CSSProperties}
              >
                Events we&apos;re proud of.
              </h1>
              <p
                className="reveal-item mt-6 max-w-xl"
                style={{
                  "--reveal-index": 2,
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "rgba(255, 255, 255, 0.6)",
                  lineHeight: 1.6,
                } as React.CSSProperties}
              >
                From intimate celebrations to global brand activations, here&apos;s a selection of the events we&apos;ve had the privilege of being part of.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Filter */}
        <section className="px-6 lg:px-24 py-12 bg-white sticky top-0 z-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className="press-scale px-5 py-2.5 rounded-full"
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "14px",
                    fontWeight: 500,
                    backgroundColor: activeCategory === category ? "#1D1D1D" : "transparent",
                    color: activeCategory === category ? "#FFFFFF" : "#1D1D1D",
                    border: activeCategory === category ? "1px solid #1D1D1D" : "1px solid #E0E0E0",
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-6 lg:px-24 py-16">
          <div className="max-w-7xl mx-auto">
            <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="reveal-item group p-8 rounded-2xl bg-white hover:bg-[#1D1D1D] transition-colors duration-300 cursor-pointer"
                  style={{ "--reveal-index": Math.min(index, 5) } as React.CSSProperties}
                >
                  <span
                    className="inline-block px-3 py-1 rounded-full mb-6 transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "12px",
                      fontWeight: 500,
                      backgroundColor: "rgba(29, 29, 29, 0.1)",
                      color: "#666666",
                    }}
                  >
                    <span className="group-hover:hidden">{project.category}</span>
                    <span className="hidden group-hover:inline text-white/60">{project.category}</span>
                  </span>
                  <h2
                    className="transition-colors duration-300 group-hover:text-white"
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "28px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      marginBottom: "12px",
                    }}
                  >
                    {project.title}
                  </h2>
                  <p
                    className="transition-colors duration-300 group-hover:text-white/60"
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "15px",
                      fontWeight: 400,
                      color: "#666666",
                      lineHeight: 1.6,
                      marginBottom: "16px",
                    }}
                  >
                    {project.description}
                  </p>
                  <p
                    className="transition-colors duration-300 group-hover:text-white/40"
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#888888",
                    }}
                  >
                    {project.stats}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 lg:px-24 py-24 bg-[#1D1D1D]">
          <Reveal className="max-w-7xl mx-auto text-center">
            <h2
              className="reveal-item"
              style={{
                "--reveal-index": 0,
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: "24px",
              } as React.CSSProperties}
            >
              Ready to create something amazing?
            </h2>
            <p
              className="reveal-item max-w-xl mx-auto mb-10"
              style={{
                "--reveal-index": 1,
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "18px",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.6)",
                lineHeight: 1.6,
              } as React.CSSProperties}
            >
              Let&apos;s discuss how we can make your event unforgettable.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium press-scale hover:bg-white/90"
              style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
            >
              Start a project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
