import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Factory, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SERVICES } from "../data/services";

gsap.registerPlugin(useGSAP);

type CatalogModalProps = {
  open: boolean;
  initialServiceId: string | null;
  onClose: () => void;
  onRequestService: (svcId: string) => void;
};

const FEATURES = [
  "Fabricación nacional con materiales de alta calidad",
  "Garantía y soporte técnico incluido",
  "Asesoría técnica especializada",
  "Adaptación a requerimientos específicos",
];

export default function CatalogModal({
  open,
  initialServiceId,
  onClose,
  onRequestService,
}: CatalogModalProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) setSelected(initialServiceId || null);
  }, [open, initialServiceId]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open && panelRef.current) panelRef.current.scrollTop = 0;
  }, [open, selected]);

  // Entrance animation — runs on every mount (open transition)
  useGSAP(
    () => {
      if (!open) return;
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 60, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          ease: "power3.out",
        }
      );
    },
    { dependencies: [open], scope: panelRef }
  );

  // List ↔ Detail content crossfade
  useGSAP(
    () => {
      if (!open || !contentRef.current) return;
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    },
    { dependencies: [selected, open], scope: contentRef }
  );

  if (!open) return null;

  const svc = selected ? SERVICES.find((s) => s.id === selected) ?? null : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="catalog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
      >
        <div className="sticky top-0 z-10 bg-white border-b border-black/5 px-6 sm:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-[#F5A800] flex items-center justify-center">
              <Factory className="w-5 h-5 text-[#1A1A1A]" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[#F5A800] font-semibold">
                IDCOM
              </div>
              <h2
                id="catalog-title"
                className="font-display font-extrabold text-2xl text-[#1A1A1A] tracking-tight"
              >
                Catálogo de Servicios
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="h-10 w-10 grid place-items-center rounded-full hover:bg-black/5 text-[#1A1A1A] transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div ref={contentRef} key={svc ? svc.id : "list"}>
          {!svc ? (
            <div className="px-6 sm:px-10 py-8">
              <p className="text-[#7F7F7F] mb-6">
                Selecciona un servicio para ver detalles, características y solicitar
                una cotización.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {SERVICES.map((s) => {
                  const I = s.Icon;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelected(s.id)}
                      className="group text-left bg-[#F2F2F2] hover:bg-white border border-transparent hover:border-[#F5A800] hover:shadow-lg p-5 rounded-xl transition-all"
                    >
                      <div className="h-12 w-12 rounded-full bg-[#F5A800] grid place-items-center mb-4">
                        <I className="w-6 h-6 text-[#1A1A1A]" strokeWidth={2} />
                      </div>
                      <h3 className="font-display font-extrabold text-base text-[#1A1A1A] tracking-tight leading-snug">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#2D2D2D]/80 leading-relaxed line-clamp-2">
                        {s.short}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5A800]">
                        Ver detalle
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="px-6 sm:px-10 py-8">
              <button
                onClick={() => setSelected(null)}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#F5A800] hover:underline mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al catálogo
              </button>
              <div className="flex flex-col md:flex-row gap-6 md:items-center">
                <div className="h-20 w-20 rounded-full bg-[#F5A800] grid place-items-center flex-shrink-0">
                  {(() => {
                    const I = svc.Icon;
                    return <I className="w-10 h-10 text-[#1A1A1A]" strokeWidth={2} />;
                  })()}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-[#F5A800] font-semibold mb-2">
                    Servicio especializado
                  </div>
                  <h3 className="font-display font-extrabold text-3xl md:text-4xl text-[#1A1A1A] tracking-tight">
                    {svc.title}
                  </h3>
                </div>
              </div>

              <p className="mt-8 text-[#2D2D2D] leading-relaxed">
                {svc.short} Contáctenos para más información sobre especificaciones
                técnicas, dimensiones y opciones de personalización.
              </p>

              <div className="mt-10 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-display font-extrabold text-sm uppercase tracking-[0.22em] text-[#1A1A1A] mb-4">
                    Características
                  </h4>
                  <ul className="space-y-3">
                    {FEATURES.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-[#2D2D2D]"
                      >
                        <span className="mt-1 h-5 w-5 rounded-full bg-[#F5A800] grid place-items-center flex-shrink-0">
                          <Check className="w-3 h-3 text-[#1A1A1A]" strokeWidth={3} />
                        </span>
                        <span className="text-sm leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#1A1A1A] text-white p-6 rounded-xl">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-[#F5A800] font-semibold mb-3">
                    ¿Listo para empezar?
                  </div>
                  <h4 className="font-display font-extrabold text-xl tracking-tight mb-3">
                    Solicita una cotización a medida
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Cuéntanos los detalles de tu proyecto y un ingeniero de IDCOM te
                    contactará con una propuesta técnica y económica.
                  </p>
                  <button
                    onClick={() => onRequestService(svc.id)}
                    className="mt-5 inline-flex items-center gap-2 bg-[#F5A800] hover:bg-[#FFB81C] px-5 py-3 font-bold text-[#1A1A1A] uppercase tracking-wider text-xs transition-colors"
                  >
                    Solicitar este servicio
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
