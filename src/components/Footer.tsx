"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { submitForm, type FormStatus } from "@/lib/forms";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    const ok = await submitForm(e.currentTarget);
    if (ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  const navColumns = [
    {
      title: "Services",
      links: [
        { label: "Weddings", href: "/services/weddings" },
        { label: "Corporate Events", href: "/services/corporate-events" },
        { label: "Brand Activations", href: "/services/brand-activations" },
        { label: "Private Parties", href: "/services/private-parties" },
        { label: "Exhibitions", href: "/services/exhibitions" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Work", href: "/work" },
        { label: "Careers", href: "/careers" },
        { label: "Press Kit", href: "/press" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Pricing", href: "/#pricing" },
        { label: "FAQ", href: "/faq" },
        { label: "Blog", href: "/blog" },
        { label: "Support", href: "/support" },
        { label: "Partners", href: "/partners" },
      ],
    },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Settings", href: "/cookies-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/selfyco/", handle: "@selfyco" },
    { label: "TikTok", href: "https://www.tiktok.com/@selfyco", handle: "@selfyco" },
    { label: "Facebook", href: "https://www.facebook.com/selfyco/", handle: "@selfyco" },
    { label: "X", href: "https://www.twitter.com/selfyco/", handle: "@selfyco" },
  ];

  return (
    <footer className="w-full bg-[#141414]">
      {/* Newsletter Section */}
      <div className="px-6 lg:px-24 py-16 lg:py-20 border-b border-white/5">
        <Reveal className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-md">
            <h3
              className="reveal-item"
              style={
                {
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "28px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  marginBottom: "8px",
                  "--reveal-index": 0,
                } as React.CSSProperties
              }
            >
              Stay updated
            </h3>
            <p
              className="reveal-item"
              style={
                {
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "rgba(255, 255, 255, 0.5)",
                  "--reveal-index": 1,
                } as React.CSSProperties
              }
            >
              Subscribe for industry insights, event tips, and exclusive updates.
            </p>
          </div>
          <div
            className="reveal-item w-full lg:w-auto"
            style={{ "--reveal-index": 2 } as React.CSSProperties}
          >
          <form
            onSubmit={handleSubmit}
            className="flex gap-3 w-full lg:w-auto"
          >
            <input type="hidden" name="form" value="newsletter" />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              className="flex-1 lg:w-72 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-white/30 transition-colors"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "14px",
              }}
            />
            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              disabled={status === "submitting"}
              className={`press-scale px-6 py-3.5 rounded-full bg-white text-[#1D1D1D] font-medium hover:bg-white/90 whitespace-nowrap ${
                status === "submitting" ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "14px",
              }}
            >
              {status === "success"
                ? "Subscribed"
                : status === "submitting"
                  ? "Sending…"
                  : "Subscribe"}
            </button>
          </form>
          {status === "error" && (
            <p
              className="mt-3"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "13px",
                fontWeight: 400,
                color: "#FCA5A5",
              }}
            >
              Something went wrong — please email us instead.
            </p>
          )}
          </div>
        </Reveal>
      </div>

      {/* Main Navigation */}
      <div className="px-6 lg:px-24 py-16 lg:py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-white.svg"
                alt="Selfy"
                width={80}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "14px",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.4)",
                lineHeight: 1.6,
                maxWidth: "200px",
              }}
            >
              Premium photo booth experiences for events that matter.
            </p>
          </div>

          {/* Nav Columns */}
          {navColumns.map((column) => (
            <div key={column.title}>
              <p
                className="mb-5"
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "rgba(255, 255, 255, 0.3)",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                }}
              >
                {column.title}
              </p>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white transition-colors"
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="px-6 lg:px-24 py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-x-12 gap-y-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3"
              onMouseEnter={() => setHoveredLink(social.label)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span
                className="transition-colors"
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color:
                    hoveredLink === null || hoveredLink === social.label
                      ? "rgba(255, 255, 255, 0.8)"
                      : "rgba(255, 255, 255, 0.3)",
                }}
              >
                {social.label}
              </span>
              <span
                className="transition-colors"
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "13px",
                  fontWeight: 400,
                  color:
                    hoveredLink === social.label
                      ? "rgba(255, 255, 255, 0.5)"
                      : "rgba(255, 255, 255, 0.2)",
                }}
              >
                {social.handle}
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-[opacity,transform] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                style={{ color: "rgba(255, 255, 255, 0.5)" }}
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 lg:px-24 py-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Left */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "13px",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.3)",
              }}
            >
              © {new Date().getFullYear()} Selfy Ltd. All rights reserved.
            </span>
            <span
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "13px",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.2)",
              }}
            >
              Registered in England & Wales
            </span>
            <span
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "13px",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.2)",
              }}
            >
              Selfy LTD · Company no. 10629457 · 20-22 Wenlock Road, London N1 7GU
            </span>
          </div>

          {/* Right */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/30 hover:text-white/60 transition-colors"
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "13px",
                  fontWeight: 400,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
