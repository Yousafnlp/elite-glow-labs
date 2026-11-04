"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BRAND, type FeedItem } from "@/lib/data";

type Props = { item: FeedItem; onClose: () => void; onPrev: () => void; onNext: () => void };

export default function Lightbox({ item, onClose, onPrev, onNext }: Props) {
  const [loaded, setLoaded] = useState(false);
  const closeBtn = useRef<HTMLButtonElement>(null);

  // Reset the loading state whenever the shown item changes.
  useEffect(() => setLoaded(false), [item.id]);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={item.name} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <button ref={closeBtn} className="lb-close" aria-label="Close" onClick={onClose}>
        ×
      </button>
      <button className="lb-nav prev" aria-label="Previous" onClick={onPrev}>
        ‹
      </button>
      <button className="lb-nav next" aria-label="Next" onClick={onNext}>
        ›
      </button>
      <div className="lb-inner">
        <div className={`lb-media${item.kind === "reel" ? " is-reel" : ""}`}>
          {!loaded && <span className="spinner" aria-label="Loading" />}
          {item.kind === "reel" ? (
            <video
              key={item.id}
              src={item.src}
              poster={item.poster.src}
              autoPlay
              loop
              playsInline
              controls
              onCanPlay={() => setLoaded(true)}
              style={{ opacity: loaded ? 1 : 0.35 }}
            />
          ) : (
            <Image
              key={item.id}
              src={item.image}
              alt={item.name}
              placeholder="blur"
              sizes="(max-width: 800px) 100vw, 620px"
              onLoad={() => setLoaded(true)}
              className={loaded ? "is-loaded" : ""}
            />
          )}
        </div>
        <aside className="lb-side">
          <div className="u">
            <i>YC</i>
            {BRAND.handle}
          </div>
          <p className="cap">
            <b>{BRAND.handle}</b> {item.caption}
            <br />
            <br />
            <span className="muted">
              ♥ {item.likes} likes · {item.comments} comments
            </span>
          </p>
          <div className="tag">
            <b>Made by {BRAND.name}</b>
            {item.kind === "reel"
              ? "Treatment reel: hook → process → result → website → CTA."
              : 'Campaign post: one-word hook, serif promise, "from" price and a WhatsApp CTA.'}
          </div>
        </aside>
      </div>
    </div>
  );
}
