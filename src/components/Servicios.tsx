import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { SERVICES } from "../data/services";

type ServiciosProps = {
  onSelect: (id: string) => void;
  onOpenCatalog: () => void;
};

export default function Servicios({ onSelect, onOpenCatalog }: ServiciosProps) {
  return (
    <section id="servicios" className="bg-[#F2F2F2] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#F5A800]" />
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#F5A800]">
                Qué hacemos
              </span>
              <span className="h-px w-10 bg-[#F5A800]" />
            </div>
            <h2 className="mt-5 font-display font-extrabold text-5xl md:text-6xl text-[#1A1A1A] tracking-tight">
              Nuestros Servicios
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-[#7F7F7F] text-lg">
              Soluciones especializadas en ingeniería Metalmecánica y construcción.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((s, i) => {
            const I = s.Icon;
            return (
              <Reveal key={s.id} delay={i * 80}>
                <button
                  type="button"
                  onClick={() => onSelect(s.id)}
                  className="group relative w-full h-full text-left bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_50px_-25px_rgba(245,168,0,0.45)] border border-transparent hover:border-[#F5A800]/40"
                >
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[28px] border-t-[#F5A800] border-l-[28px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative mb-6">
                    <div className="h-16 w-16 rounded-full bg-[#F5A800] flex items-center justify-center shadow-[0_10px_25px_-10px_rgba(245,168,0,0.7)]">
                      <I className="w-8 h-8 text-[#1A1A1A]" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="font-display font-extrabold text-[11px] tracking-[0.22em] text-[#F5A800] uppercase mb-2">
                    {String(i + 1).padStart(2, "0")} · Servicio
                  </div>
                  <h3 className="font-display font-extrabold text-lg leading-snug text-[#1A1A1A] tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#2D2D2D]/80 leading-relaxed">
                    {s.short}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#1A1A1A] group-hover:text-[#F5A800] transition-colors">
                    Ver detalle
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150}>
          <div className="mt-16 text-center">
            <button
              onClick={onOpenCatalog}
              className="inline-flex items-center gap-3 bg-[#F5A800] px-8 py-4 font-bold text-[#1A1A1A] uppercase tracking-wider text-sm hover:bg-[#FFB81C] transition-colors"
            >
              Ver Catálogo Completo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
