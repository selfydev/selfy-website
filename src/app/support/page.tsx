import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SupportPage() {
  const supportCategories = [
    {
      title: "Getting Started",
      description: "New to Selfy? Learn the basics of how our photo booth works.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      ),
      links: ["How it works", "Setting up your event", "First time tips"],
    },
    {
      title: "Event Day",
      description: "Everything you need to know for a smooth event experience.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      links: ["Setup requirements", "Troubleshooting", "Contacting support"],
    },
    {
      title: "Digital Gallery",
      description: "Access, share, and download photos from your event.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      ),
      links: ["Accessing your gallery", "Downloading photos", "Sharing options"],
    },
    {
      title: "Account & Billing",
      description: "Manage your bookings, invoices, and account settings.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      links: ["View invoices", "Update booking", "Payment methods"],
    },
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
                Support
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
                How can we help?
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
                Find answers, guides, and resources to help you get the most out of Selfy.
              </p>
            </div>
          </div>
        </section>

        {/* Support Categories */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportCategories.map((category, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-white"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center mb-6">
                    {category.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "24px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      marginBottom: "8px",
                    }}
                  >
                    {category.title}
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
                    {category.description}
                  </p>
                  <ul className="space-y-3">
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="flex items-center gap-2 text-black/70 hover:text-black transition-colors"
                          style={{
                            fontFamily: "var(--font-helvetica-now)",
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          {link}
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="px-6 lg:px-24 py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "48px",
                    fontWeight: 500,
                    color: "#1D1D1D",
                    letterSpacing: "-1px",
                    lineHeight: 1.1,
                    marginBottom: "24px",
                  }}
                >
                  Need more help?
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "#666666",
                    lineHeight: 1.7,
                    marginBottom: "32px",
                  }}
                >
                  Our support team is available to help with any questions or issues. We typically respond within a few hours during business hours.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:support@selfy.co.uk"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1D1D1D] text-white font-medium hover:bg-black/80 transition-colors"
                    style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "14px" }}
                  >
                    Email support
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                  <Link
                    href="/faq"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-black/20 text-[#1D1D1D] font-medium hover:bg-black/5 transition-colors"
                    style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "14px" }}
                  >
                    View FAQ
                  </Link>
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-[#F5F5F5]">
                <h3
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "#1D1D1D",
                    marginBottom: "24px",
                  }}
                >
                  Contact details
                </h3>
                <div className="space-y-6">
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#888888",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:support@selfy.co.uk"
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#1D1D1D",
                      }}
                    >
                      support@selfy.co.uk
                    </a>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#888888",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      Phone
                    </p>
                    <a
                      href="tel:+442012345678"
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#1D1D1D",
                      }}
                    >
                      +44 20 1234 5678
                    </a>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#888888",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      Hours
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#1D1D1D",
                      }}
                    >
                      Mon–Fri: 9am–6pm GMT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
