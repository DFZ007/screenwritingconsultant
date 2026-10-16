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

## Keyword refresh (Oct 15, 2026 pull, Oct 2022 – Sep 2026)

- **script coverage** 1,000/mo, steady. Core term; keep it front and center.
- **script doctor** 880/mo, +22% over 3 months, low competition. NOT yet targeted. Matt's homepage already says he was "a script doctor for major studios." Next step: a dedicated page or post (e.g. /script-doctor/ "What a script doctor actually does") and add the term to the homepage title/description. Ignore "script from doctor" (210, medical).
- **screenplay coverage example** 590/mo (post live Oct 14).
- **movie script coverage / script reader coverage** 260, down 34% YoY.
- **screenwriting consultant / screenplay consultant** 260, down 65% YoY. Keep for brand; not a growth term.
- **script coverage services** 210, down 47% YoY (2025 spike = Coverfly users looking for a replacement; fading).
- **film script coverage** 140, up 55% over 3 months.
- Top-of-page bids $2–$9: a small Google Ads test on coverage + script doctor terms is affordable.

## Backlink plan (Oct 15, 2026)

- **Face/Off 30th anniversary: June 27, 2027** (US release verified). No retrospective so far has quoted a studio exec. Pitch from March 2027: Den of Geek tips@denofgeek.com; Inverse (2022 oral history) hoaitran.bui@inverse.com; THR THRnews@thr.com; past Face/Off writers at SlashFilm (Chris Evangelista), The Ringer (Andrew Gruttadaro), Paste (Rory Doherty). BLOCKER: Matt's public bio (incl. Chapman page) doesn't name Face/Off; gather documentation before pitching.
- **Podcasts:** Selling Your Screenplay (info@sellingyourscreenplay.com, links guest sites), Script Apart (scriptapart.com/contact; Face/Off first-draft angle), Bulletproof Screenwriting (x.com/bpscreenplay, links guest sites), The Q&A with Jeff Goldsmith (x.com/yogoldsmith), Screenwriters' Rant Room, Film Courage, The Screenwriting Life, The Writers Panel. PodcastGuests.com (free), MatchMaker.fm ($15/mo). Scriptnotes and KCRW The Business don't take pitches; On the Page ended Jul 2026.
- **Profiles:** add website to Chapman faculty page (and fix Lecturer → Professor), IMDb, WGA Find a Writer, LinkedIn.
- **Expert-source sites:** Source of Sources (free), Featured.com (free plan; owns HARO now), Qwoted (free basic). Connectively shut down Dec 2024; Help a B2B Writer is now MentionMatch.
- **Resources page** (unpublished branch `resources`) → outreach to film-school librarians, starting with Chapman.
- Avoid paid links / link packages.

## ScriptGenius re-check (Oct 15, 2026)

No price changes since Oct 11. New notes: their feature and pilot reads include a 1-hour call (Matt: 2 hours, for less); they use "script doctoring" in copy but don't target "script doctor" or "script coverage"; homepage last modified Jul 2025.

## Service pages plan (Oct 16, 2026; not built yet)

Decision: keep the live Zoom/phone notes call on the homepage as the main offer ("Better than coverage"). Add two service pages, in this order. Don't split out pilot, treatment or logline services until there's keyword data for them.

### 1. Script doctor page: `/script-doctor/` (build first)
- Target: **script doctor** (880/mo, +22% in 3 months, low competition). ScriptGenius uses "script doctoring" only to describe its founder's past studio work; it doesn't offer the service or target the term.
- Search results mix explainers (Wikipedia, Script Reader Pro) with service pages (Industrial Scripts), so build a hybrid page: what a script doctor actually does, then Matt's studio script-doctor experience as proof, then a **Request a quote** form (no fixed price; rewrite jobs vary too much).
- Add "script doctor" to the homepage title/description once the page exists.
- **BLOCKER: check WGA rules first.** Script doctoring means writing or rewriting pages, not just notes. Matt is a WGA member, and Working Rule 8 bars members from writing for companies that haven't signed the Guild's contract. Matt should confirm with the WGA whether paid rewrites for private writers are allowed before offering or advertising the service. (Not verified by us.)

### 2. Written coverage page: `/script-coverage/` (build second)
- Target: **script coverage** (1,000/mo, steady), plus script coverage services (210, fading) and film script coverage (140, rising).
- **Avoid cannibalization:** the service page targets buyer intent (services, professional coverage, price). Retitle `/blog/script-coverage/` (currently "...Why I Give It Verbally") to target "what is script coverage" and link to the service page.
- **Use the existing sample:** link "See a sample report" to `/blog/script-coverage-example/` (its mock report beats ScriptGenius's one-image sample).
- **Pricing structure:** price written coverage above the call, and show a comparison table (written report / notes call, recommended / both). Consider a "call + written report" bundle so written coverage reads as an upgrade, not a contradiction. Settle the base price raise (suggested: feature $750, pilot $550) first.
- Expect many "script coverage" searchers to be budget buyers comparing low-cost reader services; the page's job is to steer them to the call.
- **When this launches, update every "verbal only" statement at the same time:** homepage FAQ ("Handwritten notes are not a part of these services"), homepage "verbal script coverage" description, `/blog/script-coverage/` "Why I give script coverage verbally" section, the "never imply a written report" framing in `/blog/script-coverage-example/`, `llms.txt`, and this file's Oct 11 "coverage" decision. Then take "Coverage" out of the homepage title so the two pages don't compete.

### Timing and ads
- New domain: expect 3–6 months to rank; "script doctor" is the best near-term shot.
- These two pages are the right landing pages for a Google Ads test on coverage and script doctor terms ($2–$9 CPCs), better than the homepage.
