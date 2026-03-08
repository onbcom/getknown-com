CRITICAL RULES:
1) Do NOT use the Agent tool or sub-agents — they are unavailable.
2) Build everything yourself sequentially.
3) Do NOT use Keystatic, React, or Next.js. Pure Astro static + Tailwind CSS only.
4) Never stop to ask questions.

TASK:
You have a `template.html` file in this directory. This is the MASTER DESIGN — a fully designed, premium HTML template with complete styling, animations, and production copy for GetKnown.com.

YOUR JOB: Convert this template.html into a full Astro site while preserving the EXACT visual design, CSS, animations, and layout.

Steps:
1. Read template.html — every section, style, animation, color, font.
2. Extract shared CSS into src/styles/global.css (keep ALL custom CSS).
3. Create BaseLayout.astro with all head tags, fonts, scripts from template.
4. Create Header/Footer matching template exactly.
5. Homepage = IDENTICAL to template.html visually.
6. Build additional pages per SPEC.md/ClaudeCode-prompt.txt with same design system.
7. Keep Iconify, CDN scripts, or convert carefully — visual must match.
8. Use CONTENT.md for copy, SPEC.md for routes.
9. Preserve ALL interactive elements.

After ALL files are written:
- npm install && npm run build (fix errors)
- git add -A && git commit -m "rebuild: match template.html design exactly" && git push

Match the template. DO NOT STOP until pushed.
