"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { useState, useEffect } from "react";
import { submitForm, type FormStatus } from "@/lib/forms";

export default function ContactPage() {
  const [londonTime, setLondonTime] = useState("");
  const [dubaiTime, setDubaiTime] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const ok = await submitForm(e.currentTarget);
    if (ok) {
      setStatus("success");
      setFormData({ name: "", email: "", company: "", eventType: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5]">
        {/* Hero */}
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
              Contact
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
              Get in touch.
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
              Have a question or want to book? We&apos;d love to hear from you.
            </p>
          </Reveal>
        </section>

        {/* Contact Form & Info */}
        <section className="px-6 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <div
                className="reveal-item bg-white rounded-2xl p-8 lg:p-10"
                style={{ "--reveal-index": 0 } as React.CSSProperties}
              >
                {status !== "success" ? (
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

                    {/* Permanent fully-booked notice, close to the form */}
                    <div className="mb-8 flex items-start gap-3 rounded-xl border-l-2 border-[#1D1D1D] bg-[#F5F5F5] p-4">
                      <span
                        aria-hidden="true"
                        className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-[#1D1D1D]"
                      />
                      <p
                        className="font-[family-name:var(--font-helvetica-now)] text-[14px] leading-relaxed"
                        style={{ color: "rgba(29, 29, 29, 0.6)" }}
                      >
                        <span style={{ color: "#1D1D1D", fontWeight: 500 }}>
                          We&apos;re fully booked.
                        </span>{" "}
                        We&apos;re not taking new bookings until Q3 2027 — but we&apos;d
                        still love to hear from you. Send a message and our team will
                        help however we can.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <input type="hidden" name="form" value="contact" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="contact-name"
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
                            id="contact-name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-transparent outline-none focus:border-black/10 transition-colors"
                            style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="contact-email"
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
                            id="contact-email"
                            type="email"
                            name="email"
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
                            htmlFor="contact-company"
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
                            id="contact-company"
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#F5F5F5] border border-transparent outline-none focus:border-black/10 transition-colors"
                            style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="contact-event-type"
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
                            id="contact-event-type"
                            name="eventType"
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
                          htmlFor="contact-message"
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
                          id="contact-message"
                          name="message"
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
                        disabled={status === "submitting"}
                        className={`w-full py-4 rounded-full bg-[#1D1D1D] text-white font-medium press-scale hover:opacity-90 ${
                          status === "submitting" ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
                      >
                        {status === "submitting" ? "Sending…" : "Send message"}
                      </button>
                      {status === "error" && (
                        <p
                          role="alert"
                          style={{
                            fontFamily: "var(--font-helvetica-now)",
                            fontSize: "14px",
                            fontWeight: 400,
                            color: "#DC2626",
                          }}
                        >
                          Something went wrong — please email us at{" "}
                          <a href="mailto:hello@selfy.photo" className="underline">
                            hello@selfy.photo
                          </a>{" "}
                          instead.
                        </p>
                      )}
                    </form>
                  </>
                ) : (
                  <div className="py-16 text-center" role="status">
                    <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-[#F5F5F5] flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1D1D1D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
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
                        marginBottom: "24px",
                      }}
                    >
                      Your message is on its way. We&apos;ll get back to you
                      within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="press-scale px-6 py-3 rounded-full border border-black/10 text-[#1D1D1D] font-medium hover:bg-[#F5F5F5] transition-colors"
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "14px",
                      }}
                    >
                      Send another message
                    </button>
                  </div>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Email & Phone */}
                <div
                  className="reveal-item bg-white rounded-2xl p-8"
                  style={{ "--reveal-index": 1 } as React.CSSProperties}
                >
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
                        href="mailto:hello@selfy.photo"
                        className="hover:opacity-70 transition-opacity"
                        style={{
                          fontFamily: "var(--font-helvetica-now)",
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "#1D1D1D",
                        }}
                      >
                        hello@selfy.photo
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
                        href="tel:+442034882312"
                        className="hover:opacity-70 transition-opacity"
                        style={{
                          fontFamily: "var(--font-helvetica-now)",
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "#1D1D1D",
                        }}
                      >
                        +44 203 488 2312
                      </a>
                    </div>
                  </div>
                </div>

                {/* Offices */}
                <div
                  className="reveal-item bg-white rounded-2xl p-8"
                  style={{ "--reveal-index": 2 } as React.CSSProperties}
                >
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
                        20-22 Wenlock Road
                        <br />
                        London, N1 7GU
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
                        Business Bay, Dubai
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response time */}
                <div
                  className="reveal-item bg-white rounded-2xl p-8"
                  style={{ "--reveal-index": 3 } as React.CSSProperties}
                >
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
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
