# Branding audit — piyushsatti.com

**Audit date:** 2026-10-25  
**Scope:** read-only inventory of this repo (`piyushsatti/piyushsatti.github.io`) plus HTTP checks against the live site and the public GitHub profile.  
**Not in scope:** rewriting the site, adding an employer, or inventing metrics.

This file does not change rendered pages. Astro publishes `dist/`, not `docs/`.

No current employer appears anywhere in this repository, in either January 2026 resume PDF, or on the public GitHub profile (`company: null` on 2026-10-25). Do not add one until Piyush writes the sentence.

---

## 1. What the site currently claims

Quotes below are copied from files in this repo. Live HTML on `https://piyushsatti.com/` matched these strings on 2026-10-25 (the Pages deploy still serves the 2026-01-10 tree).

### Name, title, and positioning

| Surface | Exact claim | File |
| --- | --- | --- |
| Hero name | `Piyush Satti` | `src/pages/index.astro` |
| Hero bio | `Software developer with an M.Sc. in Applied Computer Science from Concordia University (Montreal, Canada). I build production software end-to-end, with hands-on freelance delivery experience and published research in algorithm development.` | `src/pages/index.astro` |
| About | `I'm a backend-leaning developer with an M.Sc. I care about typed schemas, clean boundaries, and tests that read like specs.` | `src/pages/about.astro` |
| Default meta | `Personal portfolio for Piyush Satti, a Software Developer showcasing projects, research, and blog posts.` | `src/layouts/BaseLayout.astro` |
| Home meta (overrides the default) | title `Home`; description `Welcome to my personal website` | `src/pages/index.astro` |
| JSON-LD | `"name": "Piyush Satti"`, `"jobTitle": "Software Developer"` | `src/layouts/BaseLayout.astro` |
| Availability banner | `🚀 Open to full-time opportunities — Let's connect!` linking `mailto:piyushsatti@outlook.com` | `src/layouts/BaseLayout.astro` |
| Logo | `Terminal>>Pi(π)`; link title `Click here for piChat` | `src/components/site/SiteHeader.astro` |
| Chat empty state | `This is a local demo. Ask me about projects or tech.` | `src/components/site/SiteHeader.astro` |
| About caption | `Fueled by: diet coke, whiteclaw, and ramen.` | `src/pages/about.astro` |
| Hobbies opener | `Outside of software, I spend most of my creative time around tabletop RPGs: running games, designing adventures, and building community spaces where people can reliably find a table.` | `src/pages/hobbies.astro` |

GitHub’s public user object (not this repo), fetched 2026-10-25, says:

- `name`: `Piyush Satti`
- `bio`: `Hey! this is Piyush Satti. Soft dev, psychology, and game design is my jam. Hobbyist TTRPG enjoyer and an avid hiker.`
- `location`: `Montreal, Canada`
- `blog`: `https://piyushsatti.github.io/`
- `company`: `null`
- `hireable`: `true`
- `twitter_username`: `null`
- `updated_at`: `2026-10-18T14:37:52Z`

### Navigation that actually renders

From `src/layouts/BaseLayout.astro` and `src/components/site/SiteHeader.astro`:

- Home
- whoami → `/about`
- Projects
- Research
- Blog
- Hobbies
- Resume dropdown:
  - `Full Stack Developer` → `/Piyush_Satti_Full_stack_Jan26.pdf`
  - `Software Engineering` → `/Piyush_Satti_Software_engineer_Jan26.pdf`

The nav data also contains a `Resume` item pointing at `/resume.pdf`, but the header filters that label out and replaces it with the dropdown. There is no Contact item. `PRD.md` still specifies `Home • Resume • Projects • Research • Blog • Hobbies • Contact`.

### Education (About page)

`src/pages/about.astro`:

- `M.Sc. Applied Computer Science`, Concordia University, `Sept 2023`–`Aug 2025`, `Montreal, Quebec, Canada`, `GPA: 3.62/4.3`
- `B.E. Electronics and Computer Engineering`, Thapar Institute of Engineering and Technology, `Jun 2017`–`Jun 2021`, `Patiala, Punjab, India`, `GPA: 8.96/10`

The same page lists course cards (Concordia and Thapar) with letter grades. Those grades are only on the About page, not in the January 2026 PDFs.

### Experience (Home only)

`src/pages/index.astro`. There is no separate Work page. Dates are all closed; nothing is “Present”.

**Freelance (Upwork, forums)** — Software Developer — `Aug 2021`–`Apr 2023`

> Remote. Owned end-to-end delivery for client-facing software systems, from ambiguous requirements through design, implementation, iteration, and handoff under fixed deadlines.

Achievements quoted from the same file:

- `Delivered 20+ client projects across web apps, automations, and integrations`
- `Built a vision-based game QA automation tool using OpenCV for on-screen detection and PyAutoGUI for input control to automate regression flows`
- `Shipped an AI movie recommendation platform with an ML-based ranking pipeline, a React web UI, and a Node.js backend exposing APIs for search and recommendations`
- `Led small project teams on deadline-critical engagements to meet client delivery targets`

The `20+ client projects` line is on the homepage. It does not appear in the extracted text of either January 2026 PDF.

**Concordia University** — Teaching Assistant (Programmer on Duty, Java) — `Jan 2025`–`Apr 2025`

> Supported Object-Oriented Programming II by debugging student code, explaining OOP concepts, and helping students implement course projects.

- `Programmer on Duty for a course with 400+ students, providing hands-on debugging and implementation support`
- `Led weekly sessions for ~20 students and delivered a revision lecture for ~40 students covering core Java/OOP topics`

**Thapar Institute of Engineering and Technology** — Research Assistant — `Aug 2019`–`Apr 2023`

> Conducted applied research in algorithm-based image restoration and signal processing, translating papers into reproducible implementations and evaluations.

- `Published 4 academic papers and achieved state-of-the-art results in image restoration`
- `Implemented 40+ research techniques and evaluated improvements using signal-to-noise ratio metrics`
- `Contributed to a peer-reviewed publication (IEEE SPL) with 70+ citations`

The site publishes one research entry, not four. See section 4.

### Projects in the collection

Four markdown files. None set `demo`. Home shows the two with the latest `endDate ?? startDate`: Nonagon, then Parkinson’s. Risk-Emulated and pi-orm are index-only.

**Community Event Signup & Approval Platform** (`src/content/projects/nonagon.md`)

- `startDate: "2025-11-01"` (no end date)
- Summary: `GraphQL-first full-stack platform for posting community events and running request-to-join workflows. FastAPI + Strawberry GraphQL backend; React dashboard with analytics and an interactive relationship graph (zoom, pan, scroll).`
- `repo: "https://github.com/piyushsatti/nonagon"`
- Body also says: `A full-stack application for managing community event postings and controlled sign-ups.`

**Parkinson's Speech Classification** (`src/content/projects/parkinson-detector.md`)

- `2025-01-15` to `2025-04-10`
- Summary: `Audio WAVs → manifest generation → SpeechBrain training/prediction to classify Parkinson’s vs control recordings for the Italian dataset using reproducible recipes and results reporting.`
- `repo: "https://github.com/piyushsatti/parkinson-detector"`
- Tags include the literal string `Pcan we rewriteandas`

**Risk-Emulated: Backend Game Engine** (`src/content/projects/risk-emulated.md`)

- `2024-08-01` to `2024-11-01`
- Summary: `Playable RISK backend using Spring Boot + GraphQL with a typed schema (createGame, reinforce, attack, gameStatus), map validator, State/Strategy engine, audit MoveLog, and CI gates.`
- `repo: "https://github.com/piyushsatti/risk-emulated"`

**pi-orm: A lightweight class-to-SQLite ORM** (`src/content/projects/pi-orm.md`)

- `2022-04-01` to `2022-04-05`
- Summary: `Python class metadata → SQLite table creation → CRUD helpers, providing a small helper for mapping dict-based schema definitions into tables and parameterized data operations.`
- `repo: "https://github.com/piyushsatti/pi-orm"`

### Research

One entry. The filename and URL slug are `mmapf`. The title is not about motion planning. `PRD.md` used `mmapf` as a placeholder (“Multi-Agent Motion Planning”).

`src/content/research/mmapf.md`:

- Title: `Min–Max Average Pooling Based Filter for Impulse Noise Removal`
- Journal: `IEEE Signal Processing Letters`
- `pubDate: "2020-06-01"`
- Summary: `Proposes a denoising filter using min–max average pooling to better handle salt-and-pepper (impulse) noise. Improves signal quality while preserving edges by selectively pooling neighborhood statistics.`
- `paper: "https://doi.org/10.1109/LSP.2020.3016868"`
- Plain-English line: `A compact image filter that detects and cleans “impulse” specks in pictures without blurring details.`

Live URL: `https://piyushsatti.com/research/mmapf/` (200 on 2026-10-25).

### Writing

| Slug | Title | `pubDate` | Last commit touching the file |
| --- | --- | --- | --- |
| `richard-sutton-dwarkesh-podcast` | Richard Sutton: Why Agents Need Goals, Ground Truth, and Continual Learning | 2026-01-07 | 2026-01-07 |
| `andrej-dwarkesh-podcast` | Andrej Karpathy: The Decade of Agents and the Missing Pieces in Today’s Stack | 2026-01-07 | 2026-01-07 |
| `nonagon` | Building Nonagon — Lessons from a Discord-Native System | 2025-10-09 | 2025-10-09 |
| `rest-vs-graphql-hands-on-learning` | REST vs GraphQL: Contrasting Two API Designs | 2025-10-09 | 2025-10-09 |
| `my-missing-semester` | My Missing Semester | 2025-09-26 | 2025-09-26 |
| `craft-heroes` | My Coding Heroes | 2024-09-20 (`updatedDate` 2024-09-26) | 2025-09-26 |

Home “Latest Posts” is the two newest by `pubDate`, so the homepage writing module is the two podcast notes, not the project write-ups.

The Nonagon blog post describes a different system than the project page:

> Nonagon combines a **FastAPI** backend, **MongoDB Atlas** for persistence, and a **Discord bot** for interaction.

The current Nonagon README on GitHub (branch `main`, fetched 2026-10-25) says both: `a multi-guild Discord automation platform` with `FastAPI, Strawberry GraphQL` and `PostgreSQL`. The repo’s GitHub description is still the older line: `Backend micro-service suite that handles API requests, command routing, and ETL into a document stor…`.

### Resume PDFs in `public/` (all deployed)

| File | md5 | What it is |
| --- | --- | --- |
| `Piyush_Satti_Software_engineer_Jan26.pdf` | `b55f71d7c2c346f1382c44e3492f7268` | Linked from the Resume menu. Added 2026-01-10. |
| `resume.pdf` | same hash | Byte-identical to the software-engineer PDF. Not shown in the menu. Still served at `/resume.pdf`. |
| `Piyush_Satti_Full_stack_Jan26.pdf` | `c663907059e609a979f8b75f7f9d27c3` | Linked from the Resume menu. Added 2026-01-10. |
| `resume-oct.pdf` | `e51d19ba9f9aa87ae6abacc43d6f6996` | Not linked in the menu. Still served at `/resume-oct.pdf` (HTTP 200). |
| `resume-sept.pdf` | `947f21ffd7d6f4bad911ff96c2597832` | Not linked in the menu. Still served at `/resume-sept.pdf` (HTTP 200). |

Header line present on every PDF, including both January 2026 files:

> PIYUSH SATTI +1 (514) 451-1479 Montreal, Quebec, Canada piyushsatti@gmail.com

That phone number is not in the HTML.

January 2026 software-engineer PDF experience stops at the same two roles as the long form of the homepage research + TA story (TA `Jan. 2025 – Apr. 2025`, Research Assistant `Aug. 2019 – Apr. 2023`). It does not list Freelance. Its Nonagon line is `Nov. 2025 – Present`. Its Risk line is `Jan. 2024 – Apr. 2024` and describes a Java/JUnit map editor, not Spring Boot.

January 2026 full-stack PDF summary:

> Full-stack software developer with 2 years of hands-on experience building and shipping production applications, owning backend services, data models, and user-facing workflows.

That PDF’s experience is only TA (`Jan. 2025 – Apr. 2025`) and Freelance (`Aug. 2021 – Apr. 2023`). No research role. LinkedIn on this PDF is `linkedin.com/in/piyushsatti` (no hyphen). Every other resume and the HTML use `linkedin.com/in/piyush-satti`.

`resume-oct.pdf` still says, and is still downloadable:

> Freelance Software Engineer: Hacking Forums Remote  
> Independent Contractor Jun. 2023 – Present

and

> Designed and now maintaining an end-to-end telemetry and sign-up platform for500 Indian Board Gamers  
> Delivered 200 ms end-to-end latency for typical actions.

`resume-sept.pdf` repeats the GameOps / `500 Indian Board Gamers` / `200 ms` lines, and it disagrees with the About page on GPA: Concordia `3.62/4` (About and the other PDFs say `3.62/4.3`) and Thapar `9/10` (About and the other PDFs say `8.96/10`).

Those older metrics are not on the homepage and not in the January 2026 PDFs. They are still on the public URLs above.

### Links the HTML actually prints

Footer (`src/components/site/SiteFooter.astro`):

- `https://github.com/piyushsatti`
- `https://www.linkedin.com/in/piyush-satti/`
- `https://scholar.google.ca/citations?user=eR10c10AAAAJ&hl=en`
- `mailto:piyushsatti@gmail.com`

Same three profile URLs are repeated in About and in JSON-LD `sameAs`.

Banner email is the other mailbox: `mailto:piyushsatti@outlook.com`.

Twitter/X is not a visible link. It is only:

```html
<meta name="twitter:site" content="@satti_piyush" />
```

Hobbies links (`src/pages/hobbies.astro`):

- `https://www.smokebombstudios.com/projects/living-chronicles`
- `https://www.smokebombstudios.com/projects/irl-events`
- `https://www.smokebombstudios.com/bangalore-dd-con`
- `https://www.smokebombstudios.com/delhi-dd-tour`

Chat client (`src/components/site/SiteHeader.astro`): `const CHAT_API_URL = "https://pichatwithme.vercel.app"`.

Configured site origin (`astro.config.mjs`): `site: "https://piyushsatti.github.io"`. There is no `CNAME` file in the repo. Live `https://piyushsatti.github.io/` returns **301** to `https://piyushsatti.com/`. Canonical, `og:url`, JSON-LD `url`, and sitemap `<loc>` values on the live homepage are still `https://piyushsatti.github.io/`.

---

## 2. Last meaningful content updates

Repo history starts **2025-09-23** (`Init`). HEAD on `main` at audit time:

`343a6f5` — **2026-01-10** — `feat: enhance logo appearance with shine effect and improve accessibility with title attribute`

That is the last commit of any kind. The site has not had a content commit since then. Today is 2026-10-25, about nine months later. The public GitHub profile `updated_at` is 2026-10-18, and several other public repos were pushed in 2026 after this site froze (section 4). Those pushes are not reflected here.

Content-bearing commits (not an exhaustive style log):

| Date | Commit | What changed for a reader |
| --- | --- | --- |
| 2026-01-10 | `d98b8ee`, `40b25e8`, `e872f79` | Home experience block, About education, both `Jan26` resume PDFs, Next.js added to the skills list |
| 2026-01-07 | `4210130` | Karpathy and Sutton posts; project markdown for Nonagon, Parkinson, pi-orm, Risk-Emulated rewritten |
| 2026-01-06 | `2ea5ff1` | **Deleted** `src/pages/contact.astro`. Footer contact block added. Chat overlay added. |
| 2026-01-06 | `b38c581` | Replaced `resume.pdf`; added `resume-oct.pdf` |
| 2025-11-19 | `b8d9496` and neighbors | Card styling only |
| 2025-10-22 | `783ae31` | `resume.pdf` contact/skills/experience refresh (later overwritten) |
| 2025-10-09 | `651859d` | Blog posts `nonagon` and `rest-vs-graphql-hands-on-learning` |
| 2025-09-26 | `103294b` | `craft-heroes`, `my-missing-semester`; README last touched this day |
| 2025-09-24 | `f984811`, research add | `PRD.md` (still the spec; unchecked TODOs). Research file `mmapf.md` last touched this day |
| 2025-09-23 | `c474292` | First commit |

Per-file last commit (content paths):

| Path | Last commit date |
| --- | --- |
| `src/pages/index.astro`, `about.astro`, `hobbies.astro` | 2026-01-10 |
| `src/layouts/BaseLayout.astro`, `SiteHeader.astro`, `Experience.astro`, `TechStack.astro` | 2026-01-10 |
| `src/components/site/SiteFooter.astro` | 2026-01-06 |
| Both January 2026 PDFs | 2026-01-10 |
| `public/resume.pdf`, `resume-oct.pdf`, `resume-sept.pdf` | 2026-01-06 |
| Project markdown (all four) | 2026-01-07 |
| Sutton + Karpathy posts | 2026-01-07 |
| Nonagon + REST vs GraphQL posts | 2025-10-09 |
| Coding Heroes + Missing Semester | 2025-09-26 |
| `src/content/research/mmapf.md` | 2025-09-24 |
| `README.md` | 2025-09-26 |
| `PRD.md` | 2025-09-24 |

`PRD.md` acceptance criteria that are still open relative to the tree: contact form, GameOps Suite as its own case study, three research items, nav item Contact. The PRD’s JSON-LD sample already matches what shipped (`jobTitle` `Software Developer`, the three `sameAs` URLs).

---

## 3. Broken and stale links

Checked 2026-10-25 with curl. “Stale” means the URL responds but the identity it points at disagrees with another public surface.

### Identity links

| URL | Result | Verdict |
| --- | --- | --- |
| `https://github.com/piyushsatti` | 200. Profile exists. | Live. Blog field still points at `github.io`, not `piyushsatti.com`. `twitter_username` is null. `company` is null. `hireable` is true. |
| `https://github.com/piyushsatti/nonagon` and `.../Nonagon` | both 200 | Live. GitHub description is the old ETL/document-store line. README is Discord + GraphQL + PostgreSQL. |
| `https://github.com/piyushsatti/risk-emulated` | 200 | Live, and **not the system the case study describes**. Repo description: `Code Repository for SOEN6441 Project`. README: Java 21 + Maven game, main class `controller.GameEngine`. No Spring Boot, no GraphQL. |
| `https://github.com/piyushsatti/old-risk-emulated` | 200. Not linked from the site. | README title: `Risk-Backend (Java / Spring Boot)`. Body says RESTful API, H2, basic auth. GitHub description says `GraphQL API`. The site’s GraphQL + PostgreSQL + Docker story matches neither README. |
| `https://github.com/piyushsatti/parkinson-detector` | 200 | README matches the project page. It also says `No hosted demo yet.` |
| `https://github.com/piyushsatti/pi-orm` | 200 | README title is `class-to-sql`, which matches the project body. |
| `https://github.com/piyushsatti/dotfiles` | 200 | Linked from the Missing Semester post (`My dotfiles (work in progress)`). |
| `https://www.linkedin.com/in/piyush-satti/` | HEAD 405 (`allow: GET`). GET 999 authwall from this environment. | **Not confirmed.** The HTML, JSON-LD, and the software-engineer PDF use this hyphenated slug. |
| `https://www.linkedin.com/in/piyushsatti/` | Same 999 authwall. | **Not confirmed.** Only the full-stack January 2026 PDF uses this slug. One of the two is wrong; this audit could not see which profile loads in a browser. |
| `https://x.com/satti_piyush` and `https://twitter.com/satti_piyush` | 404. Page title: `User Profile Not Found - X \| 404 Error` | **Broken.** The handle exists only in `<meta name="twitter:site">`. GitHub has no Twitter username. There is no X link in the footer. |
| `https://scholar.google.ca/citations?user=eR10c10AAAAJ&hl=en` | 403 from this environment (Google interstitial). | **Not confirmed.** Do not delete it on the strength of a bot block. |
| `https://doi.org/10.1109/LSP.2020.3016868` | 302 to `https://ieeexplore.ieee.org/document/9169792/` | Live. This is the one paper the site links. |
| `mailto:piyushsatti@gmail.com` | Not a URL check. `gmail.com` has MX. | Address used by the footer, About is not a mailto (footer is), the deleted contact page, and every PDF. |
| `mailto:piyushsatti@outlook.com` | Not a URL check. `outlook.com` has MX. | Used **only** by the availability banner. Two public emails. |

Mailbox delivery was not tested. MX existing only means the domain accepts mail, not that this local-part is the one Piyush reads.

### On-site routes

| URL | Result |
| --- | --- |
| `https://piyushsatti.com/` | 200. Banner, both emails, and the hero sentence are in the HTML. `<title>` is `Home`. Canonical is `https://piyushsatti.github.io/`. |
| `https://piyushsatti.github.io/` | 301 to `https://piyushsatti.com/` |
| `https://piyushsatti.com/contact/` | **404.** Sitemap still lists `https://piyushsatti.github.io/contact` because `src/pages/sitemap.xml.js` hardcodes `"contact"`. The page file was deleted on 2026-01-06. The deleted page posted to `mailto:piyushsatti@gmail.com` (it was never Formspree, which is what `PRD.md` required). |
| `https://piyushsatti.com/rss.xml` | **404.** `<head>` still advertises `rel="alternate" type="application/rss+xml" href="/rss.xml"`. RSS was removed in an early commit (`b1f7c4e`, message `Added sitemap, robots; removed RSS`) and the link was added back in the layout. |
| `/resume-oct.pdf`, `/resume-sept.pdf`, `/resume.pdf`, both `Jan26` PDFs | all HTTP 200 |

### Hobbies

| URL | Result |
| --- | --- |
| `https://www.smokebombstudios.com/projects/living-chronicles` | 200 |
| `https://www.smokebombstudios.com/projects/irl-events` | 200 |
| `https://www.smokebombstudios.com/bangalore-dd-con` | **404** |
| `https://www.smokebombstudios.com/delhi-dd-tour` | **404** |
| `https://www.smokebombstudios.com/` | 200 |

### Chat

`POST https://pichatwithme.vercel.app/api/session` returned **201** with a `sessionToken` on 2026-10-25. `GET` on that path is 404, which is expected (POST-only). The widget is up. The copy still says `This is a local demo.`

### Citation figure, checked because the site prints it

Homepage and the January 2026 software-engineer PDF both say the IEEE SPL paper has `70+ citations`.

OpenAlex, fetched 2026-10-25, for DOI `10.1109/LSP.2020.3016868`:

- title matches the research page
- `cited_by_count`: **67**
- first author display name `Piyush Satti`, affiliation Thapar Institute

That is one database, not Google Scholar. Do not replace `70+` with `67` in the site without Piyush checking Scholar. Do treat `70+` as unverified, and slightly ahead of OpenAlex.

OpenAlex author `A5108815938` (display name `Piyush Satti`, affiliation years 2020–2023 at Thapar only): `works_count` 6, `cited_by_count` 86. The six titles it returns:

| Year | OpenAlex `cited_by_count` | Title | DOI |
| --- | --- | --- | --- |
| 2020 | 67 | Min-Max Average Pooling Based Filter for Impulse Noise Removal | `10.1109/lsp.2020.3016868` |
| 2021 | 5 | LORAx: A High-speed Energy-efficient Lower-Order Rounding-based Approximate Multiplier | `10.1007/s40009-020-01036-5` |
| 2022 | 4 | Intensity bound limit filter for high density impulse noise removal | `10.1007/s12652-022-04328-4` |
| 2022 | 1 | A Flexible Dynamic Master–User Look-Up Table Approach for Evaluation of Trigonometric Values | `10.1007/s11277-022-09924-3` |
| 2023 | 9 | DIBS: distance- and intensity-based separation filter for high-density impulse noise removal | `10.1007/s11760-023-02650-8` |
| 2023 | 0 | Adaptive Radii selection based Inpainting method for impulse noise removal | `10.1007/s11042-023-14466-2` |

The homepage says `Published 4 academic papers`. OpenAlex lists 6 articles under that author id. This audit did not open the PDFs, so this is an attribution to verify, not a new bio. Only the 2020 IEEE paper is a page on the site. The research repo that matches the filename joke is `github.com/piyushsatti/MMAPF` (description: `Min-Max Average Pooling Filter for Impulse Noise Removal…`), and the site does not link it.

---

## 4. Gaps versus a minimal modern personal site

A minimal set is About, Work, Projects, Contact, and Writing. What exists:

| Piece | Status |
| --- | --- |
| About | Page exists (`/about`, nav label `whoami`). Two sentences, then skills, education, and course grades. No current location-in-one-line beyond the degree cities. No photo caption that says what he does now. |
| Work | No `/work` route. Experience is a block on Home and it ends **April 2025** (TA). Degree end on the About page is **August 2025**. The banner still says open to full-time. GitHub `hireable: true`, `company: null`. There is no employer to display. |
| Projects | `/projects` exists with four write-ups. No demos. Risk-Emulated links a course repo that does not match the write-up. Nonagon has three public stories (blog, project page, README). Home features Nonagon and Parkinson’s, not Risk. pi-orm is a four-day 2022 exercise still in the collection. |
| Contact | **Missing.** Page deleted 2026-01-06. Sitemap still advertises it (404). Footer has GitHub, LinkedIn, Scholar, and Gmail. Banner has Outlook. Phone is only inside PDFs. No X link, and the meta handle 404s. |
| Writing | `/blog` exists, six posts. The two newest are podcast notes (2026-01-07). Nothing since. The Nonagon post (2025-10-09) contradicts the January project page. |

Other gaps that make the site feel frozen in a job search:

- **Domain.** People land on `piyushsatti.com`. Machine-readable identity still says `piyushsatti.github.io` (canonical, Open Graph, JSON-LD, sitemap, GitHub profile website).
- **Five resumes, two eras.** The menu offers two January 2026 variants that already disagree with each other (full-stack PDF drops research and uses a different LinkedIn slug; software-engineer PDF drops freelance and describes Risk as a Jan–Apr 2024 Java project). `resume-oct.pdf` and `resume-sept.pdf` are still world-readable and contradict both.
- **Research under-published.** One paper, wrong slug (`/research/mmapf/`), citation claim unverified, other OpenAlex titles not on the site.
- **Work done after the freeze is invisible.** Original (non-fork) public GitHub repos pushed after `piyushsatti.github.io` last moved on 2026-01-11, with the description GitHub itself stores. These are not site projects. Do not add them until Piyush picks which ones are public portfolio:

  | Pushed | Repo | GitHub description |
  | --- | --- | --- |
  | 2026-10-25 | `workbench` | Machine setup, shared agent config and the pi plugin marketplace |
  | 2026-10-10 | `imposition` | Adaptive-UI architecture that makes layout verifiable. |
  | 2026-10-07 | `chirp` | Local spoken outlines for Codex and Claude Code, powered by Piper. |
  | 2026-09-23 | `alexandria` | Stateless MCP runtime and graph tooling for versioned knowledge data blocks |
  | 2026-09-06 | `workstation` | (no description) |
  | 2026-08-16 | `foundry` | A compiler for agent plugins. One source in, one finished folder out per harness: Claude Code, the p… |
  | 2026-08-09 | `foundry-template` | The starting shape of a Foundry plugin. Kept identical to template/ in piyushsatti/foundry. |
  | 2026-07-31 | `coop` | A shared review surface: you and Claude work the same documents through a web UI instead of chat |
  | 2026-07-27 | `ledgerloom` | Personal finance ETL + behavioral analysis tool. Parse bank PDFs, Splitwise CSVs, and PayPal exports |

  Forks in that window, not original products: `openflowkit`, `rsync`, and earlier `nonagon-blog`.

- **PRD and README are stale specs.** Both still describe a contact page, `resume.pdf` as the resume, and (PRD) a GameOps Suite project and three research DOIs. README last commit is 2025-09-26.
- **Draft debris is published.** `:contentReference[oaicite:…]` tokens are in `src/content/projects/nonagon.md` and `src/content/blog/andrej-dwarkesh-podcast.md`. Parkinson tags include `Pcan we rewriteandas`.
- **Page titles are template leftovers.** Live `<title>` is `Home`. Description is `Welcome to my personal website`. Shares will not say his name in the title.

---

## 5. Refresh checklist, by impact

Ordered for someone whose public site still describes a student who is `Open to full-time opportunities`, while the repo contains **no** post-April-2025 employer. Each item says what this repo can support. Nothing here is permission to invent a company, a metric, or a project.

1. **Take the old resumes off the internet.** Delete `public/resume-sept.pdf` and `public/resume-oct.pdf` (or move them out of `public/`). They are not in the menu and they are still HTTP 200. `resume-oct.pdf` is the dangerous one: it still says `Hacking Forums` and `Independent Contractor Jun. 2023 – Present`, plus `500 Indian Board Gamers` and `200 ms`. `resume-sept.pdf` repeats the GameOps metrics and the conflicting GPAs (`3.62/4`, `9/10`). This is the highest-impact change that needs no new facts.

2. **One email, in every visible place.** Footer and every PDF say `piyushsatti@gmail.com`. The banner says `piyushsatti@outlook.com`. Confirm which inbox is read. Until that confirmation, point the banner at the Gmail address already printed on the resumes. Do not add a third address.

3. **Decide the “open to work” line with one sentence from Piyush. Do not guess the employer.** The banner, JSON-LD `jobTitle` (`Software Developer` with no organization), and GitHub `hireable: true` / `company: null` all still read as looking. If a job has started, the repo does not contain the company, title, or start date. The replacement copy has to be supplied. If he is still looking, leave the banner and only fix the email. Do not write a role to fill the gap.

4. **Make the canonical host the host people already use.** Set `astro.config.mjs` `site` to `https://piyushsatti.com` so canonical, Open Graph, JSON-LD, and the sitemap stop advertising `github.io`. The 301 already exists in GitHub Pages settings; the repo has no `CNAME`. Also update the GitHub profile website field off `https://piyushsatti.github.io/` (that is a profile setting, not a file in this repo).

5. **Remove routes that 404.** Delete `"contact"` from `src/pages/sitemap.xml.js`. Remove the `rss.xml` `<link>` in `BaseLayout.astro` until a feed exists. Restoring a contact page is a separate, slightly larger change: one screen with the single email, GitHub, and LinkedIn. The deleted page was a `mailto:` form, not a backend. Do not add Formspree unless he asks.

6. **Remove `@satti_piyush`.** `https://x.com/satti_piyush` returns X’s own “User Profile Not Found” page, and GitHub has no Twitter username. Delete the `twitter:site` meta until a real handle exists. Do not invent a replacement handle.

7. **Pick one LinkedIn URL.** HTML and the software-engineer PDF use `https://www.linkedin.com/in/piyush-satti/`. The full-stack PDF uses `linkedin.com/in/piyushsatti`. This environment only got LinkedIn’s authwall (HTTP 999), so the audit cannot say which slug is real. Open both while logged out. Put the survivor in the footer, JSON-LD, About, and both PDFs.

8. **One Nonagon paragraph.** Sources that disagree today:
   - Blog (2025-10-09): FastAPI + MongoDB Atlas + Discord bot.
   - Project page (committed 2026-01-07): GraphQL event signup, FastAPI/Strawberry, PostgreSQL, React. No Discord.
   - GitHub README (`main`, 2026-10-25): Discord bot **and** FastAPI/Strawberry/PostgreSQL/React.
   - GitHub repo description: ETL into a document store.
   - `resume-oct.pdf` / `resume-sept.pdf`: “GameOps Suite”, `500 Indian Board Gamers`, `200 ms`.
   - January 2026 PDFs: the GraphQL signup story, `Nov. 2025 – Present`, no GameOps metrics.
   
   Keep the January 2026 wording unless he edits it. Update the blog post and the GitHub description to that wording, or add the Discord sentence from the README if he wants both. Do not bring back `500` or `200 ms`. They exist only on the PDFs that should be unpublished.

9. **One Risk-Emulated story, after he picks the repo.** The project page says Spring Boot + GraphQL + PostgreSQL, `2024-08-01` to `2024-11-01`, and links `piyushsatti/risk-emulated`. That repo’s README is a Java 21 Maven course project (`SOEN6441`) with no Spring. `old-risk-emulated` is Spring Boot but its README says REST + H2, while the GitHub description says GraphQL. The January 2026 PDFs say `Jan. 2024 – Apr. 2024` and describe Java/JUnit, not Spring. Do not “fix” the stack in passing. Either retitle the page to match the linked course repo, or change the link to a repo whose README matches the page. He has to choose.

10. **Research: stop promising four papers on a site that shows one, and stop using the placeholder slug.** Homepage claim `Published 4 academic papers` and `70+ citations` should wait on Scholar. OpenAlex currently shows 67 for that DOI and six titles under the Thapar author id (table in section 3). A safe content change with no new claims: rename the entry off `mmapf` (the PRD placeholder) to a slug taken from the real title, and link `https://github.com/piyushsatti/MMAPF`, which already describes this paper. Adding the other DOIs is a follow-up only after he confirms authorship.

11. **Strip published draft debris.** Remove every `:contentReference[oaicite:…]` token from `src/content/projects/nonagon.md` and `src/content/blog/andrej-dwarkesh-podcast.md`. Remove the tag `Pcan we rewriteandas` from `src/content/projects/parkinson-detector.md`.

12. **Fix the share card.** Home `<title>` is `Home` and the description is `Welcome to my personal website`. Use his name plus the hero sentence that is already written. Do not write a new tagline.

13. **Skills vs evidence.** `TechStack.astro` lists Kafka, Elasticsearch, Apache Spark, DigitalOcean, Nginx, Serverless, Microservices, Monolithic, Next.js. Next.js was added 2026-01-10. Several of these names do not appear in the four project pages. Either tie each chip to a project that is actually on the site, or delete the chip. Do not add projects to justify the chips.

14. **Then, and only then, choose new work to show.** The site’s newest project start date is 2025-11-01 (Nonagon). Public original repos pushed in July–October 2026 are listed in section 4. Adding any of them is a content PR with a README quote and a repo URL, not a redesign. Skip forks.

15. **Leave hobbies, but fix the two 404s.** `bangalore-dd-con` and `delhi-dd-tour` 404. `living-chronicles` and `irl-events` return 200. Replace or remove the dead two. The Smokebomb paragraph can stay; it is already his wording.

16. **Chat copy.** The API at `pichatwithme.vercel.app` answered `POST /api/session` with 201. The panel still says `This is a local demo.` Either say it is a public demo, or hide the widget. The logo click is the only way to open it (`Click here for piChat`), which is easy to miss and easy to hit by accident.

17. **Do not update `PRD.md` as if the old spec were the roadmap.** It still requires GameOps, three research DOIs, Formspree, and a contact page. Treat this audit as the roadmap. The PRD is a September 2025 brief.

Explicitly out of this checklist until Piyush writes them down: current employer, start date, team, anything about compensation, any metric not already quoted above, and any project that is not already a public repo he wants listed.

---

## 6. Suggested first PR, if he OKs it

Smallest useful change. No new biography.

**Title:** Stop serving contradictory resumes and dead identity URLs.

**Touch only:**

- Delete `public/resume-sept.pdf` and `public/resume-oct.pdf` so `/resume-sept.pdf` and `/resume-oct.pdf` stop returning 200. Keep the two `Jan26` PDFs that the menu already links. `public/resume.pdf` is a byte copy of `Piyush_Satti_Software_engineer_Jan26.pdf`; either delete it or leave it as the stable `/resume.pdf` URL, but do not keep a third distinct resume.
- `src/layouts/BaseLayout.astro`
  - Banner `mailto` from `piyushsatti@outlook.com` to `piyushsatti@gmail.com` (the address already on the footer and both January PDFs).
  - Remove `<meta name="twitter:site" content="@satti_piyush" />`.
  - Remove the `rss.xml` alternate link.
  - Do **not** change the words `Open to full-time opportunities` in this PR. That sentence is blocked on one line of copy from him.
- `astro.config.mjs`: `site` from `https://piyushsatti.github.io` to `https://piyushsatti.com`.
- `src/pages/sitemap.xml.js`: remove `"contact"`.
- Delete the `:contentReference[oaicite:…]` tokens and the `Pcan we rewriteandas` tag.

**Do not include:** a job entry, a rewritten Nonagon or Risk page, new research DOIs, new GitHub projects, a contact-form service, or a visual redesign.

**Follow-up that is one sentence, not a project:** he replies with either “still open to full-time” or the exact role line he wants on the banner. Second PR is that string, plus GitHub `hireable` / `company` if he wants those to match. Nobody should draft the employer.

Merging the first PR will trigger the existing GitHub Pages workflow (`.github/workflows/deploy.yml` runs on push to `main`). The page set stays the same except the 404s and the two old PDFs go away, and canonical URLs start using `piyushsatti.com`.
