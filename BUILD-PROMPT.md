CRITICAL RULES:
1) Do NOT use the Agent tool or sub-agents — they are unavailable.
2) Build everything yourself sequentially.
3) Do NOT use Keystatic, React, or Next.js. Pure Astro static + Tailwind CSS only.
4) Never stop to ask questions. Make reasonable decisions and continue.

TASK:
Read SPEC.md, DESIGN.md, CONTENT.md, and TOOLS.md in this directory.

Build GetKnown.com fully per those specs:

1. Install tailwindcss + @tailwindcss/vite + @astrojs/sitemap. Update astro.config.mjs.
2. Create global CSS, BaseLayout, Header, Footer components.
3. Build ALL pages:
   - Homepage with hero, benefits, workflow, CTA
   - Visibility Scorecard tool (client-side JS, no React)
   - pSEO industry visibility guides: data file + dynamic routes
   - Articles: 4 starter articles in src/content/, listing + detail pages
   - Platform/Pricing/Resources pages if in SPEC
4. Follow DESIGN.md colors, typography, layout exactly.
5. Add SEO meta, og tags, sitemap.

After ALL files are written:
- Run: npm install
- Run: npm run build
- Fix any errors until build passes
- Run: git add -A && git commit -m "build: complete GetKnown.com" && git push

DO NOT STOP UNTIL THE BUILD PASSES AND CODE IS PUSHED.
