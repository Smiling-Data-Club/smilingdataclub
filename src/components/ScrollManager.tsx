import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Bei Seitenwechsel nach oben scrollen bzw. zum #Anker springen (z. B. /#waitlist).
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

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
