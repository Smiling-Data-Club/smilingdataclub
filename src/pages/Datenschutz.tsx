import PageLayout from "@/components/PageLayout";

const Datenschutz = () => {
  return (
    <PageLayout title="Datenschutz" eyebrow="RECHTLICHES" headline="datenschutzerklärung">
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

            <Section title="7. Webanalyse">
              <p>
                Zur Analyse des Nutzungsverhaltens setzen wir Zoho Marketing Automation (Websitetracking) ein. Dabei
                können folgende Daten erhoben werden:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>Seitenaufrufe und Verweildauer</li>
                <li>Gerätetyp, Bildschirmauflösung</li>
                <li>Ungefährer Standort (auf Basis der IP-Adresse)</li>
                <li>Referrer (verweisende Seite)</li>
                <li>Interaktionen mit E-Mails (Öffnungen, Klicks)</li>
              </ul>
              <p className="mt-2">
                Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie über
                unser Cookie-Banner erteilen können. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
                widerrufen.
              </p>
              <p className="mt-2">Die Daten werden bei der Zoho Corporation B.V. in der EU verarbeitet.</p>
              <p className="mt-2">
                Zusätzlich nutzen wir Zoho PageSense, um die Nutzung der Website auszuwerten (z. B. Seitenaufrufe,
                Klick- und Scrollverhalten). Das PageSense-Script wird erst geladen, nachdem Sie im Cookie-Banner auf
                „Akzeptieren“ geklickt haben. Ihre Entscheidung können Sie jederzeit über den Link
                „Cookie-Einstellungen“ unten auf jeder Seite ändern.
              </p>
            </Section>

            <Section title="8. Cookies">
              <p>
                Diese Website verwendet Cookies. Technisch notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1
                lit. f DSGVO gesetzt. Für das Websitetracking setzt Zoho Marketing Automation ein Cookie (zsiq), das
                Besucher sitzungsübergreifend identifiziert — dieses Cookie wird nur mit Ihrer Einwilligung gesetzt
                (Art. 6 Abs. 1 lit. a DSGVO) und kann über das Cookie-Banner verwaltet werden. Ihre Entscheidung im
                Cookie-Banner speichern wir lokal in Ihrem Browser (Local Storage), damit wir nicht bei jedem Besuch
                erneut fragen müssen.
              </p>
              <p className="mt-2">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
                Cookies nur im Einzelfall erlauben, das Annehmen von Cookies für bestimmte Fälle oder generell
                ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der
                Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
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
              <p className="mt-2 text-muted-foreground">Stand: Oktober 2026</p>
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
