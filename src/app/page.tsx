import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Placeholder content to test scroll behavior */}
        <section className="h-screen bg-white flex items-center justify-center">
          <p className="text-2xl text-gray-400">More content coming soon...</p>
        </section>
      </main>
    </>
  );
}
