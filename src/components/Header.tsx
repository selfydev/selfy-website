"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if at top of page
      if (currentScrollY < 50) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);

        // Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
          setIsMenuOpen(false);
        } else {
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
  const borderColor = isScrolled ? "border-black" : "border-white";
  const hoverBg = isScrolled ? "hover:bg-black hover:text-white" : "hover:bg-white hover:text-black";
  const hamburgerBg = isScrolled ? "bg-black" : "bg-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"}`}
    >
      <div className="mx-auto flex items-center justify-between px-6 py-3 lg:px-24">
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
            href="#signup"
            className={`font-[family-name:var(--font-helvetica-now)] text-[16px] font-medium hover:opacity-70 transition-opacity duration-300 ${textColor}`}
          >
            Sign up
          </Link>
          <Link
            href="#login"
            className={`font-[family-name:var(--font-helvetica-now)] text-[16px] font-bold px-6 py-2.5 rounded-full transition-all duration-300 ${
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
            className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerBg} ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerBg} ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerBg} ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isScrolled ? "bg-white/95" : "bg-black/95"
        } ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col px-6 py-6" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg py-3 border-b hover:opacity-80 transition-opacity ${
                isScrolled ? "text-black border-black/10" : "text-white border-white/10"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-6">
            <Link
              href="#signup"
              className={`text-lg hover:opacity-80 transition-opacity ${
                isScrolled ? "text-black" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </Link>
            <Link
              href="#login"
              className={`text-lg font-medium px-6 py-3 rounded-full text-center transition-all ${
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
