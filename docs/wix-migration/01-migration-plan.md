# Migration Plan

## Decisions taken

| Question | Decision |
|---|---|
| Site structure | **Six real Wix pages** (not a single scrolling page) |
| Fall Conference | **Wix Event with RSVP** (Events & Tickets already installed) |
| Weekly schedule | **CMS collection**, so members edit rows, not layout |
| Contact | **Native Wix Form → Wix Inbox** |

The common thread: the two things that go stale fastest — the weekly schedule
and the conference — move out of page layout and into surfaces a non-technical
member can edit without opening the Editor.

## Page map

| Page | Source section | Dynamic content |
|---|---|---|
| Home | Hero, scripture band, condensed teasers | — |
| About | About copy, photos, stats, vision/mission/values | Core Values (CMS) |
| Gatherings | Saturday explainer, three locations, schedule | Gatherings + Locations (CMS) |
| Fall Conference | Conference section | Wix Event |
| Give | Love Offering / Zelle | — |
| Contact | Footer contact, mailto CTAs | Wix Form |

Deferred until there is content for them: Blog (app installed), Leaders,
Resources.

## Phases

**Phase 0 — Decisions and content freeze**
Decisions are made. Outstanding content is listed under "Blocked on content".

**Phase 1 — Foundation**
Business info, brand colours and fonts, media upload, empty page shells.

**Phase 2 — CMS** *(Track A)*
Create and seed the collections in `05-cms-schemas.md`.

**Phase 3 — Page design** *(Track B — the bulk of the effort)*
Build each page in the Editor from `04-page-specs.md`.

**Phase 4 — Apps and SEO**
Conference Event finished, contact form wired to Inbox, SEO tags.

**Phase 5 — QA and handoff**
Mobile, links, accessibility. Then walk members through `06-editor-guide.md`.

**Phase 6 — Cutover** *(explicit approval required)*
DNS move and publish. Strictly last.

## Timing

The conference is **10 Oct 2026**. If the conference page and RSVP are to be
live beforehand, Phases 1–4 need to land with about a week of buffer for the
DNS cutover. Recommended: finish the conference page ahead of the full site
build so RSVPs can start collecting while the rest is in progress.

## Known blockers

### Business category — not writable by API

The live site is categorised as:

```
categories.primary  : "online-store"
categories.secondary: ["Men's Clothes Store"]
businessConfig      : "STORE"
```

Wix has the ministry filed as a men's clothing store. This came from the signup
wizard reading the name "Fervent Men", and is the likely reason Wix Stores was
installed — and plausibly how Wix Hotels appeared too.

It is **readable but not writable** through the REST API. The Site Properties
API exposes only these writers, none of which touch categories:

```
POST /v4/properties/business-profile   (siteDisplayName, businessName, logo, description, companyId)
POST /v4/properties/business-contact
POST /v4/properties/business-schedule
POST /v4/properties/business-region
POST /v4/properties/policy
```

**Fix by hand:** Wix Dashboard → Settings → Business Info → change the business
type away from Online Store / Men's Clothes Store to a religious-organisation
or community category.

This matters beyond cosmetics: the category drives dashboard defaults, SEO
suggestions, and which apps Wix promotes.

### Conference venue address — API writes silently ignored

The Fall Conference event was created, but the venue address will not persist.
Three attempts (create, then two PATCH variants with and without `subdivision`,
with `locationTbd` explicitly `false`) all returned HTTP 200 while the response
kept `locationTbd: true` and omitted `address` entirely.

**Fix by hand:** Wix Dashboard → Events → Fall Conference 2026 → set the
location to Hamilton Mill UMC, 1450 Pine Road, Dacula, GA 30019.

## Blocked on content

1. **Fresh gathering dates** — the schedule table on the current site runs
   16 May → 25 Jul and is entirely expired. Needed: date, Panera location and
   presenter for upcoming Saturdays.
2. **Conference agenda times** — the source gives times for only two of nine
   items ("Doors Open 7:00 AM", "Sunrise Service 7:15 AM"); the rest are
   unspecified. Not seeded, because inventing them would be fabrication.
3. **Conference end time** — never stated on the source site. The event
   currently carries a placeholder end with `hideEndDate: true` so nothing
   invented is shown to visitors.
4. **Speaker bio** — a literal `TODO(owner)` in the current HTML for Mark Brown.
5. **Worship lead** — currently "TBD".
6. **Final email addresses** — `sheepfold09@outlook.com` is described in the
   repo README as a temporary inbox; the Zelle copy says donations to
   `emtheministry@gmail.com` reach FoF "during our transition". Both need
   confirming; the Zelle recipient especially.
7. **A real logo.** The repo README notes the shield logo was unavailable; the
   hero uses `fervent-mark.png`, a wordmark. Wix needs a proper mark for the
   header, favicon and social share cards.
8. **Domain confirmation** — `fellowshipofthefervent.org` currently resolves to
   GitHub Pages via `docs/CNAME`. The Wix site reports a custom domain attached
   but not which one. Verify before Phase 6.
