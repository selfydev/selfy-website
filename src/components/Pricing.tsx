"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

// Animated price counter hook
function useAnimatedPrice(targetPrice: number, duration: number = 500) {
  const [displayPrice, setDisplayPrice] = useState(targetPrice);
  const animationRef = useRef<number | null>(null);
  const startPriceRef = useRef(targetPrice);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    startPriceRef.current = displayPrice;
    startTimeRef.current = null;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentPrice = Math.round(
        startPriceRef.current + (targetPrice - startPriceRef.current) * easeOut
      );

      setDisplayPrice(currentPrice);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [targetPrice, duration]);

  return displayPrice;
}

// Component to display animated price
function AnimatedPrice({
  price,
  highlighted
}: {
  price: number;
  highlighted?: boolean;
}) {
  const displayPrice = useAnimatedPrice(price, 600);

  return (
    <span
      style={{
        fontFamily: "var(--font-helvetica-now)",
        fontSize: "48px",
        fontWeight: 600,
        color: highlighted ? "#FFFFFF" : "#1D1D1D",
      }}
    >
      £{displayPrice}
    </span>
  );
}

interface SimpleTier {
  name: string;
  description: string;
  price: number;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const eventTiers: SimpleTier[] = [
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

const corporateTiers: SimpleTier[] = [
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

export default function Pricing() {
  const [isCorporate, setIsCorporate] = useState(false);
  const tiers = isCorporate ? corporateTiers : eventTiers;

  return (
    <section id="pricing" className="relative w-full min-h-screen bg-[#F5F5F5] py-24 px-6 lg:px-24">
      {/* Header */}
      <Reveal className="text-center mb-16">
        <h2
          className="reveal-item"
          style={{
            fontFamily: "var(--font-helvetica-now)",
            fontSize: "72px",
            fontWeight: 500,
            color: "#1D1D1D",
            lineHeight: 1.1,
            "--reveal-index": 0,
          } as React.CSSProperties}
        >
          Simple pricing
        </h2>
        <p
          className="mt-4 max-w-xl mx-auto reveal-item"
          style={{
            fontFamily: "var(--font-helvetica-now)",
            fontSize: "20px",
            fontWeight: 400,
            color: "#888888",
            lineHeight: 1.5,
            "--reveal-index": 1,
          } as React.CSSProperties}
        >
          Transparent pricing for every occasion. No hidden fees.
        </p>

        {/* Toggle */}
        <div
          className="mt-10 flex items-center justify-center gap-4 reveal-item"
          style={{ "--reveal-index": 2 } as React.CSSProperties}
        >
          <span
            style={{
              fontFamily: "var(--font-helvetica-now)",
              fontSize: "16px",
              fontWeight: 500,
              color: !isCorporate ? "#1D1D1D" : "#888888",
              transition: "color 0.3s ease",
            }}
          >
            Events
          </span>
          <button
            onClick={() => setIsCorporate(!isCorporate)}
            aria-label="Toggle between events and corporate pricing"
            aria-pressed={isCorporate}
            className="relative w-16 h-8 rounded-full press-scale"
            style={{
              backgroundColor: isCorporate ? "#1D1D1D" : "rgba(29, 29, 29, 0.2)",
            }}
          >
            <div
              className="absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300"
              style={{
                transform: isCorporate ? "translateX(34px)" : "translateX(4px)",
              }}
            />
          </button>
          <span
            style={{
              fontFamily: "var(--font-helvetica-now)",
              fontSize: "16px",
              fontWeight: 500,
              color: isCorporate ? "#1D1D1D" : "#888888",
              transition: "color 0.3s ease",
            }}
          >
            Corporate
          </span>
        </div>
      </Reveal>

      {/* Pricing Cards */}
      <Reveal
        className={`max-w-6xl mx-auto grid grid-cols-1 gap-6 transition-[grid-template-columns,max-width] duration-500 ${
          isCorporate ? "md:grid-cols-2 md:max-w-4xl" : "md:grid-cols-3"
        }`}
      >
        {tiers.map((tier, index) => {
          return (
            <div
              key={tier.name}
              className="relative rounded-2xl p-8 reveal-item"
              style={{
                backgroundColor: tier.highlighted ? "#1D1D1D" : "#FFFFFF",
                scale: tier.highlighted ? "1.02" : "1",
                "--reveal-index": Math.min(index, 5),
              } as React.CSSProperties}
            >
              {/* Popular badge */}
              {tier.highlighted && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium"
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    backgroundColor: "#FFFFFF",
                    color: "#1D1D1D",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Tier name */}
              <h3
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "24px",
                  fontWeight: 500,
                  color: tier.highlighted ? "#FFFFFF" : "#1D1D1D",
                  marginBottom: "8px",
                }}
              >
                {tier.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: tier.highlighted
                    ? "rgba(255, 255, 255, 0.6)"
                    : "#888888",
                  marginBottom: "24px",
                }}
              >
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <AnimatedPrice price={tier.price} highlighted={tier.highlighted} />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: tier.highlighted
                      ? "rgba(255, 255, 255, 0.6)"
                      : "#888888",
                  }}
                >
                  per event
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <path
                        d="M16.667 5L7.5 14.167 3.333 10"
                        stroke={tier.highlighted ? "#FFFFFF" : "#1D1D1D"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: tier.highlighted
                          ? "rgba(255, 255, 255, 0.8)"
                          : "#1D1D1D",
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="block w-full py-4 rounded-full text-sm font-medium text-center press-scale hover:opacity-80"
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  backgroundColor: tier.highlighted ? "#FFFFFF" : "#1D1D1D",
                  color: tier.highlighted ? "#1D1D1D" : "#FFFFFF",
                }}
              >
                {tier.cta}
              </Link>
            </div>
          );
        })}
      </Reveal>

      {/* Bottom note */}
      <Reveal>
      <p
        className="text-center mt-12 reveal-item"
        style={{
          fontFamily: "var(--font-helvetica-now)",
          fontSize: "14px",
          fontWeight: 400,
          color: "#888888",
        }}
      >
        All packages include setup, breakdown, and travel within Greater London.
        <br />
        Need something custom?{" "}
        <Link
          href="/contact"
          className="underline hover:opacity-70 transition-opacity"
          style={{ color: "#1D1D1D" }}
        >
          Get in touch
        </Link>
      </p>
      </Reveal>
    </section>
  );
}
