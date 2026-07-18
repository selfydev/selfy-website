import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works — From Booking to Gallery",
  description:
    "See how Selfy works, from booking your date and designing a custom experience to event-day setup, instant photo sharing, and your private online gallery.",
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How It Works — From Booking to Gallery",
    description:
      "See how Selfy works, from booking your date and designing a custom experience to event-day setup, instant photo sharing, and your private online gallery.",
  },
};

interface Step {
  number: string;
  label: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
}

const steps: Step[] = [
  {
    number: "01",
    label: "Book your date",
    title: "Tell us about your event.",
    description:
      "Share your date, venue, and vision — we'll check availability and send you a personalised quote. We recommend booking 2-3 months ahead for private events and 4-6 months for weddings in peak season, though we can sometimes accommodate last-minute bookings.",
    points: [
      "Personalised quote for your event",
      "Custom packages for multi-day events and brand activations",
      "Date changes available, subject to availability",
    ],
    image: "/images/features/open-air-design.JPG",
    imageAlt: "Selfy open-air photo booth set up at an event",
  },
  {
    number: "02",
    label: "We design your experience",
    title: "Made to match your event.",
    description:
      "Work with our design team to customise the photo overlay, start screen, and print layout with your event details, branding, or wedding design. For corporate and brand activation clients, we offer complete white-label experiences including booth wraps, custom UI, and branded overlays.",
    points: [
      "Custom photo templates and overlays",
      "Branded start screens and print layouts",
      "Curated props included with every booking",
    ],
    image: "/images/features/custom-branding.JPG",
    imageAlt: "Custom branded photo booth overlay design",
  },
  {
    number: "03",
    label: "Event day magic",
    title: "We handle everything on the day.",
    description:
      "Your professional attendant sets up the booth, assists guests throughout the event, and ensures everything runs smoothly. Guests simply step in front of the booth — the experience guides them through taking photos, with studio-quality results and flattering light, day or night.",
    points: [
      "Setup and breakdown included",
      "On-site attendant at every event",
      "Unlimited photos during your booking period",
    ],
    image: "/images/story/capture.JPG",
    imageAlt: "Guests capturing candid moments in the Selfy booth",
  },
  {
    number: "04",
    label: "Instant sharing & gallery",
    title: "Photos delivered instantly.",
    description:
      "Guests share photos instantly via email, SMS, or straight to social media — delivered in seconds via QR. Every photo is also uploaded to a private online gallery you can access and share, with everything saved safely in the cloud.",
    points: [
      "Instant sharing via QR, email, and SMS",
      "Private online gallery you can access and share",
      "Secure cloud storage for every photo",
    ],
    image: "/images/features/photo-sharing.JPG",
    imageAlt: "Instant photo sharing from the Selfy booth",
  },
];

const included = [
  {
    title: "Setup & breakdown",
    detail: "We arrive, set up, and pack down — ready in minutes.",
  },
  {
    title: "On-site attendant",
    detail: "A professional attendant at every single event.",
  },
  {
    title: "Unlimited photos",
    detail: "No limits during your booking period.",
  },
  {
    title: "Digital gallery access",
    detail: "A private online gallery to access and share.",
  },
  {
    title: "Curated props",
    detail: "A curated selection of props with every booking.",
  },
  {
    title: "Travel within Greater London",
    detail: "Included with all packages as standard.",
  },
];

export default function HowItWorksPage() {
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
              } as CSSProperties}
            >
              How It Works
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
              } as CSSProperties}
            >
              From booking
              <br />
              to gallery.
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
              } as CSSProperties}
            >
              Four simple steps from your first enquiry to a gallery full of
              memories. We handle everything — you just enjoy the moments.
            </p>
            <div
              className="reveal-item flex flex-wrap gap-4 mt-10"
              style={{ "--reveal-index": 3 } as CSSProperties}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium hover:opacity-90 press-scale"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "16px" }}
              >
                Check availability
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
              <a
                href="#steps"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 press-scale"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "16px" }}
              >
                See the journey
              </a>
            </div>
          </Reveal>
        </section>

        {/* Numbered 4-step journey */}
        <section id="steps" className="px-6 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <Reveal className="max-w-2xl mb-20">
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
                } as CSSProperties}
              >
                The Journey
              </p>
              <h2
                className="reveal-item"
                style={{
                  "--reveal-index": 1,
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 500,
                  color: "#1D1D1D",
                  letterSpacing: "-1px",
                  lineHeight: 1.1,
                } as CSSProperties}
              >
                Four simple steps
              </h2>
            </Reveal>

            <div className="space-y-16 lg:space-y-24">
              {steps.map((step, index) => (
                <Reveal
                  key={step.number}
                  className={`flex flex-col gap-8 lg:gap-16 lg:items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* Image */}
                  <div
                    className="reveal-item w-full lg:w-1/2"
                    style={{ "--reveal-index": 0 } as CSSProperties}
                  >
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden img-outline bg-[#E5E5E5]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={step.image}
                        alt={step.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Copy */}
                  <div className="w-full lg:w-1/2">
                    <p
                      className="reveal-item"
                      style={{
                        "--reveal-index": 1,
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "clamp(48px, 6vw, 64px)",
                        fontWeight: 500,
                        color: "#E5E5E5",
                        lineHeight: 1,
                        marginBottom: "16px",
                      } as CSSProperties}
                    >
                      {step.number}
                    </p>
                    <p
                      className="reveal-item"
                      style={{
                        "--reveal-index": 2,
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#888888",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        marginBottom: "12px",
                      } as CSSProperties}
                    >
                      {step.label}
                    </p>
                    <h3
                      className="reveal-item"
                      style={{
                        "--reveal-index": 3,
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "clamp(28px, 4vw, 40px)",
                        fontWeight: 500,
                        color: "#1D1D1D",
                        letterSpacing: "-1px",
                        lineHeight: 1.15,
                        marginBottom: "16px",
                      } as CSSProperties}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="reveal-item"
                      style={{
                        "--reveal-index": 4,
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#888888",
                        lineHeight: 1.7,
                        marginBottom: "24px",
                      } as CSSProperties}
                    >
                      {step.description}
                    </p>
                    <ul
                      className="reveal-item space-y-3"
                      style={{ "--reveal-index": 5 } as CSSProperties}
                    >
                      {step.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
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
                              fontSize: "15px",
                              fontWeight: 400,
                              color: "#666666",
                              lineHeight: 1.6,
                            }}
                          >
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Included in every booking */}
        <section className="px-6 lg:px-24 py-24 bg-white">
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
                } as CSSProperties}
              >
                Always Included
              </p>
              <h2
                className="reveal-item"
                style={{
                  "--reveal-index": 1,
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 500,
                  color: "#1D1D1D",
                  letterSpacing: "-1px",
                  lineHeight: 1.1,
                } as CSSProperties}
              >
                In every booking
              </h2>
            </Reveal>

            <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {included.map((item, index) => (
                <div
                  key={item.title}
                  className="reveal-item p-8 rounded-2xl bg-[#F5F5F5]"
                  style={{ "--reveal-index": Math.min(index, 5) } as CSSProperties}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "#1D1D1D",
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
                    {item.detail}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Closing CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
