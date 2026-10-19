# AGENTS.md – smiling-data-club.de

Regeln für alle, die an dieser Seite arbeiten: Menschen, Lovable, Claude.
Kurz halten, bei Änderungen an der Struktur hier nachziehen.

## Was das ist

Öffentliche Website des Smiling Data Club (SDC), einer Marke der SIRIUS GmbH
document solutions, Freiburg. Vite + React + TypeScript, Tailwind, shadcn/ui,
react-router. Gehostet auf **Netlify**. Hauptdomain: **https://www.smiling-data-club.de**
(so in Sitemap, Open-Graph-Tags und Canonical).
Das Repo ist **öffentlich** und an **Lovable** angebunden.

## Struktur – wo was liegt

| Was | Datei |
| --- | --- |
| Menü (Hauptpunkte, Unterpunkte, Member-Login) | `src/data/navigation.ts` |
| Routen | `src/App.tsx` (neue Seite = Route hier **und** Eintrag in `navigation.ts`) |
| Lösungs-Seiten (Zoho One, DocuWare, AI) inkl. Texte und Testimonials | `src/data/loesungen.ts` → gerendert von `src/pages/loesungen/Loesung.tsx` |
| Use Cases (sammelt alle Testimonials) | `src/pages/loesungen/UseCases.tsx` |
| Webinare & Termine (von Hand gepflegt) | `src/data/termine.ts` |
| Culture & Code 27 – Datum | `src/pages/events/CultureCode27.tsx`, Konstante `DATUM` |
| Rahmen jeder Unterseite (Header, Hintergrund, Seitenkopf, Footer) | `src/components/PageLayout.tsx` |
| Header mit Dropdowns und Handy-Menü | `src/components/SiteHeader.tsx` |
| Platzhalter „Coming soon“ | `src/components/ComingSoon.tsx` |
| Startseite | `src/pages/Index.tsx` |
| Angebots-Check | `public/check/` – eigenständige HTML-Seite, **nicht** Teil der React-App (wegen eigener Vorschau für LinkedIn). Kopf, Fuß, Farben und Schriften sind dort von Hand nachgebaut – bei Änderungen am Menü mitziehen |
| Schriften (selbst gehostet, keine Google Fonts) | `public/fonts/` mit `fonts.css`, eingebunden in `index.html` und `public/check/` |
| Seitenkopf (kleine Zeile, Überschrift, Untertitel) | `src/components/PageHead.tsx` (auch im Krisen-Simulator) |
| Krisen-Simulator | `src/pages/Game.tsx`, Auswertung `src/pages/Auswertung.tsx` |
| Culture & Code 26 (Fotos, Clips, Vorträge, Interviews) | `src/data/cultureCode26.ts` |
| Server-Funktionen | `netlify/functions/` |
| Aftermovie Culture & Code (Video + Vorschaubild) | `public/videos/` |
| SVG-Morph-Animation (GSAP, per npm – nie per CDN; derzeit nicht eingebunden) | `src/components/MorphShape.tsx`, Formen in `src/data/morphShapes.ts` |
| Abschnittsüberschrift (Pixel, Cyan) | `src/components/SectionTitle.tsx` |

**Startseite** – Reihenfolge bleibt: Hero → „Was wir machen“ (Kacheln) →
Culture & Code (Film) → Code-Block → Join the Club → Pong (Bonus Level, ganz unten).
Ausführliche Inhalte gehören auf die Unterseiten, nicht zurück auf die Startseite.

Umleitungen alter Adressen stehen in `public/_redirects` (vor der SPA-Regel).

**Adressen, die nicht geändert werden dürfen** (stehen in Mails, auf LinkedIn,
in Auswertungslinks): `/game`, `/game/auswertung`, `/check`,
`/events/culture-and-code-26` (Ziel der Umleitung von sirius-gmbh.de).

## Formulare und Zoho – verbindlich

- **Niemals eine Webhook-URL, einen `zapikey`, API-Key oder Token in den Code
  schreiben.** Das Repo ist öffentlich – alles im Code ist für jeden lesbar.
- Formulare schicken **nur** an die eigenen Netlify Functions:
  - `POST /api/anmeldung` – Join the Club, Vormerken (`src/lib/anmeldung.ts`)
  - `POST /api/krisencheck` – Ergebnis des Krisen-Simulators
- Die Functions leiten an Zoho Flow weiter. Die Ziel-URLs stehen **nur** als
  Umgebungsvariablen in Netlify: `ZOHO_FLOW_ANMELDUNG_URL`,
  `ZOHO_FLOW_KRISENCHECK_URL`. Neue Formulare = neue Function + neue
  Umgebungsvariable, nie direkt aus dem Browser zu Zoho.
- Neue Werte für `interesse` (z. B. ein weiteres Event) in **beiden** Dateien
  ergänzen: `src/lib/anmeldung.ts` und `netlify/functions/anmeldung.mts`.
- In der **Lovable-Vorschau funktionieren die Formulare nicht** (keine Netlify
  Functions). Das ist normal – testen auf Netlify.

## Datenschutz

- Keine Personendaten und keine Request-Bodies ins Log – nur Status und
  Fehlerklasse.
- Schriften nur selbst gehostet (`public/fonts/`), nie über Google Fonts.
- YouTube/Vimeo erst nach Klick laden (`src/components/YouTubeZweiKlick.tsx`),
  keine Vorschaubilder von `img.youtube.com`, kein direktes `<iframe>`.
- Neue Formulare, Tracking oder externe Dienste: vorher klären, ob die
  Datenschutzerklärung (`src/pages/Datenschutz.tsx`) das abdeckt.
- Netlify-Functions-Region: Frankfurt (eu-central-1).
- Analyse (Zoho PageSense) lädt **nur nach Einwilligung** über den Cookie-Banner
  (`src/lib/consent.ts`, `src/components/CookieBanner.tsx`). Tracking-Scripts nie
  direkt in `index.html` einbauen.

## Schreibweise

- **SIRIUS** immer in Großbuchstaben (SIRIUS GmbH, SIRIUS-Blog) – nie „Sirius“.
  Ausnahme: Domains wie `sirius-gmbh.de`.
- Auf der Seite wird geduzt.

## Design

Synthwave-/Pixel-Stil wie bestehend. Einheitlich: Seitenkopf über `PageLayout`,
Abschnitte mit `SectionTitle`, Überschriften in normaler Groß-/Kleinschreibung,
keine Icons/Emojis in Kacheln, Breiten nur `max-w-3xl` (Text) und `max-w-5xl` (Raster). Vorhandene Klassen und Farben nutzen
(`sw-section`, `sw-card`, `sw-card-pink`, `sw-card-purple`, `sw-card-feature`,
`sw-section-title`, `sw-headline`, `sw-lead`, `sw-eyebrow`, `neon-btn`;
Farben `--sw-*` in `src/index.css`). Keine neuen Farben oder Schriften ohne
Abstimmung – das SDC-Design-System liegt im Repo `Smiling-Data-Club/sdc-hub`.
Mobil prüfen (390 px), kein horizontales Scrollen.

## Arbeitsweise

- **Nicht direkt auf `main` arbeiten.** Branch → Pull Request → Merge. Was in
  `main` landet, ist sofort live.
- **Keine gepushte History umschreiben** (kein Force-Push, kein Rebase/Amend
  gepushter Commits) – Lovable ist angebunden.
- Vor dem Pull Request: `npm run build` muss durchlaufen.
- Commit-Nachrichten auf Deutsch.

## Offene Punkte (Stand Oktober 2026)

- Member-Login (`/member`) ist Platzhalter. Echter Login später über den
  SDC-Auth-Hub – bis dahin **kein** Formular mit Passwortfeld.
