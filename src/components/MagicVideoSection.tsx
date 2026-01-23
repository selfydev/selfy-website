"use client";

import { useEffect, useRef, useState } from "react";

const MagicVideoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [videoScale, setVideoScale] = useState(0.7);
  const [isSticky, setIsSticky] = useState(false);
  const [textProgress, setTextProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !videoContainerRef.current) return;

      const section = sectionRef.current;
      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scaleStartPoint = windowHeight;
      const scaleEndPoint = 0;
      const scaleProgress = 1 - (sectionRect.top - scaleEndPoint) / (scaleStartPoint - scaleEndPoint);
      const clampedScaleProgress = Math.max(0, Math.min(1, scaleProgress));

      const newScale = 0.7 + (clampedScaleProgress * 0.3);
      setVideoScale(newScale);

      const shouldBeSticky = sectionRect.top <= 0 && sectionRect.bottom > windowHeight;
      setIsSticky(shouldBeSticky);

      if (shouldBeSticky) {
        const stickyScrollDistance = sectionRect.height - windowHeight;
        const scrolledIntoSticky = Math.abs(sectionRect.top);
        const textProgressValue = Math.min(1, scrolledIntoSticky / stickyScrollDistance);
        setTextProgress(textProgressValue);
      } else if (sectionRect.top > 0) {
        setTextProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mainVideoWidth = 85;
  const layerOffset = (1 - videoScale) * 80;
  const videoHeight = 55;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F5F5F5]"
      style={{ height: "300vh" }}
    >
      <div
        ref={videoContainerRef}
        className={`w-full h-screen overflow-hidden ${isSticky ? "fixed top-0 left-0" : "relative"}`}
        style={{ zIndex: 1 }}
      >
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            transform: "translate(-50%, -50%)",
            width: `${mainVideoWidth}vw`,
            height: `${videoHeight}vh`,
          }}
        >
          {videoScale < 1 && (
            <div
              className="absolute overflow-hidden"
              style={{
                top: `${-layerOffset * 4}px`,
                left: `${-layerOffset * 4}px`,
                right: `${-layerOffset * 4}px`,
                bottom: `${-layerOffset * 4}px`,
                zIndex: 1,
              }}
            >
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="/videos/SalsaMarketingVideo12.mp4" type="video/mp4" />
              </video>
            </div>
          )}

          {videoScale < 1 && (
            <div
              className="absolute overflow-hidden"
              style={{
                top: `${-layerOffset * 3}px`,
                left: `${-layerOffset * 3}px`,
                right: `${-layerOffset * 3}px`,
                bottom: `${-layerOffset * 3}px`,
                zIndex: 2,
              }}
            >
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="/videos/SalsaMarketingVideo12.mp4" type="video/mp4" />
              </video>
            </div>
          )}

          {videoScale < 1 && (
            <div
              className="absolute overflow-hidden"
              style={{
                top: `${-layerOffset * 2}px`,
                left: `${-layerOffset * 2}px`,
                right: `${-layerOffset * 2}px`,
                bottom: `${-layerOffset * 2}px`,
                zIndex: 3,
              }}
            >
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="/videos/SalsaMarketingVideo12.mp4" type="video/mp4" />
              </video>
            </div>
          )}

          {videoScale < 1 && (
            <div
              className="absolute overflow-hidden"
              style={{
                top: `${-layerOffset}px`,
                left: `${-layerOffset}px`,
                right: `${-layerOffset}px`,
                bottom: `${-layerOffset}px`,
                zIndex: 4,
              }}
            >
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="/videos/SalsaMarketingVideo12.mp4" type="video/mp4" />
              </video>
            </div>
          )}

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ zIndex: 5 }}
          >
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="/videos/SalsaMarketingVideo12.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }} />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 20%, rgba(0, 0, 0, 0) 50%)",
              }}
            />
          </div>
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
          style={{
            opacity: isSticky ? Math.min(1, textProgress * 3) : 0,
            transform: `translateY(${isSticky ? Math.max(0, (1 - textProgress) * 50) : 100}%)`,
            transition: "opacity 0.3s ease-out",
          }}
        >
          <div className="text-center px-6 lg:px-24 max-w-4xl pointer-events-auto">
            <div className="flex justify-center gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-white/60 text-sm">Capture</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white/60 text-sm">Edit</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <span className="text-white/60 text-sm">Share</span>
              </div>
            </div>

            <h2
              className="font-[family-name:var(--font-helvetica-now)] text-[36px] md:text-[56px] lg:text-[72px] font-medium text-white leading-[1.05] mb-6"
              style={{ letterSpacing: "-2px" }}
            >
              Magic for real
            </h2>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              From the moment your guests step in front of the camera to the instant they share their photos, every interaction feels seamless, intuitive, and delightfully unexpected.
            </p>

            <button className="bg-white text-[#1D1D1D] px-8 py-4 rounded-full font-medium text-lg hover:bg-white/90 transition-colors">
              See it in action
            </button>
          </div>
        </div>
      </div>

      <div className="h-screen" />
    </section>
  );
};

export default MagicVideoSection;
