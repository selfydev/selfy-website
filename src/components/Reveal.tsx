"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Fraction of the element that must be visible before revealing. */
  threshold?: number;
};

/**
 * Scroll-triggered reveal container. Children marked with the
 * `reveal-item` class rise in with a staggered blurred fade once the
 * container enters the viewport (see globals.css). Reduced motion is
 * handled in CSS (globals.css disables the transition under
 * prefers-reduced-motion), so the observer path is used unconditionally
 * and reveals are instant for those users.
 */
export default function Reveal({
  children,
  className = "",
  threshold = 0.2,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={`${isRevealed ? "is-revealed" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
}
