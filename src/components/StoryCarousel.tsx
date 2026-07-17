"use client";

import { useEffect, useRef, useState } from "react";

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

export default function StoryCarousel() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // 0-1 progress within current slide; the live value is read from
  // progressRef by the rAF loop, so only the setter is needed here.
  const [, setProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0); // Smoothed progress for display

  // Refs for synchronous state in wheel handler
  const activeIndexRef = useRef(0);
  const progressRef = useRef(0);
  const isLockedRef = useRef(false);
  const hasExitedRef = useRef<"up" | "down" | null>(null);
  const scrollAccumulator = useRef(0);
  const animationRef = useRef<number | null>(null);

  // Smooth animation loop for progress bar. Runs once; reads the live
  // target from progressRef, which is mutated wherever setProgress is called.
  useEffect(() => {
    const animate = () => {
      setDisplayProgress((current) => {
        const target = progressRef.current;
        const diff = target - current;

        // If progress jumps significantly (slide transition), snap
        if (Math.abs(diff) > 0.5) return target;

        // Lerp with easing
        if (Math.abs(diff) < 0.001) return target;
        return current + diff * 0.12;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Keep refs in sync
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!wrapperRef.current) return;

      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const direction = e.deltaY > 0 ? 1 : -1;

      const currentIndex = activeIndexRef.current;
      const currentProgress = progressRef.current;
      const currentLocked = isLockedRef.current;

      // If locked, handle scroll within carousel
      if (currentLocked) {
        e.preventDefault();
        e.stopPropagation();

        const atStart = currentIndex === 0 && currentProgress === 0;
        const atEnd = currentIndex === slides.length - 1 && currentProgress >= 1;

        // Exit up
        if (direction < 0 && atStart) {
          isLockedRef.current = false;
          hasExitedRef.current = "up";
          scrollAccumulator.current = 0;
          window.scrollBy({ top: -50, behavior: "auto" });
          return;
        }

        // Exit down
        if (direction > 0 && atEnd) {
          isLockedRef.current = false;
          hasExitedRef.current = "down";
          scrollAccumulator.current = 0;
          window.scrollBy({ top: 50, behavior: "auto" });
          return;
        }

        // Accumulate scroll
        scrollAccumulator.current += Math.abs(e.deltaY);

        // Calculate progress increment (slower scrolling = more control)
        const scrollSensitivity = 800; // Higher = slower scroll
        const progressIncrement = Math.abs(e.deltaY) / scrollSensitivity;

        if (direction > 0) {
          // Scrolling down
          const newProgress = currentProgress + progressIncrement;
          if (newProgress >= 1.15 && currentIndex < slides.length - 1) {
            // Move to next slide (with buffer to let bar fully complete)
            activeIndexRef.current = currentIndex + 1;
            progressRef.current = 0;
            setActiveIndex(currentIndex + 1);
            setProgress(0);
          } else {
            // Cap display at 1 but allow internal tracking past 1
            progressRef.current = newProgress;
            setProgress(newProgress);
          }
        } else {
          // Scrolling up
          const newProgress = currentProgress - progressIncrement;
          if (newProgress < -0.15 && currentIndex > 0) {
            // Move to previous slide (with buffer)
            activeIndexRef.current = currentIndex - 1;
            progressRef.current = 1;
            setActiveIndex(currentIndex - 1);
            setProgress(1);
          } else {
            progressRef.current = newProgress;
            setProgress(newProgress);
          }
        }
        return;
      }

      // Not locked - check if we should lock
      const isWrapperEngaged =
        wrapperRect.top <= 0 && wrapperRect.bottom > window.innerHeight;
      const isPastWrapper =
        wrapperRect.bottom <= window.innerHeight || wrapperRect.top > 0;

      if (isPastWrapper) {
        hasExitedRef.current = null;
      }

      if (hasExitedRef.current === "up" && direction < 0) return;
      if (hasExitedRef.current === "down" && direction > 0) return;

      if (isWrapperEngaged) {
        e.preventDefault();
        e.stopPropagation();

        // Set initial position based on entry direction
        if (direction < 0) {
          // Entering from below
          activeIndexRef.current = slides.length - 1;
          progressRef.current = 1;
          setActiveIndex(slides.length - 1);
          setProgress(1);
        } else {
          // Entering from above
          activeIndexRef.current = 0;
          progressRef.current = 0;
          setActiveIndex(0);
          setProgress(0);
        }

        isLockedRef.current = true;
        hasExitedRef.current = null;
        scrollAccumulator.current = 0;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full bg-black"
      style={{ height: "300vh" }}
    >
      <section className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Background Images/Videos */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              opacity: index === activeIndex ? 1 : 0,
              zIndex: index === activeIndex ? 1 : 0,
            }}
          >
            {slide.type === "video" ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={slide.image} type="video/mp4" />
              </video>
            ) : (
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            )}
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 lg:p-16">
          {/* Text Content */}
          <div className="mb-8">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="absolute bottom-48 left-8 lg:left-16 max-w-lg transition-opacity duration-500"
                style={{
                  opacity: index === activeIndex ? 1 : 0,
                  pointerEvents: index === activeIndex ? "auto" : "none",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "72px",
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

          {/* Progress Lines */}
          <div className="flex gap-4 w-full">
            {slides.map((slide, index) => {
              // Calculate fill percentage for this line using smoothed displayProgress
              // Clamp to 0-100 range for display
              let fillPercent = 0;
              if (index < activeIndex) {
                fillPercent = 100;
              } else if (index === activeIndex) {
                fillPercent = Math.max(0, Math.min(100, displayProgress * 100));
              }

              const handleClick = () => {
                activeIndexRef.current = index;
                progressRef.current = 0;
                setActiveIndex(index);
                setProgress(0);
                setDisplayProgress(0);
              };

              return (
                <div
                  key={index}
                  className="flex-1 cursor-pointer"
                  onClick={handleClick}
                >
                  {/* Progress Bar */}
                  <div
                    className="relative h-[2px] w-full overflow-hidden"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  >
                    <div
                      className="absolute top-0 left-0 h-full bg-white"
                      style={{
                        width: `${fillPercent}%`,
                        transition:
                          index === activeIndex
                            ? "none"
                            : "width 0.3s ease-out",
                      }}
                    />
                  </div>
                  {/* Label */}
                  <p
                    className="mt-4 hover:opacity-80 transition-opacity"
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "18px",
                      fontWeight: 500,
                      color:
                        index === activeIndex
                          ? "rgba(255, 255, 255, 0.9)"
                          : "rgba(255, 255, 255, 0.4)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {slide.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
