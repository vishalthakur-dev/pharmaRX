# Pharma RX

A small e-commerce front end for a Vitamins & Supplements category: product listing with pagination and product detail pages. Built with Next.js (App Router), React, and Tailwind.

**Live:** [https://pharma-rx.vercel.app](https://pharma-rx.vercel.app)

---

## Setup

Clone the repo, install deps, and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You’ll be redirected to the category listing.

For a production build:

```bash
npm run build
npm start
```

No env vars are required for local run. For canonical URLs in metadata and JSON-LD, you can set `NEXT_PUBLIC_SITE_URL` (e.g. `https://pharma-rx.vercel.app`); if unset, that value is used as default.

---

## How it’s put together

- **Routes:** Root and `/category` redirect to `/category/vitamins-and-supplements`. That’s the PLP. Pagination is `?page=2`, `?page=3`, etc. Product pages are `/[slug]/[id]` (e.g. `/salmon-omega-3-fish-oil-1000mg-capsule/1`).

- **Data:** All product data lives in `src/data/products.js` (no backend). Pagination is 20 items per page. Product images are under `public/assets/images`.
- **Rendering:** The category page uses `searchParams` for `page`, so each page number is a full server-rendered document. Product pages use `generateStaticParams` so they’re statically generated at build time. Pagination links are plain `<a>` tags so changing page does a full request and doesn’t rely on client-side routing for the main content.
- **UI:** Header with logo, breadcrumbs, product grid (responsive columns), product cards (image, name, description, price, rating, add/quantity controls). PDP has image slider, product info, pricing card, and a long-form “About” block for SEO. Footer with links and trust copy.

---

## SEO and crawlability

**Semantic HTML**  
Layout uses `<main>`, `<section>`, `<article>`, `<nav>`, proper headings, and `aria-label` where it helps. Product cards are `<article>` with a clear heading; the listing is a `<section>` with an `aria-label`.

**Metadata**  
Every important page has a title and description via `generateMetadata` (or static `metadata`). The category page also sets `alternates.canonical` and `rel` prev/next for pagination so search engines see the right canonical URL and page flow.

**Crawlability**  
Listing pages are server-rendered per request (SSR) when you hit a URL with `?page=n`, so the HTML for that page is returned in one response. Product pages are pre-rendered at build (SSG) via `generateStaticParams`. No client-only shell for the main content, so crawlers get full HTML. Pagination uses normal links, so each page is a separate document.

**Structured data**  
- Category: `CollectionPage` + `WebPage`, `ItemList` (products), and `BreadcrumbList` (from the Breadcrumbs component).
- Product: `Product` (with offer and aggregateRating) and `WebPage`, plus `BreadcrumbList` again from Breadcrumbs.



**Pagination**  
Page 1 is the base path (no `?page=1`). Page 2+ use `?page=n`. Canonical and prev/next point to those URLs so engines don’t treat every page as the same URL.

---

## Tech

- Next.js 16 (App Router), React 19, Tailwind 4.  
- No API calls; data is in `src/data/products.js`.  
- Images are in `public` and referenced by path; product images use `loading="lazy"` and explicit dimensions on the PLP.
