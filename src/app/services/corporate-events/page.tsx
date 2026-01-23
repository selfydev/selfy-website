"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function CorporateEventsPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { value: "200+", label: "Corporate clients" },
    { value: "95%", label: "Rebooking rate" },
    { value: "500K+", label: "Leads captured" },
    { value: "50+", label: "Fortune 500 brands" },
  ];

  const clients = [
    "Google", "Microsoft", "Nike", "HSBC", "Spotify", "Deloitte",
    "Meta", "Amazon", "Barclays", "PwC", "Unilever", "Vodafone"
  ];

  const useCases = [
    { name: "Conferences", description: "Engage attendees and create shareable moments" },
    { name: "Product Launches", description: "Generate buzz and capture reactions" },
    { name: "Team Building", description: "Strengthen bonds and create memories" },
    { name: "Award Ceremonies", description: "Celebrate achievements in style" },
    { name: "Holiday Parties", description: "End the year on a high note" },
    { name: "Trade Shows", description: "Drive booth traffic and capture leads" },
  ];

  const features = [
    {
      title: "Complete Brand Integration",
      description: "Full white-label experience with custom booth wraps, UI, overlays, and prints that feel authentically yours.",
    },
    {
      title: "Lead Capture & CRM Sync",
      description: "Capture attendee data with custom forms and sync directly to Salesforce, HubSpot, or your CRM of choice.",
    },
    {
      title: "Real-time Analytics",
      description: "Track engagement, shares, impressions, and demographics with our comprehensive live dashboard.",
    },
    {
      title: "Social Amplification",
      description: "Branded sharing with tracked hashtags, social walls, and instant posting to all major platforms.",
    },
    {
      title: "Enterprise Security",
      description: "SOC 2 compliant, GDPR ready, with data encryption and custom retention policies.",
    },
    {
      title: "Dedicated Account Team",
      description: "A dedicated account manager from brief to execution, plus on-site support throughout your event.",
    },
  ];

  const caseStudies = [
    {
      client: "Google",
      event: "I/O Developer Conference",
      results: ["5,000+ photos captured", "3M+ social impressions", "85% share rate"],
    },
    {
      client: "HSBC",
      event: "Global Leadership Summit",
      results: ["2,500+ leads captured", "98% data accuracy", "Salesforce integration"],
    },
    {
      client: "Nike",
      event: "Air Max Day Activation",
      results: ["12,000+ photos", "2.5M hashtag impressions", "15 press features"],
    },
  ];

  const faqs = [
    {
      q: "What's included in corporate packages?",
      a: "All corporate packages include full brand customisation, lead capture, analytics dashboard, dedicated account manager, on-site support, and post-event reporting. Enterprise packages add multi-location support, custom integrations, and priority SLAs.",
    },
    {
      q: "Can you integrate with our CRM?",
      a: "Yes, we offer native integrations with Salesforce, HubSpot, Marketo, and other major CRMs. Custom API integrations are available for enterprise clients.",
    },
    {
      q: "What's your data security policy?",
      a: "We're SOC 2 Type II compliant and GDPR ready. All data is encrypted at rest and in transit, with configurable retention policies and the option for on-premise data storage.",
    },
    {
      q: "Can you support multi-location events?",
      a: "Absolutely. We've supported activations across multiple cities and even countries, with centralised management, unified branding, and consolidated analytics.",
    },
    {
      q: "What's the lead time for corporate bookings?",
      a: "We recommend 4-6 weeks for standard corporate events and 8-12 weeks for large-scale activations with custom integrations. Rush timelines can be accommodated for an additional fee.",
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
              Corporate Events
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
              Transform your
              <br />
              corporate events.
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
              Drive engagement, capture leads, and create memorable experiences that deliver measurable ROI.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium hover:opacity-90 transition-opacity"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "16px" }}
              >
                Get a proposal
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "16px" }}
              >
                View case studies
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 lg:px-24 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Client Logos */}
        <section className="px-6 lg:px-24 py-16 border-b border-black/5">
          <div className="max-w-7xl mx-auto">
            <p
              className="text-center mb-10"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "14px",
                fontWeight: 500,
                color: "#888888",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {clients.map((client, index) => (
                <span
                  key={index}
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#CCCCCC",
                  }}
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
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
                Use Cases
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
                Perfect for any event
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {useCases.map((useCase, index) => (
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
                    {useCase.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#888888",
                    }}
                  >
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 lg:px-24 py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
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
                  Capabilities
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "clamp(36px, 5vw, 56px)",
                    fontWeight: 500,
                    color: "#1D1D1D",
                    letterSpacing: "-1px",
                    lineHeight: 1.1,
                  }}
                >
                  Enterprise-ready features
                </h2>
                <p
                  className="mt-6"
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "#888888",
                    lineHeight: 1.6,
                  }}
                >
                  Everything you need to create impactful brand experiences that deliver measurable results.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 mt-8 px-6 py-3 rounded-full bg-[#1D1D1D] text-white font-medium hover:opacity-90 transition-opacity"
                  style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                >
                  Request a demo
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </Link>
              </div>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-[#F5F5F5]">
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
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" className="px-6 lg:px-24 py-24 bg-[#1D1D1D]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <p
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgba(255, 255, 255, 0.5)",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Case Studies
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  letterSpacing: "-1px",
                }}
              >
                Results that speak
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/5 rounded-2xl p-8">
                  <span
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    {study.client}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "24px",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      marginTop: "8px",
                      marginBottom: "24px",
                    }}
                  >
                    {study.event}
                  </h3>
                  <ul className="space-y-3">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13.333 4L6 11.333 2.667 8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span
                          style={{
                            fontFamily: "var(--font-helvetica-now)",
                            fontSize: "14px",
                            fontWeight: 400,
                            color: "rgba(255, 255, 255, 0.8)",
                          }}
                        >
                          {result}
                        </span>
                      </li>
                    ))}
                  </ul>
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
              Ready to elevate your next event?
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
              Get a custom proposal tailored to your event goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium hover:opacity-90 transition-opacity"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "16px" }}
              >
                Get a proposal
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
              <a
                href="mailto:corporate@selfy.co.uk"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "16px" }}
              >
                corporate@selfy.co.uk
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
