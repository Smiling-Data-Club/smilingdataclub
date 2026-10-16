import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.smiling-data-club.de";

// Bei Seitenwechsel nach oben scrollen bzw. zum #Anker springen (z. B. /#waitlist)
// und den Canonical-Link auf die aktuelle Seite setzen (sonst zeigen alle
// Unterseiten auf die Startseite).
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = `${SITE_URL}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;
  }, [pathname]);

  useEffect(() => {
    if (hash && !hash.startsWith("#data=")) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
