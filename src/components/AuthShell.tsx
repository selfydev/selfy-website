"use client";

import Link from "next/link";
import { AppleIcon } from "@/components/icons/apple-icon";
import { GoogleIcon } from "@/components/icons/google-icon";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { AuthDivider } from "@/components/auth-divider";
import { ChevronLeftIcon, AtSignIcon, LockIcon, InfoIcon } from "lucide-react";

const TESTIMONIAL = {
  quote:
    "Selfy was the highlight of our reception. Every single guest used the booth and the photos are absolutely stunning.",
  author: "Sarah & James",
  venue: "The Savoy, London",
};

type AuthShellProps = {
  mode: "login" | "signup";
};

const COPY = {
  login: {
    title: "Welcome back",
    subtitle: "Sign in to your Selfy account.",
    emailCta: "Continue with email",
    switchPrompt: "Don't have an account?",
    switchLabel: "Sign up",
    switchHref: "/signup/",
  },
  signup: {
    title: "Create your account",
    subtitle: "Join Selfy to manage your bookings and galleries.",
    emailCta: "Sign up with email",
    switchPrompt: "Already have an account?",
    switchLabel: "Log in",
    switchHref: "/login/",
  },
} as const;

export default function AuthShell({ mode }: AuthShellProps) {
  const copy = COPY[mode];

  return (
    <main className="relative min-h-screen lg:grid lg:grid-cols-2 lg:overflow-hidden">
      {/* Form side */}
      <div className="relative flex min-h-screen flex-col justify-center px-8 py-24">
        <Button
          className="absolute top-7 left-5"
          variant="ghost"
          render={<Link href="/" />}
          nativeButton={false}
        >
          <ChevronLeftIcon data-icon="inline-start" />
          Home
        </Button>

        <div className="mx-auto w-full space-y-5 sm:w-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-black.svg" alt="Selfy" className="h-6 w-auto" />

          <div className="flex flex-col space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">{copy.title}</h1>
            <p className="text-base text-muted-foreground">{copy.subtitle}</p>
          </div>

          <div
            role="status"
            className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900"
          >
            <InfoIcon className="mt-0.5 size-4 shrink-0" aria-hidden />
            <p>
              <span className="font-semibold">Accounts are coming soon.</span>{" "}
              Sign in and registration aren&apos;t open yet — in the meantime,{" "}
              <Link href="/contact/" className="underline underline-offset-4">
                contact us
              </Link>{" "}
              to book or manage an event.
            </p>
          </div>

          <div className="space-y-2" aria-disabled>
            <Button className="w-full" disabled>
              <GoogleIcon data-icon="inline-start" />
              Continue with Google
            </Button>
            <Button className="w-full" disabled>
              <AppleIcon data-icon="inline-start" />
              Continue with Apple
            </Button>
          </div>

          <AuthDivider>OR</AuthDivider>

          <form className="space-y-2" aria-label={`${copy.title} form (disabled)`}>
            <InputGroup>
              <InputGroupInput
                placeholder="your.email@example.com"
                type="email"
                autoComplete="email"
                disabled
              />
              <InputGroupAddon align="inline-start">
                <AtSignIcon />
              </InputGroupAddon>
            </InputGroup>
            <InputGroup>
              <InputGroupInput
                placeholder="Password"
                type="password"
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                disabled
              />
              <InputGroupAddon align="inline-start">
                <LockIcon />
              </InputGroupAddon>
            </InputGroup>

            <Button className="w-full" type="button" disabled>
              {copy.emailCta}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground">
            {copy.switchPrompt}{" "}
            <Link
              href={copy.switchHref}
              className="font-medium text-foreground underline underline-offset-4"
            >
              {copy.switchLabel}
            </Link>
          </p>

          <p className="mt-8 text-sm text-muted-foreground">
            By continuing, you agree to our{" "}
            <Link className="underline underline-offset-4 hover:text-primary" href="/terms/">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link
              className="underline underline-offset-4 hover:text-primary"
              href="/privacy-policy/"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Image + testimonial side */}
      <div className="relative hidden lg:block">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/story/capture.JPG)" }}
          role="img"
          aria-label="Guests enjoying a Selfy photo booth at an event"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 p-10">
          <blockquote className="space-y-3 text-white">
            <p className="text-xl leading-relaxed">&ldquo;{TESTIMONIAL.quote}&rdquo;</p>
            <footer className="text-sm font-semibold text-white/80">
              {TESTIMONIAL.author} — {TESTIMONIAL.venue}
            </footer>
          </blockquote>
        </div>
      </div>
    </main>
  );
}
