import Link from "next/link";

export default function NotFound() {
  return (
    <div className="state-page">
      <div className="eyebrow">404</div>
      <h1 className="h-display">
        Page not found<span className="h-serif">let&apos;s get you back to glowing.</span>
      </h1>
      <p>This page doesn&apos;t exist or has moved.</p>
      <Link href="/" className="btn btn-gold">
        Back to home
      </Link>
    </div>
  );
}
