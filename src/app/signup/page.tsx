import type { Metadata } from "next";
import AuthShell from "@/components/AuthShell";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Create your Selfy account. Accounts are coming soon — contact us to book or manage an event in the meantime.",
  robots: { index: false },
  alternates: { canonical: "/signup" },
};

export default function SignupPage() {
  return <AuthShell mode="signup" />;
}
