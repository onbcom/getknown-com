# Design Guidelines: GetKnown.com

## Visual Identity
The brand must project **Authority, Modernity, and Clarity**. It should feel like a mix of a high-end PR agency and a cutting-edge SaaS platform.

## Color Palette
- **Primary**: Authority Blue (#0F172A) - Deep, trustworthy navy.
- **Accent**: Visibility Orange (#F97316) - Energetic, stands out, used for CTAs.
- **Surface**: Mentorship White (#F8FAFC) - Clean, airy backgrounds.
- **Text**: Ink (#1E293B) for body, Navy (#0F172A) for headings.

## Typography
- **Headings**: 'Inter' or 'Plus Jakarta Sans', Bold, tight tracking (tightened slightly for hero headings).
- **Body**: 'Inter', 16px/1.6 leading for maximum readability.
- **Monospace**: 'JetBrains Mono' for small labels or scorecard data points.

## Layout Patterns
- **Header**: Fixed blur (glassmorphism), logo on left, 3 links (Platform, Resources, Pricing), CTA button on right ("Audit Your Brand").
- **Section Transitions**: Clean horizontal breaks. No jaggy or "creative" diagonal clips. Use subtle borders or slight background color shifts.
- **Bento Grids**: Use for the "Key Benefits" section to show various facets of the platform.
- **Forms/Scorecards**: Centered, high-shadow cards with clear progress indicators.

## CSS Styling
- Use Tailwind utility classes throughout.
- Rounded corners: `rounded-xl` (12px) for cards, `rounded-full` for primary buttons.
- Shadows: `shadow-sm` for cards, `shadow-2xl` for the interactive scorecard to make it pop.

## Responsive Design
- Mobile: Single column with a focus on large, tappable CTAs.
- Tablet: 2-column grids for features.
- Desktop: Standard 1200px max-width container for content.

## Image/Icon Guidelines
- Icons: Use Lucide-React or Phosphor Icons (Light/Thin stroke).
- Photos: Editorial style. High-quality professional portraits of diverse experts and clean "desk setup" environmental shots. Avoid cheesy "handshake" stock photos. Use the AI generation models specified in `CLAUDE-project.md`.