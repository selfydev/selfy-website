import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

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
            <div className="max-w-3xl">
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
                Careers
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
                Help us capture the world's best moments.
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
                We're building a team of passionate people who believe in the power of bringing joy to events. Join us.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <h2
              className="mb-12"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "48px",
                fontWeight: 500,
                color: "#1D1D1D",
                letterSpacing: "-1px",
              }}
            >
              Why join Selfy?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white"
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
          </div>
        </section>

        {/* Openings Section */}
        <section className="px-6 lg:px-24 py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2
              className="mb-12"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "48px",
                fontWeight: 500,
                color: "#1D1D1D",
                letterSpacing: "-1px",
              }}
            >
              Open positions
            </h2>
            <div className="space-y-4">
              {openings.map((job, index) => (
                <a
                  key={index}
                  href="#"
                  className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-[#F5F5F5] hover:bg-[#1D1D1D] transition-all duration-300"
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
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 lg:px-24 py-24 bg-[#1D1D1D]">
          <div className="max-w-7xl mx-auto text-center">
            <h2
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              Don't see the right role?
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
              We're always interested in meeting talented people. Send us your CV and let's chat.
            </p>
            <a
              href="mailto:careers@selfy.co.uk"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium hover:bg-white/90 transition-all"
              style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
            >
              Get in touch
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
