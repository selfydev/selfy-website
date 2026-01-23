"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

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

  const team = [
    {
      name: "Alex Thompson",
      role: "Founder & CEO",
      bio: "Former event planner turned tech entrepreneur. Alex started Selfy after seeing too many boring photo booths at weddings.",
    },
    {
      name: "Sarah Chen",
      role: "Head of Operations",
      bio: "Logistics wizard who ensures every event runs flawlessly. 6+ years in event management before joining Selfy.",
    },
    {
      name: "Marcus Williams",
      role: "Creative Director",
      bio: "Award-winning designer responsible for our booth aesthetics and brand identity. Obsessed with beautiful details.",
    },
    {
      name: "Priya Patel",
      role: "Head of Technology",
      bio: "Built our real-time gallery and analytics platform. Previously at Google and a string of successful startups.",
    },
    {
      name: "James Morrison",
      role: "Business Development",
      bio: "Connects brands with memorable experiences. Background in agency work and experiential marketing.",
    },
    {
      name: "Emma Rodriguez",
      role: "Customer Success",
      bio: "Makes sure every client is delighted. If you've emailed us, you've probably heard from Emma.",
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
    { name: "Event Industry Award", year: "2023", category: "Best Technology Provider" },
    { name: "UK Business Awards", year: "2023", category: "Rising Star" },
    { name: "Wedding Industry Awards", year: "2024", category: "Best Photo Booth Service" },
    { name: "Experiential Marketing Awards", year: "2024", category: "Innovation in Activation" },
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
              About Selfy
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
              We believe in the
              <br />
              power of moments.
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
              Selfy was born from a simple idea: that the best photos aren't posed —
              they're the candid moments of genuine joy, connection, and celebration.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium hover:opacity-90 transition-opacity"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
              >
                Work with us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
              >
                Join the team
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 lg:px-24 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

        {/* Mission */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
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
                Our Mission
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "clamp(32px, 5vw, 48px)",
                  fontWeight: 500,
                  color: "#1D1D1D",
                  letterSpacing: "-1px",
                  lineHeight: 1.2,
                  marginBottom: "24px",
                }}
              >
                To transform how people capture and share moments at events.
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "#888888",
                  lineHeight: 1.7,
                }}
              >
                Through beautifully designed technology and exceptional service, we create
                experiences that bring people together and memories that last a lifetime.
                Every event is an opportunity to make someone smile — and that's what
                drives us every day.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
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
                Our Values
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
                What we stand for
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-[#F5F5F5]"
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
            </div>
          </div>
        </section>

        {/* Team */}
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
                The Team
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
                The people behind the magic
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-white"
                >
                  {/* Placeholder for team member photo */}
                  <div className="w-16 h-16 rounded-full bg-[#E5E5E5] flex items-center justify-center mb-6">
                    <span
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "#888888",
                      }}
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      marginBottom: "4px",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#888888",
                      marginBottom: "16px",
                    }}
                  >
                    {member.role}
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
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
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
                Our Journey
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
                How we got here
              </h2>
            </div>

            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 md:gap-10">
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
            </div>
          </div>
        </section>

        {/* Recognition */}
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
                Recognition
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
                Award-winning experiences
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recognition.map((award, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white text-center"
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
                    {award.category}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "#CCCCCC",
                      marginTop: "8px",
                    }}
                  >
                    {award.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offices */}
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
                Locations
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
                Our offices
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-[#F5F5F5]">
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
                  Shoreditch, London EC2A
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#F5F5F5]">
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
                  premium photo experiences to the region's most prestigious events.
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
              Want to be part of the story?
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
              We're always looking for talented, passionate people to join our team.
              If you believe in creating unforgettable moments, we want to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium hover:opacity-90 transition-opacity"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
              >
                View open positions
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
