# Elite Glow Labs — landing page

Next.js 16 (App Router, TypeScript) landing page for a marketing, development and clinic-software agency for aesthetic clinics.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site written to out/
```

Optional: copy `.env.example` to `.env.local` and fill in:

| Variable | What it does |
| --- | --- |

| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits with country code, e.g. `923001234567`. Overrides the default WhatsApp number (923370411579) used by every CTA. |
| `NEXT_PUBLIC_SITE_URL` | Your live domain, e.g. `https://elite-glow-labs.netlify.app`, so social share previews use absolute URLs. Set it in Netlify → Environment variables. |

## Structure

```
src/app/            layout (fonts, metadata), page, loading, error, not-found
src/components/     one file per section + ReelPlayer, InstagramWall, Lightbox, Contact (WhatsApp CTA)
src/lib/data.ts     all copy, posts, reels, packages: edit text here
src/assets/         images (static imports → automatic blur placeholders)
public/media/reels/ reel MP4s
```

## Loading states

- **Route:** `app/loading.tsx` shows a branded splash while the page streams.
- **Images:** every image is a static import with `placeholder="blur"`.
- **Reels:** the poster appears instantly, the MP4 downloads only near the viewport, a spinner shows while it buffers, and playback pauses off-screen.
- **Instagram wall:** a shimmer skeleton shows until the section nears the viewport, then the interactive wall is code-split in.
- **Lightbox:** downloaded on first open, with a spinner while the full image or video loads. Supports ← → and Esc.
- **CTAs:** every call-to-action opens WhatsApp (+92 337 0411579) with a prefilled message. Clinic OS links go to https://clainicdesk.netlify.app/.
- **Errors:** `app/error.tsx` (with retry) and `app/not-found.tsx`.

## Deploy

The site is a **static export** (`output: "export"`): `npm run build` writes plain HTML/CSS/JS to `out/`, with no server needed.

**Netlify:** import the repo. `netlify.toml` sets the build command (`npm run build`), publish dir (`out`), Node 22 and caching headers.

**Vercel:** import the repo. No extra config needed. Add the env vars in Vercel → Settings → Environment Variables.
