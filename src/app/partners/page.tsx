import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PartnersPage() {
  const partnerTypes = [
    {
      title: "Event Planners",
      description: "Add premium photo booth services to your event offerings and earn commission on every referral.",
      benefits: [
        "Competitive referral commissions",
        "Dedicated partner support",
        "Co-branded marketing materials",
        "Priority booking for your clients",
      ],
    },
    {
      title: "Venues",
      description: "Become a preferred venue partner and offer Selfy as a recommended supplier to your clients.",
      benefits: [
        "Exclusive venue rates",
        "Featured on our venue directory",
        "Joint promotional opportunities",
        "Streamlined booking process",
      ],
    },
    {
      title: "Agencies",
      description: "Partner with us to deliver exceptional brand activations and corporate events for your clients.",
      benefits: [
        "White-label solutions",
        "Dedicated account team",
        "Custom integrations",
        "Volume discounts",
      ],
    },
  ];

  const logos = [
    "Google", "Nike", "Spotify", "HSBC", "Vogue", "Selfridges",
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
                Partners
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
                Let's grow together.
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
                Join our network of event planners, venues, and agencies. Together, we create unforgettable experiences.
              </p>
              <a
                href="#apply"
                className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium hover:bg-white/90 transition-all"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
              >
                Become a partner
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="px-6 lg:px-24 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <p
              className="text-center mb-8"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "14px",
                fontWeight: 500,
                color: "#888888",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Trusted by leading brands
            </p>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-6">
              {logos.map((logo, index) => (
                <span
                  key={index}
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "#CCCCCC",
                  }}
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <h2
              className="mb-16"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "48px",
                fontWeight: 500,
                color: "#1D1D1D",
                letterSpacing: "-1px",
              }}
            >
              Partnership opportunities
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-white"
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "24px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      marginBottom: "12px",
                    }}
                  >
                    {type.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "15px",
                      fontWeight: 400,
                      color: "#666666",
                      lineHeight: 1.6,
                      marginBottom: "24px",
                    }}
                  >
                    {type.description}
                  </p>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-start gap-3"
                      >
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
                            fontSize: "14px",
                            fontWeight: 400,
                            color: "#1D1D1D",
                          }}
                        >
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="px-6 lg:px-24 py-24 bg-white">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-center mb-4"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "48px",
                fontWeight: 500,
                color: "#1D1D1D",
                letterSpacing: "-1px",
              }}
            >
              Apply to partner
            </h2>
            <p
              className="text-center mb-12"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "18px",
                fontWeight: 400,
                color: "#666666",
                lineHeight: 1.6,
              }}
            >
              Fill out the form below and our partnerships team will be in touch.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-black/5 outline-none focus:border-black/20 transition-colors"
                    style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                    required
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-black/5 outline-none focus:border-black/20 transition-colors"
                    style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1D1D1D",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-black/5 outline-none focus:border-black/20 transition-colors"
                  style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                  required
                />
              </div>
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1D1D1D",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Partnership type
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-black/5 outline-none focus:border-black/20 transition-colors"
                  style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="planner">Event Planner</option>
                  <option value="venue">Venue</option>
                  <option value="agency">Agency</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1D1D1D",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Tell us about your business
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-black/5 outline-none focus:border-black/20 transition-colors resize-none"
                  style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#1D1D1D] text-white font-medium hover:bg-black/80 transition-colors"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
              >
                Submit application
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
