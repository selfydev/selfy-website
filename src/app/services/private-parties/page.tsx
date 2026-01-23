"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function PrivatePartiesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { value: "1,500+", label: "Parties celebrated" },
    { value: "500K+", label: "Photos captured" },
    { value: "4.9/5", label: "Average rating" },
  ];

  const occasions = [
    { name: "Birthday Parties", description: "From 1st birthdays to milestone celebrations" },
    { name: "Anniversary Celebrations", description: "Celebrate years of love and memories" },
    { name: "Graduation Parties", description: "Cap off their achievement in style" },
    { name: "Retirement Parties", description: "Honour their career journey" },
    { name: "Family Reunions", description: "Bring generations together" },
    { name: "Holiday Gatherings", description: "Add magic to seasonal celebrations" },
  ];

  const features = [
    {
      title: "Unlimited Sessions",
      description: "Your guests can use the booth as many times as they like throughout your event.",
    },
    {
      title: "Premium Props Box",
      description: "A hand-curated selection of fun, high-quality props for every photo.",
    },
    {
      title: "Instant Prints",
      description: "High-quality photo strips printed on the spot in seconds.",
    },
    {
      title: "Digital Gallery",
      description: "All photos delivered to a private gallery for easy sharing and downloading.",
    },
    {
      title: "Custom Templates",
      description: "Personalise photo layouts with your party theme, colours, and messages.",
    },
    {
      title: "GIFs & Boomerangs",
      description: "Add movement and fun with animated GIFs that capture the party energy.",
    },
  ];

  const packages = [
    {
      name: "Party Starter",
      price: "295",
      duration: "2 hours",
      features: [
        "2 hours of booth time",
        "Unlimited sessions",
        "Instant prints",
        "Digital gallery",
        "Props collection",
        "On-site attendant",
      ],
      popular: false,
    },
    {
      name: "Celebration",
      price: "445",
      duration: "4 hours",
      features: [
        "4 hours of booth time",
        "Unlimited sessions",
        "Instant prints",
        "Digital gallery",
        "Premium props box",
        "Custom template design",
        "GIFs & boomerangs",
        "On-site attendant",
      ],
      popular: true,
    },
    {
      name: "All Night",
      price: "645",
      duration: "6 hours",
      features: [
        "6 hours of booth time",
        "Unlimited sessions",
        "Unlimited prints",
        "Digital gallery",
        "Premium props box",
        "Custom template design",
        "GIFs & boomerangs",
        "Guest book album",
        "Social sharing station",
        "On-site attendant",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      quote: "The booth was the highlight of my 40th! Everyone was talking about it for weeks.",
      author: "Michelle Davies",
      occasion: "40th Birthday Party",
    },
    {
      quote: "Our family reunion hadn't happened in years. The photo booth brought everyone together.",
      author: "Robert Thompson",
      occasion: "Family Reunion",
    },
    {
      quote: "The custom template matched our theme perfectly. Everyone went home with a keepsake.",
      author: "Sarah Collins",
      occasion: "18th Birthday Party",
    },
  ];

  const faqs = [
    {
      q: "How much space does the photo booth need?",
      a: "Our booth requires approximately 8ft x 8ft of floor space, plus access to a standard power outlet. We can work with most indoor spaces.",
    },
    {
      q: "Can you come to my home?",
      a: "Yes, we regularly set up at private residences, gardens, and community halls. As long as there's adequate space and power access, we can bring the party to you.",
    },
    {
      q: "How far in advance should I book?",
      a: "We recommend booking 2-4 weeks in advance, especially for weekend events. However, we can sometimes accommodate last-minute bookings.",
    },
    {
      q: "Are props included?",
      a: "Yes! All packages include our curated props collection. This includes glasses, hats, signs, and accessories.",
    },
    {
      q: "How many photos can guests take?",
      a: "Unlimited! There's no cap on the number of sessions during your booking. Guests can come back as many times as they like.",
    },
    {
      q: "Can I customise the photo template?",
      a: "With our Celebration and All Night packages, you get a custom template designed to match your party theme.",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5]">
        {/* Hero */}
        <section className="w-full bg-[#1D1D1D] px-6 lg:px-24 pt-32 pb-20">
          <div className="max-w-7xl mx-auto">
            <p
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
              Private Parties
            </p>
            <h1
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "clamp(48px, 8vw, 80px)",
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-2px",
              }}
            >
              Life's worth
              <br />
              celebrating.
            </h1>
            <p
              className="mt-6 max-w-xl"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "18px",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.6)",
                lineHeight: 1.6,
              }}
            >
              From milestone birthdays to family reunions, add an unforgettable element of fun to your private celebration.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium hover:opacity-90 transition-opacity"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "16px" }}
              >
                Book your party
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
              <a
                href="#packages"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "16px" }}
              >
                View packages
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 lg:px-24 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
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
            </div>
          </div>
        </section>

        {/* Occasions */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
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
                Perfect For
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
                Every celebration
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {occasions.map((occasion, index) => (
                <div key={index} className="bg-white rounded-2xl p-6">
                  <h3
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      marginBottom: "8px",
                    }}
                  >
                    {occasion.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#888888",
                    }}
                  >
                    {occasion.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="px-6 lg:px-24 py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
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
                What's Included
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
                Everything for the perfect party
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-[#F5F5F5] rounded-2xl p-8">
                  <h3
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      marginBottom: "8px",
                    }}
                  >
                    {feature.title}
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
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="px-6 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
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
                Packages
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
                Simple, transparent pricing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 ${
                    pkg.popular ? "bg-[#1D1D1D]" : "bg-white"
                  }`}
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
                    className={`block w-full py-4 rounded-full text-center font-medium transition-opacity hover:opacity-90 ${
                      pkg.popular ? "bg-white text-[#1D1D1D]" : "bg-[#1D1D1D] text-white"
                    }`}
                    style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                  >
                    Book now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-6 lg:px-24 py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
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
                Testimonials
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
                Party hosts love us
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-[#F5F5F5] rounded-2xl p-8">
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
                    "{testimonial.quote}"
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
                    {testimonial.occasion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
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
                FAQ
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
                Common questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-2xl bg-white overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
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
                    className={`transition-all duration-300 overflow-hidden ${
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
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-24 py-24 bg-[#1D1D1D]">
          <div className="max-w-3xl mx-auto text-center">
            <h2
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
              Ready to celebrate?
            </h2>
            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "18px",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.6)",
                lineHeight: 1.6,
              }}
            >
              Let's make your next party one to remember.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium hover:opacity-90 transition-opacity"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "16px" }}
              >
                Book your party
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
              <a
                href="tel:+442012345678"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "16px" }}
              >
                020 1234 5678
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
