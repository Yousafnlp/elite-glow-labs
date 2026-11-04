import type { Metadata, Viewport } from "next";
import { Anton, Cormorant_Garamond, Inter } from "next/font/google";
import RevealObserver from "@/components/RevealObserver";
import "./globals.css";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Elite Glow Labs | Growth Partner for Aesthetic Clinics", template: "%s | Elite Glow Labs" },
  description: "Marketing, websites and clinic management software built for aesthetic clinics. Content that books appointments.",
  openGraph: {
    title: "Elite Glow Labs | Growth Partner for Aesthetic Clinics",
    description: "Marketing, websites and Clinic OS software for aesthetic clinics.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#0A2B2A" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${cormorant.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal animations only when JS runs, so content is never hidden without JS. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
