import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import sdcLogo from "@/assets/sdc-logo.png";
import { MEMBER_LOGIN, NAVIGATION, type NavItem } from "@/data/navigation";

// Router-Link für React-Seiten, normaler Link für eigenständige HTML-Seiten (/check).
const ItemLink = ({
  item,
  className,
  style,
  children,
  onClick,
}: {
  item: NavItem;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
}) =>
  item.static ? (
    <a href={item.to} className={className} style={style} onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link to={item.to} className={className} style={style} onClick={onClick}>
      {children}
    </Link>
  );

const pixelLabel: React.CSSProperties = {
  fontFamily: "var(--font-pixel)",
  fontSize: 10,
  letterSpacing: ".12em",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};

const memberBtnStyle: React.CSSProperties = {
  ...pixelLabel,
  border: "2px solid hsl(var(--neon-pink) / .75)",
  borderRadius: 10,
  background: "linear-gradient(160deg, rgba(5,5,16,.88), hsl(var(--neon-pink) / .12))",
  boxShadow: "0 0 18px hsl(var(--neon-pink) / .25)",
  color: "var(--sw-text)",
  textShadow: "0 0 10px hsl(var(--neon-pink) / .8)",
};

const isGroupActive = (pathname: string, items: NavItem[]) =>
  items.some((i) => pathname === i.to || pathname.startsWith(`${i.to}/`));

const SiteHeader = () => {
  const { pathname } = useLocation();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Bei Seitenwechsel alles schließen
  useEffect(() => {
    setOpenGroup(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenGroup(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-colors duration-300"
      style={{
        background: solid ? "rgba(5,5,16,.88)" : "linear-gradient(180deg, rgba(5,5,16,.7), transparent)",
        backdropFilter: solid ? "blur(8px)" : undefined,
        borderBottom: solid ? "1px solid hsl(var(--neon-cyan) / .18)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Smiling Data Club – Startseite">
          <img
            src={sdcLogo}
            alt=""
            className="w-9 h-9"
            style={{ filter: "drop-shadow(0 0 10px hsl(172 100% 45% / .5))" }}
          />
          {/* Zwischen 1024 und 1280 px ausgeblendet, damit das Menü in eine Zeile passt */}
          <span className="hidden sm:inline lg:hidden xl:inline" style={{ ...pixelLabel, color: "var(--sw-text)" }}>
            Smiling Data Club
          </span>
        </Link>

        {/* Desktop */}
        <nav ref={navRef} aria-label="Hauptmenü" className="hidden lg:flex items-center gap-1">
          {NAVIGATION.map((group) => {
            if (group.to) {
              const active = pathname === group.to;
              return (
                <Link
                  key={group.label}
                  to={group.to}
                  className="px-3 py-2 transition-colors"
                  aria-current={active ? "page" : undefined}
                  style={{
                    ...pixelLabel,
                    color: active ? "var(--sw-cyan)" : "var(--sw-text-2)",
                    textShadow: active ? "0 0 12px hsl(var(--neon-cyan) / .7)" : undefined,
                  }}
                >
                  {group.label}
                </Link>
              );
            }
            const open = openGroup === group.label;
            const active = isGroupActive(pathname, group.items);
            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(group.label)}
                onMouseLeave={() => setOpenGroup((g) => (g === group.label ? null : g))}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => setOpenGroup(open ? null : group.label)}
                  className="px-3 py-2 transition-colors"
                  style={{
                    ...pixelLabel,
                    color: open || active ? "var(--sw-cyan)" : "var(--sw-text-2)",
                    textShadow: open || active ? "0 0 12px hsl(var(--neon-cyan) / .7)" : undefined,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {group.label}
                  <span aria-hidden style={{ marginLeft: 6, fontFamily: "var(--font-mono-sw)" }}>
                    {open ? "▴" : "▾"}
                  </span>
                </button>

                {open && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2" style={{ minWidth: 260 }}>
                    <ul
                      className="sw-animate-pop"
                      style={{
                        listStyle: "none",
                        margin: 0,
                        padding: 8,
                        borderRadius: 10,
                        border: "1px solid hsl(var(--neon-cyan) / .45)",
                        background: "rgba(5,5,16,.96)",
                        boxShadow: "0 0 26px hsl(var(--neon-cyan) / .18)",
                        animationDuration: ".25s",
                      }}
                    >
                      {group.items.map((item) => {
                        const current = pathname === item.to;
                        return (
                          <li key={item.to}>
                            <ItemLink
                              item={item}
                              className="block rounded-md px-3 py-2.5 transition-colors hover:bg-[hsl(var(--neon-cyan)/.08)]"
                            >
                              <span
                                className="block text-sm"
                                style={{ color: current ? "var(--sw-cyan)" : "var(--sw-text)" }}
                              >
                                {item.label}
                              </span>
                              {item.hint && (
                                <span
                                  className="block"
                                  style={{
                                    fontFamily: "var(--font-mono-sw)",
                                    fontSize: 12,
                                    color: "var(--sw-text-3)",
                                  }}
                                >
                                  {item.hint}
                                </span>
                              )}
                            </ItemLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link to={MEMBER_LOGIN.to} className="hidden sm:inline-flex px-4 py-2.5" style={memberBtnStyle}>
            {MEMBER_LOGIN.label}
          </Link>
          <button
            type="button"
            className="lg:hidden p-2"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            style={{ color: "var(--sw-cyan)", background: "none", border: "none" }}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobil */}
      {mobileOpen && (
        <nav
          aria-label="Hauptmenü"
          className="lg:hidden overflow-y-auto px-4 pb-8"
          style={{ height: "calc(100dvh - 4rem)", background: "rgba(5,5,16,.97)" }}
        >
          {NAVIGATION.map((group) =>
            group.to ? (
              <div key={group.label} className="pt-6">
                <Link to={group.to} style={{ ...pixelLabel, color: "var(--sw-cyan)" }}>
                  {group.label} →
                </Link>
              </div>
            ) : (
            <div key={group.label} className="pt-6">
              <p style={{ ...pixelLabel, color: "var(--sw-cyan)", marginBottom: 8 }}>{group.label}</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {group.items.map((item) => (
                  <li key={item.to}>
                    <ItemLink
                      item={item}
                      className="block py-2.5 text-base"
                      style={{
                        color: pathname === item.to ? "var(--sw-cyan)" : "var(--sw-text)",
                        borderBottom: "1px solid hsl(var(--neon-cyan) / .1)",
                      }}
                    >
                      {item.label}
                    </ItemLink>
                  </li>
                ))}
              </ul>
            </div>
            ),
          )}
          <Link to={MEMBER_LOGIN.to} className="mt-8 flex justify-center px-4 py-3" style={memberBtnStyle}>
            {MEMBER_LOGIN.label}
          </Link>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
