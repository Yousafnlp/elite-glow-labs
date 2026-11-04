"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useMemo, useRef, useState } from "react";
import { BRAND, FEED, HIGHLIGHTS, type FeedItem } from "@/lib/data";

// The lightbox is only downloaded when someone opens a post.
const Lightbox = dynamic(() => import("./Lightbox"), {
  ssr: false,
  loading: () => (
    <div className="lb">
      <span className="spinner" aria-label="Opening" />
    </div>
  ),
});

const Heart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden>
    <path d="M12 21s-7.5-4.6-10-9.3C.3 8.4 2.1 4 6.3 4c2.2 0 3.6 1.2 4.4 2.4h2.6C14.1 5.2 15.5 4 17.7 4 21.9 4 23.7 8.4 22 11.7 19.5 16.4 12 21 12 21z" />
  </svg>
);
const Bubble = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden>
    <path d="M12 3C6.5 3 2 6.9 2 11.6c0 2.4 1.2 4.6 3.1 6.2L4 22l4.6-2.3c1.1.3 2.2.5 3.4.5 5.5 0 10-3.9 10-8.6S17.5 3 12 3z" />
  </svg>
);
const ReelIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <path d="M3 8h18M8 3l3 5M14 3l3 5" />
    <path d="M10 11.5v5l4.5-2.5z" fill="#fff" />
  </svg>
);

function Tile({ item, onOpen }: { item: FeedItem; onOpen: () => void }) {
  const [hover, setHover] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const vid = useRef<HTMLVideoElement>(null);
  const img = item.kind === "reel" ? item.poster : item.image;

  return (
    <button
      className={`tile${item.kind === "reel" ? " is-reel" : ""}${loaded ? " is-loaded" : ""}`}
      onClick={onOpen}
      onMouseEnter={() => {
        setHover(true);
        vid.current?.play().catch(() => {});
      }}
      onMouseLeave={() => {
        setHover(false);
        vid.current?.pause();
      }}
      aria-label={`Open ${item.kind}: ${item.name}`}
    >
      <Image
        src={img}
        alt={`${item.name} ${item.kind}`}
        fill
        sizes="(max-width: 700px) 33vw, 313px"
        placeholder="blur"
        onLoad={() => setLoaded(true)}
      />
      {item.kind === "reel" && hover && <video ref={vid} src={item.src} muted loop playsInline autoPlay preload="auto" />}
      {item.kind === "reel" && (
        <>
          <span className="badge">
            <ReelIcon />
          </span>
          <span className="views">▷ {item.views}</span>
        </>
      )}
      <span className="ov">
        <span>
          <Heart /> {item.likes}
        </span>
        <span>
          <Bubble /> {item.comments}
        </span>
      </span>
    </button>
  );
}

export default function InstagramWall() {
  const [tab, setTab] = useState<"posts" | "reels">("posts");
  const [open, setOpen] = useState<number | null>(null);
  const items = useMemo(() => (tab === "reels" ? FEED.filter((f) => f.kind === "reel") : FEED), [tab]);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(() => setOpen((i) => (i === null ? i : (i - 1 + items.length) % items.length)), [items.length]);
  const next = useCallback(() => setOpen((i) => (i === null ? i : (i + 1) % items.length)), [items.length]);

  return (
    <div className="ig">
      <div className="ig-bar">
        <div className="dots">
          <i />
          <i />
          <i />
        </div>
        <span>{BRAND.handle}</span>
        <span aria-hidden>☰</span>
      </div>
      <div className="ig-head">
        <div className="ig-avatar">
          <div>YC</div>
        </div>
        <div>
          <div className="ig-name">
            <b>{BRAND.handle}</b>
            <span className="follow">Follow</span>
            <span className="msg">Message</span>
          </div>
          <div className="ig-counts">
            <span>
              <b>186</b> posts
            </span>
            <span>
              <b>48.2k</b> followers
            </span>
            <span>
              <b>312</b> following
            </span>
          </div>
          <div className="ig-bio">
            <b>Clinic &amp; Wellness Lounge</b>
            Laser · Skin · Hair · Mind · Body · Soul
            <br />✦ Lahore &amp; Sialkot
            <br />
            📲 Book your free consultation ↓
          </div>
        </div>
      </div>
      <div className="ig-highlights">
        {HIGHLIGHTS.map((h) => (
          <div className="hl" key={h.label}>
            <Image src={h.image} alt="" width={68} height={68} sizes="68px" placeholder="blur" />
            {h.label}
          </div>
        ))}
      </div>
      <div className="ig-tabs" role="tablist">
        <button role="tab" aria-selected={tab === "posts"} className={tab === "posts" ? "on" : ""} onClick={() => setTab("posts")}>
          ▦ POSTS
        </button>
        <button role="tab" aria-selected={tab === "reels"} className={tab === "reels" ? "on" : ""} onClick={() => setTab("reels")}>
          ▷ REELS
        </button>
      </div>
      <div className={`ig-grid${tab === "reels" ? " reels-only" : ""}`}>
        {items.map((item, i) => (
          <Tile key={item.id} item={item} onOpen={() => setOpen(i)} />
        ))}
      </div>
      {open !== null && <Lightbox item={items[open]} onClose={close} onPrev={prev} onNext={next} />}
    </div>
  );
}
