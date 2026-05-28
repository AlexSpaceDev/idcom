import Reveal from "./Reveal";
import { VALUES } from "../data/services";

export default function Valores() {
  return (
    <section className="relative bg-[#1A1A1A] py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#F5A800]" />
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#F5A800]">
                Lo que nos define
              </span>
              <span className="h-px w-10 bg-[#F5A800]" />
            </div>
            <h2 className="mt-5 font-display font-extrabold text-5xl md:text-6xl text-white tracking-tight">
              Nuestros Valores
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {VALUES.map((v, i) => {
            const I = v.Icon;
            return (
              <Reveal key={v.name} delay={i * 100}>
                <div className="text-center group">
                  <div className="relative mx-auto h-24 w-24 mb-6">
                    <div className="absolute inset-0 rounded-full bg-[#F5A800]/10 scale-110 group-hover:scale-125 transition-transform" />
                    <div className="relative h-full w-full rounded-full bg-[#F5A800] flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(245,168,0,0.6)]">
                      <I className="w-10 h-10 text-[#1A1A1A]" strokeWidth={2.2} />
                    </div>
                  </div>
                  <h3 className="font-bold text-white uppercase tracking-[0.18em] text-sm sm:text-base">
                    {v.name}
                  </h3>
                  <p className="mt-2 text-white/60 text-sm leading-relaxed max-w-[18ch] mx-auto">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
