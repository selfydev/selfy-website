import type { CSSProperties } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const VideoSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/SalsaMarketingVideo12.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay - 30% opacity */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 lg:px-24">
        <Reveal className="max-w-4xl">
          <h2
            className="reveal-item font-[family-name:var(--font-helvetica-now)] text-5xl sm:text-6xl md:text-7xl lg:text-[120px] font-medium text-white leading-[0.95] tracking-[-3px]"
            style={{ "--reveal-index": 0 } as CSSProperties}
          >
            Effortlessly
            <br />
            unforgettable
          </h2>
          <p
            className="reveal-item mt-6 text-base sm:text-lg md:text-xl max-w-md leading-relaxed"
            style={
              {
                color: "rgba(248, 248, 245, 0.6)",
                "--reveal-index": 1,
              } as CSSProperties
            }
          >
            The booth guests don&apos;t feel like they&apos;re using.
          </p>
          <Link
            href="/work"
            className="reveal-item press-scale inline-block mt-8 px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90"
            style={{ "--reveal-index": 2 } as CSSProperties}
          >
            Explore the experience
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default VideoSection;
