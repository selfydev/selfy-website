"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function BrandActivationsPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { value: "10M+", label: "Impressions generated" },
    { value: "85%", label: "Average share rate" },
    { value: "3x", label: "Higher engagement" },
    { value: "250+", label: "Campaigns delivered" },
  ];

  const brands = [
    "Nike", "Spotify", "Red Bull", "Samsung", "Coca-Cola", "L'Oréal", "Heineken", "BMW"
  ];

  const capabilities = [
    {
      title: "Complete Brand Integration",
      description: "Full white-label experience with custom booth wraps, branded UI, overlay templates, and photo outputs.",
    },
    {
      title: "Data Capture & Leads",
      description: "Seamlessly collect valuable customer data through integrated forms, surveys, and opt-ins.",
    },
    {
      title: "Social Amplification",
      description: "Turn guests into brand advocates with instant sharing, branded hashtags, and tracked mentions.",
    },
    {
      title: "AR & Custom Filters",
      description: "Create immersive augmented reality experiences with branded filters and interactive effects.",
    },
    {
      title: "Real-Time Analytics",
      description: "Monitor campaign performance with live dashboards showing engagement, reach, and demographics.",
    },
    {
      title: "Multi-Location Deployment",
      description: "Scale your activation across multiple venues with centralised management and consistent branding.",
    },
  ];

  const caseStudies = [
    {
      brand: "Nike",
      campaign: "Air Max Day 2024",
      results: ["2.5M social impressions", "45K photos taken", "92% share rate"],
    },
    {
      brand: "Spotify",
      campaign: "Wrapped Experience",
      results: ["1.8M impressions", "38K emails captured", "4.2x engagement lift"],
    },
    {
      brand: "Samsung",
      campaign: "Galaxy Launch Tour",
      results: ["3.1M reach", "62K photos created", "28K leads generated"],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into your brand, objectives, and target audience to understand what success looks like.",
    },
    {
      step: "02",
      title: "Concept",
      description: "Our creative team develops bespoke experience concepts that align with your campaign goals.",
    },
    {
      step: "03",
      title: "Build",
      description: "We design and produce all creative assets, custom software, AR filters, and booth elements.",
    },
    {
      step: "04",
      title: "Deploy",
      description: "Our team handles logistics, setup, and staffing across all activation locations.",
    },
    {
      step: "05",
      title: "Analyse",
      description: "Post-campaign reporting with detailed analytics, insights, and recommendations.",
    },
  ];

  const faqs = [
    {
      q: "What's included in a brand activation package?",
      a: "Our packages typically include creative concept development, all custom design work, hardware and software, on-site support, and post-event analytics. We tailor every package to your specific campaign objectives.",
    },
    {
      q: "How far in advance should we book?",
      a: "For standard activations, we recommend 4-6 weeks lead time. For complex campaigns involving custom AR development or multi-location deployment, 8-12 weeks is ideal.",
    },
    {
      q: "Can you integrate with our existing CRM?",
      a: "Yes, we integrate with all major CRM and marketing automation platforms including Salesforce, HubSpot, Mailchimp, and more. Data can be synced in real-time or batch exported.",
    },
    {
      q: "What kind of data can you capture?",
      a: "We can capture email addresses, phone numbers, social handles, custom survey responses, opt-in preferences, and demographic information. All data collection is fully GDPR compliant.",
    },
    {
      q: "Do you handle staffing for activations?",
      a: "Yes, we provide fully trained brand ambassadors who can represent your brand professionally and ensure smooth operations. Staff are briefed on your brand guidelines.",
    },
    {
      q: "What analytics do you provide?",
      a: "Our real-time dashboard tracks photos taken, shares, impressions, engagement rates, peak times, and demographic breakdowns. Post-campaign, you receive a comprehensive report.",
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
              Brand Activations
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
              Turn moments into
              <br />
              movements.
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
              Create immersive, shareable brand experiences that generate organic reach, capture valuable data, and leave lasting impressions.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium hover:opacity-90 transition-opacity"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "16px" }}
              >
                Start a project
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

        {/* Trusted By */}
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
              Trusted by leading brands
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {brands.map((brand, index) => (
                <span
                  key={index}
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#CCCCCC",
                  }}
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
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
                Capabilities
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
                Everything for a world-class activation
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white rounded-2xl p-8">
                  <h3
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      marginBottom: "12px",
                    }}
                  >
                    {capability.title}
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
                    {capability.description}
                  </p>
                </div>
              ))}
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
                    {study.brand}
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
                    {study.campaign}
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

        {/* Process */}
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
                Our Process
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
                From brief to brilliant
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {process.map((step, index) => (
                <div key={index} className="bg-[#F5F5F5] rounded-2xl p-6">
                  <span
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "48px",
                      fontWeight: 500,
                      color: "#E5E5E5",
                      lineHeight: 1,
                    }}
                  >
                    {step.step}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      marginTop: "16px",
                      marginBottom: "8px",
                    }}
                  >
                    {step.title}
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
                    {step.description}
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
              Ready to create something remarkable?
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
              Let's discuss your next brand activation and design an experience that drives results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium hover:opacity-90 transition-opacity"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "16px" }}
              >
                Start a project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
              <a
                href="mailto:activations@selfy.co.uk"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "16px" }}
              >
                activations@selfy.co.uk
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
