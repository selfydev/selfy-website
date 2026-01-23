"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [londonTime, setLondonTime] = useState("");
  const [dubaiTime, setDubaiTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    eventType: "",
    message: "",
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setLondonTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      setDubaiTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Asia/Dubai",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5]">
        {/* Hero */}
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
              Contact
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
              Get in touch.
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
              Have a question or want to book? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <div className="bg-white rounded-2xl p-8 lg:p-10">
                {!isSubmitted ? (
                  <>
                    <h2
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "28px",
                        fontWeight: 500,
                        color: "#1D1D1D",
                        marginBottom: "32px",
                      }}
                    >
                      Send us a message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-transparent outline-none focus:border-black/10 transition-colors"
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
                            Email
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-transparent outline-none focus:border-black/10 transition-colors"
                            style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                            required
                          />
                        </div>
                      </div>
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
                            Company
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-transparent outline-none focus:border-black/10 transition-colors"
                            style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
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
                            Event type
                          </label>
                          <select
                            value={formData.eventType}
                            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-transparent outline-none focus:border-black/10 transition-colors"
                            style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                          >
                            <option value="">Select type</option>
                            <option value="wedding">Wedding</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="brand">Brand Activation</option>
                            <option value="private">Private Party</option>
                            <option value="other">Other</option>
                          </select>
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
                          Message
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-transparent outline-none focus:border-black/10 transition-colors resize-none"
                          style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                          placeholder="Tell us about your event..."
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-4 rounded-full bg-[#1D1D1D] text-white font-medium hover:opacity-90 transition-opacity"
                        style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                      >
                        Send message
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="py-16 text-center">
                    <h3
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "28px",
                        fontWeight: 500,
                        color: "#1D1D1D",
                        marginBottom: "12px",
                      }}
                    >
                      Thank you
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#888888",
                        lineHeight: 1.6,
                      }}
                    >
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Email & Phone */}
                <div className="bg-white rounded-2xl p-8">
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
                        href="mailto:hello@selfy.co.uk"
                        className="hover:opacity-70 transition-opacity"
                        style={{
                          fontFamily: "var(--font-helvetica-now)",
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "#1D1D1D",
                        }}
                      >
                        hello@selfy.co.uk
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
                        className="hover:opacity-70 transition-opacity"
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
                  </div>
                </div>

                {/* Offices */}
                <div className="bg-white rounded-2xl p-8">
                  <h3
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      marginBottom: "24px",
                    }}
                  >
                    Our offices
                  </h3>
                  <div className="grid grid-cols-2 gap-8">
                    {/* London */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span
                          style={{
                            fontFamily: "var(--font-helvetica-now)",
                            fontSize: "11px",
                            fontWeight: 500,
                            color: "#888888",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                          }}
                        >
                          London
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-helvetica-now)",
                            fontSize: "20px",
                            fontWeight: 500,
                            color: "#1D1D1D",
                          }}
                        >
                          {londonTime}
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-helvetica-now)",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "#888888",
                          lineHeight: 1.6,
                        }}
                      >
                        128 City Road
                        <br />
                        London, EC1V 2NX
                      </p>
                    </div>

                    {/* Dubai */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span
                          style={{
                            fontFamily: "var(--font-helvetica-now)",
                            fontSize: "11px",
                            fontWeight: 500,
                            color: "#888888",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                          }}
                        >
                          Dubai
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-helvetica-now)",
                            fontSize: "20px",
                            fontWeight: 500,
                            color: "#1D1D1D",
                          }}
                        >
                          {dubaiTime}
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-helvetica-now)",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "#888888",
                          lineHeight: 1.6,
                        }}
                      >
                        One Central, Building 4
                        <br />
                        Dubai World Trade Centre
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response time */}
                <div className="bg-white rounded-2xl p-8">
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#888888",
                      lineHeight: 1.6,
                    }}
                  >
                    We typically respond within 24 hours during business days. For urgent enquiries, please call us directly.
                  </p>
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
