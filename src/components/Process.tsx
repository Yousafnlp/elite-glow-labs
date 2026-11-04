import { STEPS } from "@/lib/data";

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">How we work</div>
          <h2 className="h-display">
            Launch in 30 days<span className="h-serif">then grow every month.</span>
          </h2>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step reveal" key={s.title}>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
