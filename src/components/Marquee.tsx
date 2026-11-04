import { TREATMENTS } from "@/lib/data";

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div className="track">
        {[...TREATMENTS, ...TREATMENTS].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
