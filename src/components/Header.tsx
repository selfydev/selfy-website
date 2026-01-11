"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-6 py-5 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-helvetica-now)] text-2xl font-bold text-white tracking-tight"
          aria-label="Selfy Home"
        >
          Selfy.
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm font-medium hover:opacity-80 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#signup"
            className="text-white text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Sign up
          </Link>
          <Link
            href="#login"
            className="text-white text-sm font-medium px-6 py-2.5 border border-white rounded-full hover:bg-white hover:text-black transition-all"
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
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-lg py-3 border-b border-white/10 hover:opacity-80 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-6">
            <Link
              href="#signup"
              className="text-white text-lg hover:opacity-80 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </Link>
            <Link
              href="#login"
              className="text-white text-lg font-medium px-6 py-3 border border-white rounded-full text-center hover:bg-white hover:text-black transition-all"
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
