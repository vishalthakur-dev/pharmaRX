"use client";

import { HiArrowUp } from "react-icons/hi2";

export default function ScrollToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-white shadow-md transition hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
      aria-label="Scroll to top"
    >
      <HiArrowUp className="h-6 w-6" />
    </button>
  );
}
