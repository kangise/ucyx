# UCYX Design System

UCYX uses Open Design as a rules library, not as a homepage reference. The site translates selected Open Design principles into a practical visual system for a Greater Bay Area-based full-stack market entry support service partner serving Chinese brands.

## Open Design Sources

- `craft/anti-ai-slop.md`: remove decorative blobs, orbit diagrams, fake scores, invented metrics, and template-like card walls.
- `craft/color.md`: keep neutrals as the dominant surface and ration tech green to a few meaningful signals per screen.
- `craft/animation-discipline.md`: motion exists only for state feedback, route progress, and interaction confirmation; no ambient hero choreography.
- `craft/typography.md`: keep type intentional and readable, with display type reserved for true section hierarchy.
- `design-systems/shopify`: use commercial, ecommerce-aware staging with large type and product-like business surfaces.
- `design-systems/wise`: keep cross-border language clear, direct, and action-oriented.
- `design-systems/stripe`: use structured tables, review panels, and infrastructure-like information hierarchy for trust.
- `design-systems/linear-app`: use restrained interface panels only for brief surfaces and compact product moments.
- `design-templates/web-prototype`: each section should have one job; use flows, matrices, and review panels instead of repeated decorative cards.
- `design-templates/html-ppt/assets/fonts.css`: adapt the Inter, Noto Sans SC, Space Grotesk, and JetBrains Mono font stack.
- `assets/frames/browser-chrome.html`: use only as a historical reference for structured business surfaces; current path modules should rely on concrete image-led business scenes.

## Visual Direction

- Palette: black, white, gray, and tech green.
- Accent: tech green is a signal color for CTAs, path lines, active states, and key status points. It should not become a large background theme.
- Surfaces: most sections use white or light gray. Dark surfaces are reserved for high-trust brand or closing moments, not the whole site.
- Radius: keep normal cards and compact panels at `8px` or less. Large editorial stages, such as the ecosystem coverage container, may use a larger rounded frame when it is the primary visual object.
- Typography: short headlines, concise lead text, clear labels, and `letter-spacing: 0`. Graphics should carry part of the explanation.
- Font stack: `Space Grotesk` for display, `Inter + Noto Sans SC` for body copy, and `JetBrains Mono` for route labels and brief metadata.
- Motion: 150-180ms state feedback, Material-style `cubic-bezier(0.2, 0, 0, 1)` for route progress, and `prefers-reduced-motion` support.

## Business Visual Rules

- Every visual must explain adjacent copy.
- Preferred visual modules:
  - audience image cards that clarify who the service is for
  - rotating pain point panel
  - interactive market entry path with concrete step visuals
  - discrete ecosystem coverage playback with cautious relationship language
- Avoid:
  - orbit diagrams
  - decorative radial gradients
  - floating dots or abstract shape clusters
  - fake dashboards, scores, percentages, or unexplained metrics
  - tag-heavy sections that merely label content

## Section Rhythm

- Hero: one clear positioning sentence, no repeated path diagram.
- Hero background: use `src/assets/images/hero-global-market-entry-v3.webp`, a minimal Pacific-centered global map image with China as the origin point, North America as the clearest primary market, and tech-green outbound routes. Keep the left side readable for copy, and keep routes within plausible commercial market destinations.
- Audience: use three image cards for the main Chinese brand profiles. The title is always visible; the detailed explanation appears on hover/focus and remains visible on mobile.
- Problem: explain the operating breakpoints that make market entry inefficient.
- Growth System: use one interactive market entry path. The top is the path navigation with service items; the image area is a concrete scene with a capability logo, typewriter-style empathy question, and one concise path summary. This replaces duplicated service/product sections.
- NovoChoice: keep it compact: synthetic consumer AI for product and marketing concept tests, with a direct NovoChoice.com link.
- Ecosystem: use conservative capability-context language and a discrete playback panel. Do not imply official status; keep the CTA as an application/contact path for future ecosystem conversations.

## Maintenance Checklist

- New copy must be added to all three locale files with identical key structure.
- New diagrams must be business-specific and readable without decorative explanation text.
- New colors should be added to `variables.css` only when tokens cannot be derived from existing purpose-based variables.
- Before shipping, run translation validation, Vite build, pre-deploy checks, and desktop/mobile browser QA.
