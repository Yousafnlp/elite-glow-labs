import Image from "next/image";
import flatlay from "@/assets/flatlay.jpg";
import { BRAND, SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">What we do</div>
          <h2 className="h-display">
            One team.<span className="h-serif">Your whole growth engine.</span>
          </h2>
          <p>
            Most clinics hire one agency for posts, another for the website and a third for software. None of them talk to
            each other. We build all three as one system.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <article key={s.n} className={`svc reveal${s.dark ? " dark" : ""}`}>
              <div className="num">{s.n}</div>
              <h3>
                {s.title}
                <em>{s.sub}</em>
              </h3>
              <p>{s.body}</p>
              <ul>
                {s.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              {s.n === "03" && (
                <a href={BRAND.clinicOsUrl} target="_blank" rel="noopener noreferrer" className="svc-link">
                  Explore Clinic OS ↗
                </a>
              )}
            </article>
          ))}
        </div>
        <figure className="connected reveal">
          <Image
            src={flatlay}
            alt="Instagram feed on a phone next to a laptop showing the Clinic OS booking calendar"
            sizes="(max-width: 1232px) 100vw, 1200px"
            placeholder="blur"
          />
          <figcaption className="lbls">
            <span>Your feed</span>
            <span>Your website</span>
            <span>Your booking calendar</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
