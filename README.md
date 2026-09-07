# Oakbridge Business Academy website

A lightweight, multi-page website built with plain HTML, CSS and JavaScript. There is no framework, package manager, build step or runtime dependency.

## Pages

- `/` — institutional overview and primary conversion paths
- `/model/` — the four-stage enterprise pathway and measurement model
- `/founders/` — participant fit, expectations and expression of interest
- `/partners/` — partner, mentor and funder roles
- `/about/` — purpose, promise, proof and brand stewardship
- `/404.html` — custom page-not-found response

## Source

The complete public site is in `dist/`:

- HTML pages use semantic landmarks, one descriptive H1 per route and page-specific structured data.
- `dist/assets/styles.css` contains the complete responsive design system.
- `dist/assets/main.js` contains only mobile-navigation and FAQ enhancements; content remains readable without JavaScript.
- `robots.txt`, `sitemap.xml`, `llms.txt` and `llms-full.txt` support search and machine discovery.

## Local preview

Serve the `dist` directory from any static web server. For example:

```bash
python3 -m http.server 4173 --directory dist
```

Then open `http://localhost:4173/`.

## Launch checks

1. Confirm that `hello@oakbridge.ac.nz` is the correct monitored inbox.
2. Replace the preview-domain canonical URLs and sitemap origin when the final Oakbridge domain is connected.
3. Confirm current programme availability, entry criteria and referral process.
4. Connect expression-of-interest calls to the chosen CRM or secure form endpoint if email is not the final workflow.
5. Add consent-managed analytics only after the measurement plan and privacy wording are approved.
6. Retain documented consent and usage approval for all participant photography used in production.

## Brand system

The site follows the supplied Oakbridge identity: editorial Georgia/Charter-style display type, Arial/Nimbus Sans-style functional type, deep garden green, parchment, pale growth green, bridge clay and oak. The span/arch is used as architecture around imagery rather than as a detached graphic.
