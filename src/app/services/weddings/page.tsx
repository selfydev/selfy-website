"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { useState } from "react";
import type { CSSProperties } from "react";

export default function WeddingsPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { value: "500+", label: "Weddings captured" },
    { value: "98%", label: "5-star reviews" },
    { value: "1M+", label: "Photos taken" },
    { value: "50K+", label: "Happy guests" },
  ];

  const process = [
    {
      step: "01",
      title: "Enquire",
      description: "Tell us about your wedding date, venue, and vision. We'll check availability and send you a personalised quote.",
    },
    {
      step: "02",
      title: "Customise",
      description: "Work with our design team to create custom photo templates, overlays, and start screens that match your wedding theme.",
    },
    {
      step: "03",
      title: "Celebrate",
      description: "On your big day, we handle everything. Setup, operation, and breakdown — you just enjoy the moments.",
    },
    {
      step: "04",
      title: "Relive",
      description: "Access your private gallery within 24 hours. Download, share, and cherish every captured memory.",
    },
  ];

  const testimonials = [
    {
      quote: "Selfy was the highlight of our reception. Every single guest used the booth and the photos are absolutely stunning.",
      author: "Sarah & James",
      venue: "The Savoy, London",
    },
    {
      quote: "The team was professional, the booth looked gorgeous, and our guests are STILL talking about how much fun they had.",
      author: "Emma & Michael",
      venue: "Blenheim Palace",
    },
    {
      quote: "From the first enquiry to receiving our gallery, the experience was seamless. The custom design matched our theme perfectly.",
      author: "Charlotte & David",
      venue: "Claridge's",
    },
  ];

  const packages = [
    {
      name: "Essential",
      price: "495",
      duration: "3 hours",
      features: [
        "Unlimited photos",
        "Digital gallery",
        "Custom start screen",
        "On-site attendant",
        "Basic props included",
        "Email & SMS sharing",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "795",
      duration: "5 hours",
      features: [
        "Unlimited photos & GIFs",
        "Digital gallery + prints",
        "Full template customisation",
        "On-site attendant",
        "Premium props collection",
        "Guest book prints",
        "Social media sharing",
        "Same-day gallery access",
      ],
      popular: true,
    },
    {
      name: "All Day",
      price: "1,295",
      duration: "Full day",
      features: [
        "Unlimited photos, GIFs & video",
        "Digital gallery + unlimited prints",
        "Complete design customisation",
        "Dedicated attendant",
        "Luxury props & accessories",
        "Leather guest book",
        "Social media integration",
        "Priority support",
        "Highlight reel video",
      ],
      popular: false,
    },
  ];

  const faqs = [
    {
      q: "How far in advance should we book?",
      a: "We recommend booking 6-12 months in advance for peak wedding season (May-September). However, we can sometimes accommodate shorter notice bookings depending on availability.",
    },
    {
      q: "Can you match our wedding theme and colours?",
      a: "Absolutely! We offer full design customisation including photo templates, overlays, start screens, and even booth wraps. Our design team will work with you to create a cohesive look.",
    },
    {
      q: "What space do you need at the venue?",
      a: "Our standard booth requires approximately 8ft x 8ft of floor space with good lighting. We'll coordinate with your venue and wedding planner to find the perfect spot.",
    },
    {
      q: "Do you provide props?",
      a: "Yes! All packages include props. Our Premium and All Day packages include our curated wedding collection with elegant signs, frames, and accessories.",
    },
    {
      q: "When will we receive our photos?",
      a: "Your private online gallery will be ready within 24 hours of your wedding. Guests can also share photos instantly during the event via email or SMS.",
    },
    {
      q: "Can guests get printed photos?",
      a: "Yes, our Premium and All Day packages include instant prints. We use professional dye-sublimation printers for beautiful, smudge-proof photos that last.",
    },
  ];

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
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "14px",
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.5)",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Weddings
            </p>
            <h1
              className="reveal-item"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "clamp(48px, 8vw, 80px)",
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-2px",
                "--reveal-index": 1,
              } as CSSProperties}
            >
              Your wedding,
              <br />
              beautifully captured.
            </h1>
            <p
              className="mt-6 max-w-xl reveal-item"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "18px",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.6)",
                lineHeight: 1.6,
                "--reveal-index": 2,
              } as CSSProperties}
            >
              Premium photo booth experiences that capture the joy, laughter, and love of your special day.
            </p>
            <div
              className="flex flex-wrap gap-4 mt-10 reveal-item"
              style={{ "--reveal-index": 3 } as CSSProperties}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium hover:opacity-90 press-scale"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "16px" }}
              >
                Check availability
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
              <a
                href="#packages"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 press-scale"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "16px" }}
              >
                View packages
              </a>
            </div>
          </Reveal>
        </section>

        {/* Stats */}
        <section className="px-6 lg:px-24 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center reveal-item"
                  style={{ "--reveal-index": Math.min(index, 5) } as CSSProperties}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "clamp(36px, 6vw, 56px)",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#888888",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Featured Image */}
        <section className="px-6 lg:px-24 py-8">
          <Reveal className="max-w-7xl mx-auto">
            <div className="aspect-[21/9] rounded-2xl bg-[#E5E5E5] overflow-hidden flex items-center justify-center img-outline reveal-item">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#CCCCCC" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
          </Reveal>
        </section>

        {/* How it works */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-16">
              <p
                className="reveal-item"
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#888888",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                How it works
              </p>
              <h2
                className="reveal-item"
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 500,
                  color: "#1D1D1D",
                  letterSpacing: "-1px",
                  "--reveal-index": 1,
                } as CSSProperties}
              >
                Four simple steps
              </h2>
            </Reveal>
            <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 reveal-item"
                  style={{ "--reveal-index": Math.min(index, 5) } as CSSProperties}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "48px",
                      fontWeight: 500,
                      color: "#E5E5E5",
                      lineHeight: 1,
                    }}
                  >
                    {item.step}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      marginTop: "16px",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "15px",
                      fontWeight: 400,
                      color: "#888888",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="px-6 lg:px-24 py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <Reveal className="flex items-end justify-between mb-12">
              <div className="reveal-item">
                <p
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#888888",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  Gallery
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "clamp(36px, 5vw, 56px)",
                    fontWeight: 500,
                    color: "#1D1D1D",
                    letterSpacing: "-1px",
                  }}
                >
                  Real weddings
                </h2>
              </div>
              <Link
                href="/work"
                className="hidden md:inline-flex items-center gap-2 hover:opacity-70 press-scale reveal-item"
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#1D1D1D",
                  "--reveal-index": 1,
                } as CSSProperties}
              >
                View all work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
            </Reveal>
            <Reveal className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={item}
                  className="aspect-[4/3] rounded-xl bg-[#E5E5E5] flex items-center justify-center img-outline reveal-item"
                  style={{ "--reveal-index": Math.min(index, 5) } as CSSProperties}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#CCCCCC" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-12">
              <p
                className="reveal-item"
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#888888",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Testimonials
              </p>
              <h2
                className="reveal-item"
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 500,
                  color: "#1D1D1D",
                  letterSpacing: "-1px",
                  "--reveal-index": 1,
                } as CSSProperties}
              >
                Loved by couples
              </h2>
            </Reveal>
            <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 reveal-item"
                  style={{ "--reveal-index": Math.min(index, 5) } as CSSProperties}
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#1D1D1D">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#1D1D1D",
                      lineHeight: 1.6,
                      marginBottom: "24px",
                    }}
                  >
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                    }}
                  >
                    {testimonial.author}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#888888",
                    }}
                  >
                    {testimonial.venue}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="px-6 lg:px-24 py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <Reveal className="text-center mb-16">
              <p
                className="reveal-item"
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#888888",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Packages
              </p>
              <h2
                className="reveal-item"
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 500,
                  color: "#1D1D1D",
                  letterSpacing: "-1px",
                  "--reveal-index": 1,
                } as CSSProperties}
              >
                Choose your package
              </h2>
              <p
                className="mt-4 max-w-xl mx-auto reveal-item"
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#888888",
                  "--reveal-index": 2,
                } as CSSProperties}
              >
                All packages include setup, breakdown, and travel within Greater London.
              </p>
            </Reveal>

            <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 reveal-item ${
                    pkg.popular ? "bg-[#1D1D1D]" : "bg-[#F5F5F5]"
                  }`}
                  style={{ "--reveal-index": Math.min(index, 5) } as CSSProperties}
                >
                  {pkg.popular && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white"
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#1D1D1D",
                      }}
                    >
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "24px",
                        fontWeight: 500,
                        color: pkg.popular ? "#FFFFFF" : "#1D1D1D",
                      }}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: pkg.popular ? "rgba(255,255,255,0.6)" : "#888888",
                      }}
                    >
                      {pkg.duration}
                    </p>
                  </div>
                  <div className="mb-8">
                    <span
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "48px",
                        fontWeight: 500,
                        color: pkg.popular ? "#FFFFFF" : "#1D1D1D",
                      }}
                    >
                      £{pkg.price}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
                          <path
                            d="M16.667 5L7.5 14.167 3.333 10"
                            stroke={pkg.popular ? "#FFFFFF" : "#1D1D1D"}
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
                            color: pkg.popular ? "rgba(255,255,255,0.8)" : "#666666",
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block w-full py-4 rounded-full text-center font-medium press-scale hover:opacity-90 ${
                      pkg.popular ? "bg-white text-[#1D1D1D]" : "bg-[#1D1D1D] text-white"
                    }`}
                    style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                  >
                    Get started
                  </Link>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-4xl mx-auto">
            <Reveal className="text-center mb-16">
              <p
                className="reveal-item"
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#888888",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                FAQ
              </p>
              <h2
                className="reveal-item"
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 500,
                  color: "#1D1D1D",
                  letterSpacing: "-1px",
                  "--reveal-index": 1,
                } as CSSProperties}
              >
                Common questions
              </h2>
            </Reveal>

            <Reveal className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white overflow-hidden reveal-item"
                  style={{ "--reveal-index": Math.min(index, 5) } as CSSProperties}
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left press-scale"
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "17px",
                        fontWeight: 500,
                        color: "#1D1D1D",
                      }}
                    >
                      {faq.q}
                    </span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                        activeFaq === index ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className={`transition-[max-height] duration-300 overflow-hidden ${
                      activeFaq === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p
                      className="px-6 pb-6"
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "#888888",
                        lineHeight: 1.7,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-24 py-24 bg-[#1D1D1D]">
          <Reveal className="max-w-3xl mx-auto text-center">
            <h2
              className="reveal-item"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-1px",
                marginBottom: "16px",
              }}
            >
              Ready to make your wedding unforgettable?
            </h2>
            <p
              className="mb-10 reveal-item"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "18px",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.6)",
                lineHeight: 1.6,
                "--reveal-index": 1,
              } as CSSProperties}
            >
              Check availability for your date and let&apos;s start planning.
            </p>
            <div
              className="flex flex-wrap justify-center gap-4 reveal-item"
              style={{ "--reveal-index": 2 } as CSSProperties}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium hover:opacity-90 press-scale"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "16px" }}
              >
                Check availability
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
              <a
                href="mailto:hello@selfy.photo"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 press-scale"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "16px" }}
              >
                hello@selfy.photo
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
