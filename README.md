# Piyush Satti — Terminal Portfolio

This repository contains the source for [piyushsatti.github.io](https://piyushsatti.github.io), a personal site built with Astro and the retro terminal-inspired Astro Terminal theme. It hosts long-form writing, project case studies, research summaries, and resume links in a single static site that deploys automatically to GitHub Pages.

## ✨ Highlights

- Astro 5 static site with light/dark terminal theming and keyboard-inspired UI
- Content powered by Astro Content Collections (`blog`, `projects`, `research`) with type-safe frontmatter
- Global tagging system with `/tags` index and per-tag landing pages across all collections
- Downloadable resume, contact links, and themed components that respect the original Terminal design
- Optimised for GitHub Pages deployment via the default Astro build output

## 🛠 Tech Stack

- [Astro 5](https://astro.build/) with the Astro Terminal theme
- Astro Content Collections for structured Markdown/MDX content
- Shiki syntax highlighting and custom CSS modules under `src/styles`
- Continuous deployment on GitHub Pages (see `.github/workflows` if customised)

## 🚀 Getting Started

### Prerequisites

- Node.js **18** or newer (Astro requirement)
- npm (bundled with Node) or pnpm/yarn if you prefer

### Install & Run Locally

```bash
git clone https://github.com/piyushsatti/piyushsatti.github.io.git
cd piyushsatti.github.io
npm install
npm run dev
```

Astro serves the site at [http://localhost:4321](http://localhost:4321) with hot module reload.

### Build & Preview Production Output

```bash
npm run build
npm run preview
```

The build step generates static HTML in `dist/`. `npm run preview` serves that output locally to mirror production.

## 📁 Project Structure

```
├── astro.config.mjs        # Astro configuration and integrations
├── src/
│   ├── content/            # Content collections (blog, projects, research)
│   ├── components/         # Reusable UI (cards, dates, layout helpers)
│   ├── layouts/            # Base and post layouts used by pages
│   ├── pages/              # Route definitions (index, blog, projects, research, tags)
│   ├── lib/                # Utilities (tag aggregation helpers)
│   └── styles/             # Theme-specific CSS modules
└── public/                 # Static assets (resume.pdf, images, favicons)
```

## ✍️ Managing Content Collections

All content lives in [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) defined in `src/content/config.ts`. Frontmatter is type-checked at build time.

### Blog (`src/content/blog`)

```md
---
title: "REST vs GraphQL: Lessons from Risk-Emulated"
description: "Trade-offs discovered while evolving a Spring Boot API"
pubDate: 2024-02-18
author: "Piyush Satti"
tags: ["Spring Boot", "GraphQL", "DDD"]
image: "./cover.png" # optional
imageAlt: "Diagram showing the GraphQL resolver flow" # optional, overrides default alt text
imageCaption: "Architecture diagram from the refactor sprint" # optional, renders below the hero image
externalLink: "https://example.com" # optional, renders CTA
---

Long-form Markdown/MDX content...
```

### Projects (`src/content/projects`)

```md
---
title: "Risk-Emulated"
summary: "Turn-based engine that emulates the RISK board game with typed GraphQL APIs."
startDate: "2023-06-01"
endDate: "2024-01-15" # optional
tags: ["Java", "Spring Boot", "GraphQL"]
repo: "https://github.com/piyushsatti/risk-emulated"
demo: "https://demo.example.com" # optional
image: "./cover.png" # optional
imageAlt: "Screenshot of the RISK game board" # optional
imageCaption: "Prototype UI used in the beta release" # optional
---

Project narrative with TL;DR, architecture notes, and media.
```

### Research (`src/content/research`)

```md
---
title: "Multi-Agent Motion Planning"
journal: "Robotics & Automation Letters"
pubDate: "2022-09-01"
summary: "Hybrid planner that blends potential fields with reinforcement learning."
tags: ["Robotics", "Python", "RL"]
paper: "https://doi.org/10.1109/LRA.2022.xxxxxx"
repo: "https://github.com/piyushsatti/mmapf" # optional
slides: "./deck.pdf" # optional
image: "./diagram.png" # optional
imageAlt: "Flowchart of the multi-agent motion planner" # optional
imageCaption: "Figure 3 from the IEEE RA-L publication" # optional
---

Abstract-style explanation and key findings.
```

### Adding a New Entry

1. Pick the collection directory (`blog`, `projects`, or `research`).
2. Create a new `.md` or `.mdx` file with a unique slug (file name becomes the slug).
3. Copy the relevant frontmatter template above and adjust the fields.
4. `npm run dev` or `npm run build` to validate the schema — Astro will flag missing required fields.

> 💡 **Hero images**: Provide `imageAlt` to override the default alt text (falls back to the entry title) and `imageCaption` to render a `<figcaption>` beneath the cover image. Both fields are optional.

### Creating Additional Collections

If you need more content types (e.g., `talks`):

1. Update `src/content/config.ts` with a new `defineCollection` schema.
2. Create `src/content/talks/` and add Markdown files that match the schema.
3. Add route/pages under `src/pages/talks/` or components that consume the collection.
4. Extend utilities like `src/lib/tags.ts` if the new collection should participate in tag aggregation.

## 🏷 Working with Tags

- Tags are simple strings in frontmatter (`tags: ["GraphQL", "DDD"]`).
- `src/lib/tags.ts` aggregates tags across **all** collections and powers:
  - `/tags` – directory of every tag with counts.
  - `/tags/<slug>` – landing page showing posts, projects, and research entries for that tag.
- Slugs are generated automatically (lowercase, kebab-case) via `slugifyTag`. When linking manually, prefer `<a href={`/tags/${slugifyTag(tag)}/`}>` in components.

## 🎨 Customisation Notes

The project keeps the Astro Terminal aesthetic intact. Customisations focus on content, not re-skinning.

- **Theme variables** live in `src/styles/terminal.css`. Update CSS variables to tweak colours.
- **Fonts** are configured in `src/styles/fonts.css` (currently using Fira Code).
- **Navigation** is controlled in `src/layouts/BaseLayout.astro`.
- **Resume** lives in `public/resume.pdf` and is linked from the navigation/footer.

## 📤 Deployment

The site is designed for GitHub Pages:

1. Ensure `astro.config.mjs` has `site: "https://piyushsatti.com"`.
2. Run `npm run build` locally to validate.
3. Push to the default branch; the GitHub Actions workflow (if enabled) will build and publish to Pages.

You can also host the `dist/` folder on any static host (Netlify, Vercel static export, Cloudflare Pages, etc.).

## ✅ Maintenance Checklist

- `npm run dev` while editing content for instant feedback.
- `npm run build` before committing to catch schema or runtime errors.
- Keep `resume.pdf` updated in `public/`.
- Refresh social metadata (OpenGraph, JSON-LD) when adding new content types.

## 🙏 Credits

Retro mode (`/retro/`) is built on other people's work:

- **The computer and the CRT screen: [Henry Heffernan](https://henryheffernan.com).** The 3D computer and desk models with their baked textures (his logo painted out of the monitor's texture, our badge drawn in), the way the screen is placed into the monitor, the camera framing, the film-grain shader, the smudge and shadow layers, and the mouse and keyboard click sounds come from his portfolio, [henryjeff/portfolio-website](https://github.com/henryjeff/portfolio-website) (commit `c53c5a5`), under the MIT License. His copyright notice and license sit next to the files in [`public/retro/henry/LICENSE.md`](./public/retro/henry/LICENSE.md). The idea of a portfolio inside an old computer screen is his too. Thank you, Henry.
- **3D rendering: [three.js](https://threejs.org)**, MIT License.
- **Windows XP interface: [XP.css](https://github.com/botoxparty/XP.css) by Adam Hammad and Jordan Scales**, MIT License.

- **Wallpaper: "Bliss"**, Microsoft's official 4K render of Charles O'Rear's photograph (Microsoft Design, 2021), resized to 1600px. © Microsoft; used here as a tribute, not under a free license.

The desktop itself (windows, icons, taskbar, the pixel dinosaur cursors and the screen static, which is generated in code) is our own work; Henry's OS ([portfolio-inner-site](https://github.com/henryjeff/portfolio-inner-site)) is not used, and no Microsoft cursor files are included.

## 📄 License

This repository retains the original [MIT License](./LICENSE) from the Astro Terminal theme. Credit for the visual design goes to [panr](https://github.com/panr).

---

Maintained with ❤️ by [Piyush Satti](https://piyushsatti.github.io).
