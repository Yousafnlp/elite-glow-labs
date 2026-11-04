import { PACKAGES, waLink } from "@/lib/data";

export default function Packages() {
  return (
    <section id="packages" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">Packages</div>
          <h2 className="h-display">
            Pick your pace<span className="h-serif">or take the full system.</span>
          </h2>
        </div>
        <div className="pk-grid">
          {PACKAGES.map((p) => (
            <div key={p.name} className={`pk reveal${p.hot ? " hot" : ""}`}>
              {p.hot && <span className="tag">Most chosen</span>}
              <h3>{p.name}</h3>
              <div className="for">{p.for}</div>
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <a
                href={waLink(`Hi! I'm interested in the ${p.name} package (${p.for}) for my clinic.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${p.hot ? "btn-gold" : "btn-teal"}`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
