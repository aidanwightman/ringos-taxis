# Ringo's Taxis website: handover

_Last updated: 7 October 2026_

## At a glance

| | |
|---|---|
| Client | Bill, Ringo's Taxis (Ringwood, Hampshire) · 07387 777202 |
| Live site | https://www.ringotaxis.com (www is the main address; `ringotaxis.com` forwards to it) |
| Code | `~/ringos-taxis` · GitHub `aidanwightman/ringos-taxis` |
| Hosting | Vercel project `ringos-taxis`. **Pushing to `master` goes live automatically** |
| Client assets | `~/Desktop/clients/bill:ringo taxis` (photos only, no code) |
| Removed files | `~/ringos-taxis-removed-files/` (moved there, never deleted) |

## Open items (check these first)

1. **Confirm the contact form email arrives.** On 7 Oct the live form was tested up to the send to Web3Forms (correct key, "Thank You" shown), but no real enquiry was sent. Send one and check Bill's inbox and spam.
2. **Google Search Console** (domain property `ringotaxis.com`):
   - Submit `sitemap.xml` for www. The only submitted sitemap is the old non-www one from 10 Apr, last read 30 Sept.
   - Request indexing for `/`, `/ringwood-taxis`, `/disabled-access` and `/airport-trips`. As of 7 Oct, `www…/ringwood-taxis` showed "URL is unknown to Google", which is expected after the switch to www.

**Ideas offered to Bill, not started:**
- Real Google reviews on the site
- Sample airport prices ("Ringwood → Heathrow from £X")
- Licence number and council in the footer
- More booking fields on the form (pickup, destination, date/time, passengers, wheelchair needed)
- "Find us at The Furlong taxi rank" line

## Facts confirmed with Bill (don't re-ask)

- **The Furlong** is the taxi rank in Ringwood where Bill's taxi sits. Keep "The Furlong" mentions; it is not a service-area town.
- He covers **Ferndown and Fordingbridge**, plus the other listed towns.
- **New Milton was removed** at his request. `/taxi-new-milton` redirects (308) to `/service-areas`.
- **Disabled Access claims are true:** hydraulic ramps, disability-trained drivers, carers travel free.
- **Contact is phone only.** No email on the site or the privacy page.
- The old "4.9 stars from 58 reviews" claim was **removed**: it was unverified. Don't reintroduce ratings without real reviews.
- The person in the homepage photo doesn't matter. The phone crop was checked and left as is.

## How it works

- **Stack:** Vite 7, React 18, TypeScript (strict), Tailwind, react-router v6, react-hook-form + zod.
- **Prerendering:** `npm run build` does three things:
  1. Runs the client build.
  2. Runs an SSR build of `src/entry-server.tsx`.
  3. Runs `scripts/prerender.mjs`, which writes `dist/<route>.html` for every route in `src/routes.tsx`, plus `dist/404.html` (noindex).

  The browser then hydrates that HTML (`src/main.tsx`).
- **SEO per page:** `usePageSEO()` and `useJsonLd()` in `src/hooks/usePageSEO.ts` record the title, description, canonical and JSON-LD during prerender, and update them on client navigation.
- **Contact form:** `src/components/RequestCallForm.tsx` posts to Web3Forms.
  - The key is the Vercel env var `VITE_WEB3FORMS_KEY`, set for Production, Preview and Development.
  - Validation lives in `src/lib/requestCallSchema.ts`.
  - If sending fails, the visitor is told to call.
  - Web3Forms emails the key and login codes to Bill's inbox, so he has to read them out.
- **Analytics:** GA4 `G-PSM4Y2E8VF` loads **only after cookie consent**.
  - The code is in `src/lib/analytics.ts`, and the banner is `src/components/CookieBanner.tsx`.
  - Phone-link taps are sent as the event `phone_call_click`.
- **Vercel config (`vercel.json`):**
  - `cleanUrls`, so `/ringwood-taxis` serves `ringwood-taxis.html`.
  - No SPA catch-all, so unknown URLs get a real 404.
  - The New Milton redirect.
  - A year of immutable caching on `/assets/*`.
  - Security headers.
- **Mobile Call Now bar:** `src/components/MobileCallBar.tsx`. Shown below the `lg` breakpoint; the layout adds matching bottom padding.

## Common tasks

```bash
cd ~/ringos-taxis
npm run dev          # local dev server (no prerender)
npm test             # 57 tests: every route prerenders with its own title/description/canonical/one H1, is in the sitemap, has the Call Now bar; form validation
npm run lint
npm run build        # full prerendered build into dist/
npx serve@14 dist -l 5055   # preview the real build (clean URLs + 404) at http://localhost:5055
```

- **Add a page:**
  1. Create the component.
  2. Add it to `src/routes.tsx` and `public/sitemap.xml`.
  3. Optionally add it to the footer links and `areaRouteMap` in `src/pages/locations/LocationPage.tsx`.

  The tests fail if a route is missing from the sitemap.
- **Change an env var:** after `vercel env add`, you must **redeploy** (Vercel dashboard → Deployments → ⋯ → Redeploy). Vite bakes the value in at build time.
- **Undo a bad release:** Vercel → Deployments → the previous one → **Promote**.

## Gotchas

- Local Node is 20.18. Vite 7 warns that it wants 20.19+, but it builds fine. Vercel uses its own Node.
- Both `bun.lockb` and `package-lock.json` exist. They were left as they were.
- Project rules (`~/CLAUDE.md`): strict TS, functional style, run `npm test` after changes, **never delete files** (move them to the temp folder), ask before big structural changes, one step at a time.

## History

- **Feb–Apr 2026:** site built (originally a Lovable project).
- **2 Oct 2026:**
  - Form wired to Web3Forms.
  - Fake star rating removed.
  - Duplicate H1s fixed.
  - Branded taxi photos added.
  - Strict TS turned on.
  - Canonical/sitemap/schema switched to www.
- **7 Oct 2026:**
  - Prerendering, real 404s and per-page meta.
  - Unused UI components and about 40 packages removed (JS 483 KB → 349 KB).
  - Images resized to WebP, new 1200×630 share image.
  - Fonts loaded via `<link>`.
  - Caching and security headers.
  - Cookie consent, privacy page and call tracking.
  - Furlong → Ferndown/Fordingbridge; New Milton removed.
  - Mobile Call Now bar.
  - Form key live. Real tests replaced the placeholder.
