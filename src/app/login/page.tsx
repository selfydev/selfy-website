import type { Metadata } from "next";
import AuthShell from "@/components/AuthShell";

export const metadata: Metadata = {
  title: "Log In",
  description:
    "Log in to your Selfy account. Accounts are coming soon — contact us to book or manage an event in the meantime.",
  robots: { index: false },
  alternates: { canonical: "/login" },
};

export default function LoginPage() {
  return <AuthShell mode="login" />;
}
