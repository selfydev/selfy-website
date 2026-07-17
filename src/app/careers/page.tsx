import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Careers — Join the Selfy Team",
  description:
    "Join the Selfy team. Explore careers with London's premium open-air photo booth company and help create memorable event experiences across the UK.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers — Join the Selfy Team",
    description:
      "Join the Selfy team. Explore careers with London's premium open-air photo booth company and help create memorable event experiences across the UK.",
  },
};

export default function CareersPage() {
  const openings = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "London",
      type: "Full-time",
    },
    {
      title: "Event Operations Manager",
      department: "Operations",
      location: "London",
      type: "Full-time",
    },
    {
      title: "Brand Partnerships Lead",
      department: "Sales",
      location: "London / Dubai",
      type: "Full-time",
    },
    {
      title: "Event Attendant",
      department: "Operations",
      location: "London",
      type: "Part-time / Freelance",
    },
    {
      title: "UX/UI Designer",
      department: "Product",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Dubai",
      type: "Full-time",
    },
  ];

  const benefits = [
    "Competitive salary & equity",
    "Flexible working",
    "Health & dental insurance",
    "Learning & development budget",
    "Team events & socials",
    "Latest equipment",
  ];

  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5]">
        {/* Hero Section */}
        <section className="relative w-full min-h-[70vh] flex items-center bg-[#1D1D1D] px-6 lg:px-24 pt-32 pb-20">
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
                Careers
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
                Help us capture the world&apos;s best moments.
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
                We&apos;re building a team of passionate people who believe in the power of bringing joy to events. Join us.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Benefits Section */}
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
              Why join Selfy?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="reveal-item p-6 rounded-2xl bg-white"
                  style={{ "--reveal-index": Math.min(index + 1, 5) } as React.CSSProperties}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                    }}
                  >
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Openings Section */}
        <section className="px-6 lg:px-24 py-24 bg-white">
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
              Open positions
            </h2>
            <div className="space-y-4">
              {openings.map((job, index) => (
                <Link
                  key={index}
                  href="/contact"
                  className="reveal-item group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-[#F5F5F5] hover:bg-[#1D1D1D] transition-colors duration-300"
                  style={{ "--reveal-index": Math.min(index + 1, 5) } as React.CSSProperties}
                >
                  <div>
                    <h3
                      className="group-hover:text-white transition-colors"
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "20px",
                        fontWeight: 500,
                        color: "#1D1D1D",
                        marginBottom: "4px",
                      }}
                    >
                      {job.title}
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
                      {job.department}
                    </p>
                  </div>
                  <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <span
                      className="group-hover:text-white/60 transition-colors"
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#888888",
                      }}
                    >
                      {job.location}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full group-hover:bg-white/10 group-hover:text-white transition-colors"
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "12px",
                        fontWeight: 500,
                        backgroundColor: "rgba(29, 29, 29, 0.1)",
                        color: "#666666",
                      }}
                    >
                      {job.type}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-black/30 group-hover:text-white transition-colors"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CTA Section */}
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
              Don&apos;t see the right role?
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
              We&apos;re always interested in meeting talented people. Send us your CV and let&apos;s chat.
            </p>
            <a
              href="mailto:hello@selfy.photo"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium press-scale hover:bg-white/90"
              style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
            >
              Get in touch
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
