"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Distance the header sits below the top of the viewport, tracking the
  // visible portion of the (non-sticky) announcement bar as it scrolls away.
  const [barOffset, setBarOffset] = useState(0);
  const lastScrollYRef = useRef<number>(0);

  useEffect(() => {
    let rafId: number | null = null;

    const readBarHeight = () => {
      const raw = getComputedStyle(document.documentElement).getPropertyValue(
        "--sb-h",
      );
      const parsed = parseFloat(raw);
      return Number.isFinite(parsed) ? parsed : 0;
    };

    const update = () => {
      rafId = null;
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      const nextIsAtTop = currentScrollY < 50;
      const nextIsVisible = nextIsAtTop || currentScrollY <= lastScrollY;
      const nextBarOffset = Math.max(0, readBarHeight() - currentScrollY);

      // Functional setState so we only trigger a render when the value changes
      setIsAtTop((prev) => (prev === nextIsAtTop ? prev : nextIsAtTop));
      setIsVisible((prev) => (prev === nextIsVisible ? prev : nextIsVisible));
      setBarOffset((prev) => (prev === nextBarOffset ? prev : nextBarOffset));
      if (!nextIsVisible) {
        setIsMenuOpen((prev) => (prev ? false : prev));
      }
    };

    const handleScroll = () => {
      // Throttle with a single in-flight animation frame
      if (rafId === null) {
        rafId = window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // The bar can appear/animate without a scroll — re-evaluate on its signal.
    window.addEventListener("selfy:sb-height", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("selfy:sb-height", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Lock body scroll while the full-screen mobile menu is open.
  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleMenuToggle();
    }
  };

  // Dynamic styles based on scroll state
  const isScrolled = !isAtTop && isVisible;
  const textColor = isScrolled ? "text-black" : "text-white";
  const hamburgerBg = isScrolled ? "bg-black" : "bg-white";

  return (
    <header
      style={{ top: barOffset }}
      className={`fixed left-0 right-0 z-50 transition-[transform,background-color,box-shadow] duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"}`}
    >
      <div className="relative z-50 mx-auto flex items-center justify-between px-6 py-3 lg:px-24">
        {/* Logo */}
        <Link href="/" aria-label="Selfy Home" className="relative">
          <Image
            src="/images/logo-white.svg"
            alt="Selfy"
            width={80}
            height={32}
            className={`h-8 w-auto transition-opacity duration-300 ${
              isScrolled ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
          <Image
            src="/images/logo-black.svg"
            alt="Selfy"
            width={80}
            height={32}
            className={`absolute top-0 left-0 h-8 w-auto transition-opacity duration-300 ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-8 group"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-[family-name:var(--font-helvetica-now)] text-[16px] font-medium transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100 ${textColor}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/signup"
            aria-label="Sign up for a Selfy account"
            className={`font-[family-name:var(--font-helvetica-now)] text-[16px] font-medium hover:opacity-70 transition-opacity duration-300 ${textColor}`}
          >
            Sign up
          </Link>
          <Link
            href="/login"
            aria-label="Login to your Selfy account"
            className={`press-scale font-[family-name:var(--font-helvetica-now)] text-[16px] font-bold px-12 py-2.5 rounded-full ${
              isScrolled
                ? "bg-black text-white hover:bg-black/80"
                : "bg-white text-black hover:bg-white/90"
            }`}
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={handleMenuToggle}
          onKeyDown={handleKeyDown}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          tabIndex={0}
        >
          <span
            className={`block w-6 h-0.5 transition-[transform,opacity,background-color] duration-300 ${hamburgerBg} ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-[transform,opacity,background-color] duration-300 ${hamburgerBg} ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-[transform,opacity,background-color] duration-300 ${hamburgerBg} ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu — full-viewport panel with staggered links */}
      <div
        className={`lg:hidden fixed inset-0 z-40 h-[100dvh] transition-[opacity,visibility] duration-300 ${
          isScrolled ? "bg-white" : "bg-black"
        } ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav
          className="flex h-full flex-col px-6 pt-24 pb-10"
          aria-label="Mobile navigation"
        >
          {/* Links */}
          <div className="flex flex-1 flex-col justify-center gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  transitionDelay: isMenuOpen ? `${100 + index * 60}ms` : "0ms",
                }}
                className={`font-[family-name:var(--font-helvetica-now)] text-4xl font-medium py-2 transition-[transform,opacity] duration-500 ease-out ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                } ${isScrolled ? "text-black" : "text-white"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth actions anchored to the bottom */}
          <div
            style={{
              transitionDelay: isMenuOpen
                ? `${100 + navLinks.length * 60}ms`
                : "0ms",
            }}
            className={`flex flex-col gap-4 transition-[transform,opacity] duration-500 ease-out ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <Link
              href="/signup"
              aria-label="Sign up for a Selfy account"
              className={`font-[family-name:var(--font-helvetica-now)] text-lg font-medium hover:opacity-80 transition-opacity ${
                isScrolled ? "text-black" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </Link>
            <Link
              href="/login"
              aria-label="Login to your Selfy account"
              className={`press-scale font-[family-name:var(--font-helvetica-now)] text-lg font-bold px-6 py-4 rounded-full text-center ${
                isScrolled
                  ? "bg-black text-white hover:bg-black/80"
                  : "bg-white text-black hover:bg-white/90"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
