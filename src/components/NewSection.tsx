"use client";

import { useEffect, useRef, useState } from "react";

// Randomized gallery items (images and videos)
const galleryItems = [
  // Column 1
  [
    { src: "/images/gallery/14.jpg", type: "image" },
    { src: "/images/gallery/3.jpg", type: "image" },
    { src: "/images/gallery/19.mp4", type: "video" },
  ],
  // Column 2
  [
    { src: "/images/gallery/7.jpg", type: "image" },
    { src: "/images/gallery/18.jpg", type: "image" },
    { src: "/images/gallery/2.jpg", type: "image" },
  ],
  // Column 3
  [
    { src: "/images/gallery/11.jpg", type: "image" },
    { src: "/images/gallery/20.mp4", type: "video" },
    { src: "/images/gallery/5.jpg", type: "image" },
  ],
  // Column 4
  [
    { src: "/images/gallery/1.jpg", type: "image" },
    { src: "/images/gallery/16.jpg", type: "image" },
    { src: "/images/gallery/9.jpg", type: "image" },
  ],
  // Column 5
  [
    { src: "/images/gallery/21.mp4", type: "video" },
    { src: "/images/gallery/4.jpg", type: "image" },
    { src: "/images/gallery/13.jpg", type: "image" },
  ],
  // Column 6
  [
    { src: "/images/gallery/8.jpg", type: "image" },
    { src: "/images/gallery/15.jpg", type: "image" },
    { src: "/images/gallery/6.jpg", type: "image" },
  ],
  // Column 7
  [
    { src: "/images/gallery/10.jpg", type: "image" },
    { src: "/images/gallery/17.jpg", type: "image" },
    { src: "/images/gallery/12.jpg", type: "image" },
  ],
];

// Calculate offset multiplier based on distance from center
// Center column (index 3) has highest multiplier, outer columns have lowest
const getColumnMultiplier = (colIndex: number) => {
  const centerIndex = 3;
  const distance = Math.abs(colIndex - centerIndex);
  // Multipliers: center=1.0, ±1=0.7, ±2=0.4, ±3=0.15
  const multipliers = [0.15, 0.4, 0.7, 1.0, 0.7, 0.4, 0.15];
  return multipliers[colIndex];
};

export default function NewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start animation when ~25% of section is visible (top of section is 75% down viewport)
      const triggerPoint = windowHeight * 0.75;

      if (rect.top < triggerPoint && rect.bottom > 0) {
        // Calculate progress from when section enters to when we've scrolled through
        const scrolled = triggerPoint - rect.top;
        const totalScrollDistance = rect.height + triggerPoint;
        const progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));
        setScrollProgress(progress);
      } else {
        // Section not yet visible - keep columns aligned
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maxOffset = 350; // Maximum pixels the center column will move down

  return (
    <section
      ref={sectionRef}
      className="w-full py-24"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      {/* Header */}
      <div className="text-center mb-16 px-6">
        <h2
          style={{
            fontFamily: "var(--font-helvetica-now)",
            fontSize: "72px",
            fontWeight: 500,
            color: "#1D1D1D",
            lineHeight: 1.1,
          }}
        >
          You're not just collecting photos.
        </h2>
        <p
          className="mt-4 max-w-2xl mx-auto"
          style={{
            fontFamily: "var(--font-helvetica-now)",
            fontSize: "20px",
            fontWeight: 400,
            color: "#888888",
            lineHeight: 1.5,
          }}
        >
          You're creating experiences. Together, we've powered events of every size, turning real moments into memories, and memories into measurable impact.
        </p>
      </div>

      {/* Gallery Grid - 7 columns with staggered scroll effect */}
      <div className="flex gap-3" style={{ padding: "0 120px" }}>
        {galleryItems.map((column, colIndex) => {
          const multiplier = getColumnMultiplier(colIndex);
          const offset = scrollProgress * maxOffset * multiplier;

          return (
            <div
              key={colIndex}
              className="flex-1 flex flex-col gap-3"
              style={{
                transform: `translateY(${offset}px)`,
              }}
            >
              {column.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="relative w-full rounded-lg overflow-hidden"
                  style={{ aspectRatio: "9/16" }}
                >
                  {item.type === "video" ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${item.src})`,
                        backgroundColor: "#E0E0E0",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
