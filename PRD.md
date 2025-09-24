# Portfolio — Project Specification

**Owner:** *Piyush Satti* \
**Repo:** `piyushsatti/piyushsatti.github.io` \
**Domain:** `https://piyushsatti.github.io` \
**Theme:** [Astro‑Terminal](https://astro.build/themes/details/astro-terminal/)

## How to use this doc

1. **Fill in all fields marked** `[*EDIT ME*]` before implementation.
2. Follow the **Acceptance Criteria** as the definition of done.
3. This spec enforces **no visual drift**: use the **Astro‑Terminal** theme as-is (colors, typography, spacing, components). Only content changes.

**Quick TODO Map**

* [ ] Site title/tagline in metadata.
* [ ] Social links (GitHub, LinkedIn, Google Scholar, Email).
* [ ] Resume PDF at `/public/resume.pdf`.
* [ ] Project blurbs (TL;DR, bullets) for each featured project.
* [ ] Research items + DOI links.
* [ ] Blog seed posts (2–3).
* [ ] Hobbies page (optional).

## 1) Executive Summary

A personal website built with **Astro** using the **Astro‑Terminal** theme. The site is hosted on **GitHub Pages**. Prioritize content clarity (projects, research, resume), accessibility, and performance while strictly **preserving the theme’s visuals** (no CSS overrides, no extra UI kits). Deployment is automated with **GitHub Actions**.

**Primary audiences:**
1. *Recruiters* - Want fast skim. Technical bredth. Project highlights. Clear CTA.
    `identity -> impact -> resume/contact`

2. *Engineers* - Want technical depth, project deep-dive, craft assessment, and decisions/trade-offs.
    1. Craft assessment \
        `projects -> problems solved -> live-demos`
        `projects -> code-repo -> architecture`
    2. Thought alignment \
        `coding heroes -> technical philosophy -> blog posts`

## 2) System Architecture & Stack

**High-level:**  Write Markdown/MDX -> Astro builds static HTML/CSS/JS -> GitHub Pages serves via CDN.

**Core stack**

**Framework/SSG:** Astro \
**Theme:** Astro‑Terminal (**no visual drift**; do not modify theme styles or Tailwind config if present) \
**Content:** Markdown/MDX via Astro Content Collections \
**Hosting:** GitHub Pages \
**CI/CD:** GitHub Actions (build + deploy)

## 3) Hosting & CI/CD

**Target:** `https://piyushsatti.github.io` \
**GitHub Actions workflow** `.github/workflows/deploy.yml` \
**GitHub Settings -> Pages**: Source = *GitHub Actions*. \

## 4) Constraints

**Static only** (no SSR/ISR/serverless).

## 5) Information Architecture (Sitemap)

```
/
├─ /home
├─ /resume
├─ /projects
│  ├─ /projects/risk-emulated
│  └─ /projects/gameops-suite
│  └─ ...
├─ /research
│  └─ /research/mmapf
│  └─ ...
├─ /blog
│  └─ /blog/[slug]
│  └─ ...
├─ /hobbies (optional)
├─ /contact
```

**Primary nav:** Home • Resume • Projects • Research • Blog • Hobbies • Contact \
**Utility nav:** Resume (PDF link) • Dark/Light toggle • Social (GitHub, LinkedIn, Email)

## 6) Page Wireframes (Content‑First; Keep Theme Layouts)

### Home `/`

**Purpose:** Immediate identity + fast routes to Projects/Resume. \

**Sections (order):**
1. **Hero:** headline (who/what), subline, primary CTAs (View Projects, Download Resume).
2. **Featured Projects x2:** Risk‑Emulated; GameOps Suite.
   * Cards show title, 1–2 line summary, tags, repo/demo links.
3. **Selected Writing (3 latest):** selected from blog collection.
   * Cards show title, excerpt, date, reading time, tag chips.
4. **About Me:** 2–3 sentence bio, key skills/technologies, timeline (education + work).

**CTAs:** View Projects • Download Resume • Contact

### Resume `/resume`

**Purpose:** Quick download & ATS text.
**Implementation:** Place `resume.pdf` in `/public/resume.pdf`

### Projects index `/projects`

**Purpose:** Showcase work; enable quick scanning.
**Content:** Grid/list of project cards from `projects` collection.
**Card fields:** title, date, tags, summary, repo, demo (optional).
**Filters/Sort:** Static (by tag/date) within page; no JS heavy features. Tag contains technologies used (e.g., Java, Python, GraphQL).

### Project detail `/projects/<slug>`

**Purpose:** Case study. \
**Sections (order):**
1. **Header:** title, short subline, tags, repo link, demo link.
2. **TL;DR:** 3 bullets: Problem -> Solution -> Impact.
3. **Technologies:** list of tech used (icons optional).
4. **Case Study:**
    1. Problem & context -> Solution & Trade-offs -> Documentation Efforts.
    2. Design & architecture -> API -> Testing/CI -> Performance/observability.
    3. Learning outcomes (technical + soft skills).
5. **Images/diagrams:**
    1. Architecture diagrams.
    2. GIFs for interactive demos (if applicable).

### Research `/research`

**Purpose:** Distill publications for non-experts.
**Content:** Table/list with Title • DOI • 1‑line plain-English summary.
**Optional:** Citation counts (manual entries), PDF links if permitted.

### Research detail `/research/<slug>`

**Purpose:** Innovation done. \
**Sections (order):**
1. **Header:** title, short subline, paper link, repo link.
2. **TL;DR:** 3 bullets: Problem -> Solution -> Result.
3. **Explanation:** Problem & context -> Solution & Trade-offs -> Comparative studies.
5. **Images/diagrams:**
    1. Architecture diagrams.
    2. Comparitive outcome graphs from paper with explanation.

### Blog `/blog` and `/blog/[slug]`

**Purpose:** Thought leadership + SEO.
**Index:** cards with title, excerpt, date, reading time, tag chips.
**Post:** title, date.

**Starter posts (suggested):**
* GraphQL vs REST in Spring Boot (lessons from Risk‑Emulated)
* ETL from Discord events to MongoDB (GameOps)
* Research rigor -> backend testing habits
* My coding heroes + technical philosophy
* Collaborative problem solving via social games (D&D, board games, video games)
* Hobbies: D&D, travel, reading

### Hobbies `/hobbies` (optional)
**Purpose:** Humanize; shared interests. \
**Content:** 2–3 sentence blurbs on each hobby (D&D, travel, reading, fitness, etc.).

### Contact `/contact`
**Purpose:** Easy way to reach out. \
**Implementation:** Simple page (name, email, message).

## 7) Content Model (Astro Content Collections)

Enable type‑safe content for `projects`, `blog`, `research`. In `src/content/config.ts`.

**Example project MDX** — `src/content/projects/risk-emulated.mdx`

```mdx
---
title: "Risk-Emulated (Spring Boot + GraphQL)"
date: "2024-08-01"
summary: "Playable RISK board game. Backend with typed GraphQL schema, State/Strategy engine, and CI gates."
tags: ["Java", "Spring Boot", "GraphQL", "DDD", "Docker"]
repo: "xxx"
demo: "xxx"
tldr:
  - "Typed schema: createGame, reinforce, attack, gameStatus"
  - "Map builder/validator for legal, connected maps"
  - "Audit MoveLog; Checkstyle/Spotless; coverage gates"
---

**Overview**
Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
```

## 8) Theme Usage Rules (No Visual Drift)

* Do **not** modify theme CSS, colors, typography, spacing, or component structure.
* Do **not** install additional UI kits.
* Keep image aspect ratios and dimensions consistent with theme demos.

## 9) SEO & Social

* Unique `<title>` + meta description per page via frontmatter.
* Open Graph/Twitter meta (theme may provide basics; populate titles/descriptions).
* Generate `sitemap.xml` and `robots.txt` via Astro integration or template support.

**JSON‑LD (Person) — add to `<head>`**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Piyush Satti",
  "url": "https://piyushsatti.github.io",
  "sameAs": [
    "https://github.com/piyushsatti",
    "https://www.linkedin.com/in/piyush-satti/",
    "https://scholar.google.ca/citations?user=eR10c10AAAAJ&hl=en"
  ],
  "jobTitle": "Software Developer"
}
</script>
```

## 10) Acceptance Criteria (Definition of Done)

* **No visual drift:** All pages use Astro‑Terminal components and default theme styling; no custom CSS or UI kits.
* **Navigation:** Home, Projects, Research, Blog, About, Contact; Resume link present in nav/footer.
* **Resume:** `/public/resume.pdf` available and linked from `/resume`.
* **Contact:** Form posts to Formspree endpoint and returns success.
* **Content:** Two project case studies published (Risk‑Emulated, GameOps Suite) with TL;DR + highlights.
* **Research:** Three research items with DOIs and summaries.
* **Blog:** Three seed posts published.
* **SEO:** Unique titles/descriptions; Open Graph/Twitter meta; JSON‑LD Person schema.

# Change Log

* v0.1 — Initial draft for `piyushsatti.github.io` with Astro‑Terminal theme.