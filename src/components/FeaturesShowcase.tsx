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

interface Feature {
  name: string;
  image: string;
  caption: string;
}

const features: Feature[] = [
  { name: "Open-air design", image: "/images/features/open-air-design.JPG", caption: "Feels social, natural, and effortless." },
  { name: "Compact footprint", image: "/images/features/compact-footprint.JPG", caption: "Fits beautifully into any space." },
  { name: "Lightweight build", image: "/images/features/lightweight-build.JPG", caption: "Move it easily. Set up fast." },
  { name: "Studio-quality camera", image: "/images/features/studio-camera.JPG", caption: "Crisp photos, every single time." },
  { name: "Professional lighting system", image: "/images/features/lighting-system.JPG", caption: "Flattering light, day or night." },
  { name: "Touchscreen interface", image: "/images/features/touchscreen.JPG", caption: "Tap. Pose. Done in seconds." },
  { name: "Touch-free capture option", image: "/images/features/touch-free.JPG", caption: "Hands-free moments, zero interruption." },
  { name: "Instant photo sharing", image: "/images/features/photo-sharing.JPG", caption: "Photos delivered instantly via QR." },
  { name: "Custom branding & overlays", image: "/images/features/custom-branding.JPG", caption: "Make every shot feel on-brand." },
  { name: "Live gallery view", image: "/images/features/live-gallery.jpg", caption: "Watch memories appear in real-time." },
  { name: "Built-in analytics", image: "/images/features/analytics.JPG", caption: "Track engagement as it happens." },
  { name: "Secure cloud storage", image: "/images/features/cloud-storage.JPG", caption: "Everything saved safely in the cloud." },
  { name: "Fast setup & teardown", image: "/images/features/fast-setup.JPG", caption: "Ready in minutes, packed up fast." },
  { name: "Remote system monitoring", image: "/images/features/remote-monitoring.JPG", caption: "Stay in control, wherever you are." },
  { name: "Event-ready reliability", image: "/images/features/reliability.JPG", caption: "Built to perform under pressure." },
];

const N = features.length;
// Uniform slot height for every heading; one and two-line names both centre
// inside this box, so the vertical rhythm stays even regardless of length.
const ITEM_HEIGHT = 88;
// Scroll distance allotted to each feature transition, as a fraction of the
// viewport height. The section stays pinned for (N-1) * STEP_FACTOR screens.
const STEP_FACTOR = 0.2;

export default function FeaturesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const lastIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const section = sectionRef.current;
    const list = listRef.current;
    if (!section || !list) return;

    const ctx = gsap.context(() => {
      const total = () => window.innerHeight * STEP_FACTOR * (N - 1);

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${total()}`,
        pin: true,
        pinSpacing: true,
        scrub: true,
        // Settle on each feature when scrolling stops.
        snap: {
          snapTo: 1 / (N - 1),
          duration: { min: 0.15, max: 0.5 },
          ease: "power1.inOut",
        },
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const raw = self.progress * (N - 1);
          // Drive the list position directly for a smooth scrub, no re-render.
          list.style.transform = `translateY(-${raw * ITEM_HEIGHT}px)`;
          const idx = Math.round(raw);
          if (idx !== lastIndexRef.current) {
            lastIndexRef.current = idx;
            setActiveIndex(idx);
          }
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  // Reduced-motion / no-JS friendly fallback: a plain vertical list, no pin.
  if (reducedMotion) {
    return (
      <div className="w-full bg-[#1D1D1D] px-6 py-20 lg:px-24">
        <p
          className="mb-10 text-[#F5F5F5]"
          style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "20px", fontWeight: 500 }}
        >
          Packed with intelligence.
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.name} className="overflow-hidden rounded-lg bg-[#2a2a2a]">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url(${feature.image})` }}
              />
              <div className="p-6">
                <h3
                  className="text-white"
                  style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "28px", fontWeight: 500 }}
                >
                  {feature.name}
                </h3>
                <p className="mt-2 text-white/60 text-sm">{feature.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <p
          className="mt-12 text-[#F5F5F5]"
          style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "20px", fontWeight: 500 }}
        >
          Beautifully simple.
        </p>
      </div>
    );
  }

  const atStart = activeIndex === 0;
  const atEnd = activeIndex === N - 1;

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-[#1D1D1D] overflow-hidden">
      <div className="h-full w-full p-6 lg:p-[120px]">
        <div className="h-full w-full flex flex-col lg:flex-row gap-3">
          {/* Heading list */}
          <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full bg-white rounded-lg overflow-hidden order-2 lg:order-1">
            {/* Intro label, fades out once you move past the first feature */}
            <div
              className="absolute top-0 left-0 z-10 pt-6 pl-6 lg:pt-10 lg:pl-16"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "18px",
                fontWeight: 500,
                color: "#1D1D1D",
                opacity: atStart ? 1 : 0,
                transition: "opacity 0.4s ease",
              }}
            >
              Packed with intelligence.
            </div>

            {/* Vertically centred window; the list translates within it */}
            <div
              className="absolute left-6 right-6 lg:left-16 lg:right-8"
              style={{ top: "50%", transform: `translateY(-${ITEM_HEIGHT / 2}px)` }}
            >
              <div ref={listRef} style={{ willChange: "transform" }}>
                {features.map((feature, index) => {
                  const distance = Math.abs(index - activeIndex);
                  const opacity = index === activeIndex ? 1 : Math.max(0.18, 0.4 - distance * 0.06);
                  return (
                    <div
                      key={feature.name}
                      className="flex items-center"
                      style={{
                        height: `${ITEM_HEIGHT}px`,
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "clamp(26px, 4vw, 42px)",
                        fontWeight: 500,
                        lineHeight: 1.05,
                        color: `rgba(29, 29, 29, ${opacity})`,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {feature.name}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Outro label, fades in on the final feature */}
            <div
              className="absolute bottom-0 left-0 pb-6 pl-6 lg:pb-10 lg:pl-16"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "18px",
                fontWeight: 500,
                color: "#1D1D1D",
                opacity: atEnd ? 1 : 0,
                transition: "opacity 0.4s ease",
              }}
            >
              Beautifully simple.
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full rounded-lg overflow-hidden order-1 lg:order-2 bg-[#2a2a2a]">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className="absolute inset-0"
                style={{
                  opacity: index === activeIndex ? 1 : 0,
                  transition: "opacity 0.45s ease",
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${feature.image})` }}
                />
                <div className="absolute bottom-6 right-6">
                  <div className="px-3 py-2 rounded-md" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
                    <p
                      className="text-[14px] tracking-wide"
                      style={{ fontFamily: "var(--font-helvetica-now)", color: "#FFFFFF" }}
                    >
                      {feature.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
