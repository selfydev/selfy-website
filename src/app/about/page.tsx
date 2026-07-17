import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us — The Team Behind the Booth",
  description:
    "Meet the team behind Selfy, the London-based company bringing premium open-air photo booths to weddings, parties and corporate events across the UK.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us — The Team Behind the Booth",
    description:
      "Meet the team behind Selfy, the London-based company bringing premium open-air photo booths to weddings, parties and corporate events across the UK.",
  },
};

export default function AboutPage() {
  const stats = [
    { value: "500+", label: "Events completed" },
    { value: "2M+", label: "Photos captured" },
    { value: "98%", label: "Client satisfaction" },
    { value: "25", label: "Team members" },
  ];

  const values = [
    {
      title: "Quality First",
      description: "We obsess over every detail, from the premium hardware we use to the intuitive software we build. Good enough is never enough.",
    },
    {
      title: "Human Connection",
      description: "Technology should enhance genuine moments, not replace them. We design experiences that bring people together and spark real joy.",
    },
    {
      title: "Continuous Innovation",
      description: "The events industry evolves fast, and so do we. We're always pushing boundaries, testing new ideas, and improving our craft.",
    },
    {
      title: "Client Partnership",
      description: "Your success is our success. We don't just show up and leave — we're invested in making every event exceptional.",
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Founded in a small London flat with one booth, a laptop, and an ambitious vision to reinvent photo experiences.",
    },
    {
      year: "2019",
      title: "Finding Product-Market Fit",
      description: "Expanded to 10 booths and landed our first corporate client. The word spread, and demand exploded.",
    },
    {
      year: "2020",
      title: "Going Digital",
      description: "Launched our digital gallery and contactless sharing features. Turned a challenging year into an opportunity to innovate.",
    },
    {
      year: "2021",
      title: "Scaling Up",
      description: "Hit our 100 events milestone. Team grew to 15 passionate individuals who shared our vision.",
    },
    {
      year: "2022",
      title: "International Expansion",
      description: "Opened our Dubai office to serve the Middle East market. Brands started taking notice.",
    },
    {
      year: "2023",
      title: "New Frontiers",
      description: "Launched our dedicated brand activation division and enterprise analytics platform.",
    },
    {
      year: "2024",
      title: "Where We Are Today",
      description: "500+ events completed with 98% client satisfaction. And we're just getting started.",
    },
  ];

  const recognition = [
    { name: "Design-first product", detail: "Booths designed and finished in-house" },
    { name: "UK-wide coverage", detail: "Events delivered across the country" },
    { name: "500+ events delivered", detail: "Weddings, brands, and corporate" },
    { name: "98% client satisfaction", detail: "Based on post-event feedback" },
  ];

  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5]">
        {/* Hero Section */}
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
              About Selfy
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
              We believe in the
              <br />
              power of moments.
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
              Selfy was born from a simple idea: that the best photos aren&apos;t posed —
              they&apos;re the candid moments of genuine joy, connection, and celebration.
            </p>
            <div
              className="reveal-item flex flex-wrap gap-4 mt-10"
              style={{ "--reveal-index": 3 } as React.CSSProperties}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium press-scale hover:opacity-90"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
              >
                Work with us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium press-scale hover:bg-white/5"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
              >
                Join the team
              </Link>
            </div>
          </Reveal>
        </section>

        {/* Stats */}
        <section className="px-6 lg:px-24 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="reveal-item text-center"
                  style={{ "--reveal-index": Math.min(index, 5) } as React.CSSProperties}
                >
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
            </Reveal>
          </div>
        </section>

        {/* Mission */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <Reveal className="max-w-3xl">
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
                Our Mission
              </p>
              <h2
                className="reveal-item"
                style={{
                  "--reveal-index": 1,
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "clamp(32px, 5vw, 48px)",
                  fontWeight: 500,
                  color: "#1D1D1D",
                  letterSpacing: "-1px",
                  lineHeight: 1.2,
                  marginBottom: "24px",
                } as React.CSSProperties}
              >
                To transform how people capture and share moments at events.
              </h2>
              <p
                className="reveal-item"
                style={{
                  "--reveal-index": 2,
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "#888888",
                  lineHeight: 1.7,
                } as React.CSSProperties}
              >
                Through beautifully designed technology and exceptional service, we create
                experiences that bring people together and memories that last a lifetime.
                Every event is an opportunity to make someone smile — and that&apos;s what
                drives us every day.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Values */}
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
                } as React.CSSProperties}
              >
                Our Values
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
                What we stand for
              </h2>
            </Reveal>

            <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="reveal-item p-8 rounded-2xl bg-[#F5F5F5]"
                  style={{ "--reveal-index": Math.min(index, 5) } as React.CSSProperties}
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
                    {value.title}
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
                    {value.description}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Timeline */}
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
                } as React.CSSProperties}
              >
                Our Journey
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
                How we got here
              </h2>
            </Reveal>

            <Reveal className="space-y-6">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="reveal-item flex gap-6 md:gap-10"
                  style={{ "--reveal-index": Math.min(index, 5) } as React.CSSProperties}
                >
                  <div className="shrink-0 w-16">
                    <span
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#888888",
                      }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1 p-6 rounded-2xl bg-[#F5F5F5]">
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
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Recognition */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <Reveal className="text-center mb-16">
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
                Recognition
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
                } as React.CSSProperties}
              >
                What sets us apart
              </h2>
            </Reveal>

            <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recognition.map((award, index) => (
                <div
                  key={index}
                  className="reveal-item p-6 rounded-2xl bg-white text-center"
                  style={{ "--reveal-index": Math.min(index, 5) } as React.CSSProperties}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      marginBottom: "4px",
                    }}
                  >
                    {award.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#888888",
                    }}
                  >
                    {award.detail}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Offices */}
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
                } as React.CSSProperties}
              >
                Locations
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
                Our offices
              </h2>
            </Reveal>

            <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="reveal-item p-8 rounded-2xl bg-[#F5F5F5]"
                style={{ "--reveal-index": 0 } as React.CSSProperties}
              >
                <p
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#888888",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  Headquarters
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "24px",
                    fontWeight: 500,
                    color: "#1D1D1D",
                    marginBottom: "8px",
                  }}
                >
                  London, UK
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
                  Our head office in East London, where the magic happens. Home to our
                  creative studio, tech team, and operations hub.
                </p>
                <p
                  className="mt-6"
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#CCCCCC",
                  }}
                >
                  20-22 Wenlock Road, London N1 7GU
                </p>
              </div>

              <div
                className="reveal-item p-8 rounded-2xl bg-[#F5F5F5]"
                style={{ "--reveal-index": 1 } as React.CSSProperties}
              >
                <p
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#888888",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  Regional Office
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "24px",
                    fontWeight: 500,
                    color: "#1D1D1D",
                    marginBottom: "8px",
                  }}
                >
                  Dubai, UAE
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
                  Our Middle East hub, serving clients across the GCC region. Bringing
                  premium photo experiences to the region&apos;s most prestigious events.
                </p>
                <p
                  className="mt-6"
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#CCCCCC",
                  }}
                >
                  Business Bay, Dubai
                </p>
              </div>
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
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-1px",
                marginBottom: "16px",
              } as React.CSSProperties}
            >
              Want to be part of the story?
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
              We&apos;re always looking for talented, passionate people to join our team.
              If you believe in creating unforgettable moments, we want to hear from you.
            </p>
            <div
              className="reveal-item flex flex-wrap justify-center gap-4"
              style={{ "--reveal-index": 2 } as React.CSSProperties}
            >
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium press-scale hover:opacity-90"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
              >
                View open positions
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium press-scale hover:bg-white/5"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
