import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine taiwlind/daisyui classes utilizing the twMerge utility.
 *
 * @param inputs
 * @returns
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Generate a unique element IDs. Using crypto if available, Math.random if not.
 *
 * @param prefix - Return a string with the given prefix instead of `id`.
 * @param len - Length of the random string portion (default: 7).
 */
export function generateId(prefix: string = "id", len: number = 7): string {
  let randStr = "";

  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const bytes = new Uint8Array(len);
    crypto.getRandomValues(bytes);
    randStr = Array.from(bytes, (byte) => byte.toString(36)[0]).join("");
  } else if (typeof require === "function") {
    try {
      const cryptoNode = require("crypto");
      randStr = cryptoNode
        .randomBytes(len)
        .toString("base64")
        .replace(/[^a-zA-Z0-9]/g, "")
        .substring(0, len)
        .toLowerCase();
    } catch {
      // Fallback to Math.random if crypto fails
      randStr = Math.random()
        .toString(36)
        .substring(2, 2 + len);
    }
  } else {
    randStr = Math.random()
      .toString(36)
      .substring(2, 2 + len);
  }

  return `${(prefix || "").replace(/[^a-zA-Z0-9-_]/g, "") || "id"}-${randStr}`;
}

/**
 * Sets the dark/light/data-theme on the <html> element to prevent theme-flash before CSS loads.
 * Reads the theme preference from localStorage, then window.APP_THEME, then falls back to "system".
 */
export function initializeTheme() {
  // Check localStorage (user-set theme).
  let appearance: string | null = null;
  try {
    appearance = localStorage.getItem("theme");
  } catch {
    // localStorage may throw if blocked.
  }

  // If theme is not in localStorage, check global fallback (set by Blade).
  if (!appearance && typeof window !== "undefined" && (window as any).APP_THEME) {
    appearance = (window as any).APP_THEME;
  }

  // Default to the user's system settings
  if (!appearance) {
    appearance = "system";
  }

  // Apply the theme
  if (appearance === "system") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
  } else {
    if (appearance === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    document.documentElement.setAttribute("data-theme", appearance);
  }
}

export function setTheme(theme: "light" | "dark" | "system") {
  try {
    localStorage.setItem("theme", theme);
  } catch {}
  initializeTheme();
}
