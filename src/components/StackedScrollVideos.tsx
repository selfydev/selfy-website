"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function StackedScrollVideos() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !videoContainerRef.current || !textRef.current) return;

    const section = sectionRef.current;
    const videoContainer = videoContainerRef.current;
    const text = textRef.current;

    const ctx = gsap.context(() => {
      // Phase 1: Grow video from initial size to full viewport.
      // Centering is done purely via `left` (7.5vw -> 0) so there is no
      // width-dependent transform to freeze when ScrollTrigger refreshes.
      gsap.to(videoContainer, {
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      // Phase 2: Animate text into view (after video is full screen)
      gsap.fromTo(
        text,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=100%",
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F5F5F5]"
    >
      {/* Total scroll height: 120vh for growth + 100vh for text scroll */}
      <div style={{ height: "220vh" }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Single video container */}
          <div
            ref={videoContainerRef}
            className="absolute overflow-hidden"
            style={{
              width: "85vw",
              height: "55vh",
              top: "5%",
              left: "7.5vw",
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
              className="w-full h-full object-cover"
            >
              <source src="/videos/SalsaMarketingVideo20.mp4" type="video/mp4" />
            </video>

            {/* 30% black overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Bottom gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, #1D1D1D 0%, transparent 50%)",
              }}
            />

            {/* Text content - scrolls into view over the SAME video */}
            <div
              ref={textRef}
              className="absolute inset-0 flex items-center justify-center z-10"
            >
              <div className="text-center px-6 max-w-3xl">
                <span className="text-white text-sm tracking-wide mb-4 block">
                  SmartCapture™
                </span>

                <h2
                  className="text-5xl md:text-7xl font-medium text-white mb-8"
                  style={{ fontFamily: "'Helvetica Now Display Medium', sans-serif" }}
                >
                  Powerful behind<br />the scenes
                </h2>

                <div className="flex justify-center gap-8 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">Natural<br />interactions</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">Instant<br />capture</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">Thoughtfully<br />designed</span>
                  </div>
                </div>

                <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                  Selfy&apos;s intelligent open-air design adapts to every space and every guest, capturing authentic reactions in real time. No friction. No disruption. Just moments as they happen.
                </p>

                <Link href="/contact" className="press-scale inline-block bg-white text-[#1D1D1D] px-8 py-4 rounded-full font-medium text-lg hover:bg-white/90">
                  Book your event
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
