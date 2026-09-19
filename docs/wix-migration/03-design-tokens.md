# Design Tokens

Extracted from the Tailwind config in `docs/index.html` and `assets/css/styles.css`.
Set these once in the Wix Editor's site theme so members pick colours by name.

## Colour

### Navy
| Token | Hex | Used for |
|---|---|---|
| navy-950 | `#050B1D` | Deepest backgrounds, footer |
| navy-900 | `#070F26` | Hero, conference section |
| navy-800 | `#0A1B3D` | Buttons, body text |
| navy-700 | `#102451` | Button hover |
| navy-600 | `#1A3470` | — |

### Gold
| Token | Hex | Used for |
|---|---|---|
| gold-300 | `#EBD592` | Italic display accents on dark |
| gold-400 | `#E5C76F` | Eyebrow text, links on dark |
| gold-500 | `#D4B05A` | Rules, hover |
| gold-600 | `#C9A24A` | Primary CTA fill |
| gold-700 | `#A98438` | Accent text on light |

### Cream
| Token | Hex | Used for |
|---|---|---|
| cream-50 | `#FBF8F1` | Page background, text on dark |
| cream-100 | `#F5EFE0` | Alternating section background |
| cream-200 | `#EBE2CC` | — |

One off-palette value appears in the hero banner: `#FFD84D` on
"2026 Fall Conference Oct 10!". Either fold it into gold-400 or keep it as a
deliberate one-off highlight.

## Type

| Role | Family | Notes |
|---|---|---|
| Display | Cormorant Garamond | Weights 500/600, **italic used heavily** for emphasis |
| Body | Inter | 400/500/600/700 |
| Slab | Bevan | The "FELLOWSHIP OF THE" wordmark only |

Cormorant Garamond and Inter are both in Wix's font library. **Bevan may need
uploading as a custom font** — available on Premium. If that proves awkward,
the wordmark can stay an image, which is how the current site renders it.

Recurring type treatment — the "eyebrow": small caps, wide letter-spacing
(~0.2em), gold, often flanked by short horizontal rules. Used above nearly
every section heading. Worth building once as a reusable Editor element.

## Effects

| Effect | Wix approach |
|---|---|
| Scroll reveal (`data-reveal`) | Native entrance animations |
| Transparent → solid sticky nav | Native scroll-aware header |
| Schedule accordion | Native collapsible, or show the table outright |
| Section shadows | `0 30px 80px -30px rgba(7,15,38,0.25)` — approximate with Wix shadows |
| Hero radial "sunrise" glow | Export as a background image |
| Mountain silhouette SVG | Export as PNG/SVG background |
| Topographic line pattern | Export as a tiling background image |
| Animated scroll-down chevron | Drop, or use a static icon |
| **Copy-email-to-clipboard button** | **No native equivalent without Velo.** Replace with plain click-to-email or displayed text |

## Layout

- Content max-width ~1280px; narrower (~1024px) for text-heavy sections
- Section padding: generous — 7rem desktop, 9rem on large screens
- Alternating backgrounds: cream-50 → cream-100 → navy for rhythm
- Rounded corners: 1rem on cards, full-round on buttons
