import Image from "next/image";
import ReelPlayer from "./ReelPlayer";
import { POSTS, REELS, waLink } from "@/lib/data";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="reveal">
          <div className="eyebrow">Growth partner for aesthetic clinics</div>
          <h1 className="h-display" style={{ marginTop: 18 }}>
            Fully booked<span className="h-serif">clinics, by design.</span>
          </h1>
          <p className="lead">
            We handle marketing, build the website and run the software for aesthetic clinics. Scroll-stopping content,
            booking-first websites and a clinic OS that turns DMs into appointments.
          </p>
          <div className="ctas">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              Get a free audit on WhatsApp →
            </a>
            <a href="#work" className="btn btn-ghost">
              See the case study
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <b>3-in-1</b>
              <small>Marketing · Web · Software</small>
            </div>
            <div>
              <b>10+</b>
              <small>Treatments campaigned</small>
            </div>
            <div>
              <b>24/7</b>
              <small>WhatsApp booking flow</small>
            </div>
          </div>
        </div>
        <div className="collage reveal">
          <div className="card c1">
            <Image src={POSTS.hifu.image} alt="HIFU campaign post" sizes="(max-width: 960px) 50vw, 300px" placeholder="blur" priority />
          </div>
          <div className="card c2">
            <Image src={POSTS.bbGlow.image} alt="BB Glow campaign post" sizes="(max-width: 960px) 50vw, 300px" placeholder="blur" priority />
          </div>
          <div className="hero-phone">
            <ReelPlayer src={REELS[0].src} poster={REELS[0].poster} alt="Lip fillers treatment reel" priority sizes="250px" />
          </div>
          <div className="float-chip chip-a">
            <i>✦</i>New booking · HydraFacial
          </div>
          <div className="float-chip chip-b">
            <i>💬</i>Reminder sent on WhatsApp
          </div>
        </div>
      </div>
    </header>
  );
}
