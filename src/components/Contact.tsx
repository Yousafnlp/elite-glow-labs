import { BRAND, waLink } from "@/lib/data";
import { WhatsAppIcon } from "./WhatsAppFab";

const QUICK = [
  ["Free growth audit", "Hi! I'd like a free growth audit for my clinic."],
  ["Marketing & reels", "Hi! I'm interested in marketing and treatment reels for my clinic."],
  ["Clinic website", "Hi! I'm interested in a website for my clinic."],
  ["Clinic OS demo", "Hi! I'd like a demo of Clinic OS for my clinic."],
] as const;

export default function Contact() {
  return (
    <section className="cta" id="contact">
      <div className="wrap reveal">
        <div className="eyebrow">Free growth audit</div>
        <h2 className="h-display" style={{ marginTop: 14 }}>
          Let&apos;s fill<span className="h-serif">your appointment book.</span>
        </h2>
        <p>Send us a message on WhatsApp. Within 48 hours we&apos;ll send a free audit of your Instagram, website and booking flow.</p>

        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn wa-btn">
          <WhatsAppIcon size={22} /> Chat on WhatsApp
        </a>
        <div className="wa-number">{BRAND.whatsappDisplay}</div>

        <div className="quick" aria-label="Quick messages">
          {QUICK.map(([label, text]) => (
            <a key={label} href={waLink(text)} target="_blank" rel="noopener noreferrer">
              {label} →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
