"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function useReducedMotion(): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(REDUCED_MOTION_QUERY);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

interface Slide {
  image: string;
  type: "image" | "video";
  label: string;
  heading: string;
  body: string;
}

const slides: Slide[] = [
  {
    image: "/images/story/experience.JPG",
    type: "image",
    label: "01. The Experience",
    heading: "Feels effortless. Looks incredible.",
    body: "Guests just step in and Selfy takes care of the rest.",
  },
  {
    image: "/images/story/design.mp4",
    type: "video",
    label: "02. The Design",
    heading: "Beautifully minimal. Surprisingly capable.",
    body: "A sleek open-air booth that fits anywhere.",
  },
  {
    image: "/images/story/capture.JPG",
    type: "image",
    label: "03. The Capture",
    heading: "Candid moments, perfectly timed.",
    body: "Less posing. More real reactions.",
  },
  {
    image: "/images/story/insights.jpg",
    type: "image",
    label: "04. The Insights",
    heading: "Know what landed. Instantly.",
    body: "Real-time analytics, without extra tools.",
  },
];

const N = slides.length;
// Screens of scrolling allotted to each slide; the section stays pinned for
// N * PER_SLIDE_FACTOR viewport heights.
const PER_SLIDE_FACTOR = 1;

export default function StoryCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stRef = useRef<ScrollTrigger | null>(null);
  const lastIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const total = () => window.innerHeight * PER_SLIDE_FACTOR * N;

      stRef.current = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${total()}`,
        pin: true,
        pinSpacing: true,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const overall = self.progress * N; // 0..N
          const idx = Math.min(N - 1, Math.floor(overall));
          const within = Math.max(0, Math.min(1, overall - idx));

          // Drive each bar's fill directly for a smooth scrub (no re-render).
          for (let i = 0; i < N; i++) {
            const bar = barRefs.current[i];
            if (!bar) continue;
            const fill = i < idx ? 1 : i === idx ? within : 0;
            bar.style.width = `${fill * 100}%`;
          }

          if (idx !== lastIndexRef.current) {
            lastIndexRef.current = idx;
            setActiveIndex(idx);
          }
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  // Smooth-scroll the page to a given slide's position within the pinned region.
  const scrollToSlide = (index: number) => {
    const st = stRef.current;
    if (!st) return;
    const target = st.start + (index / N) * (st.end - st.start);
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  if (reducedMotion) {
    return (
      <div className="w-full bg-black">
        {slides.map((slide) => (
          <section key={slide.label} className="relative w-full h-screen overflow-hidden">
            {slide.type === "video" ? (
              <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src={slide.image} type="video/mp4" />
              </video>
            ) : (
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
            )}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 lg:p-16">
              <p className="mb-4 text-white/70" style={{ fontFamily: "var(--font-helvetica-now)", fontWeight: 500 }}>
                {slide.label}
              </p>
              <h2
                className="mb-4 text-white"
                style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "clamp(30px, 5.5vw, 72px)", fontWeight: 500, lineHeight: 1.1 }}
              >
                {slide.heading}
              </h2>
              <p className="max-w-lg text-white/70" style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "18px", lineHeight: 1.6 }}>
                {slide.body}
              </p>
            </div>
          </section>
        ))}
      </div>
    );
  }

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-black overflow-hidden">
      {/* Backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: index === activeIndex ? 1 : 0, zIndex: index === activeIndex ? 1 : 0 }}
        >
          {slide.type === "video" ? (
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src={slide.image} type="video/mp4" />
            </video>
          ) : (
            <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
          )}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 lg:p-16">
        {/* Text (one per slide, cross-faded) */}
        <div className="relative mb-8 h-[220px] lg:h-[240px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="absolute bottom-0 left-0 max-w-lg transition-opacity duration-500"
              style={{ opacity: index === activeIndex ? 1 : 0, pointerEvents: index === activeIndex ? "auto" : "none" }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "clamp(30px, 5.5vw, 72px)",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  marginBottom: "16px",
                }}
              >
                {slide.heading}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "rgba(255, 255, 255, 0.7)",
                  lineHeight: 1.6,
                }}
              >
                {slide.body}
              </p>
            </div>
          ))}
        </div>

        {/* Progress bars + labels */}
        <div className="flex gap-4 w-full">
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              className="flex-1 text-left cursor-pointer"
              onClick={() => scrollToSlide(index)}
              aria-label={`Go to ${slide.label}`}
            >
              <div className="relative h-[2px] w-full overflow-hidden" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                <div
                  ref={(el) => {
                    barRefs.current[index] = el;
                  }}
                  className="absolute top-0 left-0 h-full bg-white"
                  style={{ width: index < activeIndex ? "100%" : "0%" }}
                />
              </div>
              <p
                className="mt-4 hover:opacity-80 transition-opacity"
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "18px",
                  fontWeight: 500,
                  color: index === activeIndex ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.4)",
                  transition: "color 0.3s ease",
                }}
              >
                {slide.label}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
