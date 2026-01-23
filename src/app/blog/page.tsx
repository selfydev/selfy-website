"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const categories = ["All", "Weddings", "Corporate", "Industry", "Guides"];

const featuredPost = {
  title: "The Future of Event Photography: What's Next for 2025",
  excerpt: "From AI-powered editing to real-time sharing, explore how technology is transforming the way we capture and share event memories.",
  category: "Industry",
  date: "January 2025",
  readTime: "8 min read",
};

const posts = [
  {
    title: "10 Ways to Make Your Wedding Photo Booth Unforgettable",
    excerpt: "From custom props to themed overlays, here are our top tips for creating memorable moments.",
    category: "Weddings",
    date: "December 2024",
    readTime: "5 min read",
  },
  {
    title: "The ROI of Photo Booths at Corporate Events",
    excerpt: "How brands are using photo booths to drive engagement and capture leads.",
    category: "Corporate",
    date: "November 2024",
    readTime: "7 min read",
  },
  {
    title: "Behind the Scenes: Our Biggest Brand Activation Yet",
    excerpt: "A look at how we executed a multi-location activation for a major tech company.",
    category: "Corporate",
    date: "October 2024",
    readTime: "8 min read",
  },
  {
    title: "How to Choose the Right Photo Booth for Your Event",
    excerpt: "Open air vs enclosed, prints vs digital—our guide to selecting the perfect setup.",
    category: "Guides",
    date: "October 2024",
    readTime: "4 min read",
  },
  {
    title: "The Psychology of Event Photography",
    excerpt: "Why photo booths create powerful memories and strengthen social connections.",
    category: "Industry",
    date: "September 2024",
    readTime: "6 min read",
  },
  {
    title: "Planning the Perfect Corporate Holiday Party",
    excerpt: "Tips for event planners looking to create memorable year-end celebrations.",
    category: "Corporate",
    date: "September 2024",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(post => post.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5]">
        {/* Hero */}
        <section className="w-full bg-[#1D1D1D] px-6 lg:px-24 pt-32 pb-20">
          <div className="max-w-7xl mx-auto">
            <p
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "14px",
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.5)",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Blog
            </p>
            <h1
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "clamp(48px, 8vw, 80px)",
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-2px",
              }}
            >
              Insights & Stories
            </h1>
          </div>
        </section>

        {/* Featured Post */}
        <section className="px-6 lg:px-24 py-16">
          <div className="max-w-7xl mx-auto">
            <a href="#" className="group block bg-white rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="aspect-[4/3] lg:aspect-auto bg-[#E5E5E5] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#CCCCCC" strokeWidth="1">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-[#1D1D1D] opacity-0 group-hover:opacity-5 transition-opacity" />
                </div>
                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className="px-3 py-1 rounded-full bg-[#F5F5F5]"
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#888888",
                      }}
                    >
                      {featuredPost.category}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "#AAAAAA",
                      }}
                    >
                      {featuredPost.date}
                    </span>
                  </div>
                  <h2
                    className="group-hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "clamp(24px, 3vw, 36px)",
                      fontWeight: 500,
                      color: "#1D1D1D",
                      lineHeight: 1.2,
                      marginBottom: "16px",
                    }}
                  >
                    {featuredPost.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-helvetica-now)",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#888888",
                      lineHeight: 1.6,
                      marginBottom: "24px",
                    }}
                  >
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-2">
                    <span
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#1D1D1D",
                      }}
                    >
                      Read article
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D1D1D" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-6 lg:px-24 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? "bg-[#1D1D1D] text-white"
                      : "bg-white text-[#888888] hover:text-[#1D1D1D]"
                  }`}
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="px-6 lg:px-24 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <a
                  key={index}
                  href="#"
                  className="group bg-white rounded-2xl overflow-hidden"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] bg-[#E5E5E5] relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#CCCCCC" strokeWidth="1">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-[#1D1D1D] opacity-0 group-hover:opacity-10 transition-opacity" />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        style={{
                          fontFamily: "var(--font-helvetica-now)",
                          fontSize: "12px",
                          fontWeight: 500,
                          color: "#888888",
                        }}
                      >
                        {post.category}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-helvetica-now)",
                          fontSize: "12px",
                          fontWeight: 400,
                          color: "#CCCCCC",
                        }}
                      >
                        •
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-helvetica-now)",
                          fontSize: "12px",
                          fontWeight: 400,
                          color: "#AAAAAA",
                        }}
                      >
                        {post.readTime}
                      </span>
                    </div>
                    <h3
                      className="group-hover:opacity-70 transition-opacity"
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "#1D1D1D",
                        lineHeight: 1.4,
                        marginBottom: "8px",
                      }}
                    >
                      {post.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-helvetica-now)",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#888888",
                        lineHeight: 1.6,
                      }}
                    >
                      {post.excerpt}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-6 lg:px-24 py-24 bg-[#1D1D1D]">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 500,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}
            >
              Stay in the loop
            </h2>
            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-helvetica-now)",
                fontSize: "18px",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.6)",
                lineHeight: 1.6,
              }}
            >
              Subscribe for event tips, industry insights, and exclusive updates.
            </p>
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/30 transition-colors"
                  style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "14px" }}
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-full bg-white text-[#1D1D1D] font-medium hover:opacity-90 transition-opacity"
                  style={{ fontFamily: "var(--font-helvetica-now)", fontSize: "14px" }}
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <p
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                }}
              >
                Thanks for subscribing!
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
