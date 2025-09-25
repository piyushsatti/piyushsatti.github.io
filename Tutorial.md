# Content Authoring Tutorial

This guide captures the day-to-day workflow for updating content on `piyushsatti.github.io`. Use it alongside the main [README](./README.md) whenever you add posts, projects, or research entries.

---

## 1. Start the local preview

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). Astro refreshes the page automatically whenever you save edits.

### Helpful tips

- Keep the dev server running while you write; Astro validates frontmatter immediately.
- For production-like output run `npm run build` and `npm run preview`.

---

## 2. Add new content

All entries live under `src/content`. File names become the URL slug, so prefer lowercase-with-dashes.

### Blog post

```
src/content/blog/my-new-post.mdx
```

```md
---
title: "What I Learned Shipping GameOps"
description: "Operational guardrails that kept a multiplayer game online at scale."
pubDate: 2024-03-12
author: "Piyush Satti"
tags: ["Observability", "Discord", "ETL"]
image: "./cover.png" # optional hero image
externalLink: "" # optional, leave blank to link internally
---

Your Markdown or MDX content here...
```

### Project case study

```
src/content/projects/<slug>.md
```

```md
---
title: "GameOps Suite"
summary: "Automation toolkit that ingests Discord events and streams analytics dashboards."
startDate: "2022-04-01"
endDate: "2023-02-15" # omit if still active
tags: ["Python", "MongoDB", "ETL"]
repo: "https://github.com/piyushsatti/gameops-suite"
demo: "https://demo.example.com" # optional
image: "./architecture.png" # optional
---

Use headings for TL;DR, architecture, lessons learned, screenshots, etc.
```

### Research summary

```
src/content/research/<slug>.md
```

```md
---
title: "Multi-Agent Motion Planning with Potential Fields"
journal: "IEEE RA-L"
pubDate: "2021-10-01"
summary: "Potential field heuristics fused with reinforcement learning speed up cooperative routing."
tags: ["Robotics", "Python", "Optimization"]
paper: "https://doi.org/..."
repo: "https://github.com/piyushsatti/mmapf" # optional
slides: "./talk.pdf" # optional
---

Include intro, highlights, and outcomes. Link to PDFs stored under `public/` when possible.
```

### Need another collection?

1. Update `src/content/config.ts` with a new `defineCollection` schema.
2. Create a directory under `src/content/<collection>/`.
3. Add Markdown files that match the new schema.
4. Build or restart the dev server to regenerate types.

---

## 3. Use tags consistently

- Tags power `/tags` and `/tags/<slug>`.
- Stick to concise, Title Case or lowercase words (e.g., `GraphQL`, `python`).
- Avoid duplicates; reuse existing tags when possible. Check the list on `/tags` while the dev server runs.

---

## 4. Embed media responsibly

- Store images in the same folder as the Markdown file and reference them relatively (e.g., `image: "./cover.png"`).
- Large diagrams can live in `public/` if reused across pages.
- Use standard Markdown for images/video when possible; iframes are supported but keep them responsive by wrapping with `<div class="video-wrapper">` as seen in existing posts.

---

## 5. Publish updates

1. Stop the dev server when finished (`Ctrl+C`).
2. Run a production build to ensure frontmatter and routes are valid:

   ```bash
   npm run build
   ```

3. Commit changes and push. GitHub Pages will deploy automatically.

---

## 6. Troubleshooting

- **Schema errors:** Astro prints the failing field and file path. Fix the frontmatter values and rebuild.
- **Broken tag links:** Ensure the tag text is the same across entries; the slug is generated automatically.
- **Missing images:** Confirm the path is relative to the Markdown file or use `/`-prefixed paths for items in `public/`.

Happy writing!
