import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import VideoSection from "@/components/VideoSection";
import PressCarousel from "@/components/PressCarousel";
import TextReveal from "@/components/TextReveal";
import StackedScrollVideos from "@/components/StackedScrollVideos";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import NewSection from "@/components/NewSection";
import dynamic from "next/dynamic";

// Below the fold and bundles maplibre-gl (~700KB) — load it lazily.
const CoverageMap = dynamic(() => import("@/components/CoverageMap"));
import StoryCarousel from "@/components/StoryCarousel";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div id="discover">
          <Showcase />
        </div>
        <VideoSection />
        <PressCarousel />
        <TextReveal />
        <StackedScrollVideos />
        <div id="how-it-works">
          <FeaturesShowcase />
        </div>
        <NewSection />
        <CoverageMap />
        <StoryCarousel />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
