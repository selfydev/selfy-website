"use client";

import { useEffect, useRef } from "react";

const pressItems = [
  {
    logo: "Mashable",
    quote: "That fork!",
  },
  {
    logo: "Wallpaper*",
    quote: "A new e-bike glides into town",
  },
  {
    logo: "TC",
    quote: '"Best e-bike for commuters"',
  },
  {
    logo: "reddot winner",
    quote: "best of the best",
  },
  {
    logo: "The Verge",
    quote: '"It\'s truly a beast in all the best possible ways"',
  },
];

const CardItem = ({ item }: { item: typeof pressItems[0] }) => (
  <div className="w-[280px] lg:w-[320px] flex-shrink-0">
    <div className="bg-white rounded-2xl p-8 h-[180px] flex flex-col items-center justify-center text-center">
      <div className="font-[family-name:var(--font-helvetica-now)] text-xl lg:text-2xl font-bold text-[#1D1D1D] mb-3">
        {item.logo}
      </div>
      <p className="text-sm text-[#1D1D1D]/60 leading-relaxed">
        {item.quote}
      </p>
    </div>
  </div>
);

const PressCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const positionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const firstSet = scrollContainer.querySelector('[data-set="first"]') as HTMLElement;
    if (!firstSet) return;

    const startAnimation = () => {
      const resetPoint = firstSet.offsetWidth + 24; // width of one set + gap
      const speed = 0.5; // pixels per frame

      const animate = () => {
        positionRef.current += speed;

        if (positionRef.current >= resetPoint) {
          positionRef.current = 0;
        }

        scrollContainer.style.transform = `translateX(-${positionRef.current}px)`;
        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    const timer = setTimeout(startAnimation, 200);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full py-16 lg:py-24 bg-[#F5F5F5] overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-6 will-change-transform"
        style={{ width: 'max-content' }}
      >
        {/* First set - this is what we measure for the reset point */}
        <div data-set="first" className="flex gap-6">
          {pressItems.map((item, index) => (
            <CardItem key={`set1-${index}`} item={item} />
          ))}
        </div>
        {/* Additional sets to fill the viewport */}
        <div className="flex gap-6">
          {pressItems.map((item, index) => (
            <CardItem key={`set2-${index}`} item={item} />
          ))}
        </div>
        <div className="flex gap-6">
          {pressItems.map((item, index) => (
            <CardItem key={`set3-${index}`} item={item} />
          ))}
        </div>
        <div className="flex gap-6">
          {pressItems.map((item, index) => (
            <CardItem key={`set4-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressCarousel;
