"use client";

import Link from "next/link";

const features = [
  {
    title: "Award-winning design",
    subtitle: "Built for modern events",
  },
  {
    title: "Seamless guest experience",
    subtitle: "SmartCapture™ technology",
  },
  {
    title: "Live insights & analytics",
    subtitle: "Know your users",
  },
];

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/videos/hero-poster.JPG"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 lg:px-12">
        {/* Main Content - Centered vertically with offset */}
        <div className="flex-1 flex items-center pt-20">
          <div className="animate-fade-in-up">
            {/* Headline */}
            <h1 className="font-[family-name:var(--font-helvetica-now)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-[0.95] tracking-tight max-w-4xl">
              Moments,
              <br />
              reinvented
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-white/80 text-base sm:text-lg md:text-xl max-w-md leading-relaxed">
              Meet the open-air photo booth that captures joy, connection, and
              insights - effortlessly.
            </p>

            {/* CTA Button */}
            <Link
              href="#discover"
              className="inline-block mt-8 px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors"
            >
              Discover Selfy
            </Link>
          </div>
        </div>

        {/* Bottom Features Bar */}
        <div className="pb-8 md:pb-12 animate-fade-in-up animation-delay-300">
          <div
            className="h-px w-full mb-6 md:mb-8"
            style={{ backgroundColor: "rgba(248, 248, 245, 0.15)" }}
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                {/* Feature Icon Placeholder */}
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5 rounded-full bg-white/30" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-sm">{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
