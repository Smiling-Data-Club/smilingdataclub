import PageLayout from "@/components/PageLayout";

const Datenschutz = () => {
  return (
    <PageLayout title="Datenschutz" eyebrow="RECHTLICHES" headline="Datenschutzerklärung">
      <section className="sw-section" style={{ paddingTop: 0 }}>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-foreground/90 text-sm leading-relaxed">
            <Section title="1. Verantwortlicher">
              <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
              <p className="mt-2">
                <strong className="text-foreground">SIRIUS GmbH document solutions</strong>
                <br />
                Abrichstraße 23
                <br />
                79108 Freiburg-Hochdorf
              </p>
              <p className="mt-2">
                Telefon: (0761) 704070
                <br />
                E-Mail: info@sirius-gmbh.de
              </p>
              <p className="mt-2">
                Vertretungsberechtigte Geschäftsführer: Fabian Schüler, Michael Wangerowski, Manfred Schüler
              </p>
            </Section>

            <Section title="2. Allgemeines zur Datenverarbeitung">
              <p>
                Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung
                einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Rechtsgrundlagen
                sind insbesondere:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
                <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung / vorvertragliche Maßnahmen)</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
              </ul>
            </Section>

            <Section title="3. Hosting">
              <p>
                Diese Website wird bei Netlify, Inc. (44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA)
                gehostet. Beim Aufruf unserer Website werden durch den Hosting-Anbieter automatisch Informationen
                erfasst (sog. Server-Log-Dateien). Dazu gehören:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>Browsertyp und -version</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer-URL</li>
                <li>IP-Adresse des zugreifenden Rechners (ggf. anonymisiert)</li>
                <li>Uhrzeit der Serveranfrage</li>
              </ul>
              <p className="mt-2">
                Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an einer sicheren und effizienten
                Bereitstellung unserer Website (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p className="mt-2">
                Da Netlify seinen Sitz in den USA hat, kann eine Übermittlung personenbezogener Daten in die USA
                erfolgen. Netlify hat sich dem EU-U.S. Data Privacy Framework angeschlossen. Ergänzend werden
                EU-Standardvertragsklauseln (Standard Contractual Clauses, SCCs) gemäß Art. 46 Abs. 2 lit. c DSGVO
                eingesetzt.
              </p>
              <p className="mt-2">
                Weitere Informationen:{" "}
                <a
                  href="https://www.netlify.com/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://www.netlify.com/privacy/
                </a>
              </p>
            </Section>

            <Section title="4. Kontaktformular">
              <p>
                Wenn Sie uns über das Kontaktformular auf unserer Website Anfragen zukommen lassen, werden Ihre Angaben
                aus dem Formular (z. B. Name, E-Mail-Adresse, Nachricht) zur Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert.
              </p>
              <p className="mt-2">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw.
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).
              </p>
              <p className="mt-2">
                Die übermittelten Daten werden im CRM-System Zoho CRM (Zoho Corporation B.V., Beneluxlaan 4B, 3527 HS
                Utrecht, Niederlande) verarbeitet. Zoho betreibt Rechenzentren in der EU (u. a. in den Niederlanden und
                Irland).
              </p>
              <p className="mt-2">
                Weitere Informationen:{" "}
                <a
                  href="https://www.zoho.com/de/privacy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://www.zoho.com/de/privacy.html
                </a>
              </p>
              <p className="mt-2">
                Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr
                erforderlich sind — in der Regel nach abschließender Bearbeitung Ihrer Anfrage, sofern keine
                gesetzlichen Aufbewahrungspflichten bestehen.
              </p>
            </Section>

            <Section title="5. Terminbuchung über Zoho Bookings">
              <p>
                Auf einzelnen Seiten bieten wir die Möglichkeit, über einen Link einen Gesprächstermin zu buchen. Die
                Buchung erfolgt über den Dienst Zoho Bookings der Zoho Corporation B.V., Beneluxlaan 4B, 3527 HS
                Utrecht, Niederlande. Erst wenn Sie den Link anklicken, werden Sie zu Zoho Bookings weitergeleitet. Dort
                werden die Angaben verarbeitet, die Sie für die Buchung eingeben (z. B. Name, E-Mail-Adresse,
                Wunschtermin, ggf. Telefonnummer und Anmerkungen). Zoho verarbeitet die Daten in Rechenzentren in der
                EU.
              </p>
              <p className="mt-2">
                Die Verarbeitung erfolgt zur Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage hin (Art. 6 Abs. 1
                lit. b DSGVO). Die Daten werden gelöscht, sobald sie für den Termin und eventuelle Anschlussfragen nicht
                mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
              </p>
              <p className="mt-2">
                Unser Angebots-Check auf dieser Website verarbeitet Ihre Antworten ausschließlich lokal in Ihrem
                Browser. Es werden dabei keine Daten an uns oder Dritte übertragen.
              </p>
            </Section>

            <Section title="6. Anzeigen mit Kontaktformular auf LinkedIn">
              <p>
                Wir schalten Anzeigen im Netzwerk LinkedIn. Einige dieser Anzeigen enthalten ein Kontaktformular
                (LinkedIn Lead Gen Form), über das Sie uns Ihre Kontaktdaten übermitteln können, etwa um ein
                Auswertungsgespräch zu Ihrem Angebots-Check zu vereinbaren. Anbieter der Plattform ist die LinkedIn
                Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Irland.
              </p>
              <p className="mt-2">
                Verarbeitet werden die Angaben, die Sie im Formular absenden, in der Regel Vorname, Nachname,
                geschäftliche E-Mail-Adresse und Unternehmen sowie gegebenenfalls Ihre Antwort auf eine Zusatzfrage.
                LinkedIn kann Felder aus Ihrem Profil vorausfüllen; an uns übermittelt werden die Daten erst, wenn Sie
                das Formular absenden.
              </p>
              <p className="mt-2">
                Wir verwenden die Daten, um mit Ihnen Kontakt aufzunehmen und das gewünschte Gespräch zu vereinbaren und
                durchzuführen. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie beim Absenden
                des Formulars erteilen, sowie die Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage hin (Art. 6
                Abs. 1 lit. b DSGVO). Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, z.
                B. per E-Mail an info@sirius-gmbh.de.
              </p>
              <p className="mt-2">
                Die Daten übernehmen wir in unser CRM-System Zoho CRM (siehe Abschnitt 4). Wir löschen sie, sobald Sie
                Ihre Einwilligung widerrufen oder sie für den Zweck nicht mehr erforderlich sind, sofern keine
                gesetzlichen Aufbewahrungspflichten bestehen.
              </p>
              <p className="mt-2">
                Für die Verarbeitung Ihrer Daten durch LinkedIn selbst, etwa im Rahmen Ihrer Nutzung der Plattform, gilt
                die Datenschutzrichtlinie von LinkedIn. LinkedIn kann Daten auch an die LinkedIn Corporation in den USA
                übermitteln. Weitere Informationen:{" "}
                <a
                  href="https://www.linkedin.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://www.linkedin.com/legal/privacy-policy
                </a>
              </p>
            </Section>

            <Section title="7. Webanalyse mit Zoho PageSense">
              <p>
                Mit Ihrer Einwilligung nutzen wir Zoho PageSense, um zu verstehen, wie unsere Website genutzt wird, und
                sie zu verbessern. Anbieter ist die Zoho Corporation B.V., Beneluxlaan 4B, 3527 HS Utrecht, Niederlande.
                Die Daten werden in Rechenzentren von Zoho in der EU verarbeitet. Dabei können folgende Daten erhoben
                werden:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>Seitenaufrufe, Verweildauer und Weg durch die Website</li>
                <li>
                  Klicks, Mausbewegungen und Scrollverhalten – daraus entstehen zusammengefasste Heatmaps (Darstellungen,
                  welche Bereiche einer Seite besonders beachtet werden)
                </li>
                <li>
                  Sitzungsaufzeichnungen: Ihr Besuch wird als Ablauf aus Seitenaufrufen, Klicks und Scrollbewegungen
                  aufgezeichnet. Eingaben in Formularfeldern (z. B. Name oder E-Mail-Adresse) werden dabei unkenntlich
                  gemacht und nicht aufgezeichnet.
                </li>
                <li>Gerätetyp, Betriebssystem, Browser und Bildschirmauflösung</li>
                <li>Ungefährer Standort auf Basis der IP-Adresse; die IP-Adresse wird dabei gekürzt</li>
                <li>Verweisende Seite (Referrer)</li>
              </ul>
              <p className="mt-2">
                Melden Sie sich bei uns an (z. B. über das Formular „Join the Club“), können wir Ihre Besuche auf unserer
                Website Ihrem Kontakt in Zoho Marketing Automation zuordnen, um Ihnen passende Informationen zu senden.
                Auch das geschieht nur, wenn Sie der Kategorie „Statistik &amp; Marketing“ zugestimmt haben.
              </p>
              <p className="mt-2">
                Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Das
                PageSense-Script wird erst geladen, wenn Sie im Cookie-Banner der Kategorie „Statistik &amp; Marketing“
                zugestimmt haben – ohne Zustimmung findet keine Analyse statt. Sie können Ihre Einwilligung jederzeit mit
                Wirkung für die Zukunft über den Link „Cookie-Einstellungen“ unten auf jeder Seite widerrufen. Beim
                Widerruf löschen wir die PageSense-Cookies in Ihrem Browser.
              </p>
              <p className="mt-2">
                Die erhobenen Daten werden nach [X Monaten] gelöscht. Für technischen Support kann Zoho im Einzelfall auch
                von Indien aus (Zoho Corporation Pvt. Ltd.) auf die in der EU gespeicherten Daten zugreifen. Grundlage
                dafür sind die Standardvertragsklauseln der EU-Kommission.
              </p>
              <p className="mt-2">
                Weitere Informationen:{" "}
                <a
                  href="https://www.zoho.com/de/privacy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://www.zoho.com/de/privacy.html
                </a>
              </p>
            </Section>

            <Section title="8. Cookies und lokale Speicherung">
              <p>Diese Website speichert Informationen in Ihrem Browser (Cookies und Local Storage).</p>
              <p className="mt-3 font-semibold">
                Technisch notwendig (§ 25 Abs. 2 Nr. 2 TDDDG, Art. 6 Abs. 1 lit. f DSGVO)
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>
                  <code>sdc-einwilligung</code>, <code>sdc-einwilligung-version</code> (Local Storage): speichern Ihre
                  Auswahl im Cookie-Banner – bis Sie sie ändern oder den Browserspeicher löschen
                </li>
              </ul>
              <p className="mt-3 font-semibold">
                Statistik &amp; Marketing – nur mit Ihrer Einwilligung (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO)
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>
                  <code>zpc…</code> (Zoho PageSense): merkt sich, dass Sie zugestimmt haben – 1 Jahr
                </li>
                <li>
                  <code>zsc…</code> (Zoho PageSense): erkennt zusammengehörige Seitenaufrufe (Sitzung) – 30 Minuten
                </li>
                <li>
                  <code>zft-sdc</code> (Zoho PageSense): erkennt Erstbesuch und Herkunft des Besuchs – 12 Stunden
                </li>
                <li>
                  <code>zps-tgr-dts</code> (Zoho PageSense): Zeitstempel für die Auswertung – 1 Jahr
                </li>
                <li>
                  <code>zpsCookieMeta</code> (Zoho PageSense): Verwaltung der PageSense-Cookies – 400 Tage
                </li>
                <li>
                  <code>zps-ft-details</code>, <code>zps-ft-pghitType-details</code> (Local Storage, Zoho PageSense):
                  Herkunft des Besuchs – bis zum Widerruf oder Löschen des Browserspeichers
                </li>
              </ul>
              <p className="mt-3">
                Sie können Ihre Auswahl jederzeit über „Cookie-Einstellungen“ unten auf jeder Seite ändern. Außerdem
                können Sie Ihren Browser so einstellen, dass er Cookies nur im Einzelfall erlaubt, generell ablehnt oder
                beim Schließen automatisch löscht. Ohne Cookies kann die Funktion dieser Website eingeschränkt sein.
              </p>
            </Section>

            <Section title="9. SSL-/TLS-Verschlüsselung">
              <p>
                Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
                Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt
                und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </Section>

            <Section title="10. Ihre Rechte als betroffene Person">
              <p>Ihnen stehen folgende Rechte gegenüber dem Verantwortlichen zu:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>
                  Auskunftsrecht (Art. 15 DSGVO) — Sie können Auskunft über Ihre bei uns gespeicherten personenbezogenen
                  Daten verlangen.
                </li>
                <li>
                  Recht auf Berichtigung (Art. 16 DSGVO) — Sie können die Berichtigung unrichtiger Daten verlangen.
                </li>
                <li>
                  Recht auf Löschung (Art. 17 DSGVO) — Sie können die Löschung Ihrer Daten verlangen, sofern keine
                  gesetzlichen Aufbewahrungspflichten entgegenstehen.
                </li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>
                  Widerspruchsrecht (Art. 21 DSGVO) — Sie können der Verarbeitung Ihrer Daten jederzeit widersprechen,
                  soweit die Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO beruht.
                </li>
                <li>
                  Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO) — Sie können erteilte Einwilligungen
                  jederzeit mit Wirkung für die Zukunft widerrufen.
                </li>
              </ul>
              <p className="mt-2">Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: info@sirius-gmbh.de</p>
            </Section>

            <Section title="11. Beschwerderecht bei einer Aufsichtsbehörde">
              <p>
                Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt,
                haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
              </p>
              <p className="mt-3">Zuständige Aufsichtsbehörde:</p>
              <p className="mt-2">
                Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg
                <br />
                Lautenschlagerstraße 20
                <br />
                70173 Stuttgart
                <br />
                <a
                  href="https://www.baden-wuerttemberg.datenschutz.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://www.baden-wuerttemberg.datenschutz.de
                </a>
              </p>
            </Section>

            <Section title="12. Änderung dieser Datenschutzerklärung">
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
                Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch
                gilt dann die neue Datenschutzerklärung.
              </p>
              <p className="mt-2 text-muted-foreground">Stand: November 2026</p>
            </Section>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="text-lg font-semibold text-secondary mb-3">{title}</h2>
    {children}
  </section>
);

export default Datenschutz;
