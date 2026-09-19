# Page Build Specs

Per-page instructions for building in the Wix Editor. Copy is in
`02-content-inventory.md`; colours and type in `03-design-tokens.md`.

Applies to every page: cream-50 background unless stated, ~7rem section
padding, content max-width ~1280px, gold eyebrow above each section heading,
entrance animation on headings and cards.

---

## 1. Home

Purpose: convey who FoF is in five seconds and route visitors onward.

| Section | Background | Contents |
|---|---|---|
| Hero | navy-900 | Wordmark, verses, lede, conference banner, two CTAs |
| Scripture band | navy-950 | James 5:16 pull-quote, italic display |
| About teaser | cream-50 | One photo, two paragraphs, "Read more" → About |
| Values strip | cream-100 | Five core value titles, no detail, → About |
| This Saturday | cream-50 | Next gathering from CMS, → Gatherings |
| Conference banner | navy-900 | Kingdom Ready, date, → Fall Conference |
| Give CTA | cream-100 | One line, → Give |

Keep the hero close to the original — it is the strongest thing on the current
site. Background glow and mountain silhouette export as images per
`03-design-tokens.md`.

---

## 2. About

| Section | Background | Contents |
|---|---|---|
| Intro | cream-50 | Two-column: photos left, four paragraphs right |
| Stats | cream-50 | 7am / 3 / 2–3, divider rule above |
| Vision & Mission | cream-100 | Two cards side by side, scripture refs in italic |
| Core Values | cream-100 | Repeater bound to `CoreValues`, sorted by `order` |

The fourth About paragraph ("Our prayer is…") is set in italic display type —
it carries real weight, keep it distinct from the body copy.

---

## 3. Gatherings

| Section | Background | Contents |
|---|---|---|
| Intro | cream-50 | "Saturdays at 7 am", explanatory paragraph, contact button |
| Locations | cream-50 | Three cards from `Locations`, each with a map |
| Schedule | cream-50 | Table/repeater bound to `Gatherings` |
| Special events | cream-100 | Quarterly events card, conference card → Fall Conference |

**Schedule binding.** Sort ascending by `date`, filter `date` ≥ today. Columns:
Date, Location, Presenter, Notes. Empty presenter should render "Speaker to be
announced" — set that as the empty-state text, not as data.

Show the schedule outright rather than behind the accordion the current site
uses. It is the single most-asked question and does not deserve a click.

---

## 4. Fall Conference

Built on the **Wix Event** (see below), not hand-laid text.

| Section | Background | Contents |
|---|---|---|
| Hero | navy-900 | "Kingdom Ready", lede, RSVP button |
| Meta band | navy-900 | Date · Venue · Address, three columns with icons |
| Speaker & worship | navy-900 | Card — Mark Brown, bio, worship lead |
| Schedule | navy-900 | Agenda list |
| Closing | navy-900 | "Come expectant. Leave encouraged." + RSVP |

This page is dark throughout — it is the one place the site goes full navy, and
that is what makes it feel like an occasion.

### Event status

Created as a **draft**:

- ID `e8e0755e-1461-4ffb-9c5f-08b5c2be18ce`
- Slug `fall-conference-2026-kingdom-ready`
- 10 Oct 2026, 7:00 AM America/New_York
- `hideEndDate: true` — no end time is stated on the source site, so none is shown
- RSVP registration, YES_AND_NO, default form (first name, last name, email)

Outstanding, both needing manual work:

1. **Venue address** — will not persist via API (three attempts, all HTTP 200,
   all ignored). Set by hand: Dashboard → Events → Fall Conference 2026 →
   Hamilton Mill UMC, 1450 Pine Road, Dacula, GA 30019.
2. **Agenda** — deliberately not seeded. The source gives times for only two of
   nine items; the rest would have to be invented. Add via Schedule Items once
   real times exist.

Registration currently reports `CLOSED_AUTOMATICALLY` — this is expected while
the event is a draft, and opens when it is published.

---

## 5. Give

| Section | Background | Contents |
|---|---|---|
| Intro | cream-100 | "A love offering", two paragraphs |
| Zelle card | cream-100 | Recipient address, Zelle link, transition disclaimer |

Drop the copy-to-clipboard button — it needs Velo. Show the address as
selectable text beside the Zelle link.

Keep the transition disclaimer verbatim. It explains why donations go to an
address that isn't obviously FoF, and removing it would cause confusion.

---

## 6. Contact

| Section | Background | Contents |
|---|---|---|
| Intro | cream-50 | "We'd love to see you Saturday", closing CTA copy |
| Form | cream-50 | Name, email, message, optional "which location" |
| Details | cream-50 | Fellowship of the Fervent, Inc · c/o Fern Taylor |

Wire the form to **Wix Inbox** and set an email notification. This replaces the
mailto links and means nothing is lost if an inbox changes hands.

Whether to also display an email address depends on which one is final — see
"Blocked on content" in `01-migration-plan.md`.

---

## Header and footer

**Header.** Transparent over the hero, solid cream on scroll. Nav: About ·
Gatherings · Conference · Give · Contact, plus a GIVE TODAY button. Needs a
real logo.

**Footer.** navy-950. Wordmark, the mission line, a Connect column, a Contact
column, copyright, and "Come expectant. Leave encouraged." in italic.

Build both as global elements so they update site-wide at once.
