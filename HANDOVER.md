# screenwritingconsultant.com: how the site works

For Matt. Written November 2026, when the site moved from Dan's GitHub to yours.
(This file isn't visible on the public site.)

## Where everything lives

| Piece | Where | Who owns it |
|---|---|---|
| The site's code (this repo) | GitHub, your account | Matt |
| Hosting | Cloudflare → Workers & Pages → `screenwritingconsultant` | Matt's Cloudflare account (matt@screenwritingconsultant.com) |
| Domain DNS (where the domain points, plus your email records) | Cloudflare → Domains → screenwritingconsultant.com | Matt's Cloudflare account |
| Domain registration (renewal, ownership) | Namecheap | Make sure the Namecheap login is yours |
| Contact form | FormSubmit, sends to matt@screenwritingconsultant.com | No account or key needed |
| Visitor stats | Google Analytics 4 | Ask Dan to make you an Administrator |
| Google search data | Google Search Console | Ask Dan to make you an Owner |

**Don't change the domain's DNS records in Cloudflare** unless you know what a record does. Some of them run your
email; delete the wrong one and email quietly stops arriving.

## How the site gets built

There is no build step. The site is plain HTML, CSS and JavaScript, and Cloudflare publishes the files as they are.

If Cloudflare ever asks for build settings:

- Framework preset: **None**
- Build command: **leave blank**
- Output directory: **/** (the root)
- Environment variables: **none**

Every time something changes in this repo, Cloudflare publishes the new version automatically, usually within a minute.

## Making a change

**Small text edit:** on github.com, open the file, click the pencil icon, make the change, then click
**Commit changes**. The live site updates about a minute later.

**Anything bigger:** use Claude (Claude Code) with your GitHub connected. Tell it what you want changed, and it
edits this repo for you.

## Where things are

- `index.html`: the homepage, including services, prices, FAQ and the contact form
- `about/`: the About page
- `blog/`: one folder per blog post
- `resources/`: the Resources page
- `screenplay-notes/`, `tv-pilot-notes/`, `treatment-analysis/`, `logline-punch-up/`, `career-advice/`,
  `script-coverage/`: the individual service pages
- `terms/` and `privacy/`: the legal pages
- `assets/css/style.css`: the design (colors, fonts, layout)
- `assets/js/main.js`: the site's small scripts (form, menu, Analytics tracking)
- `assets/img/`: images
- `SEO.md`: the keyword and backlink plan
- `sitemap.xml`: the list of pages for Google. Add any new page here.

## Things to know

- **Prices appear in several places:** the service cards, the FAQ, the pricing data near the top of `index.html`,
  each service page, and the box at the end of every blog post. If you change a price, change it everywhere. Asking
  Claude to "change the feature price to $X everywhere" is the easiest way.
- **After editing a stylesheet or script,** bump the `?v=` number where `index.html` loads it, so visitors' browsers
  don't keep the old version.
- **Analytics tracks** form submissions (`generate_lead`), newsletter signups (`sign_up`), clicks on your email
  address (`email_click`) and clicks on the blog's "work with me" boxes (`cta_click`).
