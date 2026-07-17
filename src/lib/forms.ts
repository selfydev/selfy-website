// Formspree endpoint shared by all site forms; submissions are
// distinguished by each form's hidden "form" field.
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgqjlaw";

export type FormStatus = "idle" | "submitting" | "success" | "error";

export async function submitForm(form: HTMLFormElement): Promise<boolean> {
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    });
    return res.ok;
  } catch {
    return false;
  }
}
