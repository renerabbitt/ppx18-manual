# PPX18 Manual Publishing Recovery Guide

## What failed on 2026-08-13

The generated application file was accidentally uploaded with command-runner output at its beginning instead of JavaScript. The browser could not parse it, so the manual shell appeared with no content. Reusing the same asset URL then allowed browsers to keep loading the broken cached copy. The emergency recovery bundle also contained only 33 chapters and silently omitted five published chapters.

## Non-negotiable publishing rules

1. Never build a GitHub blob from displayed shell-command output. Read the source file itself and verify its first bytes before upload.
2. Never replace the live manual until every JavaScript file passes a syntax check.
3. Load all content bundles in a test page and assert the expected chapter count and required chapter titles.
4. Verify both the plain production URL and at least one shareable chapter URL after GitHub Pages deploys.
5. Use a new cache-busting version on every changed JavaScript or CSS URL.
6. Do not report success until the production DOM contains chapter navigation and visible chapter body content with zero console errors.
7. Preserve an explicit canonical chapter manifest. A publish must fail if any canonical chapter is missing.
8. Prefer small, atomic commits: content, loader, cache-busting index, then verification.
9. Keep the last known-good commit SHA in this file before any future manual deployment.

## Required pre-publish checks

- JavaScript syntax succeeds for the application and every content bundle.
- The assembled manual contains exactly the intended chapter count.
- Required chapters include:
  - Why the Pro Plan?
  - Help Folder
  - Walkout Basements
  - Electrical Panel Schedule Tools
  - Foundation Vent System
- The Index links to every chapter.
- Direct chapter URLs open the intended chapter.
- Images use natural dimensions and are not cropped by fixed-height containers.
- Production browser console has no errors.

## Current recovery commits

- Last known-good before the November 14 changelog release: `f7b08e414362d408b09a17a7415841ef86e51492`
- Last known-good before the November 6 troubleshooting update: `3023b1689d86d90904924c740fca83ac104a6071`
- Loader repair: `f853f8fc0189a07d5be2e7f44cc5a0552c60c2d7`
- Cache-bypass index: `3fa80d0caef423939a322f328c44173d12d70020`
- Restored chapters: `e1e98ad73b1d76fa3584c131349e544a83cca262`

## Last known validation target

The live manual must show the full current chapter manifest (43 chapters after the November 19, 2026 AI skills addition). The historical recovery restored 38 chapters; later additions must not be omitted.


## November 19, 2026 AI skills chapter

Last known-good commit before this change: `53c1f95411582582fd4d78ea815dfb3c9ee25a50`. The assembled current manual contained 42 chapters before the addition; the current target is 43, not the historical recovery target of 38. `manual-chapters-manifest.json` records every current chapter ID/title. Preserve all 42 existing chapters and the AI Skills and Integrations chapter, including index/direct-link navigation. Validate loaded bundles, DOM rendering and cache-busted production assets before reporting publication complete.
