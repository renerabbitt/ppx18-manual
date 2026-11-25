# AI & Automation companion site

Standalone static site served at `/ai/` alongside the existing manual and changelog. Edit `packages.js` for package chapters, inclusion groups, current versions and release notes. `pro` uses lime; `full` uses blue. Workflow type is labeled separately from purchase inclusion.

Content was checked against the actual Pro Plan download, the separate Agentic AI and Program Add-ons collection, and the existing public manual on November 24, 2026. Do not publish paid archives or customer-only download URLs here.

## Versions

Keep a plain `VERSION` file in each distributed module, following the existing PDF/Tab packages. Reflect its value in this catalog. Repeat the version in ZIP names when packaging. Keep package versions independent of guide edition and AI model identifiers. Existing manifests should be preserved. No distributed package was modified in creating this site.

For every release, update the package version and append a release record with package ID, version, date, title, kind, notes and user action. Only verified historical notes belong in the catalog; unknown versions remain null. Routine details are collapsed by default.

## Verification

Run `node --check app.js` and `node --check packages.js`. Serve the folder with a static HTTP server. Check chapter navigation, search, release filters, expand/collapse controls and the narrow-screen chapter menu.

## Public content boundary
The public guide describes benefits, capabilities and general prerequisites. Keep proprietary procedures, source code, implementation details and customer download URLs out of all deployed HTML and JavaScript. The original manual CSS is copied verbatim to manual-base.css and manual-theme.css; use its markup and classes. Specific AI UI additions live in styles.css.

