# AGENTS.md – smiling-data-club.de

Regeln für alle, die an dieser Seite arbeiten: Menschen, Lovable, Claude.
Kurz halten, bei Änderungen an der Struktur hier nachziehen.

## Was das ist

Öffentliche Website des Smiling Data Club (SDC), einer Marke der SIRIUS GmbH
document solutions, Freiburg. Vite + React + TypeScript, Tailwind, shadcn/ui,
react-router. Gehostet auf **Netlify** (Domain smiling-data-club.de).
Das Repo ist **öffentlich** und an **Lovable** angebunden.

## Struktur – wo was liegt

| Was | Datei |
| --- | --- |
| Menü (Hauptpunkte, Unterpunkte, Member-Login) | `src/data/navigation.ts` |
| Routen | `src/App.tsx` (neue Seite = Route hier **und** Eintrag in `navigation.ts`) |
| Lösungs-Seiten (Zoho, KI, DocuWare, MCP) inkl. Testimonials | `src/data/loesungen.ts` → gerendert von `src/pages/loesungen/Loesung.tsx` |
| Webinare & Termine (von Hand gepflegt) | `src/data/termine.ts` |
| Culture & Code 27 – Datum | `src/pages/events/CultureCode27.tsx`, Konstante `DATUM` |
| Rahmen jeder Unterseite (Header, Hintergrund, Seitenkopf, Footer) | `src/components/PageLayout.tsx` |
| Header mit Dropdowns und Handy-Menü | `src/components/SiteHeader.tsx` |
| Platzhalter „Coming soon“ | `src/components/ComingSoon.tsx` |
| Startseite | `src/pages/Index.tsx` |
| Angebots-Check | `public/check/` – eigenständige HTML-Seite, **nicht** Teil der React-App |
| Krisen-Simulator | `src/pages/Game.tsx`, Auswertung `src/pages/Auswertung.tsx` |
| Server-Funktionen | `netlify/functions/` |

**Startseite** – Reihenfolge bleibt: Hero → „Was wir machen“ (Kacheln) →
Culture & Code (Film) → Code-Block → Join the Club → Pong (Bonus Level, ganz unten).
Ausführliche Inhalte gehören auf die Unterseiten, nicht zurück auf die Startseite.

**Adressen, die nicht geändert werden dürfen** (stehen in Mails, auf LinkedIn,
in Auswertungslinks): `/game`, `/game/auswertung`, `/check`.

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
- YouTube/Vimeo erst nach Klick laden (`src/components/YouTubeZweiKlick.tsx`),
  keine Vorschaubilder von `img.youtube.com`, kein direktes `<iframe>`.
- Neue Formulare, Tracking oder externe Dienste: vorher klären, ob die
  Datenschutzerklärung (`src/pages/Datenschutz.tsx`) das abdeckt.
- Netlify-Functions-Region: Frankfurt (eu-central-1).

## Design

Synthwave-/Pixel-Stil wie bestehend. Vorhandene Klassen und Farben nutzen
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

- sirius-gmbh.de (Repo `Smiling-Data-Club/sirius-flow-3dc01161`): `/smiling-data-club`
  und `/culture-and-code` per 301 auf `/events/culture-and-code-26` umleiten.
- Eventfilm liegt noch auf einer Lovable-Vorschau-URL
  (`src/components/EventFilmSection.tsx`) – Datei ins Repo holen.
- Krisen-Simulator, Impressum und Datenschutz auf `PageLayout`/`SiteHeader`
  umstellen.
- Domain klären: `index.html` und `public/sitemap.xml` nennen
  `smiling-data.club`, live läuft `smiling-data-club.de`.
- Member-Login (`/member`) ist Platzhalter. Echter Login später über den
  SDC-Auth-Hub – bis dahin **kein** Formular mit Passwortfeld.
