// Maßnahmen-Texte je Bereich und Risikostufe für die personalisierte Auswertung.

export type RiskLevel = "LOW" | "MEDIUM" | "HIGH_RISK" | "GAME_OVER";

export interface AuswertungEntry {
  highlight: string; // "Wenn ihr nur eine Sache macht: ..."
  text: string;      // 3-4 Sätze Maßnahmen-Text
}

export type AuswertungContent = Record<RiskLevel, AuswertungEntry>;

export const AUSWERTUNG_CONTENT: Record<string, AuswertungContent> = {
  buchhaltung: {
    LOW: {
      highlight: "Bleibt dran: Einmal pro Quartal die Doku auf Aktualität prüfen.",
      text: "Eure Buchhaltung läuft sauber dokumentiert und mit redundanten Zugängen. So sieht Resilienz aus — ein Ausfall wäre lästig, aber nicht existenzbedrohend.",
    },
    MEDIUM: {
      highlight: "Wenn ihr nur eine Sache macht: Vier-Augen-Prinzip auf alle Bankzugänge.",
      text: "Grundstruktur ist da, aber es gibt Lücken. Ein dokumentierter Notfallplan, geteilte Zugänge und ein digitales Belegmanagement schließen die wichtigsten davon. Plant einen halben Tag dafür ein.",
    },
    HIGH_RISK: {
      highlight: "Wenn ihr nur eine Sache macht: Eine zweite Person mit Lese-/Freigaberecht in Banking & Buchhaltungssystem.",
      text: "Wissensinsel in der Buchhaltung. Prozessdokumentation und ein digitales Belegmanagement reduzieren eure Abhängigkeit sofort. Startet mit den wiederkehrenden Aufgaben — Lohn, Mahnwesen, Zahlläufe — und arbeitet euch von dort vor.",
    },
    GAME_OVER: {
      highlight: "Wenn ihr nur eine Sache macht: Heute Zugänge teilen und die kritischsten Prozesse grob dokumentieren — bevor es brennt.",
      text: "Eure Finanzbuchhaltung hängt komplett an einer Person. Keine Doku, keine Redundanz. Ein Ausfall bedeutet: keine Rechnungen, keine Bilanz, kein Überblick. Das ist kein theoretisches Risiko — das ist eine Frage des Zeitpunkts.",
    },
  },
  vertrieb: {
    LOW: {
      highlight: "Bleibt dran: CRM-Pflege als wöchentliches Ritual etablieren.",
      text: "Euer Vertrieb steht auf festem Fundament. Kundenbeziehungen sind im System statt im Kopf einer Person — genau so soll es sein.",
    },
    MEDIUM: {
      highlight: "Wenn ihr nur eine Sache macht: Top-20-Kunden in einem Workshop komplett ins CRM überführen — mit Historie und Besonderheiten.",
      text: "CRM wird genutzt, aber lückenhaft. Konsequente Kontaktpflege im System statt im Kopf macht euch unabhängiger. Definiert klare Pflicht-Felder und ein Review-Ritual pro Quartal.",
    },
    HIGH_RISK: {
      highlight: "Wenn ihr nur eine Sache macht: Workshop, in dem alle Vertriebsleute ihre Top-Kunden ins CRM überführen — strukturiert und vollständig.",
      text: "Kundenbeziehungen sind personengebunden. Ohne strukturiertes CRM und dokumentierte Kundenhistorie baut ihr auf Sand. Ein einzelner Abgang kostet euch nicht nur Personen, sondern eure wichtigsten Beziehungen.",
    },
    GAME_OVER: {
      highlight: "Wenn ihr nur eine Sache macht: Heute eine Notfall-Liste der Top-Kunden mit Ansprechpartnern, Verträgen und letzten Berührungspunkten erstellen.",
      text: "Eure Kundenbeziehungen existieren nur im Kopf einer Person. Wenn sie geht, gehen eure Kunden mit. Euer Vertrieb startet bei null. Das ist kein Wachstumsthema — das ist Existenzschutz.",
    },
  },
  it: {
    LOW: {
      highlight: "Bleibt dran: Halbjährlicher Backup-Test und Lizenz-Review.",
      text: "Eure IT ist sauber dokumentiert und redundant abgesichert. Zugänge, Lizenzen und Backup-Routinen sind nicht mehr an eine Person gebunden — Standard, der nicht selbstverständlich ist.",
    },
    MEDIUM: {
      highlight: "Wenn ihr nur eine Sache macht: Geteilten Passwort-Manager (Bitwarden, 1Password) einrichten und alle kritischen Zugänge dort hinterlegen.",
      text: "Teilweise dokumentiert. Ein zentraler Passwort-Manager und regelmäßige Backup-Tests schließen die größten Lücken. Plant zusätzlich ein Lizenz-Register mit Verlängerungsdaten.",
    },
    HIGH_RISK: {
      highlight: "Wenn ihr nur eine Sache macht: Notfall-Zugriff auf alle kritischen Zugänge für eine zweite Person dokumentieren.",
      text: "Kritisches IT-Wissen liegt bei einer Person. Zugangsdaten, Backup-Routinen und Lizenzen gehören zentral und redundant dokumentiert. Beginnt mit den Master-Zugängen — Domain, Mailserver, Cloud-Konsole.",
    },
    GAME_OVER: {
      highlight: "Wenn ihr nur eine Sache macht: Heute Master-Zugänge in einem Passwort-Manager für mindestens zwei Personen ablegen.",
      text: "Euer IT-Admin ist euer Single Point of Failure. Kein dokumentiertes Backup, keine geteilten Zugänge. Wenn er ausfällt, steht alles — und ihr habt nicht mal die Passwörter, um zu reagieren.",
    },
  },
  assistenz: {
    LOW: {
      highlight: "Bleibt dran: Quartalsweise Vertrags- und Fristenliste aktualisieren.",
      text: "Verträge, Fristen und organisatorisches Wissen liegen im System statt im Kopf einer Person. Eure Assistenz-Funktion ist nicht mehr Single Point of Failure.",
    },
    MEDIUM: {
      highlight: "Wenn ihr nur eine Sache macht: Alle laufenden Verträge mit Kündigungsfristen in eine zentrale Tabelle oder ein DMS überführen.",
      text: "Basisstruktur vorhanden. Ein zentrales Vertrags- und Fristenmanagement würde das organisatorische Wissen vom Kopf ins System bringen. Ein DMS oder Vertragstool zahlt sich innerhalb weniger Monate aus.",
    },
    HIGH_RISK: {
      highlight: "Wenn ihr nur eine Sache macht: Fristen- und Vertragsregister mit geteiltem Zugriff anlegen — als zentrale Single Source of Truth.",
      text: "Das organisatorische Gedächtnis steckt in einer Person. Fristen, Verträge und Abläufe gehören in ein digitales System mit geteiltem Zugang. Beginnt mit den Verträgen, deren Verlängerung die nächsten 12 Monate ansteht.",
    },
    GAME_OVER: {
      highlight: "Wenn ihr nur eine Sache macht: Sofort eine Liste der wichtigsten laufenden Fristen, Verträge und Behördentermine erstellen.",
      text: "Verträge, Fristen, Zugangscodes — alles im Kopf einer Person. Fällt sie aus, verpasst ihr Fristen, von denen ihr nicht mal wisst. Vertragsverlängerungen, GbR-Termine, Versicherungen — das sind alles tickende Uhren.",
    },
  },
  technik: {
    LOW: {
      highlight: "Bleibt dran: Pflege des Wissensmanagements ist ein Dauerlauf, kein Sprint.",
      text: "QM und Wissensmanagement sind etabliert. Produktionsqualität bleibt auch dann stabil, wenn einzelne Köpfe nicht mehr da sind. Das ist die Grundlage für skalierbare Produktion.",
    },
    MEDIUM: {
      highlight: "Wenn ihr nur eine Sache macht: Die fünf wichtigsten Produktions-/QM-Prozesse als Step-by-Step-Anleitung im Wiki festhalten.",
      text: "QM-Grundlagen vorhanden. Ein aktuelles Wissensmanagement-System und konsequente Prozessdokumentation würden euch absichern. Ergänzt eine Versionierung für Änderungen — sonst verliert ihr den Überblick.",
    },
    HIGH_RISK: {
      highlight: "Wenn ihr nur eine Sache macht: Mit den Top-3-Prozessen anfangen, dokumentiert von denen, die sie aktuell ausführen.",
      text: "Produktionswissen und Qualitätsstandards sind personengebunden. Ohne systematisches Wissensmanagement riskiert ihr Qualitätsverlust bei jedem Personalwechsel. Das ist ein langsamer Tod — fällt zuerst dem Kunden auf, dann euch.",
    },
    GAME_OVER: {
      highlight: "Wenn ihr nur eine Sache macht: Heute mit der Doku der kritischsten Produktionsprozesse starten — bevor jemand kündigt.",
      text: "Kein dokumentiertes QM, kein Wissensmanagement. Eure Produktionsqualität hängt an einzelnen Köpfen. Fällt jemand aus, fehlt das Know-how — und mit ihm Lieferfähigkeit, Qualität und Vertrauen eurer Kunden.",
    },
  },
  geschaeftsfuehrung: {
    LOW: {
      highlight: "Bleibt dran: Notfallplan jährlich überprüfen und aktualisieren.",
      text: "Prokura, Notfallplan und dokumentierte Strategien — ihr habt vorgesorgt. Euer Unternehmen bleibt handlungsfähig, auch wenn ihr ausfallt. Das ist die unbequemste, aber wichtigste Hausaufgabe.",
    },
    MEDIUM: {
      highlight: "Wenn ihr nur eine Sache macht: Notfall-Mappe mit Prokura, Bankvollmachten und Schlüsselkontakten anlegen — schriftlich.",
      text: "Teilweise geregelt, aber nicht vollständig. Prokura, Notfallplan und dokumentierte Partnerschaften machen euch resilient. Mündlich besprochen reicht nicht — im Ernstfall zählt nur, was schriftlich existiert.",
    },
    HIGH_RISK: {
      highlight: "Wenn ihr nur eine Sache macht: Schriftlicher Notfallplan, der regelt, wer welche Entscheidungen treffen darf, wenn die GF ausfällt.",
      text: "Strategische Entscheidungen und Schlüsselbeziehungen liegen bei einer Person. Ohne Notfallplan ist euer Unternehmen führungslos, sobald die GF nicht erreichbar ist. Bindet zumindest eine zweite Person in laufende Verhandlungen ein.",
    },
    GAME_OVER: {
      highlight: "Wenn ihr nur eine Sache macht: Heute Prokura erteilen und die wichtigsten Bankzugänge teilen.",
      text: "Kein Notfallplan, keine geteilte Prokura, keine dokumentierten Strategien. Euer Unternehmen ist führungslos ab Tag 1. Das ist nicht nur ein Risiko für euch — sondern für jeden, der von eurem Unternehmen abhängt.",
    },
  },
};

// Mapping vom Game-Risiko-String auf den Content-Key
export function riskKeyFromLabel(risk: string): RiskLevel {
  switch (risk) {
    case "GAME OVER": return "GAME_OVER";
    case "HIGH RISK": return "HIGH_RISK";
    case "MEDIUM RISK": return "MEDIUM";
    default: return "LOW";
  }
}
