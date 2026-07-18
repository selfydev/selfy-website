"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { useState } from "react";
import { submitForm, type FormStatus } from "@/lib/forms";

const upcomingTopics = [
  {
    category: "Weddings",
    title: "How to choose a photo booth for your wedding",
    excerpt:
      "Open air or enclosed, prints or digital — everything to weigh up before you book.",
  },
  {
    category: "Behind the Scenes",
    title: "Behind the scenes at a Selfy brand activation",
    excerpt:
      "What it takes to design, build, and run a photo experience for a major brand.",
  },
  {
    category: "Product Updates",
    title: "Getting the most from your digital gallery",
    excerpt:
      "Tips for sharing, downloading, and reliving every moment after the event.",
  },
];

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    const ok = await submitForm(e.currentTarget);
    if (ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5]">
        {/* Hero */}
        <section className="w-full bg-[#1D1D1D] px-6 lg:px-24 pt-32 pb-20">
          <Reveal className="max-w-7xl mx-auto">
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
              Blog
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
              Insights & stories,
              <br />
              coming soon.
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
              We&apos;re working on the Selfy blog — event photography tips,
              behind-the-scenes looks at our favourite events, and product
              updates from the team. Leave your email and we&apos;ll let you
              know when the first stories land.
            </p>

            {/* Email capture */}
            <div
              className="reveal-item mt-10 max-w-md"
              style={{ "--reveal-index": 3 } as React.CSSProperties}
            >
              {status !== "success" ? (
                <>
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <input type="hidden" name="form" value="newsletter" />
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      aria-label="Email address"
                      className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/30 transition-colors"
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "14px",
                      }}
                      required
                    />
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className={`press-scale px-6 py-3.5 rounded-full bg-white text-[#1D1D1D] font-medium hover:bg-white/90 whitespace-nowrap ${
                        status === "submitting"
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "14px",
                      }}
                    >
                      {status === "submitting" ? "Sending…" : "Notify me"}
                    </button>
                  </form>
                  {status === "error" && (
                    <p
                      className="mt-3"
                      role="alert"
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "#FCA5A5",
                      }}
                    >
                      Something went wrong — please email us instead.
                    </p>
                  )}
                </>
              ) : (
                <p
                  role="status"
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#FFFFFF",
                  }}
                >
                  Thanks — you&apos;re on the list. We&apos;ll be in touch when
                  the blog launches.
                </p>
              )}
            </div>
          </Reveal>
        </section>

        {/* Teaser cards */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <Reveal className="max-w-2xl mb-16">
              <p
                className="reveal-item"
                style={{
                  "--reveal-index": 0,
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#888888",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                } as React.CSSProperties}
              >
                In the works
              </p>
              <h2
                className="reveal-item"
                style={{
                  "--reveal-index": 1,
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "clamp(36px, 5vw, 48px)",
                  fontWeight: 500,
                  color: "#1D1D1D",
                  letterSpacing: "-1px",
                  lineHeight: 1.1,
                } as React.CSSProperties}
              >
                A taste of what&apos;s coming
              </h2>
            </Reveal>

            <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingTopics.map((topic, index) => (
                <div
                  key={topic.title}
                  aria-disabled="true"
                  className="reveal-item bg-white rounded-2xl overflow-hidden select-none"
                  style={{ "--reveal-index": Math.min(index, 5) } as React.CSSProperties}
                >
                  {/* Greyed image placeholder */}
                  <div className="aspect-[16/10] bg-[#EBEBEB] relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#CCCCCC"
                        strokeWidth="1"
                        aria-hidden="true"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                    <span
                      className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1D1D1D]/80 backdrop-blur-sm"
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "11px",
                        fontWeight: 500,
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      }}
                    >
                      Coming soon
                    </span>
                  </div>
                  {/* Content — intentionally muted */}
                  <div className="p-6 opacity-60">
                    <p
                      className="mb-3"
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#888888",
                      }}
                    >
                      {topic.category}
                    </p>
                    <h3
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "#1D1D1D",
                        lineHeight: 1.4,
                        marginBottom: "8px",
                      }}
                    >
                      {topic.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#888888",
                        lineHeight: 1.6,
                      }}
                    >
                      {topic.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Closing note */}
        <section className="px-6 lg:px-24 py-24 bg-[#1D1D1D]">
          <Reveal className="max-w-3xl mx-auto text-center">
            <h2
              className="reveal-item"
              style={{
                "--reveal-index": 0,
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-1px",
                marginBottom: "16px",
              } as React.CSSProperties}
            >
              Planning an event in the meantime?
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
              You don&apos;t have to wait for the blog — talk to the team and
              we&apos;ll help you plan the perfect photo experience.
            </p>
            <div
              className="reveal-item"
              style={{ "--reveal-index": 2 } as React.CSSProperties}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium press-scale hover:opacity-90"
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "15px",
                }}
              >
                Get in touch
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
