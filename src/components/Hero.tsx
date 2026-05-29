import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type HeroProps = {
  onNavigate: (id: string) => void;
};

const STATS = [
  { value: 15, suffix: "+", label: "Años" },
  { value: 100, suffix: "%", label: "Nacional" },
  { value: 24, suffix: "/7", label: "Soporte" },
];

export default function Hero({ onNavigate }: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.from(leftRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: "power3.out",
      });
      gsap.from(rightRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
      });

      statRefs.current.forEach((el, i) => {
        if (!el) return;
        const stat = STATS[i];
        const counter = { val: 0 };
        gsap.to(counter, {
          val: stat.value,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.round(counter.val) + stat.suffix;
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden bg-[#1A1A1A] text-white pt-20"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(245,168,0,0.10), transparent 55%), linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 60%, #1A1A1A 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div
        className="absolute top-20 left-0 right-0 h-2 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #F5A800 0 14px, #1A1A1A 14px 28px)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 min-h-[calc(100vh-5rem)] flex flex-col justify-center py-16">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          <div ref={leftRef}>
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-[#F5A800]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.32em] text-[#F5A800]">
                Ingeniería Industrial · Ecuador
              </span>
            </div>
            <h1 className="font-display font-extrabold leading-[0.88] tracking-tight">
              <img
                src="/assets/idcom_horizontal.png"
                alt="IDCOM — Soluciones Metal Mecánicas"
                draggable={false}
                className="block w-full max-w-[560px] h-auto drop-shadow-[0_10px_30px_rgba(245,168,0,0.15)]"
              />
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-semibold text-[#F5A800] max-w-2xl">
              Ingeniería en Diseño y Construcciones Metalmecánicas
            </p>
            <p className="mt-4 text-base md:text-lg text-white/70 max-w-2xl">
              Soluciones integrales en ingeniería mecánica, construcción y
              mantenimiento industrial.
            </p>

            <div className="mt-10 max-w-2xl bg-black/40 backdrop-blur-sm border-l-2 border-[#F5A800] pl-5 pr-6 py-5">
              <p className="italic text-[#F5A800]/90 text-[15px] leading-relaxed">
                &ldquo;El mantenimiento preventivo garantiza operaciones seguras y
                reduce costos por fallas. Cada tipo de maquinaria requiere
                atención especializada para maximizar su vida útil. Ofrecemos
                un servicio integral que cubre desde motores hasta
                infraestructura y calibración.&rdquo;
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate("servicios")}
                className="group inline-flex items-center justify-center gap-2 bg-[#F5A800] px-7 py-4 font-bold text-[#1A1A1A] uppercase tracking-wider text-sm hover:bg-[#FFB81C] transition-colors"
              >
                Nuestros Servicios
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onNavigate("contacto")}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/80 hover:border-[#F5A800] hover:bg-[#F5A800] hover:text-[#1A1A1A] px-7 py-4 font-bold text-white uppercase tracking-wider text-sm transition-colors"
              >
                Contactar
              </button>
            </div>
          </div>

          <div ref={rightRef} className="hidden lg:block">
            <div className="relative">
              <div className="relative aspect-square max-w-md ml-auto flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 w-full h-full"
                  aria-hidden="true"
                >
                  <polygon
                    points="100,12 178,55 178,145 100,188 22,145 22,55"
                    fill="none"
                    stroke="#F5A800"
                    strokeWidth="1"
                    opacity="0.30"
                  />
                  <polygon
                    points="100,30 162,64 162,136 100,170 38,136 38,64"
                    fill="none"
                    stroke="#F5A800"
                    strokeWidth="1"
                    opacity="0.18"
                  />
                  <polygon
                    points="100,52 142,76 142,124 100,148 58,124 58,76"
                    fill="none"
                    stroke="#F5A800"
                    strokeWidth="1"
                    opacity="0.10"
                  />
                  <g stroke="#F5A800" strokeWidth="1" opacity="0.5">
                    <line x1="100" y1="0" x2="100" y2="8" />
                    <line x1="100" y1="192" x2="100" y2="200" />
                    <line x1="0" y1="100" x2="8" y2="100" />
                    <line x1="192" y1="100" x2="200" y2="100" />
                  </g>
                </svg>
                <img
                  src="/assets/idcom_mark_metallic.png"
                  alt="IDCOM"
                  draggable={false}
                  className="relative w-[66%] h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)]"
                />
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4 text-center">
                {STATS.map((s, i) => (
                  <div
                    key={s.label}
                    className="bg-white/5 border border-white/10 p-4"
                  >
                    <div
                      ref={(el) => {
                        statRefs.current[i] = el;
                      }}
                      className="font-display font-extrabold text-3xl text-[#F5A800]"
                    >
                      0{s.suffix}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/60">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[10px] uppercase tracking-[0.32em]">
          <span>Descubre más</span>
          <span className="h-8 w-px bg-white/30" />
        </div>
      </div>
    </section>
  );
}
