"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface ShowcaseItem {
  image: string;
  alt: string;
}

interface ShowcaseContent {
  title: string;
  features: string[];
  items: ShowcaseItem[];
}

const showcaseData: Record<"events" | "corporate", ShowcaseContent> = {
  events: {
    title: "The crowd-pleaser",
    features: [
      "Open-air design",
      "Lightweight & portable",
      "Touch-free capture",
      "High-quality captures",
      "Real-time sharing",
      "Built-in analytics",
    ],
    items: [
      { image: "/images/showcase/events-1.PNG", alt: "Wedding photo booth" },
      { image: "/images/showcase/events-2.PNG", alt: "Party celebration" },
      { image: "/images/showcase/events-3.PNG", alt: "Birthday event" },
    ],
  },
  corporate: {
    title: "The professional",
    features: [
      "Brand customization",
      "Data collection",
      "Lead generation",
      "Custom overlays",
      "Analytics dashboard",
      "White-label options",
    ],
    items: [
      { image: "/images/showcase/corporate-1.png", alt: "Corporate event" },
      { image: "/images/showcase/corporate-2.png", alt: "Brand activation" },
      { image: "/images/showcase/corporate-3.png", alt: "Company celebration" },
    ],
  },
};

const Showcase = () => {
  const [activeCategory, setActiveCategory] = useState<"events" | "corporate">("events");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageTransitioning, setIsImageTransitioning] = useState(false);
  const [isCategoryTransitioning, setIsCategoryTransitioning] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isOverToggle, setIsOverToggle] = useState(false);
  const [isOverContent, setIsOverContent] = useState(false);
  const [isOverControls, setIsOverControls] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const pillPosition = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  const content = showcaseData[activeCategory];

  // Auto-play carousel
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      goToNext();
    }, 5000);
  }, []);

  const goToNext = useCallback(() => {
    if (isImageTransitioning) return;
    setIsImageTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % content.items.length);
    setTimeout(() => setIsImageTransitioning(false), 500);
  }, [content.items.length, isImageTransitioning]);

  const goToPrev = useCallback(() => {
    if (isImageTransitioning) return;
    setIsImageTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + content.items.length) % content.items.length);
    setTimeout(() => setIsImageTransitioning(false), 500);
  }, [content.items.length, isImageTransitioning]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [startAutoPlay, activeCategory]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Smooth cursor trailing animation
  useEffect(() => {
    const animate = () => {
      // Lerp (linear interpolation) for smooth trailing
      const ease = 0.15;
      pillPosition.current.x += (mousePosition.current.x - pillPosition.current.x) * ease;
      pillPosition.current.y += (mousePosition.current.y - pillPosition.current.y) * ease;

      if (pillRef.current) {
        pillRef.current.style.transform = `translate(${pillPosition.current.x + 24}px, ${pillPosition.current.y + 24}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    mousePosition.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  const handleCategoryChange = (category: "events" | "corporate") => {
    if (category !== activeCategory) {
      setIsCategoryTransitioning(true);
      setTimeout(() => {
        setActiveCategory(category);
        setIsCategoryTransitioning(false);
      }, 300);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Gradient Background - changes based on category */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] transition-all duration-500"
        style={{
          background: activeCategory === "events"
            ? "linear-gradient(to top, rgba(230,240,250,1) 0%, rgba(240,247,255,0.8) 30%, rgba(255,255,255,1) 100%)"
            : "linear-gradient(to top, rgba(255,240,230,1) 0%, rgba(255,247,240,0.8) 30%, rgba(255,255,255,1) 100%)",
        }}
      />

      {/* Carousel Images - reduced height on mobile, full on desktop, cut off at bottom, above gradient */}
      <div className="absolute inset-x-0 bottom-0 h-[67vh] lg:h-full z-[2]">
        {content.items.map((item, index) => {
          const isCorporate2 = item.image.includes("corporate-2");
          return (
            <div
              key={`${activeCategory}-${index}`}
              className={`absolute inset-x-0 bottom-0 transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              } ${isCorporate2 ? "h-[55vh] lg:h-full" : "h-full"}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="100vw"
                className="object-cover lg:object-contain object-bottom"
                priority={index === 0}
              />
            </div>
          );
        })}
      </div>


      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 lg:px-24 py-16 lg:py-24">
        {/* Top Row: Title and Toggle */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-0">
          {/* Toggle - First on mobile */}
          <div
            className="flex items-center rounded-full p-1 order-1 lg:order-2"
            style={{ backgroundColor: "rgba(29, 29, 29, 0.05)" }}
            onMouseEnter={() => setIsOverToggle(true)}
            onMouseLeave={() => setIsOverToggle(false)}
          >
            <button
              onClick={() => handleCategoryChange("events")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === "events"
                  ? "bg-white text-black"
                  : "text-black/60 hover:text-black/80"
              }`}
            >
              Events
            </button>
            <button
              onClick={() => handleCategoryChange("corporate")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === "corporate"
                  ? "bg-white text-black"
                  : "text-black/60 hover:text-black/80"
              }`}
            >
              Corporate
            </button>
          </div>

          {/* Title and Features - Second on mobile */}
          <div
            className={`transition-opacity duration-300 order-2 lg:order-1 text-center lg:text-left ${isCategoryTransitioning ? "opacity-0" : "opacity-100"}`}
            onMouseEnter={() => setIsOverContent(true)}
            onMouseLeave={() => setIsOverContent(false)}
          >
            <h2
              className="font-[family-name:var(--font-helvetica-now)] text-[28px] lg:text-[40px] font-medium leading-tight"
              style={{ color: "#1D1D1D", letterSpacing: "-1px" }}
            >
              {content.title}
            </h2>
            {/* Feature Pills */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 max-w-md mx-auto lg:mx-0">
              {content.features.map((feature, index) => (
                <div
                  key={index}
                  className="font-[family-name:var(--font-inter)] text-[12px] font-normal px-4 py-2.5 rounded-full"
                  style={{ color: "#1D1D1D", backgroundColor: "rgba(29, 29, 29, 0.05)" }}
                >
                  + {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row: Navigation Arrows and Mobile Explore */}
        <div
          className="flex items-center justify-between"
          onMouseEnter={() => setIsOverControls(true)}
          onMouseLeave={() => setIsOverControls(false)}
        >
          <div className="flex items-center gap-3">
          <button
            onClick={goToPrev}
            disabled={isImageTransitioning}
            className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity disabled:opacity-50"
            style={{ border: "1px solid rgba(29, 29, 29, 0.2)", color: "rgba(29, 29, 29, 0.2)" }}
            aria-label="Previous slide"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            disabled={isImageTransitioning}
            className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity disabled:opacity-50"
            style={{ border: "1px solid rgba(29, 29, 29, 0.2)", color: "rgba(29, 29, 29, 0.2)" }}
            aria-label="Next slide"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Slide Indicators - hidden on mobile */}
          <div className="hidden lg:flex items-center gap-2 ml-4">
            {content.items.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isImageTransitioning) {
                    setIsImageTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsImageTransitioning(false), 500);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-6" : "w-2"
                }`}
                style={{ backgroundColor: "rgba(29, 29, 29, 0.2)" }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          </div>

          {/* Mobile Explore Button */}
          <div className="lg:hidden bg-black text-white px-6 py-3 rounded-full text-sm font-medium">
            Explore
          </div>
        </div>
      </div>

      {/* Cursor-following Explore Pill - Desktop only */}
      <div
        ref={pillRef}
        className={`hidden lg:block fixed pointer-events-none z-50 mix-blend-difference ${
          isHovering && !isOverToggle && !isOverContent && !isOverControls ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        style={{
          left: 0,
          top: 0,
          transition: "opacity 0.2s ease, scale 0.2s ease",
        }}
      >
        <div className="bg-white text-black px-8 py-4 rounded-full text-sm font-medium whitespace-nowrap">
          Explore
        </div>
      </div>
    </section>
  );
};

export default Showcase;
