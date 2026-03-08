# Site Specification: GetKnown.com

## Inputs & Assumptions
- **Target Audience**: Founders, mid-to-senior consultants, corporate leaders transitioning to thought leadership, digital creators.
- **Core Value Prop**: Structured visibility scaling for the expert economy.
- **Year**: 2026.

## Sitemap / Routes
1.  **Home** (`/`): The authority flywheel, core benefits, and interactive tool entry.
2.  **Platform** (`/platform`): Deep dive into personal branding basics, content visibility, and PR features.
3.  **Audit** (`/audit`): The "Visibility Scorecard" interactive tool.
4.  **Guides (pSEO)** (`/guides/[industry]`): Specific authority-building guides for different sectors.
5.  **Resources/Blog** (`/resources`): Strategic articles (Starter content).
6.  **Pricing** (`/pricing`): Tiered access to visibility tools and 1-on-1 PR matching.

## pSEO Configuration
- **Entity Type**: Industry Niches
- **Route Option**: `/guides/how-to-get-known-in-[industry]`
- **Reasoning**: This targets high-intent search queries where experts are looking for niche-specific playbooks (e.g., "how to get known in Fintech" vs "how to get known in Healthcare").
- **Selected Data Points**: For each industry, we will generate:
    - Top 3 industry podcasts they should target.
    - Key authority metrics for that specific niche.
    - A custom "Category of One" naming framework.

## Content Management (Keystatic)
- **Collection: Articles**
    - Fields: Title, Slug, Cover Image, Summary, Content (mdoc), Author.
- **Collection: Industry Guides (pSEO)**
    - Fields: Industry Name, Market Size, Top Podcasts (Repeatable), Authority Tips (Repeating list).

## Conversion Specs
- **Primary Goal**: Interactive Scorecard Completion.
- **Secondary Goal**: Email opt-in for the "Authority Weekly" newsletter.
- **Lead Magnet**: A personalized "Visibility Roadmap" generated after the tool completion.

## Done Criteria
- [ ] Astro site is fully responsive and high-performance (90+ Lighthouse).
- [ ] Keystatic CMS is functional and populated with the 4 starter articles.
- [ ] Visibility Scorecard tool tracks step-by-step and provides a final "score."
- [ ] Replicate AI images are generated and serve as heroes/thumbnails.
- [ ] pSEO routes generate unique guides for at least 3 industries (Tech, Finance, Health).
- [ ] Git repository is initialized and pushed to remote.