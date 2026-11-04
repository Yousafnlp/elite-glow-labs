"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="state-page">
      <div className="eyebrow">Something went wrong</div>
      <h1 className="h-display">
        Not our best look<span className="h-serif">but it&apos;s fixable.</span>
      </h1>
      <p>The page hit an unexpected error. Try again, and if it keeps happening, message us on WhatsApp.</p>
      <button className="btn btn-gold" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
