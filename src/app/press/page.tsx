import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PressPage() {
  const pressFeatures = [
    {
      publication: "Mashable",
      title: "How Selfy is Revolutionising Event Photography",
      date: "March 2024",
    },
    {
      publication: "TechCrunch",
      title: "Photo Booth Startup Selfy Raises Series A",
      date: "January 2024",
    },
    {
      publication: "Wallpaper*",
      title: "The Design-Forward Photo Booth Taking Events by Storm",
      date: "November 2023",
    },
    {
      publication: "The Verge",
      title: "Selfy Brings AI-Powered Photo Enhancement to Events",
      date: "September 2023",
    },
    {
      publication: "Forbes",
      title: "30 Under 30: Meet the Founders of Selfy",
      date: "July 2023",
    },
  ];

  const awards = [
    { name: "Red Dot Design Award", year: "2024" },
    { name: "Event Technology Award", year: "2024" },
    { name: "UK Business Awards Finalist", year: "2023" },
    { name: "Best Event Supplier", year: "2023" },
  ];

  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5]">
        {/* Hero Section */}
        <section className="relative w-full min-h-[50vh] flex items-center bg-[#1D1D1D] px-6 lg:px-24 pt-32 pb-20">
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
                Press Kit
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
                Press & Media
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
                Download our press kit, view recent coverage, or get in touch with our PR team.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium hover:bg-white/90 transition-all"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
              >
                Download Press Kit
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Press Features */}
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
              In the press
            </h2>
            <div className="space-y-4">
              {pressFeatures.map((article, index) => (
                <a
                  key={index}
                  href="#"
                  className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-white hover:bg-[#1D1D1D] transition-all duration-300"
                >
                  <div>
                    <p
                      className="group-hover:text-white/60 transition-colors mb-1"
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#888888",
                      }}
                    >
                      {article.publication}
                    </p>
                    <h3
                      className="group-hover:text-white transition-colors"
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "20px",
                        fontWeight: 500,
                        color: "#1D1D1D",
                      }}
                    >
                      {article.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <span
                      className="group-hover:text-white/40 transition-colors"
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#888888",
                      }}
                    >
                      {article.date}
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

        {/* Awards */}
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
              Awards & Recognition
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-[#F5F5F5] text-center"
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
                    {award.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Assets */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "48px",
                fontWeight: 500,
                color: "#1D1D1D",
                letterSpacing: "-1px",
              }}
            >
              Brand Assets
            </h2>
            <p
              className="max-w-xl mb-12"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "18px",
                fontWeight: 400,
                color: "#666666",
                lineHeight: 1.6,
              }}
            >
              Download our logo, product images, and brand guidelines for press and media use.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="#"
                className="p-6 rounded-2xl bg-white hover:bg-[#1D1D1D] group transition-all duration-300"
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
                className="p-6 rounded-2xl bg-white hover:bg-[#1D1D1D] group transition-all duration-300"
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
                className="p-6 rounded-2xl bg-white hover:bg-[#1D1D1D] group transition-all duration-300"
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
          </div>
        </section>

        {/* Contact */}
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
              Media enquiries
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
              For press enquiries, interviews, or additional information, please contact our PR team.
            </p>
            <a
              href="mailto:press@selfy.co.uk"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium hover:bg-white/90 transition-all"
              style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
            >
              press@selfy.co.uk
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
