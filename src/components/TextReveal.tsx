"use client";

import { useEffect, useRef, useState } from "react";

const line1 = "Designed to feel invisible.";
const line2 = "Built to be unforgettable.";
const totalChars = line1.length + line2.length;

const TextReveal = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [revealedChars, setRevealedChars] = useState(0);
  const targetCharsRef = useRef(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;

      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Track the text element's center, not the section's center
      const textCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;

      // Start revealing when text enters viewport from bottom
      // Complete when text center reaches viewport center
      const startPoint = windowHeight;
      const endPoint = viewportCenter;

      const progress = 1 - (textCenter - endPoint) / (startPoint - endPoint);
      const clampedProgress = Math.max(0, Math.min(1, progress));

      // Calculate target characters to reveal (whole numbers only)
      targetCharsRef.current = Math.round(clampedProgress * totalChars);
    };

    // Smooth animation loop
    const animate = () => {
      setRevealedChars((current) => {
        const target = targetCharsRef.current;
        if (current === target) return current;

        // Lerp towards target for smooth animation
        const diff = target - current;
        const step = diff > 0 ? Math.max(0.5, diff * 0.15) : Math.min(-0.5, diff * 0.15);
        const next = current + step;

        // Snap to target when close enough
        if (Math.abs(target - next) < 0.5) return target;
        return next;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Round to get whole characters for rendering
  const charsToReveal = Math.round(revealedChars);
  const line1Revealed = Math.min(charsToReveal, line1.length);
  const line2Revealed = Math.max(0, charsToReveal - line1.length);

  return (
    <section
      ref={sectionRef}
      className="w-full flex items-start justify-center bg-[#F5F5F5] px-6 lg:px-24 pt-24 lg:pt-32 pb-[50px]"
    >
      <h2
        ref={textRef}
        className="font-[family-name:var(--font-helvetica-now)] text-[36px] md:text-[56px] lg:text-[72px] font-medium text-center leading-[1.05] max-w-5xl"
        style={{ letterSpacing: "-2px" }}
      >
        <span className="inline-block pb-1">
          {line1.split("").map((char, i) => (
            <span
              key={`l1-${i}`}
              style={{
                color: i < line1Revealed ? "#1D1D1D" : "#D1D1D1",
                transition: "color 0.1s ease-out",
              }}
            >
              {char}
            </span>
          ))}
        </span>
        <br />
        <span className="inline-block pb-1">
          {line2.split("").map((char, i) => (
            <span
              key={`l2-${i}`}
              style={{
                color: i < line2Revealed ? "#1D1D1D" : "#D1D1D1",
                transition: "color 0.1s ease-out",
              }}
            >
              {char}
            </span>
          ))}
        </span>
      </h2>
    </section>
  );
};

export default TextReveal;
