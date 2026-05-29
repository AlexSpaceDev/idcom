import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, type NavLink } from "../data/services";

type NavbarProps = {
  onOpenCatalog: () => void;
  onNavigate: (id: string) => void;
};

export default function Navbar({ onOpenCatalog, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick =
    (link: Pick<NavLink, "id" | "isCatalog">) =>
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setOpen(false);
      if (link.isCatalog) onOpenCatalog();
      else onNavigate(link.id);
    };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 bg-[#1A1A1A] border-b border-white/5 transition-shadow ${
        scrolled ? "shadow-[0_8px_24px_-12px_rgba(0,0,0,0.7)]" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-20 flex items-center justify-between">
        <a href="#inicio" onClick={handleClick({ id: "inicio" })}>
          <img
            src="/assets/idcom_logo_transparent.png"
            alt="IDCOM — Soluciones Metal Mecánicas"
            className="h-10 w-auto select-none"
            draggable={false}
          />
        </a>
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={handleClick(l)}
                className="group relative px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/90 hover:text-[#F5A800] transition-colors"
              >
                {l.label}
                <span className="pointer-events-none absolute left-4 right-4 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-[#F5A800] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-[#F5A800] p-2 -mr-2"
          aria-label="Abrir menú"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden bg-[#1A1A1A] border-t border-white/5 transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-5 py-4 space-y-1">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={handleClick(l)}
                className="block px-3 py-3 text-base font-semibold uppercase tracking-wider text-white border-b border-white/5 hover:text-[#F5A800]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
