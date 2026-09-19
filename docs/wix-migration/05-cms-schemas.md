# CMS Schemas

Collections to create in the Wix CMS. Copy lives in `02-content-inventory.md`.

> **Note:** the Wix CMS app was not installed on the duplicate site, and may not
> be active on the live site either. Creating the first collection in the
> Editor installs it. The CMS is Editor-managed — this does **not** require
> Velo, and must not be confused with enabling the code editor.

## `Gatherings`

Drives the weekly schedule. Replaces the hand-coded table that went five months
stale.

| Field | Type | Notes |
|---|---|---|
| `date` | Date | The Saturday |
| `location` | Reference → `Locations` | |
| `presenter` | Text | Blank renders as "Speaker to be announced" |
| `notes` | Text | Optional |
| `featured` | Boolean | Highlights the row |

Sort ascending by `date`; filter to today onward so past weeks drop off by
themselves. That single filter is what stops this going stale again.

## `Locations`

| Field | Type | Notes |
|---|---|---|
| `name` | Text | e.g. "Panera Bread — Buford" |
| `address` | Address | Wix address field, so maps work |
| `shortName` | Text | "Buford" — for the schedule table |
| `notes` | Text | Optional |

Seed rows: Lawrenceville-Sugarloaf, Buford, Conyers. Street addresses are not
in the current site and need supplying.

## `CoreValues`

| Field | Type | Notes |
|---|---|---|
| `title` | Text | |
| `scripture` | Text | Reference(s), interpunct-separated |
| `icon` | Image | Optional |
| `order` | Number | Display order |

Five rows — see `02-content-inventory.md`.

## Deferred

`Leaders` and `Resources` are mentioned in the project brief but have no source
content. Defer until there is something to put in them.

## Not a CMS collection

The **Fall Conference** is a Wix Event, not a CMS row — that is what gives it
RSVP, add-to-calendar and reminder emails.
