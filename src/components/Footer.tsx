import { BRAND, waLink } from "@/lib/data";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span className="logo" style={{ fontSize: 22 }}>
          Elite<span>.</span>Glow Labs
        </span>
        <nav className="foot-links">
          <a href={waLink()} target="_blank" rel="noopener noreferrer">
            WhatsApp {BRAND.whatsappDisplay}
          </a>
          <a href={BRAND.clinicOsUrl} target="_blank" rel="noopener noreferrer">
            Clinic OS ↗
          </a>
        </nav>
        <span>
          © {new Date().getFullYear()} {BRAND.name}
        </span>
      </div>
    </footer>
  );
}
