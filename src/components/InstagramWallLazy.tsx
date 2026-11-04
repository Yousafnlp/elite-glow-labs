"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

function WallSkeleton() {
  return (
    <div className="ig ig-skeleton" aria-busy="true" aria-label="Loading Instagram wall">
      <div className="ig-bar">
        <span className="sk sk-line" style={{ width: 60 }} />
        <span className="sk sk-line" style={{ width: 90 }} />
        <span className="sk sk-line" style={{ width: 16 }} />
      </div>
      <div className="ig-head">
        <span className="sk sk-circle" />
        <div style={{ display: "grid", gap: 12 }}>
          <span className="sk sk-line" style={{ width: "55%", height: 18 }} />
          <span className="sk sk-line" style={{ width: "70%" }} />
          <span className="sk sk-line" style={{ width: "45%" }} />
          <span className="sk sk-line" style={{ width: "60%" }} />
        </div>
      </div>
      <div className="ig-grid">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="sk tile" />
        ))}
      </div>
    </div>
  );
}

const InstagramWall = dynamic(() => import("./InstagramWall"), { ssr: false, loading: WallSkeleton });

/** Section wrapper: shows a skeleton and only downloads the interactive wall when it nears the viewport. */
export default function InstagramWallLazy() {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setNear(true), { rootMargin: "600px" });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="wall" id="instagram">
      <div className="wrap">
        <div className="sec-head reveal center">
          <div className="eyebrow">The Instagram wall</div>
          <h2 className="h-display">
            A feed that sells<span className="h-serif">while you&apos;re treating patients.</span>
          </h2>
          <p>This is the clinic&apos;s grid after our rollout. Every tile is one treatment with one offer and one call to action. Tap any post to open it.</p>
        </div>
        <div ref={ref} className="reveal">
          {near ? <InstagramWall /> : <WallSkeleton />}
        </div>
      </div>
    </section>
  );
}
