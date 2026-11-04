import Image from "next/image";
import ReelPlayer from "./ReelPlayer";
import { POSTS, REELS } from "@/lib/data";

const STRIP = [POSTS.laser, POSTS.meso, POSTS.hydra, POSTS.tattoo, POSTS.lash];

export default function CaseStudy() {
  return (
    <section className="case" id="work">
      <div className="wrap">
        <div className="case-top">
          <div className="sec-head reveal" style={{ margin: 0 }}>
            <div className="eyebrow">Case study</div>
            <h2 className="h-display">
              A clinic &amp; wellness lounge<span className="h-serif">across two cities.</span>
            </h2>
            <p>
              A multi-branch aesthetics clinic in Lahore &amp; Sialkot needed to launch 10+ treatments with one premium,
              consistent look, and turn attention into WhatsApp bookings.
            </p>
          </div>
          <div className="case-meta reveal">
            <div>
              <b>10</b>
              <small>Treatment campaign posts</small>
            </div>
            <div>
              <b>3</b>
              <small>Cinematic treatment reels</small>
            </div>
            <div>
              <b>1</b>
              <small>Booking-first website</small>
            </div>
            <div>
              <b>2</b>
              <small>Cities, one brand system</small>
            </div>
          </div>
        </div>

        <div className="brief reveal">
          <div>
            <h4>The challenge</h4>
            <p>Every treatment looked different online. There were no clear prices or calls to action, so DMs piled up without turning into appointments.</p>
          </div>
          <div>
            <h4>What we built</h4>
            <p>A teal, cream and gold brand system. Each post pairs a bold one-word hook with a serif promise, a &quot;from&quot; price and a WhatsApp &quot;Book now&quot; button.</p>
          </div>
          <div>
            <h4>The reel formula</h4>
            <p>Concern → treatment → result → website → &quot;Book your free consultation.&quot; Each reel runs about 18 seconds and follows one patient&apos;s story.</p>
          </div>
        </div>

        <div className="reels">
          {REELS.map((r) => (
            <div className="reel reveal" key={r.id}>
              <ReelPlayer src={r.src} poster={r.poster} alt={`${r.name} treatment reel`} sound />
              <h5>{r.name}</h5>
              <span>{r.tagline}</span>
            </div>
          ))}
        </div>

        <div className="case-ba reveal">
          {STRIP.map((p) => (
            <Image key={p.id} src={p.image} alt={`${p.name} post`} sizes="(max-width: 900px) 50vw, 230px" placeholder="blur" />
          ))}
        </div>
      </div>
    </section>
  );
}
