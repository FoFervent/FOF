# Wix Migration — Fellowship of the Fervent

Working documents for rebuilding the FoF site on Wix.

**Target site:** `a51ac807-62ce-479f-8658-792ce995a176` ("Fervent Men")
Premium · custom domain · Odeditor · **Draft** · Velo disabled

> The second site (`6c3250bf…`) was an accidental duplicate created in the same
> minute at signup. It was verified empty, renamed `DELETE THIS`, and deleted
> (moved to Wix's trash bin) on 2026-09-19.

## Documents

| File | Purpose |
|---|---|
| `01-migration-plan.md` | Phases, decisions, sequencing |
| `02-content-inventory.md` | Every piece of copy from the current site, plus stale-content flags |
| `03-design-tokens.md` | Colours, type, effects — and how each maps into Wix |
| `04-page-specs.md` | Per-page build specs for the Editor |
| `05-cms-schemas.md` | CMS collection definitions |
| `06-editor-guide.md` | Handoff guide for non-technical group members |

## The governing constraint

The Wix connector reaches the **data layer** — CMS, Events, Blog, Media, SEO,
business info. It cannot lay out pages in the Odeditor. There is no API that
places a section, sets a colour, or positions an element on an Editor page.

This is not a workaround to find. Anything buildable purely by API would be the
brittle, non-Editor-editable result the project explicitly rules out. So the
work splits:

- **Track A — scriptable.** CMS collections, seeded content, media, the
  conference Event, business info, SEO.
- **Track B — manual, in the Editor.** All page layout and design, built from
  the specs in `04-page-specs.md`.

## Current status (2026-09-19)

| Item | State |
|---|---|
| Duplicate site | Deleted |
| Wix Hotels app | Uninstalled from live site |
| Business category | **Blocked** — not writable via API (see `01-migration-plan.md`) |
| Fall Conference event | Created as **draft** — address and agenda outstanding |
| Everything else | Not started |
