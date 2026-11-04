import Image from "next/image";
import founder from "@/assets/founder.jpg";
import { BRAND } from "@/lib/data";

export default function Founder() {
  return (
    <section className="founder">
      <div className="wrap">
        <figure className="f-photo reveal">
          <Image
            src={founder}
            alt={`${BRAND.founder}, founder of ${BRAND.name}`}
            sizes="(max-width: 900px) 100vw, 570px"
            placeholder="blur"
            style={{ objectPosition: "70% center" }}
          />
          <figcaption>
            <b>{BRAND.founder}</b>Founder, {BRAND.name}
          </figcaption>
        </figure>
        <div className="reveal">
          <div className="eyebrow">From the founder</div>
          <blockquote style={{ marginTop: 18 }}>
            &ldquo;Your clinic&apos;s results are already beautiful. <em>We make sure the right people see them</em>, and that booking takes one tap.&rdquo;
          </blockquote>
          <p>We started {BRAND.name} to give aesthetic clinics what big brands have: a premium look, content that works and software that keeps every patient coming back.</p>
        </div>
      </div>
    </section>
  );
}
