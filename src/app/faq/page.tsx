"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is Selfy?",
        a: "Selfy is a premium photo booth company offering beautifully designed, open-air booths for weddings, corporate events, brand activations, and private parties. Our technology captures high-quality photos and provides instant digital sharing.",
      },
      {
        q: "How does the photo booth work?",
        a: "Guests simply step in front of the booth and the experience guides them through taking photos. Photos can be taken individually or as a group. The entire process is intuitive and requires no assistance, though we always provide an on-site attendant.",
      },
      {
        q: "Do you provide an attendant?",
        a: "Yes, every booking includes a professional attendant who sets up the booth, assists guests throughout the event, and ensures everything runs smoothly.",
      },
    ],
  },
  {
    category: "Booking & Pricing",
    questions: [
      {
        q: "How far in advance should I book?",
        a: "We recommend booking 2-3 months in advance for private events and 4-6 months for weddings during peak season. However, we can sometimes accommodate last-minute bookings depending on availability.",
      },
      {
        q: "What's included in the price?",
        a: "All packages include setup and breakdown, an on-site attendant, unlimited photos during your booking period, digital gallery access, and travel within Greater London. Additional features vary by package.",
      },
      {
        q: "Do you offer custom packages?",
        a: "Absolutely. We can create custom packages for multi-day events, brand activations, or specific requirements. Contact us to discuss your needs.",
      },
      {
        q: "What is your cancellation policy?",
        a: "We offer full refunds for cancellations made more than 30 days before the event. Cancellations within 30 days may be subject to a fee. We also offer date changes subject to availability.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        q: "What space do you need for the booth?",
        a: "Our standard booth requires approximately 8ft x 8ft of floor space with a minimum ceiling height of 8ft. We can advise on specific requirements for your venue.",
      },
      {
        q: "Do you need a power source?",
        a: "Yes, we require access to a standard power outlet within 10 meters of the booth location. We bring all necessary extension cables.",
      },
      {
        q: "Can guests share photos digitally?",
        a: "Yes! Guests can instantly share photos via email, SMS, or directly to social media. All photos are also uploaded to a private online gallery you can access and share.",
      },
      {
        q: "What photo formats do you offer?",
        a: "We offer standard 4x6 prints, photo strips, and digital downloads. Custom sizes and formats are available for corporate and brand activation bookings.",
      },
    ],
  },
  {
    category: "Customisation",
    questions: [
      {
        q: "Can I customise the photo design?",
        a: "Yes, you can fully customise the photo overlay, start screen, and print layout with your event details, branding, or wedding design. Our team can help create custom templates.",
      },
      {
        q: "Do you provide props?",
        a: "We include a curated selection of props with every booking. Premium prop packages are available, or we can source custom props for your theme.",
      },
      {
        q: "Can you match our event branding?",
        a: "Absolutely. For corporate and brand activation clients, we offer complete white-label experiences including booth wraps, custom UI, branded overlays, and more.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

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
                FAQ
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
                Frequently asked questions.
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
                Everything you need to know about Selfy and our photo booth services.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-4xl mx-auto">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-16 last:mb-0">
                <h2
                  className="mb-8"
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "32px",
                    fontWeight: 500,
                    color: "#1D1D1D",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.questions.map((item, questionIndex) => {
                    const id = `${sectionIndex}-${questionIndex}`;
                    const isOpen = openIndex === id;

                    return (
                      <div
                        key={questionIndex}
                        className="rounded-2xl bg-white overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(id)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <span
                            style={{
                              fontFamily: "var(--font-helvetica-now)",
                              fontSize: "17px",
                              fontWeight: 500,
                              color: "#1D1D1D",
                            }}
                          >
                            {item.q}
                          </span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className={`flex-shrink-0 ml-4 transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </button>
                        <div
                          className={`transition-all duration-200 overflow-hidden ${
                            isOpen ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          <p
                            className="px-6 pb-6"
                            style={{
                              fontFamily: "var(--font-helvetica-now)",
                              fontSize: "15px",
                              fontWeight: 400,
                              color: "#666666",
                              lineHeight: 1.7,
                            }}
                          >
                            {item.a}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
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
              Still have questions?
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
              Can't find what you're looking for? Our team is here to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium hover:bg-white/90 transition-all"
              style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
            >
              Contact us
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
