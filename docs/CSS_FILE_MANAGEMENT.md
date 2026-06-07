# CSS File Management

The current UCYX visual system uses black, white, gray, and tech green. It is designed to feel like a practical full-stack market entry support service partner: clear, credible, data-oriented, and execution-focused. The detailed design rules live in `docs/UCYX_DESIGN_SYSTEM.md`.

## Active CSS Files

```text
src/assets/css/
├── variables.css      # Design tokens: colors, spacing, radius, shadows
├── components.css     # Base reset, typography, buttons, cards, shared components
├── modern-style.css   # Desktop layout and section-specific styles
└── mobile-all.css     # Responsive and mobile navigation styles
```

## Style Rules

- Keep normal cards at `8px` radius or less. Use larger radius only for large editorial stage containers that are visually intentional.
- Use tech green for CTAs, active states, flow lines, and key status points.
- Keep text black or gray unless it is a deliberate emphasis.
- Avoid electric blue drift, purple AI gradients, decorative blobs, and stock-like imagery.
- Prefer Open Design-driven business visuals: audience image cards, the interactive market entry path, concrete step visuals, and discrete ecosystem coverage playback.
- Use the Open Design-adapted font stack from `variables.css`: `Space Grotesk`, `Inter`, `Noto Sans SC`, and `JetBrains Mono`.
- Keep dynamic effects functional: typewriter pain point rotation, active route progress, hover/focus state feedback, and reduced-motion support.
- Diagrams should explain service delivery and commercial decisions, not simulate AI dashboards.
- Avoid orbit visuals, decorative radial gradients, fake scores, artificial percentages, and tag-heavy sections.
- Keep visible copy short on graphic sections; use layout, lines, tables, surfaces, and labels to explain the system.
- Do not use `!important`; fix specificity or structure instead.

## Where To Add Styles

- New design token: `variables.css`
- Reusable UI pattern: `components.css`
- Desktop section/layout style: `modern-style.css`
- Mobile-only adjustment: `mobile-all.css`

Create a new CSS file only if the existing four-file structure clearly cannot express the change.
