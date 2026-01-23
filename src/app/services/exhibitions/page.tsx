"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ExhibitionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: "180+", label: "Exhibitions supported" },
    { value: "75K+", label: "Leads captured" },
    { value: "40%", label: "Average footfall increase" },
  ];

  const venues = [
    { name: "ExCeL London", location: "London, UK" },
    { name: "Olympia London", location: "London, UK" },
    { name: "NEC Birmingham", location: "Birmingham, UK" },
    { name: "Manchester Central", location: "Manchester, UK" },
    { name: "SEC Glasgow", location: "Glasgow, UK" },
    { name: "Edinburgh ICC", location: "Edinburgh, UK" },
    { name: "ACC Liverpool", location: "Liverpool, UK" },
    { name: "Dubai World Trade Centre", location: "Dubai, UAE" },
  ];

  const features = [
    {
      title: "Complete Booth Branding",
      description: "Full exterior wrapping and interior branding that seamlessly integrates with your exhibition stand design.",
    },
    {
      title: "Intelligent Lead Capture",
      description: "Custom forms integrated into the photo experience capture visitor details without friction.",
    },
    {
      title: "High Footfall Ready",
      description: "Fast processing, durable equipment, and optimised workflows built for busy exhibition environments.",
    },
    {
      title: "Smart QR Networking",
      description: "QR codes on prints link directly to your website, portfolio, or contact details for seamless follow-up.",
    },
    {
      title: "Multi-Day Support",
      description: "Continuous technical support, consumable restocking, and on-site assistance throughout your event.",
    },
    {
      title: "Post-Event Analytics",
      description: "Comprehensive dashboard with engagement metrics, lead quality scores, and exportable data.",
    },
  ];

  const industries = [
    {
      title: "Technology & SaaS",
      description: "Engage tech-savvy visitors with interactive experiences and capture qualified leads at tech conferences and B2B shows.",
    },
    {
      title: "Healthcare & Pharma",
      description: "Create memorable interactions at medical conferences while maintaining professional brand standards.",
    },
    {
      title: "Automotive",
      description: "Drive engagement at motor shows with branded experiences that put visitors in the driver's seat.",
    },
    {
      title: "Consumer Goods",
      description: "Stand out on the show floor and generate buzz for product launches at trade fairs.",
    },
    {
      title: "Finance & Services",
      description: "Add an approachable touch to your professional presence while capturing valuable prospect data.",
    },
  ];

  const packages = [
    {
      name: "Single Day",
      price: "£695",
      duration: "1 day",
      description: "Perfect for smaller shows or testing the waters.",
      features: [
        "Full day coverage (8 hours)",
        "Branded photo experience",
        "Lead capture forms",
        "Instant prints",
        "Digital gallery",
        "Basic analytics",
        "On-site technician",
      ],
      popular: false,
    },
    {
      name: "Multi-Day",
      price: "£1,295",
      duration: "2-3 days",
      description: "Our most popular choice for major trade shows.",
      features: [
        "2-3 day coverage",
        "Full booth branding",
        "Advanced lead capture",
        "Unlimited prints",
        "Real-time gallery",
        "CRM integration",
        "QR networking",
        "Full analytics dashboard",
        "Dedicated support team",
      ],
      popular: true,
    },
    {
      name: "Exhibition Tour",
      price: "Custom",
      duration: "Multiple events",
      description: "For brands with ongoing exhibition schedules.",
      features: [
        "Multi-event packages",
        "Volume discounts",
        "Consistent branding",
        "Centralised analytics",
        "Priority scheduling",
        "Dedicated account manager",
        "Custom integrations",
        "Monthly reporting",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      quote: "The booth drove constant traffic to our stand. We collected more qualified leads in three days than our entire previous year at the show.",
      author: "James Morrison",
      role: "Head of Marketing, TechFlow Solutions",
    },
    {
      quote: "Selfy understood exactly what we needed for a medical conference. Professional, compliant, and incredibly effective at capturing prospect data.",
      author: "Dr. Sarah Chen",
      role: "Marketing Director, MedTech Innovations",
    },
    {
      quote: "The analytics alone were worth it. We could see exactly which days and times drove the most engagement.",
      author: "Michael Roberts",
      role: "Events Manager, GlobalFinance PLC",
    },
  ];

  const faqs = [
    {
      question: "Can you set up within our existing exhibition stand?",
      answer: "Yes, we work closely with your stand builders to integrate seamlessly. We can adapt to various stand sizes and configurations, from shell schemes to custom builds. We'll coordinate with your contractors to ensure perfect placement and branding alignment.",
    },
    {
      question: "How do you handle venue requirements?",
      answer: "We're experienced with all major UK and European exhibition venues and their specific requirements. This includes health & safety documentation, electrical compliance, risk assessments, and any venue-specific regulations. We handle all paperwork and coordination.",
    },
    {
      question: "What happens to the lead data we collect?",
      answer: "All data is captured securely and can be exported in multiple formats (CSV, Excel) or synced directly with your CRM system including Salesforce, HubSpot, and others. We're fully GDPR compliant with proper consent mechanisms built into the capture process.",
    },
    {
      question: "How quickly can prints be produced?",
      answer: "Our systems are optimised for high-traffic environments with an average cycle time of 8 seconds from capture to print. This ensures minimal queuing even during peak periods, maximising the number of leads you can capture.",
    },
    {
      question: "Can the booth handle multiple languages?",
      answer: "Yes, we can configure the interface in multiple languages and create templates with text in any language. This is particularly useful for international shows where you may encounter visitors from various countries.",
    },
    {
      question: "What's included in the on-site support?",
      answer: "All packages include trained technicians who manage the booth, assist visitors, handle prints, and troubleshoot any issues. For multi-day events, we provide consumable restocking and daily status updates on performance metrics.",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5]">
        {/* Hero Section */}
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
              Exhibitions & Trade Shows
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
              Stand out on the
              <br />
              show floor.
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
              Drive traffic to your stand, capture quality leads, and create
              memorable interactions at trade shows and exhibitions.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium hover:opacity-90 transition-opacity"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
              >
                Get a quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
              >
                View packages
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 lg:px-24 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "48px",
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
                      fontSize: "15px",
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

        {/* Venues */}
        <section className="px-6 lg:px-24 py-16">
          <div className="max-w-7xl mx-auto">
            <p
              className="text-center mb-10"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "14px",
                fontWeight: 500,
                color: "#888888",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Experienced at major venues across the UK & Europe
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {venues.map((venue, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-white text-center"
                >
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                    }}
                  >
                    {venue.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "#888888",
                      marginTop: "4px",
                    }}
                  >
                    {venue.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 lg:px-24 py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16">
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
                Features
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "clamp(36px, 5vw, 48px)",
                  fontWeight: 500,
                  color: "#1D1D1D",
                  letterSpacing: "-1px",
                  lineHeight: 1.1,
                }}
              >
                Built for exhibition success
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-[#F5F5F5]"
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      marginBottom: "12px",
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

        {/* Industries */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-16">
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
                Industries
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "clamp(36px, 5vw, 48px)",
                  fontWeight: 500,
                  color: "#1D1D1D",
                  letterSpacing: "-1px",
                  lineHeight: 1.1,
                }}
              >
                Expertise across sectors
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-white"
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      marginBottom: "12px",
                    }}
                  >
                    {industry.title}
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
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="px-6 lg:px-24 py-24 bg-white">
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
                  fontSize: "clamp(36px, 5vw, 48px)",
                  fontWeight: 500,
                  color: "#1D1D1D",
                  letterSpacing: "-1px",
                  lineHeight: 1.1,
                }}
              >
                Flexible pricing for any show
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl ${
                    pkg.popular
                      ? "bg-[#1D1D1D] text-white"
                      : "bg-[#F5F5F5]"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-[#1D1D1D]">
                      <span
                        style={{
                          fontFamily: "var(--font-helvetica-now)",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                      >
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <p
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "20px",
                        fontWeight: 500,
                        marginBottom: "4px",
                      }}
                    >
                      {pkg.name}
                    </p>
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
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: pkg.price === "Custom" ? "36px" : "48px",
                      fontWeight: 500,
                      lineHeight: 1,
                      marginBottom: "16px",
                    }}
                  >
                    {pkg.price}
                  </p>
                  <p
                    className="mb-8"
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "15px",
                      fontWeight: 400,
                      color: pkg.popular ? "rgba(255,255,255,0.7)" : "#888888",
                      lineHeight: 1.6,
                    }}
                  >
                    {pkg.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="flex-shrink-0 mt-0.5"
                        >
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
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block w-full py-4 rounded-full text-center font-medium hover:opacity-90 transition-opacity ${
                      pkg.popular
                        ? "bg-white text-[#1D1D1D]"
                        : "bg-[#1D1D1D] text-white"
                    }`}
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "15px",
                    }}
                  >
                    {pkg.price === "Custom" ? "Contact us" : "Get started"}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-6 lg:px-24 py-24">
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
                Testimonials
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "clamp(36px, 5vw, 48px)",
                  fontWeight: 500,
                  color: "#1D1D1D",
                  letterSpacing: "-1px",
                }}
              >
                What exhibitors say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-white"
                >
                  <p
                    className="mb-6"
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#1D1D1D",
                      lineHeight: 1.6,
                    }}
                  >
                    "{testimonial.quote}"
                  </p>
                  <div>
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
                        marginTop: "2px",
                      }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 lg:px-24 py-24 bg-white">
          <div className="max-w-3xl mx-auto">
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
                  fontSize: "clamp(36px, 5vw, 48px)",
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
                <div
                  key={index}
                  className="rounded-2xl bg-[#F5F5F5] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "17px",
                        fontWeight: 500,
                        color: "#1D1D1D",
                      }}
                    >
                      {faq.question}
                    </span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1D1D1D"
                      strokeWidth="2"
                      className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? "max-h-96" : "max-h-0"
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
                      {faq.answer}
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
              Got an exhibition coming up?
            </h2>
            <p
              className="max-w-xl mx-auto mb-10"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "18px",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.6)",
                lineHeight: 1.6,
              }}
            >
              Let's discuss how we can help you maximise your presence on the show floor
              and capture more qualified leads than ever before.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium hover:opacity-90 transition-opacity"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
              >
                Get a quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="mailto:exhibitions@selfy.co.uk"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
              >
                exhibitions@selfy.co.uk
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
