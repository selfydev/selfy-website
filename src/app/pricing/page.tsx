"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

// Tier data mirrors src/components/Pricing.tsx (homepage) verbatim — do not diverge.
interface PricingTier {
  name: string;
  description: string;
  price: number;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const eventTiers: PricingTier[] = [
  {
    name: "Essential",
    description: "Perfect for intimate gatherings",
    price: 495,
    features: [
      "3 hours of booth time",
      "Unlimited photos",
      "Digital gallery",
      "Custom start screen",
      "On-site attendant",
      "Basic props included",
    ],
    cta: "Get started",
  },
  {
    name: "Premium",
    description: "Our most popular package",
    price: 795,
    features: [
      "5 hours of booth time",
      "Unlimited photos & GIFs",
      "Digital gallery + prints",
      "Full brand customisation",
      "On-site attendant",
      "Premium props collection",
      "Social sharing integration",
      "Real-time analytics",
    ],
    highlighted: true,
    cta: "Get started",
  },
  {
    name: "All Day",
    description: "For large celebrations",
    price: 1295,
    features: [
      "Full day coverage",
      "Unlimited photos, GIFs & video",
      "Digital gallery + prints",
      "Complete customisation",
      "Dedicated attendant",
      "Premium props collection",
      "Social sharing integration",
      "Priority support",
    ],
    cta: "Get started",
  },
];

const corporateTiers: PricingTier[] = [
  {
    name: "Brand Activation",
    description: "Perfect for product launches & activations",
    price: 1495,
    features: [
      "Full day coverage",
      "Complete brand integration",
      "Custom overlays & frames",
      "Lead capture & data collection",
      "Real-time analytics dashboard",
      "Social sharing integration",
      "Dedicated account manager",
      "Post-event reporting",
    ],
    cta: "Get a quote",
  },
  {
    name: "Enterprise",
    description: "For large-scale corporate events",
    price: 2495,
    features: [
      "Multi-day or multi-booth options",
      "Full white-label experience",
      "Custom software integrations",
      "Advanced lead capture & CRM sync",
      "Comprehensive analytics suite",
      "Dedicated event manager",
      "Priority 24/7 support",
      "Custom props & branded items",
      "Post-event strategy review",
    ],
    highlighted: true,
    cta: "Contact us",
  },
];

// Comparison rows derived strictly from the event tier feature lists above.
// Values: string = shown as text, true = checkmark, false = em dash.
interface ComparisonRow {
  label: string;
  values: [string | boolean, string | boolean, string | boolean];
}

const eventComparison: ComparisonRow[] = [
  { label: "Booth time", values: ["3 hours", "5 hours", "Full day"] },
  {
    label: "Photo capture",
    values: ["Unlimited photos", "Unlimited photos & GIFs", "Unlimited photos, GIFs & video"],
  },
  { label: "Digital gallery", values: [true, true, true] },
  { label: "Prints", values: [false, true, true] },
  {
    label: "Customisation",
    values: ["Custom start screen", "Full brand customisation", "Complete customisation"],
  },
  {
    label: "Attendant",
    values: ["On-site attendant", "On-site attendant", "Dedicated attendant"],
  },
  {
    label: "Props",
    values: ["Basic props included", "Premium props collection", "Premium props collection"],
  },
  { label: "Social sharing integration", values: [false, true, true] },
  { label: "Real-time analytics", values: [false, true, false] },
  { label: "Priority support", values: [false, false, true] },
];

// Add-ons only reference offerings already stated elsewhere on the site
// (FAQ page, services pages, terms). No prices are published for these.
const addOns = [
  {
    name: "Premium & custom props",
    description:
      "A curated selection of props is included with every booking. Premium prop packages are available, or we can source custom props for your theme.",
  },
  {
    name: "Guest books",
    description:
      "Guest book prints and albums for weddings and parties, including a leather guest book with All Day wedding bookings.",
  },
  {
    name: "Colour filters & digital face masks",
    description:
      "Digital effects such as colour filters and face masks can be prepared for your event — these must be requested in advance.",
  },
  {
    name: "Custom print sizes & formats",
    description:
      "Standard 4x6 prints, photo strips, and digital downloads come as standard. Custom sizes and formats are available for corporate and brand activation bookings.",
  },
  {
    name: "Booth wraps & white-label branding",
    description:
      "For corporate and brand activation clients, we offer complete white-label experiences including booth wraps, custom UI, and branded overlays.",
  },
  {
    name: "Custom packages",
    description:
      "Multi-day events, brand activations, or specific requirements — we can create a custom package built around your event.",
  },
];

// Adapted verbatim from the FAQ page (src/app/faq/faq-data.ts).
const pricingFaqs = [
  {
    q: "What's included in the price?",
    a: "All packages include setup and breakdown, an on-site attendant, unlimited photos during your booking period, digital gallery access, and travel within Greater London. Additional features vary by package.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking 2-3 months in advance for private events and 4-6 months for weddings during peak season. However, we can sometimes accommodate last-minute bookings depending on availability.",
  },
  {
    q: "Do you offer custom packages?",
    a: "Absolutely. We can create custom packages for multi-day events, brand activations, or specific requirements. Contact us to discuss your needs.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We offer full refunds for cancellations made more than 30 days before the event. Cancellations within 30 days may be subject to a fee. We also offer date changes subject to availability.",
  },
  {
    q: "Do you provide an attendant?",
    a: "Yes, every booking includes a professional attendant who sets up the booth, assists guests throughout the event, and ensures everything runs smoothly.",
  },
  {
    q: "What photo formats do you offer?",
    a: "We offer standard 4x6 prints, photo strips, and digital downloads. Custom sizes and formats are available for corporate and brand activation bookings.",
  },
];

const fontBase = { fontFamily: "var(--font-helvetica-now)" };

function CheckIcon({ dark }: { dark?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
      <path
        d="M16.667 5L7.5 14.167 3.333 10"
        stroke={dark ? "#FFFFFF" : "#1D1D1D"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TierCard({ tier, index }: { tier: PricingTier; index: number }) {
  return (
    <div
      className="relative rounded-2xl p-8 lg:p-10 reveal-item"
      style={{
        backgroundColor: tier.highlighted ? "#1D1D1D" : "#FFFFFF",
        scale: tier.highlighted ? "1.02" : "1",
        "--reveal-index": Math.min(index, 5),
      } as React.CSSProperties}
    >
      {tier.highlighted && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium"
          style={{ ...fontBase, backgroundColor: "#FFFFFF", color: "#1D1D1D" }}
        >
          Most Popular
        </div>
      )}

      <h3
        style={{
          ...fontBase,
          fontSize: "24px",
          fontWeight: 500,
          color: tier.highlighted ? "#FFFFFF" : "#1D1D1D",
          marginBottom: "8px",
        }}
      >
        {tier.name}
      </h3>

      <p
        style={{
          ...fontBase,
          fontSize: "14px",
          fontWeight: 400,
          color: tier.highlighted ? "rgba(255, 255, 255, 0.6)" : "#888888",
          marginBottom: "24px",
        }}
      >
        {tier.description}
      </p>

      <div className="mb-8">
        <span
          style={{
            ...fontBase,
            fontSize: "48px",
            fontWeight: 600,
            color: tier.highlighted ? "#FFFFFF" : "#1D1D1D",
          }}
        >
          £{tier.price.toLocaleString("en-GB")}
        </span>
        <p
          style={{
            ...fontBase,
            fontSize: "14px",
            fontWeight: 400,
            color: tier.highlighted ? "rgba(255, 255, 255, 0.6)" : "#888888",
          }}
        >
          per event
        </p>
      </div>

      <ul className="space-y-3 mb-8">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <CheckIcon dark={tier.highlighted} />
            <span
              style={{
                ...fontBase,
                fontSize: "15px",
                fontWeight: 400,
                color: tier.highlighted ? "rgba(255, 255, 255, 0.8)" : "#1D1D1D",
              }}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="block w-full py-4 rounded-full text-sm font-medium text-center press-scale hover:opacity-80"
        style={{
          ...fontBase,
          backgroundColor: tier.highlighted ? "#FFFFFF" : "#1D1D1D",
          color: tier.highlighted ? "#1D1D1D" : "#FFFFFF",
        }}
      >
        {tier.cta}
      </Link>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="max-w-2xl mb-16">
      <p
        className="reveal-item"
        style={{
          "--reveal-index": 0,
          ...fontBase,
          fontSize: "14px",
          fontWeight: 500,
          color: "#888888",
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "16px",
        } as React.CSSProperties}
      >
        {eyebrow}
      </p>
      <h2
        className="reveal-item"
        style={{
          "--reveal-index": 1,
          ...fontBase,
          fontSize: "clamp(36px, 5vw, 48px)",
          fontWeight: 500,
          color: "#1D1D1D",
          letterSpacing: "-1px",
          lineHeight: 1.1,
        } as React.CSSProperties}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="reveal-item mt-4"
          style={{
            "--reveal-index": 2,
            ...fontBase,
            fontSize: "17px",
            fontWeight: 400,
            color: "#888888",
            lineHeight: 1.6,
          } as React.CSSProperties}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export default function PricingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5]">
        {/* Hero */}
        <section className="relative w-full min-h-[50vh] flex items-center bg-[#1D1D1D] px-6 lg:px-24 pt-32 pb-20">
          <div className="max-w-7xl mx-auto w-full">
            <Reveal className="max-w-3xl">
              <p
                className="reveal-item"
                style={{
                  "--reveal-index": 0,
                  ...fontBase,
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgba(255, 255, 255, 0.5)",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                } as React.CSSProperties}
              >
                Pricing
              </p>
              <h1
                className="reveal-item"
                style={{
                  "--reveal-index": 1,
                  ...fontBase,
                  fontSize: "clamp(48px, 8vw, 80px)",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  letterSpacing: "-2px",
                } as React.CSSProperties}
              >
                Simple, transparent
                <br />
                pricing.
              </h1>
              <p
                className="reveal-item mt-6 max-w-xl"
                style={{
                  "--reveal-index": 2,
                  ...fontBase,
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "rgba(255, 255, 255, 0.6)",
                  lineHeight: 1.6,
                } as React.CSSProperties}
              >
                Transparent pricing for every occasion. No hidden fees. All packages
                include setup, breakdown, and travel within Greater London.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Event packages */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="Events"
              title="Event packages"
              subtitle="For weddings, parties, and private celebrations."
            />
            <Reveal className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
              {eventTiers.map((tier, index) => (
                <TierCard key={tier.name} tier={tier} index={index} />
              ))}
            </Reveal>
          </div>
        </section>

        {/* Corporate packages */}
        <section className="px-6 lg:px-24 py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="Corporate"
              title="Corporate packages"
              subtitle="For product launches, brand activations, and large-scale corporate events."
            />
            <Reveal className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
              {corporateTiers.map((tier, index) => (
                <TierCard key={tier.name} tier={tier} index={index} />
              ))}
            </Reveal>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="Compare"
              title="Compare event packages"
              subtitle="Every feature across our three event packages, side by side. Corporate packages are detailed above."
            />
            <Reveal>
              <div
                className="reveal-item rounded-2xl bg-white overflow-x-auto"
                style={{ "--reveal-index": 0 } as React.CSSProperties}
              >
                <table className="w-full min-w-[720px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[#EBEBEB]">
                      <th
                        className="p-6"
                        style={{
                          ...fontBase,
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#888888",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                        }}
                      >
                        Features
                      </th>
                      {eventTiers.map((tier) => (
                        <th key={tier.name} className="p-6 align-bottom">
                          <span
                            className="flex items-center gap-2"
                            style={{
                              ...fontBase,
                              fontSize: "18px",
                              fontWeight: 500,
                              color: "#1D1D1D",
                            }}
                          >
                            {tier.name}
                            {tier.highlighted && (
                              <span
                                className="px-2.5 py-0.5 rounded-full"
                                style={{
                                  ...fontBase,
                                  fontSize: "11px",
                                  fontWeight: 500,
                                  backgroundColor: "#1D1D1D",
                                  color: "#FFFFFF",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Most Popular
                              </span>
                            )}
                          </span>
                          <span
                            className="block mt-1"
                            style={{
                              ...fontBase,
                              fontSize: "14px",
                              fontWeight: 400,
                              color: "#888888",
                            }}
                          >
                            £{tier.price.toLocaleString("en-GB")} per event
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {eventComparison.map((row, rowIndex) => (
                      <tr
                        key={row.label}
                        className={
                          rowIndex < eventComparison.length - 1
                            ? "border-b border-[#F0F0F0]"
                            : ""
                        }
                      >
                        <td
                          className="p-6"
                          style={{
                            ...fontBase,
                            fontSize: "15px",
                            fontWeight: 500,
                            color: "#1D1D1D",
                          }}
                        >
                          {row.label}
                        </td>
                        {row.values.map((value, colIndex) => (
                          <td
                            key={colIndex}
                            className="p-6"
                            style={{
                              ...fontBase,
                              fontSize: "15px",
                              fontWeight: 400,
                              color: "#1D1D1D",
                            }}
                          >
                            {value === true ? (
                              <CheckIcon />
                            ) : value === false ? (
                              <span aria-hidden="true" style={{ color: "#CCCCCC" }}>
                                —
                              </span>
                            ) : (
                              value
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p
                className="reveal-item text-center mt-8"
                style={{
                  "--reveal-index": 1,
                  ...fontBase,
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#888888",
                } as React.CSSProperties}
              >
                All packages include setup, breakdown, and travel within Greater London.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Add-ons */}
        <section className="px-6 lg:px-24 py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="Add-ons"
              title="Make it yours"
              subtitle="Optional extras available on request. Add-ons must be requested in advance so we can prepare them for your event."
            />
            <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOns.map((addOn, index) => (
                <div
                  key={addOn.name}
                  className="reveal-item p-8 rounded-2xl bg-[#F5F5F5]"
                  style={{ "--reveal-index": Math.min(index, 5) } as React.CSSProperties}
                >
                  <h3
                    style={{
                      ...fontBase,
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      marginBottom: "12px",
                    }}
                  >
                    {addOn.name}
                  </h3>
                  <p
                    style={{
                      ...fontBase,
                      fontSize: "15px",
                      fontWeight: 400,
                      color: "#888888",
                      lineHeight: 1.6,
                    }}
                  >
                    {addOn.description}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Pricing FAQ */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="FAQ"
              title="Pricing questions"
              subtitle="The questions we hear most about booking and pricing."
            />
            <Reveal>
              <div className="space-y-4">
                {pricingFaqs.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={item.q}
                      className="reveal-item rounded-2xl bg-white overflow-hidden"
                      style={{ "--reveal-index": Math.min(index, 5) } as React.CSSProperties}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        className="press-scale w-full flex items-center justify-between p-6 text-left"
                      >
                        <span
                          style={{
                            ...fontBase,
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
                            ...fontBase,
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
              <p
                className="reveal-item text-center mt-10"
                style={{
                  "--reveal-index": 5,
                  ...fontBase,
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#888888",
                } as React.CSSProperties}
              >
                More questions?{" "}
                <Link
                  href="/faq"
                  className="underline hover:opacity-70 transition-opacity"
                  style={{ color: "#1D1D1D" }}
                >
                  Read the full FAQ
                </Link>
              </p>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-24 py-24 bg-[#1D1D1D]">
          <Reveal className="max-w-3xl mx-auto text-center">
            <h2
              className="reveal-item"
              style={{
                "--reveal-index": 0,
                ...fontBase,
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-1px",
                marginBottom: "24px",
              } as React.CSSProperties}
            >
              Need something custom?
            </h2>
            <p
              className="reveal-item max-w-xl mx-auto mb-10"
              style={{
                "--reveal-index": 1,
                ...fontBase,
                fontSize: "18px",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.6)",
                lineHeight: 1.6,
              } as React.CSSProperties}
            >
              Tell us about your event and we&apos;ll put together the right package —
              from intimate gatherings to multi-day brand activations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium press-scale hover:bg-white/90"
              style={{ ...fontBase, fontSize: "15px" }}
            >
              Get in touch
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
