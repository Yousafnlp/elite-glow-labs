"use client";

import { useEffect } from "react";

/** Adds `data-in` to every `.reveal` element as it scrolls into view, including ones mounted later (lazy sections). */
export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.in = "";
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    const scan = () => document.querySelectorAll(".reveal:not([data-in])").forEach((el) => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
}
