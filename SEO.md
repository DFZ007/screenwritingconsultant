# SEO map

Keyword volumes are US monthly averages from Google Keyword Planner (Sep 2025 – Aug 2026). Planner groups close variants, so the numbers can't be added together.

## Live pages

| Page | URL | Title tag | Primary keyword | Secondary |
|---|---|---|---|---|
| Home | `/` | Script Consultant, Coverage & Screenplay Notes \| Matt Tabak, Former Studio Exec | script consultant (260) | script coverage, screenplay consultant, screenwriting consultant |
| About | `/about/` | About Matt Tabak: Script Consultant, Former Studio Executive, WGA Writer | Matt Tabak (entity page) | script consultant |
| Blog index | `/blog/` | Screenwriting Blog: Loglines, Treatments, Outlines & Pitching \| Matt Tabak | — | — |
| Coverage post | `/blog/script-coverage/` | Script Coverage: What It Is, What's in It, and Why I Give It Verbally \| Matt Tabak | script coverage (880) | coverage services (390), pass consider recommend |
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

## Decided: "coverage" (Oct 11, 2026)

"Script coverage" (880/mo) and "coverage services" (390/mo) outrank "script consultant" (260/mo). Matt gives coverage verbally on the notes call, so we target the term as **verbal script coverage**: homepage title and description, the written-notes FAQ, and the `/blog/script-coverage/` post. Never imply a written report. If Matt ever adds a written coverage product, give it its own service page targeting "script coverage services."

## Going live (done Oct 11, 2026)

- Indexing on for home, about, blog and posts. Legal pages stay noindex until attorney review.
- Sitemap submitted in Search Console; homepage and coverage post submitted for indexing.
- GA4 (G-JG55W9LHEN) linked to Search Console. To do: mark `generate_lead` as a key event once it appears (within 24h of the first inquiry).
- www redirects to the root domain (301). Unknown URLs return a real 404.
- Positioning line used site-wide: every page read by Matt himself. No readers, no assistants, no AI.

## Competitor: ScriptGenius (script-genius.com)

Reviewed Oct 11, 2026 (home, FAQ, articles, testimonials, booking and sample pages). The closest competitor: Charlie Vignola, 30+ years at Jerry Bruckheimer Films, from story analyst to Director of Development (credits on *Pirates of the Caribbean*, *National Treasure*, *Bad Boys*, *Top Gun: Maverick*).

### Their prices vs. Matt's

| Service | ScriptGenius | Matt |
|---|---|---|
| Feature screenplay | $699 + 1-hr video call | $600 |
| TV pilot (and bible) | $599 | $400 |
| Outline / treatment | $399 | $350 |
| Idea session | $299, 1 hr ("Concept Test-Drive") | $175 logline punch-up |
| General consult | $299 / hr | $200 / hr |

Matt is cheaper on every line, with a broader résumé (three studios, produced WGA writer and director, attorney). The low prices undersell him.

### What they do better

- **Named endorsements.** Their strongest asset: Jerry Bruckheimer, Terry Rossio, Shane Black, Manny Coto and others, each tied to a famous credit. Matt's testimonials are hidden because we don't have any yet.
- **A concept-stage product.** "Concept Test-Drive" sells to writers who don't have a draft yet, a bigger and earlier market.
- **A "why are your prices higher?" FAQ.** It turns price into a credential argument: anyone can call themselves a consultant, few have bought scripts.
- **An idea-theft / NDA FAQ.** It answers the #1 fear of new writers head-on.
- **Visible off-site authority.** Podcasts, an AFI guest-speaker spot and a book mention, all listed on the site.
- **Community.** The "Writers' Room" forum (repeat visits, though likely low activity).

### Where they're weak (our openings)

- **SEO basics.** The homepage title tag is "Home -". They never use "script coverage." Only three undated articles. Matt can outrank them on content alone if he publishes steadily.
- **Trust signals.** A Gmail address, PayPal only, no online booking, no turnaround times, and the "sample" is a single image.
- **No AI stance.** Matt's "every page read by me, no AI" is a differentiator they don't claim.
- **No deal or contract help.** Matt's attorney background is unique in this comparison.

### Recommendations, in priority order

1. **Raise prices to at least parity.** Suggested: feature $750, pilot $550, treatment $400, idea session $295, consult $250/hr. Matt's call. At $600 he signals that he's the cheaper option, against a competitor with a narrower résumé.
2. **Get 3–5 named endorsements.** Ask colleagues and former clients from his studio years for one or two sentences each, attributed to a credit. Only use real, approved quotes. This is the biggest credibility gap versus ScriptGenius.
3. **Turn the logline punch-up into a 60-minute "Idea session."** It competes with "Concept Test-Drive" and catches writers before they have a draft.
4. **Add two FAQs:** "Why work with a former studio executive instead of a cheaper reader?" and "Will you steal my idea? Do you sign NDAs?" Lean on the submission release Matt already uses.
5. **Publish the "script coverage example" post** (planned post #5, 480/mo) as the sample they don't really have: an annotated mock report, with no real client material.
6. **Book podcast guest spots and list them** on About ("As heard on"). Off-site mentions help AI answers more than on-page changes.
7. **Add online booking and payment** (Calendly + Stripe or similar) once volume justifies it. It beats their email-and-PayPal flow.
8. **Keep the no-AI and no-readers line prominent.** They only claim "no low-paid readers."

Don't copy: the community forum (it needs moderation and gets little traffic) or a Gmail-based brand.

## Blog illustrations

Made in Gemini, Oct 11, 2026. Files live in `assets/img/blog/`: `<slug>.webp` (full size, used for post heroes), `<slug>-720.webp` (cards) and `<slug>-og.jpg` (1200×630 social image). Every planned post already has one.

**Style prompt (start every new image with this):**
> Sophisticated editorial illustration in the tradition of classic New Yorker and Atlantic magazine art: confident hand-drawn ink line with loose gouache washes on warm ivory paper, limited palette of ivory, charcoal black and one muted antique-gold accent, generous negative space, wry understated wit, mid-century modern sensibility. No text, no letters, no words, no logos, no real or recognizable people. Wide landscape 16:9 composition.

Then describe a single visual metaphor for the post, and make one element antique gold. Never depict real people, film characters or studio and streamer logos.
