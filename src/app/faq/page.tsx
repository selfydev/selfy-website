"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useState } from "react";
import { faqs } from "./faq-data";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

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
                FAQ
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
                Frequently asked questions.
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
                Everything you need to know about Selfy and our photo booth services.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-4xl mx-auto">
            {faqs.map((section, sectionIndex) => (
              <Reveal key={sectionIndex} className="mb-16 last:mb-0">
                <h2
                  className="reveal-item mb-8"
                  style={{
                    "--reveal-index": 0,
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "32px",
                    fontWeight: 500,
                    color: "#1D1D1D",
                    letterSpacing: "-0.5px",
                  } as React.CSSProperties}
                >
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.questions.map((item, questionIndex) => {
                    const id = `${sectionIndex}-${questionIndex}`;
                    const isOpen = openIndex === id;

                    return (
                      <div
                        key={questionIndex}
                        className="reveal-item rounded-2xl bg-white overflow-hidden"
                        style={{ "--reveal-index": Math.min(questionIndex + 1, 5) } as React.CSSProperties}
                      >
                        <button
                          onClick={() => toggleQuestion(id)}
                          className="press-scale w-full flex items-center justify-between p-6 text-left"
                        >
                          <span
                            style={{
                              fontFamily: "var(--font-helvetica-now)",
                              fontSize: "17px",
                              fontWeight: 500,
                              color: "#1D1D1D",
                            }}
                          >
                            {item.q}
                          </span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className={`flex-shrink-0 ml-4 transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </button>
                        <div
                          className={`transition-[max-height] duration-200 overflow-hidden ${
                            isOpen ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          <p
                            className="px-6 pb-6"
                            style={{
                              fontFamily: "var(--font-helvetica-now)",
                              fontSize: "15px",
                              fontWeight: 400,
                              color: "#666666",
                              lineHeight: 1.7,
                            }}
                          >
                            {item.a}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            ))}
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
              Still have questions?
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
              Can&apos;t find what you&apos;re looking for? Our team is here to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium press-scale hover:bg-white/90"
              style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
            >
              Contact us
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
