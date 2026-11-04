"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster: StaticImageData;
  alt: string;
  /** Show the "tap for sound" control and allow unmuting. */
  sound?: boolean;
  /** Load eagerly (above the fold). Otherwise the video file is only fetched near the viewport. */
  priority?: boolean;
  sizes?: string;
};

type State = "idle" | "loading" | "playing" | "error";

/**
 * Phone-framed reel. Poster (with blur placeholder) shows instantly, the MP4 is fetched lazily,
 * a spinner shows while buffering, and playback pauses when scrolled out of view.
 */
export default function ReelPlayer({ src, poster, alt, sound = false, priority = false, sizes = "270px" }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(priority);
  const [state, setState] = useState<State>("idle");
  const [muted, setMuted] = useState(true);

  // Mount the <video> source only once the phone is near the viewport.
  useEffect(() => {
    if (near || !wrap.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setNear(true), { rootMargin: "400px" });
    io.observe(wrap.current);
    return () => io.disconnect();
  }, [near]);

  // Play while visible, pause when not.
  useEffect(() => {
    const v = video.current;
    if (!near || !v || !wrap.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setState((s) => (s === "playing" ? s : "loading"));
          v.play().catch(() => setState("idle"));
        } else v.pause();
      },
      { threshold: 0.4 },
    );
    io.observe(wrap.current);
    return () => io.disconnect();
  }, [near]);

  const toggleSound = () => {
    const v = video.current;
    if (!v || !sound) return;
    // Only one reel speaks at a time.
    document.querySelectorAll<HTMLVideoElement>("video[data-reel]").forEach((o) => {
      if (o !== v) {
        o.muted = true;
        o.dispatchEvent(new Event("volumechange"));
      }
    });
    v.muted = !v.muted;
    v.play().catch(() => {});
  };

  return (
    <div
      ref={wrap}
      className={`phone reel-player is-${state}`}
      onClick={toggleSound}
      role={sound ? "button" : undefined}
      tabIndex={sound ? 0 : undefined}
      aria-label={sound ? `${alt}: ${muted ? "tap to play sound" : "tap to mute"}` : undefined}
      onKeyDown={(e) => sound && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), toggleSound())}
    >
      <div className="screen">
        <Image src={poster} alt={alt} fill sizes={sizes} placeholder="blur" priority={priority} className="poster" />
        {near && (
          <video
            ref={video}
            data-reel
            src={src}
            muted
            loop
            playsInline
            autoPlay={priority}
            preload={priority ? "auto" : "metadata"}
            onWaiting={() => setState("loading")}
            onPlaying={() => setState("playing")}
            onError={() => setState("error")}
            onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
          />
        )}
        {state === "loading" && <span className="spinner" aria-label="Loading video" />}
        {state === "error" && <span className="media-error">Video unavailable</span>}
        {sound && state !== "error" && <span className="sound-pill">{muted ? "🔊 Tap for sound" : "🔇 Tap to mute"}</span>}
      </div>
    </div>
  );
}
