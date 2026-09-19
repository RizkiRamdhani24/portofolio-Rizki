# Design Foundation

## Direction

The portfolio follows Swiss / International Typography and editorial web design principles with subtle, intentional motion. The visual language should feel modern, professional, technical, and considered for an Informatics student seeking internship or entry-level opportunities.

## Rules

- Use typography, alignment, whitespace, and a clear grid as primary design elements.
- Use asymmetry sparingly when it improves hierarchy or reading flow.
- Use orange as an accent, never as the dominant color.
- Prefer thin rules and intentional spacing over decorative containers.
- Keep motion subtle and purposeful: typography reveals, scroll reveals, project hover states, image movement, marquee, page transitions, and parallax are future options, not requirements for every element.
- Do not use bento grids as the main structure, glassmorphism, neon cyberpunk styling, particle backgrounds, glowing blobs, floating 3D objects, skill percentage bars, fake statistics, fake clients, fake testimonials, fake achievements, or invented experience.
- Avoid excessive cards, shadows, blur, gradients, animation, and dashboard-style layouts.
- Do not invent personal information. Allowed placeholders are `[NAMA LENGKAP]`, `INFORMATICS STUDENT`, `S1 Informatika`, `Universitas PGRI Semarang`, and `Semester 5`.

## Tokens

| Token      | Value     | Use                    |
| ---------- | --------- | ---------------------- |
| Background | `#F5F4F0` | Warm editorial paper   |
| Foreground | `#151515` | Primary text           |
| Accent     | `#D65A2A` | Highlights and actions |
| Neutral    | `#8A8882` | Secondary metadata     |
| Border     | `#D8D5CE` | Rules and boundaries   |

## Typography

The foundation reserves two roles: a modern sans-serif for interface and editorial copy, and IBM Plex Mono for metadata and technical information. The current CSS fallback keeps the project self-contained; a hosted or local font can be selected later without changing the token API.

## Layout

`page-container` provides consistent horizontal margins. `editorial-grid` provides a single-column mobile layout and a 12-column desktop layout. `rule` is the shared thin-border utility for section boundaries.

## Scope

This stage intentionally does not include a finished hero, navbar, about, projects, skills, contact section, project detail page, loading animation, custom cursor, page transition, or complex scroll animation.
