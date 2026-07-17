"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { useState } from "react";
import { submitForm, type FormStatus } from "@/lib/forms";

export default function PartnersPage() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const ok = await submitForm(e.currentTarget);
    setStatus(ok ? "success" : "error");
  };

  const partnerTypes = [
    {
      title: "Event Planners",
      description: "Add premium photo booth services to your event offerings and earn commission on every referral.",
      benefits: [
        "Competitive referral commissions",
        "Dedicated partner support",
        "Co-branded marketing materials",
        "Priority booking for your clients",
      ],
    },
    {
      title: "Venues",
      description: "Become a preferred venue partner and offer Selfy as a recommended supplier to your clients.",
      benefits: [
        "Exclusive venue rates",
        "Featured on our venue directory",
        "Joint promotional opportunities",
        "Streamlined booking process",
      ],
    },
    {
      title: "Agencies",
      description: "Partner with us to deliver exceptional brand activations and corporate events for your clients.",
      benefits: [
        "White-label solutions",
        "Dedicated account team",
        "Custom integrations",
        "Volume discounts",
      ],
    },
  ];

  const logos = [
    "Google", "Nike", "Spotify", "HSBC", "Vogue", "Selfridges",
  ];

  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5]">
        {/* Hero Section */}
        <section className="relative w-full min-h-[70vh] flex items-center bg-[#1D1D1D] px-6 lg:px-24 pt-32 pb-20">
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
                Partners
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
                Let&apos;s grow together.
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
                Join our network of event planners, venues, and agencies. Together, we create unforgettable experiences.
              </p>
              <a
                href="#apply"
                className="reveal-item inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium press-scale hover:bg-white/90"
                style={{ "--reveal-index": 3, fontFamily: "var(--font-helvetica-now)", fontSize: "15px" } as React.CSSProperties}
              >
                Become a partner
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </Reveal>
          </div>
        </section>

        {/* Trusted By */}
        <section className="px-6 lg:px-24 py-16 bg-white">
          <Reveal className="max-w-7xl mx-auto">
            <p
              className="reveal-item text-center mb-8"
              style={{
                "--reveal-index": 0,
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "14px",
                fontWeight: 500,
                color: "#888888",
                letterSpacing: "1px",
                textTransform: "uppercase",
              } as React.CSSProperties}
            >
              Trusted by leading brands
            </p>
            <div
              className="reveal-item flex flex-wrap justify-center gap-x-16 gap-y-6"
              style={{ "--reveal-index": 1 } as React.CSSProperties}
            >
              {logos.map((logo, index) => (
                <span
                  key={index}
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "#CCCCCC",
                  }}
                >
                  {logo}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Partner Types */}
        <section className="px-6 lg:px-24 py-24">
          <Reveal className="max-w-7xl mx-auto">
            <h2
              className="reveal-item mb-16"
              style={{
                "--reveal-index": 0,
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "48px",
                fontWeight: 500,
                color: "#1D1D1D",
                letterSpacing: "-1px",
              } as React.CSSProperties}
            >
              Partnership opportunities
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <div
                  key={index}
                  className="reveal-item p-8 rounded-2xl bg-white"
                  style={{ "--reveal-index": Math.min(index + 1, 5) } as React.CSSProperties}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "24px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      marginBottom: "12px",
                    }}
                  >
                    {type.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "15px",
                      fontWeight: 400,
                      color: "#666666",
                      lineHeight: 1.6,
                      marginBottom: "24px",
                    }}
                  >
                    {type.description}
                  </p>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-start gap-3"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="flex-shrink-0 mt-0.5"
                        >
                          <path
                            d="M16.667 5L7.5 14.167 3.333 10"
                            stroke="#1D1D1D"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span
                          style={{
                            fontFamily: "var(--font-helvetica-now)",
                            fontSize: "14px",
                            fontWeight: 400,
                            color: "#1D1D1D",
                          }}
                        >
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Application Form */}
        <section id="apply" className="px-6 lg:px-24 py-24 bg-white">
          <Reveal className="max-w-2xl mx-auto">
            <h2
              className="reveal-item text-center mb-4"
              style={{
                "--reveal-index": 0,
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "48px",
                fontWeight: 500,
                color: "#1D1D1D",
                letterSpacing: "-1px",
              } as React.CSSProperties}
            >
              Apply to partner
            </h2>
            <p
              className="reveal-item text-center mb-12"
              style={{
                "--reveal-index": 1,
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "18px",
                fontWeight: 400,
                color: "#666666",
                lineHeight: 1.6,
              } as React.CSSProperties}
            >
              Fill out the form below and our partnerships team will be in touch.
            </p>
            {status === "success" ? (
              <div
                className="reveal-item py-16 text-center"
                style={{ "--reveal-index": 2 } as React.CSSProperties}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "28px",
                    fontWeight: 500,
                    color: "#1D1D1D",
                    marginBottom: "12px",
                  }}
                >
                  Thank you
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#888888",
                    lineHeight: 1.6,
                  }}
                >
                  Our partnerships team will be in touch soon.
                </p>
              </div>
            ) : (
            <form
              onSubmit={handleSubmit}
              className="reveal-item space-y-6"
              style={{ "--reveal-index": 2 } as React.CSSProperties}
            >
              <input type="hidden" name="form" value="partner-application" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="partner-name"
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    Name
                  </label>
                  <input
                    id="partner-name"
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-black/5 outline-none focus:border-black/20 transition-colors"
                    style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="partner-company"
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    Company
                  </label>
                  <input
                    id="partner-company"
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-black/5 outline-none focus:border-black/20 transition-colors"
                    style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="partner-email"
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1D1D1D",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Email
                </label>
                <input
                  id="partner-email"
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-black/5 outline-none focus:border-black/20 transition-colors"
                  style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="partner-partnership-type"
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1D1D1D",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Partnership type
                </label>
                <select
                  id="partner-partnership-type"
                  name="partnershipType"
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-black/5 outline-none focus:border-black/20 transition-colors"
                  style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="planner">Event Planner</option>
                  <option value="venue">Venue</option>
                  <option value="agency">Agency</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="partner-message"
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1D1D1D",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Tell us about your business
                </label>
                <textarea
                  id="partner-message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-black/5 outline-none focus:border-black/20 transition-colors resize-none"
                  style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className={`press-scale w-full py-4 rounded-full bg-[#1D1D1D] text-white font-medium hover:bg-black/80 ${
                  status === "submitting" ? "opacity-50 cursor-not-allowed" : ""
                }`}
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
              >
                {status === "submitting" ? "Sending…" : "Submit application"}
              </button>
              {status === "error" && (
                <p
                  className="text-center"
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#DC2626",
                  }}
                >
                  Something went wrong — please email us instead.
                </p>
              )}
            </form>
            )}
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
