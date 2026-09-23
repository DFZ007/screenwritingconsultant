# Screenwriting Consultant — redesign preview

A static design preview of screenwritingconsultant.com for Matt Tabak. It's plain HTML and CSS with no build step.

## Pages

- `index.html` — homepage
- `about/` — career, credits and background (the main page AI tools use to identify Matt)
- `blog/index.html` — blog index with topic filters
- `blog/how-to-write-a-logline/` — sample article (clean URL: the page is `index.html` inside the folder)
- `SEO.md` — keyword map, title tags, URLs and the plan for future posts
- `llms.txt` — plain-text site summary for AI crawlers
- `sitemap.xml`, `robots.txt` — ready for the live domain

Highlighted items on the pages mark details Matt still needs to supply (turnaround times, testimonials, policies).

## Publish on GitHub Pages

1. Create a new repository on GitHub and upload everything in this folder, keeping the folder structure.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch**, choose `main` and `/ (root)`, and save.
4. After a minute or two the preview is live at `https://<your-username>.github.io/<repo-name>/`.

## Notes

- Every page has `noindex` set so this preview doesn't compete with the live site in search. Remove it only if this ever becomes the real site.
- Links use clean folder URLs (`blog/`), which work on GitHub Pages but not when opening files directly from your computer.
- Forms are demo-only. GitHub Pages has no backend, so submitting shows a message instead of sending anything.
- The portrait loads from the live WordPress site. If that image moves, update the `src` in `index.html` and the article.
- Fonts load from Google Fonts: Libre Caslon Display, Libre Caslon Text, Hanken Grotesk and Courier Prime.
