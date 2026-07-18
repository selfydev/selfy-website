// Single source of truth for the "fully booked" notice.
// Bump STORAGE_KEY's version suffix to re-show the notice to everyone after a
// copy change (e.g. when the timeframe updates).
export const STORAGE_KEY = "selfy:booking-notice:v1";

export type NoticePhase = "popup" | "bar" | "hidden";

// CSS variable the bar publishes so the fixed Header can offset itself while the
// (non-sticky) bar is on screen. 0px when no bar is shown.
export const BAR_HEIGHT_VAR = "--sb-h";

// Top image for the popup (top ~30%). Swap this path for any on-brand photo.
export const POPUP_IMAGE = "/images/story/experience.JPG";
export const POPUP_IMAGE_ALT =
  "Guests enjoying a Selfy open-air photo booth at an event";

export const HEADING = "We're fully booked";

export const BODY =
  "Thank you for the incredible demand. We're not taking new bookings until Q3 2027. For anything at all, our team is happy to help.";

// Bar copy — a shorter variant is used on small screens.
export const BAR_TEXT = "Fully booked until Q3 2027. For enquiries,";
export const BAR_TEXT_SHORT = "Fully booked until Q3 2027,";
export const BAR_CTA = "contact us";

export const CONTACT_HREF = "/contact";
export const POPUP_CTA = "Contact us";
