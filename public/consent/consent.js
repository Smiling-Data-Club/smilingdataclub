/*
  Cookie-Einwilligung für die eigenständigen HTML-Seiten (/check, /webinare …).
  Gegenstück zu src/lib/consent.ts + src/components/CookieBanner.tsx in der React-App.
  Schlüssel, Werte und Script-Adressen müssen in beiden Varianten gleich sein –
  die Entscheidung gilt dann seitenübergreifend (gleicher localStorage).

  Einbinden (vor </body>):
    <script src="/consent/consent.js" defer></script>
  Für Seiten, die siezen (Angebots-Check):
    <script src="/consent/consent.js" data-anrede="sie" defer></script>
  Footer-Link zum erneuten Öffnen:
    <a href="#cookie-einstellungen" data-cookie-einstellungen>Cookie-Einstellungen</a>
*/
(function () {
  "use strict";

  var KEY = "sdc-einwilligung"; // Werte: "alle" | "notwendig"
  // Nur EIN PageSense-Script pro Seite (Zoho erkennt Duplikate, das zweite bleibt wirkungslos)
  var PAGESENSE_PROJEKT = "3e1093b169a248f6b2d78660282a3010"; // Projekt „sdc-website“
  var TRACKING_SCRIPTS = ["https://cdn-eu.pagesense.io/js/siriusgmbh/" + PAGESENSE_PROJEKT + ".js"];
  var ZOHO_PREFIXE = ["zab", "zps", "zpc", "zsc", "zft", "z_user_info"];

  var aktuellesScript = document.currentScript;
  var sie = aktuellesScript && aktuellesScript.getAttribute("data-anrede") === "sie";

  var T = sie
    ? {
        text:
          "Technisch notwendige Cookies sind immer aktiv. Mit Ihrer Zustimmung nutzen wir zusätzlich Zoho PageSense, um zu verstehen, wie die Seite genutzt wird. Sie können Ihre Entscheidung jederzeit über „Cookie-Einstellungen“ unten auf der Seite ändern. Mehr in der ",
        notwendig: "Damit die Seite funktioniert, z. B. um Ihre Cookie-Auswahl zu speichern. Kein Tracking.",
      }
    : {
        text:
          "Technisch notwendige Cookies sind immer aktiv. Mit deiner Zustimmung nutzen wir zusätzlich Zoho PageSense, um zu verstehen, wie die Seite genutzt wird. Du kannst deine Entscheidung jederzeit über „Cookie-Einstellungen“ unten auf der Seite ändern. Mehr in der ",
        notwendig: "Damit die Seite funktioniert, z. B. um deine Cookie-Auswahl zu speichern. Kein Tracking.",
      };
  var STATISTIK_TEXT =
    "Zoho PageSense und Zoho Marketing Automation (Websitetracking): Seitenaufrufe, Klick- und Scrollverhalten, Heatmaps und Sitzungsaufzeichnungen. Hilft uns, die Seite zu verbessern.";

  function lese() {
    try {
      var v = localStorage.getItem(KEY);
      return v === "alle" || v === "notwendig" ? v : null;
    } catch (e) {
      return null;
    }
  }

  function setzeCookie(name, wert, tage) {
    var secure = location.protocol === "https:" ? "; Secure" : "";
    document.cookie = name + "=" + wert + "; path=/; max-age=" + tage * 86400 + "; SameSite=Lax" + secure;
  }

  function ladeTracking() {
    // Zohos eigenen Banner (Projekt steht auf „Opt-out-Banner“) überspringen: Einwilligung weitergeben
    setzeCookie("zpc" + PAGESENSE_PROJEKT, "2", 365);
    TRACKING_SCRIPTS.forEach(function (src) {
      if (document.querySelector('script[src="' + src + '"]')) return;
      var s = document.createElement("script");
      s.src = src;
      s.async = true;
      document.head.appendChild(s);
    });
  }

  function istZoho(name) {
    return ZOHO_PREFIXE.some(function (p) {
      return name.indexOf(p) === 0;
    });
  }

  function entferneZohoSpuren() {
    var teile = location.hostname.split(".");
    var domains = [""];
    for (var i = 0; i < teile.length - 1; i++) domains.push("; domain=." + teile.slice(i).join("."));
    document.cookie.split(";").forEach(function (c) {
      var name = c.split("=")[0].trim();
      if (!istZoho(name)) return;
      domains.forEach(function (d) {
        document.cookie = name + "=; path=/; max-age=0" + d;
      });
    });
    [window.localStorage, window.sessionStorage].forEach(function (speicher) {
      try {
        Object.keys(speicher).filter(istZoho).forEach(function (k) {
          speicher.removeItem(k);
        });
      } catch (e) {
        /* Speicher nicht verfügbar */
      }
    });
  }

  function speichere(wert) {
    var vorher = lese();
    try {
      localStorage.setItem(KEY, wert);
    } catch (e) {
      /* ohne Speicher fragt der Banner beim nächsten Besuch erneut */
    }
    if (wert === "alle") ladeTracking();
    if (wert === "notwendig" && vorher === "alle") {
      entferneZohoSpuren();
      location.reload();
    }
  }

  // ---------- Banner ----------
  var CSS =
    ".sdc-cb{position:fixed;left:0;right:0;bottom:0;z-index:70;padding:0 16px max(16px,env(safe-area-inset-bottom,0px));font-family:\"Inter\",system-ui,sans-serif}" +
    ".sdc-cb-box{max-width:48rem;margin:0 auto;max-height:calc(100vh - 32px);overflow-y:auto;padding:18px 22px;border-radius:12px;border:1px solid hsl(172 100% 45% / .45);background:rgba(5,5,16,.96);box-shadow:0 0 30px hsl(172 100% 45% / .2)}" +
    ".sdc-cb-eyebrow{font-family:\"Press Start 2P\",monospace;font-size:10px;letter-spacing:.12em;color:#00E6C7;margin:0 0 .5rem}" +
    ".sdc-cb p{font-size:.875rem;line-height:1.6;color:#b9c6e8;margin:0}" +
    ".sdc-cb a{color:#00E6C7;text-decoration:underline}" +
    ".sdc-cb-kat{display:flex;align-items:flex-start;gap:1rem;padding:14px 0;border-top:1px solid hsl(172 100% 45% / .15)}" +
    ".sdc-cb-kat:first-child{margin-top:1rem}" +
    ".sdc-cb-kat div{flex:1}" +
    ".sdc-cb-kat strong{display:block;font-size:.875rem;color:#eafffb;font-weight:600;margin-bottom:.25rem}" +
    ".sdc-cb-kat strong span{font-weight:400;font-size:.75rem;color:#7d8bbf;margin-left:.5rem}" +
    ".sdc-cb-sw{flex-shrink:0;margin-top:4px;position:relative;width:46px;height:26px;border-radius:13px;border:2px solid #5b6795;background:transparent;cursor:pointer;padding:0;transition:background .2s,border-color .2s}" +
    ".sdc-cb-sw::after{content:\"\";position:absolute;top:50%;left:3px;width:16px;height:16px;margin-top:-8px;border-radius:50%;background:#7d8bbf;transition:left .2s}" +
    ".sdc-cb-sw[aria-checked=true]{border-color:#00E6C7;background:hsl(172 100% 45% / .25)}" +
    ".sdc-cb-sw[aria-checked=true]::after{left:22px;background:#00E6C7}" +
    ".sdc-cb-sw:disabled{cursor:not-allowed;opacity:.6}" +
    ".sdc-cb-btns{display:flex;flex-direction:column;gap:12px;margin-top:1rem}" +
    "@media(min-width:640px){.sdc-cb-btns{flex-direction:row;justify-content:flex-end}}" +
    ".sdc-cb-btn{font-family:\"Press Start 2P\",monospace;font-size:10px;line-height:1.4;text-transform:uppercase;padding:12px 16px;border-radius:10px;border:2px solid hsl(172 100% 45% / .7);background:transparent;color:#eafffb;cursor:pointer;transition:box-shadow .2s}" +
    ".sdc-cb-btn:hover,.sdc-cb-btn:focus-visible{box-shadow:0 0 16px hsl(172 100% 45% / .45)}" +
    "@media (prefers-reduced-motion:reduce){.sdc-cb-sw,.sdc-cb-sw::after,.sdc-cb-btn{transition:none}}";

  var wurzel = null;

  function el(tag, attrs, text) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text) e.textContent = text;
    return e;
  }

  function knopf(text, onClick) {
    var b = el("button", { type: "button", class: "sdc-cb-btn" }, text);
    b.addEventListener("click", onClick);
    return b;
  }

  function schliessen() {
    if (wurzel) wurzel.remove();
    wurzel = null;
  }

  function waehle(wert) {
    speichere(wert);
    schliessen();
  }

  function zeige(mitEinstellungen) {
    schliessen();
    if (!document.getElementById("sdc-cb-style")) {
      var st = el("style", { id: "sdc-cb-style" });
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    var statistik = lese() === "alle";

    wurzel = el("div", { class: "sdc-cb", role: "dialog", "aria-live": "polite", "aria-label": "Cookie-Einstellungen" });
    var box = el("div", { class: "sdc-cb-box" });
    box.appendChild(el("p", { class: "sdc-cb-eyebrow" }, mitEinstellungen ? "COOKIE-EINSTELLUNGEN" : "COOKIES"));
    var p = el("p", {}, T.text);
    p.appendChild(el("a", { href: "/datenschutz" }, "Datenschutzerklärung"));
    p.appendChild(document.createTextNode("."));
    box.appendChild(p);

    if (mitEinstellungen) {
      var kats = el("div", {});
      [
        { titel: "Notwendig", text: T.notwendig, gesperrt: true },
        { titel: "Statistik & Marketing", text: STATISTIK_TEXT, gesperrt: false },
      ].forEach(function (k) {
        var zeile = el("div", { class: "sdc-cb-kat" });
        var info = el("div", {});
        var titel = el("strong", {}, k.titel);
        if (k.gesperrt) titel.appendChild(el("span", {}, "immer aktiv"));
        info.appendChild(titel);
        info.appendChild(el("p", {}, k.text));
        var sw = el("button", {
          type: "button",
          class: "sdc-cb-sw",
          role: "switch",
          "aria-label": k.titel,
          "aria-checked": String(k.gesperrt ? true : statistik),
        });
        if (k.gesperrt) sw.disabled = true;
        else
          sw.addEventListener("click", function () {
            statistik = !statistik;
            sw.setAttribute("aria-checked", String(statistik));
          });
        zeile.appendChild(info);
        zeile.appendChild(sw);
        kats.appendChild(zeile);
      });
      box.appendChild(kats);
    }

    var btns = el("div", { class: "sdc-cb-btns" });
    btns.appendChild(knopf("Ablehnen", function () { waehle("notwendig"); }));
    btns.appendChild(
      mitEinstellungen
        ? knopf("Auswahl speichern", function () { waehle(statistik ? "alle" : "notwendig"); })
        : knopf("Einstellungen", function () { zeige(true); })
    );
    btns.appendChild(knopf("Alle akzeptieren", function () { waehle("alle"); }));
    box.appendChild(btns);

    wurzel.appendChild(box);
    document.body.appendChild(wurzel);
    btns.querySelector("button").focus();
  }

  // ---------- Start ----------
  var wert = lese();
  if (wert === "alle") ladeTracking();
  if (!wert) zeige(false);

  document.addEventListener("click", function (e) {
    var t = e.target.closest && e.target.closest("[data-cookie-einstellungen]");
    if (!t) return;
    e.preventDefault();
    zeige(true);
  });
})();
