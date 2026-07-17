import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LegalShellProps {
  label: string;
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}

const CONTENT_CLASSES = [
  "max-w-3xl mx-auto font-[family-name:var(--font-helvetica-now)]",
  "text-[15px] leading-[1.7] text-[#444444]",
  "[&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-[22px] [&_h2]:font-medium [&_h2]:text-[#1D1D1D] [&_h2]:leading-snug [&_h2]:tracking-[-0.5px] [&_h2]:scroll-mt-32",
  "[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-[17px] [&_h3]:font-medium [&_h3]:text-[#1D1D1D]",
  "[&_p]:mb-4",
  "[&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6",
  "[&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6",
  "[&_li]:mb-2",
  "[&_strong]:font-medium [&_strong]:text-[#1D1D1D]",
  "[&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-[#BBBBBB] hover:[&_a]:decoration-[#1D1D1D] [&_a]:transition-colors [&_a]:break-words",
  "[&_table]:w-full [&_table]:border-collapse [&_table]:text-[14px]",
  "[&_th]:border [&_th]:border-[#E5E5E5] [&_th]:p-3 [&_th]:text-left [&_th]:font-medium [&_th]:text-[#1D1D1D] [&_th]:bg-[#FAFAFA]",
  "[&_td]:border [&_td]:border-[#E5E5E5] [&_td]:p-3 [&_td]:align-top",
].join(" ");

export default function LegalShell({ label, title, lastUpdated, children }: LegalShellProps) {
  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5]">
        {/* Hero Section */}
        <section className="relative w-full flex items-center bg-[#1D1D1D] px-6 lg:px-24 pt-32 pb-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-3xl mx-auto">
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
                {label}
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-helvetica-now)",
                  fontSize: "clamp(40px, 6vw, 64px)",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  letterSpacing: "-2px",
                }}
              >
                {title}
              </h1>
              {lastUpdated && (
                <p
                  className="mt-6"
                  style={{
                    fontFamily: "var(--font-helvetica-now)",
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  Last updated {lastUpdated}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Legal Content */}
        <section className="px-6 lg:px-24 py-16 lg:py-24">
          <div className={CONTENT_CLASSES}>{children}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
