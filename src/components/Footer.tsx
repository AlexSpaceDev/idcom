import { Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS } from "../data/services";

type FooterProps = {
  onOpenCatalog: () => void;
  onNavigate: (id: string) => void;
};

export default function Footer({ onOpenCatalog, onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-8 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #F5A800 0 14px, #1A1A1A 14px 28px)",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img
              src="/assets/idcom_logo_transparent.png"
              alt="IDCOM"
              className="h-14 w-auto select-none"
              draggable={false}
            />
            <p className="mt-6 text-[#F5A800] text-sm font-semibold leading-relaxed">
              Ingeniería en Diseño y Construcciones Metalmecánicas
            </p>
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-sm">
              Soluciones integrales en Ingeniería Metalmecánica, construcción y
              mantenimiento industrial. Comprometidos con la calidad y la
              innovación en cada proyecto.
            </p>
          </div>
          <div>
            <h4 className="text-[#F5A800] font-display font-extrabold text-sm uppercase tracking-[0.22em] mb-5">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (l.isCatalog) onOpenCatalog();
                      else onNavigate(l.id);
                    }}
                    className="text-white/80 hover:text-[#F5A800] transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#F5A800] font-display font-extrabold text-sm uppercase tracking-[0.22em] mb-5">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-white">
                <Phone className="w-4 h-4 text-[#F5A800]" />
                <a
                  href="tel:+593991022732"
                  className="hover:text-[#F5A800] transition-colors"
                >
                  +593-991022732
                </a>
              </li>
              <li className="flex items-center gap-3 text-white">
                <Mail className="w-4 h-4 text-[#F5A800]" />
                <a
                  href="mailto:ventas@idcom.com.ec"
                  className="hover:text-[#F5A800] transition-colors"
                >
                  ventas@idcom.com.ec
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <MapPin className="w-4 h-4 text-[#F5A800]" />
                Ecuador
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-[#F5A800]/40">
          <p className="text-center text-xs text-white/40">
            © 2026 IDCOM — Ingeniería en Diseño y Construcciones Metalmecánicas.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
