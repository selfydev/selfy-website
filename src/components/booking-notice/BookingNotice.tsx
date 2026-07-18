"use client";

import { useEffect, useRef, useState } from "react";
import BookingPopup from "./BookingPopup";
import BookingBar from "./BookingBar";
import { STORAGE_KEY, BAR_HEIGHT_VAR, type NoticePhase } from "./content";

// Time the CSS transitions take before we unmount / advance phase.
const TRANSITION_MS = 300;

type InternalPhase = "loading" | NoticePhase;

const readStoredPhase = (): NoticePhase => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "bar" || stored === "hidden") return stored;
  } catch {
    // localStorage unavailable (private mode / blocked) — treat as first visit.
  }
  return "popup";
};

const writeStoredPhase = (phase: NoticePhase) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, phase);
  } catch {
    // Best-effort only.
  }
};

const setBarHeightVar = (px: number) => {
  document.documentElement.style.setProperty(BAR_HEIGHT_VAR, `${px}px`);
  // Let the fixed Header re-evaluate its top offset even when the user isn't
  // scrolling (e.g. the bar appearing/animating while pinned at the top).
  window.dispatchEvent(new CustomEvent("selfy:sb-height"));
};

const BookingNotice = () => {
  const [phase, setPhase] = useState<InternalPhase>("loading");
  const [popupOpen, setPopupOpen] = useState(false);
  const [barOpen, setBarOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  // Decide the initial phase from storage after mount (avoids hydration flash).
  useEffect(() => {
    const initial = readStoredPhase();
    setPhase(initial);
    if (initial === "popup") {
      requestAnimationFrame(() => setPopupOpen(true));
    } else if (initial === "bar") {
      requestAnimationFrame(() => setBarOpen(true));
    }
  }, []);

  // Keep the header offset variable in sync with the live bar height while the
  // bar is on screen; reset to 0 whenever it is not.
  useEffect(() => {
    if (phase !== "bar" || !barOpen || !barRef.current) {
      setBarHeightVar(0);
      return;
    }
    const el = barRef.current;
    const sync = () => setBarHeightVar(el.offsetHeight);
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => {
      observer.disconnect();
      setBarHeightVar(0);
    };
  }, [phase, barOpen]);

  const advanceToBar = () => {
    writeStoredPhase("bar");
    setPopupOpen(false);
    window.setTimeout(() => {
      setPhase("bar");
      requestAnimationFrame(() => setBarOpen(true));
    }, TRANSITION_MS);
  };

  const dismissPopup = () => advanceToBar();

  // Contact button also advances to the bar; the <Link> handles navigation.
  const contactFromPopup = () => {
    writeStoredPhase("bar");
    setPhase("bar");
    setBarOpen(true);
  };

  const closeBar = () => {
    setBarOpen(false);
    window.setTimeout(() => {
      writeStoredPhase("hidden");
      setPhase("hidden");
      setBarHeightVar(0);
    }, TRANSITION_MS);
  };

  return (
    <>
      {phase === "bar" && (
        <div ref={barRef}>
          <BookingBar open={barOpen} onClose={closeBar} />
        </div>
      )}
      {phase === "popup" && (
        <BookingPopup
          open={popupOpen}
          onDismiss={dismissPopup}
          onContact={contactFromPopup}
        />
      )}
    </>
  );
};

export default BookingNotice;
