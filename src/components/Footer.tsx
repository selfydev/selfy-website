"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
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

  const socialLinks = [
    { label: "Instagram", href: "#", handle: "@selfy" },
    { label: "TikTok", href: "#", handle: "@selfy" },
    { label: "LinkedIn", href: "#", handle: "Selfy" },
    { label: "YouTube", href: "#", handle: "Selfy" },
  ];

  return (
    <footer className="w-full bg-[#141414]">
      {/* Newsletter Section */}
      <div className="px-6 lg:px-24 py-16 lg:py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-md">
            <h3
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "28px",
                fontWeight: 500,
                color: "#FFFFFF",
                marginBottom: "8px",
              }}
            >
              Stay updated
            </h3>
            <p
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "15px",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              Subscribe for industry insights, event tips, and exclusive updates.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-3 w-full lg:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 lg:w-72 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-white/30 transition-colors"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "14px",
              }}
            />
            <button
              type="submit"
              className="px-6 py-3.5 rounded-full bg-white text-[#1D1D1D] font-medium hover:bg-white/90 transition-colors whitespace-nowrap"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "14px",
              }}
            >
              {isSubmitted ? "Subscribed" : "Subscribe"}
            </button>
          </form>
        </div>
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
                className="transition-all opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
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
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-white/30 hover:text-white/60 transition-colors"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "13px",
                fontWeight: 400,
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white/30 hover:text-white/60 transition-colors"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "13px",
                fontWeight: 400,
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-white/30 hover:text-white/60 transition-colors"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "13px",
                fontWeight: 400,
              }}
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
