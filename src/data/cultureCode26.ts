// Culture & Code 2026 – Fotos: Golden Cut Media. Übernommen von sirius-gmbh.de.
// Bilder liegen verkleinert in src/assets/culture-code-26/.

import gruppenfoto from "@/assets/culture-code-26/gruppenfoto.jpg";
import openingDuo from "@/assets/culture-code-26/opening-duo.jpg";
import openingBuehne from "@/assets/culture-code-26/opening-buehne.jpg";
import betuelHanisch from "@/assets/culture-code-26/betuel-hanisch.jpg";
import betuelWuerfel from "@/assets/culture-code-26/betuel-wuerfel.jpg";
import josefSchneider from "@/assets/culture-code-26/josef-schneider.jpg";
import hannahBast from "@/assets/culture-code-26/hannah-bast.jpg";
import hannahBastDemo from "@/assets/culture-code-26/hannah-bast-demo.jpg";
import publikumLachen from "@/assets/culture-code-26/publikum-lachen.jpg";
import publikumZuhoeren from "@/assets/culture-code-26/publikum-zuhoeren.jpg";
import publikumNeon from "@/assets/culture-code-26/publikum-neon.jpg";
import applaus from "@/assets/culture-code-26/applaus.jpg";
import innenhofMural from "@/assets/culture-code-26/innenhof-mural.jpg";
import coffeeBike from "@/assets/culture-code-26/coffee-bike.jpg";
import barista from "@/assets/culture-code-26/barista.jpg";
import foodtruck from "@/assets/culture-code-26/foodtruck.jpg";
import neonSignet from "@/assets/culture-code-26/neon-signet.jpg";
import sneaker from "@/assets/culture-code-26/sneaker.jpg";
import slush from "@/assets/culture-code-26/slush.jpg";
import cupcake from "@/assets/culture-code-26/cupcake.jpg";
import backstageSelfie from "@/assets/culture-code-26/backstage-selfie.jpg";

import reelHighlight from "@/assets/culture-code-26/event_highlight.mp4";
import reelHighlightPoster from "@/assets/culture-code-26/event_highlight_poster.jpg";
import reelWort from "@/assets/culture-code-26/tag_ein_wort.mp4";
import reelWortPoster from "@/assets/culture-code-26/tag_ein_wort_poster.jpg";
import reelLaecheln from "@/assets/culture-code-26/laecheln.mp4";
import reelLaechelnPoster from "@/assets/culture-code-26/laecheln_poster.jpg";

export interface GalerieFoto {
  src: string;
  alt: string;
  caption?: string;
  featured?: boolean;
}

export interface OTon {
  titel: string;
  beschreibung: string;
  src: string;
  poster: string;
}

export const GALERIE: GalerieFoto[] = [
  { src: gruppenfoto, alt: "Gruppenfoto vor dem SDC-Neon-Logo und der Pflanzenwand", featured: true },
  { src: openingDuo, alt: "Fabian Schüler und Bahadir Alaz bei der Opening Keynote", caption: "Fabian Schüler & Bahadir Alaz — Opening Keynote" },
  { src: openingBuehne, alt: "Fabian Schüler und Bahadir Alaz auf der Bühne", caption: "Fabian Schüler & Bahadir Alaz — Opening Keynote" },
  { src: betuelHanisch, alt: "Betül Hanisch beim Impulsvortrag", caption: "Betül Hanisch — Der Mensch nach der Maschine" },
  { src: betuelWuerfel, alt: "Betül Hanisch mit Würfel-Motiv beim Impulsvortrag", caption: "Betül Hanisch — Der Mensch nach der Maschine" },
  { src: josefSchneider, alt: "Josef R. Schneider während seines Impulsvortrags", caption: "Josef R. Schneider — AI meets EQ" },
  { src: hannahBast, alt: "Prof. Dr. Hannah Bast bei der Closing Keynote", caption: "Prof. Dr. Hannah Bast — Closing Keynote" },
  { src: hannahBastDemo, alt: "Prof. Dr. Hannah Bast mit Live-Demo", caption: "Prof. Dr. Hannah Bast — Closing Keynote" },
  { src: publikumLachen, alt: "Lachendes Publikum in der Session" },
  { src: publikumZuhoeren, alt: "Publikum verfolgt die Keynote auf der Bühne" },
  { src: publikumNeon, alt: "Publikum vor der Neon-Greenwall" },
  { src: applaus, alt: "Applaus nach der Closing Keynote" },
  { src: innenhofMural, alt: "Innenhof mit Smiling-Data-Club-Mural und Coffee Bike" },
  { src: coffeeBike, alt: "Begrüßung an der Coffee Bike" },
  { src: barista, alt: "Barista an der roten Coffee Bike" },
  { src: foodtruck, alt: "Pulled Beef auf Fritten vom Foodtruck" },
  { src: neonSignet, alt: "Neon-Signet Smiling Data Club im Innenhof" },
  { src: sneaker, alt: "Custom-Sneaker mit SDC-Sticker" },
  { src: slush, alt: "Slush-Eis an der Slush-Maschine" },
  { src: cupcake, alt: "Cupcake mit Buttercreme" },
  { src: backstageSelfie, alt: "Backstage-Selfie mit dem Orga-Team" },
];

export const O_TOENE: OTon[] = [
  { titel: "Dein Highlight vom Tag", beschreibung: "Vox-Pop mit Gästen — was ist heute hängen geblieben?", src: reelHighlight, poster: reelHighlightPoster },
  { titel: "Culture & Code in einem Wort", beschreibung: "Ein-Wort-Statements der Teilnehmenden.", src: reelWort, poster: reelWortPoster },
  { titel: "Momente des Lächelns", beschreibung: "Kurze Sequenz aus Lach- und Networking-Momenten.", src: reelLaecheln, poster: reelLaechelnPoster },
];
// Vorträge – verlinkt auf YouTube (nicht eingebettet, die Videos sind lang).
// Link fehlt noch → Kachel zeigt „Video folgt“.
export interface Vortrag {
  person: string;
  titel: string;
  rolle: string;
  foto: string;
  youtubeUrl?: string;
}

export const VORTRAEGE: Vortrag[] = [
  {
    person: "Prof. Dr. Hannah Bast",
    titel: "Closing Keynote: KI, Algorithmen und der Mensch dahinter",
    rolle: "Universität Freiburg",
    foto: hannahBast,
  },
  {
    person: "Josef R. Schneider",
    titel: "Impuls: AI meets EQ",
    rolle: "Impulsvortrag",
    foto: josefSchneider,
  },
];

// Interviews – YouTube-Video-ID eintragen (der Teil nach „watch?v=“ bzw. „youtu.be/“).
// Wird per Zwei-Klick eingebettet: YouTube lädt erst nach Klick.
// Beispiel: { name: "Vorname Nachname", rolle: "Firma", youtubeId: "abc123XYZ" },
export interface Interview {
  name: string;
  rolle?: string;
  youtubeId: string;
}

export const INTERVIEWS: Interview[] = [];
