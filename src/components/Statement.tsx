import Image from "next/image";
import interior from "@/assets/clinic-interior.jpg";

export default function Statement() {
  return (
    <section className="statement">
      <Image src={interior} alt="" fill sizes="100vw" placeholder="blur" className="statement-bg" />
      <div className="wrap reveal">
        <div className="eyebrow">Why clinics choose us</div>
        <h2 className="h-display" style={{ marginTop: 14 }}>
          Your clinic is beautiful.<span className="h-serif">Your online presence should be too.</span>
        </h2>
        <p>Patients decide before they walk in. We make sure your Instagram, website and booking experience feel as premium as your treatment room.</p>
        <a href="#work" className="btn btn-teal">
          See how we did it →
        </a>
      </div>
    </section>
  );
}
