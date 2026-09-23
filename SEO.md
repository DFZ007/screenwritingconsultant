# SEO map

Keyword volumes are US monthly averages from Google Keyword Planner (Sep 2025 – Aug 2026). Planner groups close variants, so the numbers can't be added together.

## Live pages

| Page | URL | Title tag | Primary keyword | Secondary |
|---|---|---|---|---|
| Home | `/` | Script Consultant & Screenplay Notes \| Matt Tabak, Former Studio Exec | script consultant (260) | screenplay consultant, screenwriting consultant |
| About | `/about/` | About Matt Tabak: Script Consultant, Former Studio Executive, WGA Writer | Matt Tabak (entity page) | script consultant |
| Blog index | `/blog/` | Screenwriting Blog: Loglines, Treatments, Outlines & Pitching \| Matt Tabak | — | — |
| Logline post | `/blog/how-to-write-a-logline/` | How to Write a Logline (and How Long It Should Be) \| Matt Tabak | how to write a logline (390) | how long should a logline be (110), how to write a good logline (70) |

## Planned posts, in priority order

| # | Working title | URL | Primary keyword | Secondary |
|---|---|---|---|---|
| 1 | How to write a film treatment that gets read | `/blog/how-to-write-a-film-treatment/` | how to write a film treatment (480) | how to write a treatment for a tv series (50) |
| 2 | How to outline a screenplay before you write page one | `/blog/how-to-outline-a-screenplay/` | how to write a movie outline (390) | how to outline a screenplay (140), screenplay outline (140) |
| 3 | Three-act structure examples from films I worked on | `/blog/three-act-structure-examples/` | three act structure examples (260) | 3 act structure film (260), screenplay three act structure (170) |
| 4 | How to write a TV pilot that sells the series | `/blog/how-to-write-a-tv-pilot/` | how to write a tv pilot (260) | how to write a pilot script (50) |
| 5 | Script coverage example: what a studio reader's report looks like | `/blog/script-coverage-example/` | screenplay coverage example (480) | script coverage pass consider recommend (10) |
| 6 | How to pitch a screenplay: lessons from the buyer's chair | `/blog/how-to-pitch-a-screenplay/` | how to pitch a screenplay (110) | how to pitch a movie script (110) |
| 7 | How to pitch a script to Netflix (and what really happens) | `/blog/how-to-pitch-a-script-to-netflix/` | how to submit a movie script to netflix (140) | how to pitch a script to netflix (40) |
| 8 | Why I bought *Face/Off* when every other studio passed | `/blog/why-i-bought-face-off/` | brand/authority piece, not a volume play | — |
| 9 | How to take script notes without losing your voice | `/blog/how-to-take-script-notes/` | no measurable volume; keep for authority | — |

Dropped: screenplay option agreement (20/mo, legal risk).

## Per-post checklist

- Primary keyword in the title tag, H1, URL slug, first paragraph and meta description.
- One H2 per secondary keyword where it reads naturally (the logline post has "How long should a logline be?").
- 2–4 FAQ questions with FAQPage schema.
- Link to the matching service with descriptive anchor text: treatment post → treatment analysis, pilot post → TV pilot notes, and so on.
- Link to 2–3 related posts.
- Add the URL to `sitemap.xml`.

## AEO / GEO (AI answers)

- One Person entity (`/about/#matt`) referenced from every page's schema, with `sameAs` links to IMDb and Chapman.
- Every H2 opens with a direct one- or two-sentence answer, then expands.
- Posts show and mark up published and updated dates; update `dateModified` when a post changes.
- Author bylines link to `/about/`.
- FAQPage schema on the homepage and on each post.
- `llms.txt` summarizes the site for AI crawlers (low cost; adoption by AI engines is unconfirmed).
- Keep facts identical across the site, IMDb, Chapman and LinkedIn (titles, credits, *Auggie Rose* / *Beyond Suspicion*).
- Off-site mentions (podcasts, interviews, Reddit) likely matter more than any on-page change.

## Open decision: "coverage"

"Script coverage" (880/mo) and "coverage services" (390/mo) outrank "script consultant" (260/mo). Coverage means a written report, which Matt's services currently exclude. Target these terms on the homepage only if he adds a written coverage product.

## Going live

- Remove `<meta name="robots" content="noindex, nofollow">` from every page.
- Canonical tags already point to screenwritingconsultant.com.
- Submit `sitemap.xml` in Google Search Console.
