import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SERVICES } from "../data/services";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ServiciosProps = {
  onSelect: (id: string) => void;
  onOpenCatalog: () => void;
};

const MAGNET_STRENGTH = 0.18;

export default function Servicios({ onSelect, onOpenCatalog }: ServiciosProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useGSAP(
    (_ctx, contextSafe) => {
      // Header reveal on scroll
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 32,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Cards staggered entrance using ScrollTrigger.batch
      const cards = cardRefs.current.filter(Boolean) as HTMLButtonElement[];
      if (cards.length) {
        gsap.set(cards, { opacity: 0, y: 40 });
        ScrollTrigger.batch(cards, {
          start: "top 88%",
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.08,
              ease: "power3.out",
              overwrite: true,
            }),
        });
      }

      // CTA reveal
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 90%",
          once: true,
        },
      });

      // Magnetic hover — contextSafe handlers attached per card
      if (!contextSafe) return;
      const cleanups: Array<() => void> = [];
      cards.forEach((card) => {
        const onMove = contextSafe!((e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          gsap.to(card, {
            x: dx * MAGNET_STRENGTH,
            y: dy * MAGNET_STRENGTH,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
          });
        });
        const onLeave = contextSafe!(() => {
          gsap.to(card, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
            overwrite: "auto",
          });
        });
        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
        });
      });

      return () => cleanups.forEach((fn) => fn());
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="bg-[#F2F2F2] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={headerRef} className="text-center mb-16">
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((s, i) => {
            const I = s.Icon;
            return (
              <button
                key={s.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                type="button"
                onClick={() => onSelect(s.id)}
                className="group relative w-full h-full text-left bg-white overflow-hidden transition-shadow duration-300 hover:shadow-[0_30px_50px_-25px_rgba(245,168,0,0.45)] border border-transparent hover:border-[#F5A800]/40 will-change-transform"
              >
                <div className="relative aspect-[4/3] bg-[#1A1A1A]">
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading={i < 3 ? "eager" : "lazy"}
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[28px] border-t-[#F5A800] border-l-[28px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute top-3 left-3 font-display font-extrabold text-[11px] tracking-[0.22em] text-white uppercase bg-[#1A1A1A]/70 backdrop-blur-sm px-2.5 py-1 z-10">
                    {String(i + 1).padStart(2, "0")} · Servicio
                  </div>
                  <div className="absolute -bottom-6 left-5 h-12 w-12 rounded-full bg-[#F5A800] flex items-center justify-center shadow-[0_10px_25px_-10px_rgba(245,168,0,0.9)] ring-4 ring-white z-10">
                    <I className="w-5 h-5 text-[#1A1A1A]" strokeWidth={2.4} />
                  </div>
                </div>
                <div className="px-5 pt-10 pb-6">
                  <h3 className="font-display font-extrabold text-lg leading-snug text-[#1A1A1A] tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#2D2D2D]/80 leading-relaxed">
                    {s.short}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#1A1A1A] group-hover:text-[#F5A800] transition-colors">
                    Ver detalle
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div ref={ctaRef} className="mt-16 text-center">
          <button
            onClick={onOpenCatalog}
            className="inline-flex items-center gap-3 bg-[#F5A800] px-8 py-4 font-bold text-[#1A1A1A] uppercase tracking-wider text-sm hover:bg-[#FFB81C] transition-colors"
          >
            Ver Catálogo Completo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
