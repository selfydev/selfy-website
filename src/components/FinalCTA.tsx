"use client";

import { useState, useEffect } from "react";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  const [londonTime, setLondonTime] = useState("");
  const [dubaiTime, setDubaiTime] = useState("");

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

  const stats = [
    { number: "500+", label: "Events" },
    { number: "2M+", label: "Photos" },
    { number: "98%", label: "Satisfaction" },
  ];

  return (
    <section className="relative w-full bg-[#1D1D1D] px-6 lg:px-24 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Row - Headline + CTA */}
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 pb-12 border-b border-white/10">
          <div>
            <div
              className="flex items-center gap-2 mb-4 reveal-item"
              style={{ "--reveal-index": 0 } as React.CSSProperties}
            >
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-400 animate-ping" />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "rgba(255, 255, 255, 0.5)",
                }}
              >
                Accepting new bookings
              </span>
            </div>
            <h2
              className="reveal-item"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "clamp(36px, 7vw, 80px)",
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1,
                letterSpacing: "-2px",
                "--reveal-index": 1,
              } as React.CSSProperties}
            >
              Let&apos;s work together.
            </h2>
          </div>
          <a
            href="mailto:hello@selfy.photo"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1D1D1D] font-medium hover:bg-white/90 press-scale shrink-0"
            style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "15px" }}
          >
            Start a project
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </Reveal>

        {/* Middle Row - Stats + Offices */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Stats */}
          <div
            className="reveal-item"
            style={{ "--reveal-index": 0 } as React.CSSProperties}
          >
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "clamp(24px, 3vw, 36px)",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      letterSpacing: "-1px",
                      lineHeight: 1,
                    }}
                  >
                    {stat.number}
                  </p>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "12px",
                      fontWeight: 400,
                      color: "rgba(255, 255, 255, 0.4)",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Offices */}
          <div className="grid grid-cols-2 gap-8">
            {/* London */}
            <div
              className="reveal-item"
              style={{ "--reveal-index": 1 } as React.CSSProperties}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "rgba(255, 255, 255, 0.4)",
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
                    color: "#FFFFFF",
                  }}
                >
                  {londonTime}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "rgba(255, 255, 255, 0.5)",
                  lineHeight: 1.5,
                }}
              >
                20-22 Wenlock Road
                <br />
                London, N1 7GU
              </p>
              <a
                href="mailto:hello@selfy.photo"
                className="mt-2 inline-block text-white/40 hover:text-white transition-colors"
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "12px",
                }}
              >
                hello@selfy.photo
              </a>
            </div>

            {/* Dubai */}
            <div
              className="reveal-item"
              style={{ "--reveal-index": 2 } as React.CSSProperties}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "rgba(255, 255, 255, 0.4)",
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
                    color: "#FFFFFF",
                  }}
                >
                  {dubaiTime}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "rgba(255, 255, 255, 0.5)",
                  lineHeight: 1.5,
                }}
              >
                One Central, Building 4
                <br />
                Dubai World Trade Centre
              </p>
              <a
                href="mailto:hello@selfy.photo"
                className="mt-2 inline-block text-white/40 hover:text-white transition-colors"
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "12px",
                }}
              >
                hello@selfy.photo
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
