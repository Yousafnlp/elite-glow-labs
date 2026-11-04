import type { StaticImageData } from "next/image";

import laser from "@/assets/posts/01-laser-hair-removal.jpg";
import meso from "@/assets/posts/02-mesotherapy.jpg";
import bbGlow from "@/assets/posts/03-bb-glow.jpg";
import lash from "@/assets/posts/04-lash-studio.jpg";
import wellness from "@/assets/posts/05-mental-wellness.jpg";
import ivDrip from "@/assets/posts/06-iv-drip.jpg";
import hifu from "@/assets/posts/07-hifu.jpg";
import hydra from "@/assets/posts/08-hydrafacial.jpg";
import tattoo from "@/assets/posts/09-tattoo-removal.jpg";
import nails from "@/assets/posts/10-nail-atelier.jpg";
import lipPoster from "@/assets/reels/LipFillers.jpg";
import eyePoster from "@/assets/reels/UnderEye.jpg";
import facePoster from "@/assets/reels/FaceShaping.jpg";

export const BRAND = {
  name: "Elite Glow Labs",
  founder: "Yousaf Ijaz Munawar",
  handle: "your.clinic",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923370411579",
  whatsappDisplay: "+92 337 0411579",
  clinicOsUrl: "https://clainicdesk.netlify.app/",
};

/** wa.me deep link with a prefilled message. */
export const waLink = (text = "Hi! I'd like a free growth audit for my clinic.") =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;

export type Post = { id: string; name: string; image: StaticImageData; caption: string; likes: string; comments: string };
export type Reel = {
  id: string;
  name: string;
  tagline: string;
  src: string;
  poster: StaticImageData;
  caption: string;
  likes: string;
  comments: string;
  views: string;
};

export const POSTS = {
  laser: { id: "laser", name: "Laser hair removal", image: laser, caption: "SMOOTH forever. Face · Underarms · Legs.", likes: "2.4k", comments: "131" },
  meso: { id: "meso", name: "Mesotherapy", image: meso, caption: "CLEAR from within. Acne · Pigmentation · Brightening.", likes: "1.6k", comments: "74" },
  bbGlow: { id: "bb-glow", name: "BB Glow", image: bbGlow, caption: "FLAWLESS, no filter needed. Even tone · Luminous finish · Makeup-free.", likes: "1.7k", comments: "69" },
  lash: { id: "lash", name: "Lash studio", image: lash, caption: "LASHES that speak volumes. Classic · Volume · Mega Volume.", likes: "1.3k", comments: "58" },
  wellness: { id: "wellness", name: "Mental wellness", image: wellness, caption: "CALM is the new glow. CBT · Mindfulness · Online sessions.", likes: "1.2k", comments: "53" },
  ivDrip: { id: "iv-drip", name: "IV drip lounge", image: ivDrip, caption: "RECHARGE your glow. Glow · Whitening · Slimming.", likes: "1.4k", comments: "61" },
  hifu: { id: "hifu", name: "HIFU", image: hifu, caption: "LIFT without surgery. Jawline · Double chin · Neck.", likes: "1.9k", comments: "88" },
  hydra: { id: "hydrafacial", name: "HydraFacial", image: hydra, caption: "GLOW same day. Deep cleanse · Hydrate · Glow. Tap Book now on WhatsApp.", likes: "2.1k", comments: "96" },
  tattoo: { id: "tattoo", name: "Tattoo removal", image: tattoo, caption: "FADE the ink. All sizes · Laser · Gradual fading.", likes: "1.1k", comments: "47" },
  nails: { id: "nails", name: "Nail atelier", image: nails, caption: "NAILED in every detail. Gel · Acrylic · 3D nail art.", likes: "1.5k", comments: "66" },
} satisfies Record<string, Post>;

export const REELS: Reel[] = [
  { id: "lip", name: "Lip fillers", tagline: "fuller, naturally.", src: "/media/reels/LipFillers.mp4", poster: lipPoster, caption: "FULLER, lips naturally ✨ Precise, gentle, shaped for symmetry. Book your free consultation.", likes: "3.8k", comments: "214", views: "92.4k" },
  { id: "eye", name: "Under-eye", tagline: "tired → rested.", src: "/media/reels/UnderEye.mp4", poster: eyePoster, caption: "TIRED even after sleep? Gentle, soft cannula technique. RESTED every single day.", likes: "2.9k", comments: "167", views: "71.8k" },
  { id: "face", name: "Face shaping", tagline: "sharper, no surgery.", src: "/media/reels/FaceShaping.mp4", poster: facePoster, caption: "SHARPER jawline, no surgery. Defined, balanced, sculpted: your best angle.", likes: "3.2k", comments: "189", views: "84.1k" },
];

export type FeedItem = ({ kind: "post" } & Post) | ({ kind: "reel" } & Reel);
const p = (x: Post): FeedItem => ({ kind: "post", ...x });
const r = (x: Reel): FeedItem => ({ kind: "reel", ...x });

/** The dummy Instagram grid: 15 tiles = 5 clean rows of 3. */
export const FEED: FeedItem[] = [
  r(REELS[0]), p(POSTS.hydra), p(POSTS.hifu),
  p(POSTS.laser), r(REELS[1]), p(POSTS.meso),
  p(POSTS.bbGlow), p(POSTS.lash), r(REELS[2]),
  p(POSTS.ivDrip), p(POSTS.tattoo), p(POSTS.nails),
  p(POSTS.wellness),
  p({ ...POSTS.hydra, id: "hydrafacial-2", caption: "Weekend slots open ✦ GLOW same day. Book on WhatsApp.", likes: "1.8k", comments: "72" }),
  p({ ...POSTS.laser, id: "laser-2", caption: "Summer-ready: SMOOTH forever. Face · Underarms · Legs.", likes: "2.0k", comments: "104" }),
];

export const HIGHLIGHTS = [
  { label: "Facials", image: hydra },
  { label: "Laser", image: laser },
  { label: "Fillers", image: lipPoster },
  { label: "IV Drips", image: ivDrip },
  { label: "Nails", image: nails },
  { label: "Wellness", image: wellness },
];

export const TREATMENTS = [
  "Laser hair removal", "HydraFacial", "HIFU", "Lip fillers", "BB Glow", "Mesotherapy",
  "IV drips", "Face shaping", "Under-eye", "Lash studio", "Nail atelier", "Tattoo removal",
];

export const SERVICES = [
  {
    n: "01", title: "Marketing", sub: "that books, not just likes", dark: false,
    body: "Treatment campaigns with a clear offer, a premium look and a strong call to action, made for Instagram, TikTok and Meta ads.",
    points: ["Campaign posts & carousels per treatment", "Treatment reels: hook, process, result, CTA", "Meta & Google ads with lead tracking", "Monthly content calendar & brand kit"],
  },
  {
    n: "02", title: "Development", sub: "websites built to convert", dark: true,
    body: "Fast, mobile-first clinic websites with treatment pages, pricing, before & after galleries and one-tap WhatsApp booking.",
    points: ["Luxury clinic websites & landing pages", "Online booking & deposit payments", "Local SEO for every city & branch", "Pixel, GA4 & conversion tracking"],
  },
  {
    n: "03", title: "Clinic OS", sub: "software that runs the floor", dark: false,
    body: "Our clinic management software for aesthetic clinics: appointments, patient records, packages and WhatsApp reminders in one place.",
    points: ["Appointments, rooms & staff schedules", "Patient files with before & after photos", "Sessions, packages, billing & inventory", "Automated WhatsApp reminders & follow-ups"],
  },
];

export const STEPS = [
  { title: "Audit & offer", body: "We review your feed, website and booking flow, then shape a clear offer for each treatment." },
  { title: "Brand system", body: "Palette, type and post templates, so every treatment looks like it belongs to one premium clinic." },
  { title: "Content & build", body: "Posts, reels and your website go live, with WhatsApp booking and tracking wired in." },
  { title: "Run & optimise", body: "Clinic OS goes live. Each month we report which content brought which bookings." },
];

export const PACKAGES = [
  { name: "Glow", for: "Marketing", hot: false, cta: "Ask for pricing", points: ["12 campaign posts / month", "4 treatment reels / month", "Captions & hashtags", "Monthly content calendar"] },
  { name: "Elite", for: "Marketing + Web + Clinic OS", hot: true, cta: "Book a strategy call", points: ["Everything in Glow", "Booking-first clinic website", "Meta ads management", "Clinic OS with WhatsApp automation", "Monthly growth report"] },
  { name: "Build", for: "Website / Software", hot: false, cta: "Ask for pricing", points: ["Clinic website or landing page", "Online booking & payments", "Clinic OS setup & training", "Local SEO setup"] },
];
