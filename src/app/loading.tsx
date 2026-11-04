/** Route-level loading UI: shown by Next.js while the page segment streams in. */
export default function Loading() {
  return (
    <div className="splash" role="status" aria-live="polite">
      <div className="splash-logo">
        Elite<span>.</span>Glow Labs
      </div>
      <div className="splash-bar"><i /></div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}
