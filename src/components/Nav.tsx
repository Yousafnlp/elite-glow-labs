"use client";

import { useEffect, useState } from "react";
import { BRAND, waLink } from "@/lib/data";

const LINKS = [
  ["#services", "Services"],
  ["#work", "Case study"],
  ["#instagram", "Instagram wall"],
  ["#software", "Clinic OS"],
  ["#packages", "Packages"],
] as const;

/** Desktop: logo, section links, WhatsApp CTA. Phone: logo + WhatsApp CTA only (links hidden via CSS). */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap">
        <a href="#" className="logo">
          Elite<span>.</span>Glow Labs
        </a>
        <ul>
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
          <li>
            <a href={BRAND.clinicOsUrl} target="_blank" rel="noopener noreferrer" className="nav-ext">
              Try Clinic OS ↗
            </a>
          </li>
        </ul>
        <a
          href={waLink("Hi! I'd like to book a call about growing my clinic.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold nav-cta"
        >
          WhatsApp us
        </a>
      </div>
    </nav>
  );
}
