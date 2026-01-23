"use client";

import { useEffect, useRef, useState } from "react";

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

const ITEM_HEIGHT = 68;

export default function FeaturesShowcase() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showEndText, setShowEndText] = useState(false);

  // Use refs for synchronous state tracking in wheel handler
  const activeIndexRef = useRef(0);
  const showEndTextRef = useRef(false);
  const isLockedRef = useRef(false);
  const hasExitedRef = useRef<'up' | 'down' | null>(null);
  const scrollAccumulator = useRef(0);

  // Keep refs in sync with state
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    showEndTextRef.current = showEndText;
  }, [showEndText]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current || !wrapperRef.current) return;

      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const direction = e.deltaY > 0 ? 1 : -1;

      // Read current values from refs (synchronous) - MUST read before any checks
      const currentIndex = activeIndexRef.current;
      const currentShowEndText = showEndTextRef.current;
      const currentLocked = isLockedRef.current;

      // IF LOCKED: Handle everything here and return early
      if (currentLocked) {
        // ALWAYS prevent default when locked - no exceptions
        e.preventDefault();
        e.stopPropagation();

        // Define exit conditions
        const atStart = currentIndex === 0 && !currentShowEndText;
        const atEnd = currentIndex === features.length - 1 && currentShowEndText;

        // Check for exit
        if (direction < 0 && atStart) {
          // Exit up
          isLockedRef.current = false;
          hasExitedRef.current = 'up';
          scrollAccumulator.current = 0;
          window.scrollBy({ top: -50, behavior: 'auto' });
          return;
        }

        if (direction > 0 && atEnd) {
          // Exit down
          isLockedRef.current = false;
          hasExitedRef.current = 'down';
          scrollAccumulator.current = 0;
          window.scrollBy({ top: 50, behavior: 'auto' });
          return;
        }

        // Not exiting - accumulate scroll and navigate
        scrollAccumulator.current += Math.abs(e.deltaY);

        // Threshold for feature change
        if (scrollAccumulator.current < 25) return;
        scrollAccumulator.current = 0;

        // Navigate features
        if (direction > 0) {
          // Scrolling down
          if (currentIndex < features.length - 1) {
            const newIndex = currentIndex + 1;
            activeIndexRef.current = newIndex;
            showEndTextRef.current = false;
            setActiveIndex(newIndex);
            setShowEndText(false);
          } else if (!currentShowEndText) {
            showEndTextRef.current = true;
            setShowEndText(true);
          }
        } else {
          // Scrolling up
          if (currentShowEndText) {
            showEndTextRef.current = false;
            setShowEndText(false);
          } else if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            activeIndexRef.current = newIndex;
            setActiveIndex(newIndex);
          }
        }
        return;
      }

      // NOT LOCKED: Check if we should lock

      // Check if wrapper is in the "engaged" zone
      const isWrapperEngaged = wrapperRect.top <= 0 && wrapperRect.bottom > window.innerHeight;

      // Check if we've scrolled past the wrapper
      const isPastWrapper = wrapperRect.bottom <= window.innerHeight || wrapperRect.top > 0;

      // Reset exit state when past wrapper
      if (isPastWrapper) {
        hasExitedRef.current = null;
      }

      // Don't re-lock if we just exited in the same direction
      if (hasExitedRef.current === 'up' && direction < 0) return;
      if (hasExitedRef.current === 'down' && direction > 0) return;

      // Lock when wrapper is engaged
      if (isWrapperEngaged) {
        e.preventDefault();
        e.stopPropagation();

        // Set initial position based on entry direction
        if (direction < 0) {
          // Entering from below
          activeIndexRef.current = features.length - 1;
          showEndTextRef.current = true;
          setActiveIndex(features.length - 1);
          setShowEndText(true);
        } else {
          // Entering from above
          activeIndexRef.current = 0;
          showEndTextRef.current = false;
          setActiveIndex(0);
          setShowEndText(false);
        }

        isLockedRef.current = true;
        hasExitedRef.current = null;
        scrollAccumulator.current = 0;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const listOffset = activeIndex * ITEM_HEIGHT;

  return (
    <div
      ref={wrapperRef}
      className="relative w-full bg-[#1D1D1D]"
      style={{ height: "200vh" }}
    >
      <section
        ref={sectionRef}
        className="sticky top-0 w-full bg-[#1D1D1D]"
        style={{ height: "100vh" }}
      >
        <div className="h-screen w-full overflow-hidden">
          <div className="h-full w-full" style={{ padding: "120px" }}>
            <div className="h-full w-full flex gap-2">
              {/* Left Side - Feature List */}
              <div className="w-1/2 h-full bg-[#FFFFFF] relative overflow-hidden flex flex-col rounded-lg">
                {/* Scrolling container - everything inside scrolls together */}
                <div
                  className="absolute inset-0"
                  style={{
                    transform: `translateY(-${listOffset}px)`,
                  }}
                >
                  {/* Header text - at top */}
                  <div
                    className="pt-10 pl-28 pb-6"
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                    }}
                  >
                    Packed with intelligence.
                  </div>

                  {/* Feature items - positioned at 42% from top */}
                  <div
                    className="absolute left-28 right-6"
                    style={{ top: "42%" }}
                  >
                    {features.map((feature, index) => {
                      const distance = Math.abs(index - activeIndex);
                      const opacity = index === activeIndex ? 1 : Math.max(0.2, 0.4 - distance * 0.05);

                      return (
                        <div
                          key={feature.name}
                          className="flex items-center"
                          style={{
                            height: `${ITEM_HEIGHT}px`,
                            fontFamily: "var(--font-helvetica-now)",
                            fontSize: "44px",
                            fontWeight: 500,
                            lineHeight: 1.1,
                            color: `rgba(29, 29, 29, ${opacity})`,
                          }}
                        >
                          {feature.name}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer text - fixed at bottom */}
                <div
                  className="absolute bottom-0 left-0 pb-10 pl-28 pt-6"
                  style={{ opacity: showEndText ? 1 : 0 }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#1D1D1D",
                    }}
                  >
                    Beautifully simple.
                  </p>
                </div>
              </div>

              {/* Right Side - Feature Image */}
              <div className="w-1/2 h-full relative overflow-hidden rounded-lg">
                {features.map((feature, index) => (
                  <div
                    key={feature.name}
                    className="absolute inset-0"
                    style={{
                      opacity: index === activeIndex ? 1 : 0,
                      pointerEvents: index === activeIndex ? "auto" : "none",
                    }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${feature.image})`,
                        backgroundColor: "#2a2a2a",
                      }}
                    />

                    <div className="absolute bottom-6 right-6">
                      <div
                        className="px-3 py-2 rounded-md"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                      >
                        <p
                          className="text-[14px] tracking-wide"
                          style={{
                            fontFamily: "var(--font-helvetica-now)",
                            color: "#FFFFFF",
                          }}
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
        </div>
      </section>
    </div>
  );
}
