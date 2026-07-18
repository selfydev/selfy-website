"use client";

import Link from "next/link";
import {
  BAR_TEXT,
  BAR_TEXT_SHORT,
  BAR_CTA,
  CONTACT_HREF,
} from "./content";

interface BookingBarProps {
  // Drives the slide/expand-in animation.
  open: boolean;
  onClose: () => void;
}

const BookingBar = ({ open, onClose }: BookingBarProps) => {
  return (
    <div
      // Normal flow at the very top of the page — pushes content down and
      // scrolls away with the page (not sticky).
      className={`relative z-[60] w-full overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
        open ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
      }`}
      style={{ backgroundColor: "#1D1D1D" }}
      role="region"
      aria-label="Booking availability notice"
    >
      <div className="relative flex items-center justify-center px-10 py-2.5 sm:py-3">
        <p className="font-[family-name:var(--font-helvetica-now)] text-[13px] font-normal text-white sm:text-[14px]">
          <span className="hidden sm:inline">{BAR_TEXT}</span>
          <span className="sm:hidden">{BAR_TEXT_SHORT}</span>{" "}
          <Link
            href={CONTACT_HREF}
            className="font-medium text-white underline underline-offset-2 hover:opacity-80"
          >
            {BAR_CTA}
          </Link>
        </p>

        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss notice"
          className="press-scale absolute right-3 flex h-7 w-7 items-center justify-center rounded-full text-white/70 hover:text-white"
        >
          <svg
            width="14"
            height="14"
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
      </div>
    </div>
  );
};

export default BookingBar;
