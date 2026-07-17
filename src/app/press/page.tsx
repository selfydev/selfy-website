import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Press & Media Resources",
  description:
    "Press and media resources for Selfy, the premium open-air photo booth rental company. Find company information, contacts and coverage in one place.",
  alternates: {
    canonical: "/press",
  },
  openGraph: {
    title: "Press & Media Resources",
    description:
      "Press and media resources for Selfy, the premium open-air photo booth rental company. Find company information, contacts and coverage in one place.",
  },
};

export default function PressPage() {
  const stats = [
    { value: "500+", label: "Events delivered", detail: "Weddings, brand activations, and corporate events across the UK" },
    { value: "2M+", label: "Photos captured", detail: "Shared instantly through our digital galleries" },
    { value: "98%", label: "Client satisfaction", detail: "Based on post-event client feedback" },
    { value: "50+", label: "UK cities", detail: "Nationwide coverage from our London hub" },
  ];

  const storyAngles = [
    { name: "Founder interviews", detail: "Available on request" },
    { name: "Product imagery", detail: "High-res photography" },
    { name: "Event data & trends", detail: "Insights from 500+ events" },
    { name: "On-location filming", detail: "By arrangement" },
  ];

  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5]">
        {/* Hero Section */}
        <section className="relative w-full min-h-[50vh] flex items-center bg-[#1D1D1D] px-6 lg:px-24 pt-32 pb-20">
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
                Press Kit
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
                Press & Media
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
                Download our press kit, explore brand assets, or get in touch with our team. Press enquiries welcome.
              </p>
              <a
                href="#"
                className="reveal-item inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium press-scale hover:bg-white/90"
                style={{ "--reveal-index": 3, fontFamily: "var(--font-helvetica-now)", fontSize: "15px" } as React.CSSProperties}
              >
                Download Press Kit
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
            </Reveal>
          </div>
        </section>

        {/* Selfy at a glance */}
        <section className="px-6 lg:px-24 py-24">
          <Reveal className="max-w-7xl mx-auto">
            <h2
              className="reveal-item mb-12"
              style={{
                "--reveal-index": 0,
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "48px",
                fontWeight: 500,
                color: "#1D1D1D",
                letterSpacing: "-1px",
              } as React.CSSProperties}
            >
              Selfy at a glance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="reveal-item p-8 rounded-2xl bg-white"
                  style={{ "--reveal-index": Math.min(index + 1, 5) } as React.CSSProperties}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "48px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      lineHeight: 1,
                      marginBottom: "8px",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      marginBottom: "8px",
                    }}
                  >
                    {stat.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#888888",
                      lineHeight: 1.6,
                    }}
                  >
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* For journalists */}
        <section className="px-6 lg:px-24 py-24 bg-white">
          <Reveal className="max-w-7xl mx-auto">
            <h2
              className="reveal-item mb-6"
              style={{
                "--reveal-index": 0,
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "48px",
                fontWeight: 500,
                color: "#1D1D1D",
                letterSpacing: "-1px",
              } as React.CSSProperties}
            >
              Press enquiries welcome
            </h2>
            <p
              className="reveal-item max-w-xl mb-12"
              style={{
                "--reveal-index": 1,
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "18px",
                fontWeight: 400,
                color: "#666666",
                lineHeight: 1.6,
              } as React.CSSProperties}
            >
              Writing about events, weddings, or experiential marketing? We&apos;re happy to help with:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {storyAngles.map((item, index) => (
                <div
                  key={index}
                  className="reveal-item p-6 rounded-2xl bg-[#F5F5F5] text-center"
                  style={{ "--reveal-index": Math.min(index + 2, 5) } as React.CSSProperties}
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
                    {item.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#888888",
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Brand Assets */}
        <section className="px-6 lg:px-24 py-24">
          <Reveal className="max-w-7xl mx-auto">
            <h2
              className="reveal-item mb-6"
              style={{
                "--reveal-index": 0,
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "48px",
                fontWeight: 500,
                color: "#1D1D1D",
                letterSpacing: "-1px",
              } as React.CSSProperties}
            >
              Brand Assets
            </h2>
            <p
              className="reveal-item max-w-xl mb-12"
              style={{
                "--reveal-index": 1,
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "18px",
                fontWeight: 400,
                color: "#666666",
                lineHeight: 1.6,
              } as React.CSSProperties}
            >
              Download our logo, product images, and brand guidelines for press and media use.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="#"
                className="reveal-item p-6 rounded-2xl bg-white hover:bg-[#1D1D1D] group transition-colors duration-300"
                style={{ "--reveal-index": 2 } as React.CSSProperties}
              >
                <h3
                  className="group-hover:text-white transition-colors"
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#1D1D1D",
                    marginBottom: "8px",
                  }}
                >
                  Logo Package
                </h3>
                <p
                  className="group-hover:text-white/60 transition-colors"
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#888888",
                  }}
                >
                  SVG, PNG, EPS formats
                </p>
              </a>
              <a
                href="#"
                className="reveal-item p-6 rounded-2xl bg-white hover:bg-[#1D1D1D] group transition-colors duration-300"
                style={{ "--reveal-index": 3 } as React.CSSProperties}
              >
                <h3
                  className="group-hover:text-white transition-colors"
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#1D1D1D",
                    marginBottom: "8px",
                  }}
                >
                  Product Photos
                </h3>
                <p
                  className="group-hover:text-white/60 transition-colors"
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#888888",
                  }}
                >
                  High-res booth images
                </p>
              </a>
              <a
                href="#"
                className="reveal-item p-6 rounded-2xl bg-white hover:bg-[#1D1D1D] group transition-colors duration-300"
                style={{ "--reveal-index": 4 } as React.CSSProperties}
              >
                <h3
                  className="group-hover:text-white transition-colors"
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#1D1D1D",
                    marginBottom: "8px",
                  }}
                >
                  Brand Guidelines
                </h3>
                <p
                  className="group-hover:text-white/60 transition-colors"
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#888888",
                  }}
                >
                  PDF brand book
                </p>
              </a>
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section className="px-6 lg:px-24 py-24 bg-[#1D1D1D]">
          <Reveal className="max-w-7xl mx-auto text-center">
            <h2
              className="reveal-item"
              style={{
                "--reveal-index": 0,
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: "24px",
              } as React.CSSProperties}
            >
              Media enquiries
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
              For press enquiries, interviews, or additional information, please contact our PR team.
            </p>
            <a
              href="mailto:hello@selfy.photo"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium press-scale hover:bg-white/90"
              style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
            >
              hello@selfy.photo
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
