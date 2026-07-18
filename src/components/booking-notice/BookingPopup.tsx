"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  POPUP_IMAGE,
  POPUP_IMAGE_ALT,
  HEADING,
  BODY,
  CONTACT_HREF,
  POPUP_CTA,
} from "./content";

interface BookingPopupProps {
  // Whether the card is in its visible (animated-in) state.
  open: boolean;
  // Dismiss without navigating (× or backdrop / Esc).
  onDismiss: () => void;
  // Dismiss because the user is heading to contact (button click).
  onContact: () => void;
}

const BookingPopup = ({ open, onDismiss, onContact }: BookingPopupProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while the popup is mounted.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Close on Escape; move focus into the dialog on mount.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    };
    document.addEventListener("keydown", handleKeyDown);
    cardRef.current?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onDismiss]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-notice-heading"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onDismiss}
        aria-hidden="true"
      />

      {/* Card */}
      <div
        ref={cardRef}
        tabIndex={-1}
        className={`relative z-10 w-full max-w-[420px] overflow-hidden rounded-[20px] bg-white shadow-2xl outline-none transition-[transform,opacity] duration-300 ease-out ${
          open ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-95 opacity-0"
        }`}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Close"
          className="press-scale absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-black backdrop-blur-sm hover:bg-white"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Top ~30%: full-width image */}
        <div className="relative h-44 w-full sm:h-48">
          <Image
            src={POPUP_IMAGE}
            alt={POPUP_IMAGE_ALT}
            fill
            sizes="420px"
            className="object-cover"
            priority
          />
        </div>

        {/* Text + action */}
        <div className="px-7 pb-8 pt-6 text-center">
          <h2
            id="booking-notice-heading"
            className="font-[family-name:var(--font-helvetica-now)] text-[26px] font-medium"
            style={{ color: "#1D1D1D", letterSpacing: "-0.5px" }}
          >
            {HEADING}
          </h2>
          <p
            className="mx-auto mt-3 max-w-[320px] font-[family-name:var(--font-helvetica-now)] text-[15px] leading-relaxed"
            style={{ color: "rgba(29, 29, 29, 0.6)" }}
          >
            {BODY}
          </p>
          <Link
            href={CONTACT_HREF}
            onClick={onContact}
            className="press-scale mt-6 inline-block w-full rounded-full bg-black px-8 py-3.5 text-sm font-medium text-white hover:bg-black/80"
          >
            {POPUP_CTA}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingPopup;
