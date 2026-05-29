import Reveal from "./Reveal";

const CARDS = [
  {
    title: "¿Quiénes Somos?",
    body: "Empresa especializada en ingeniería mecánica, diseño y construcciones industriales. Soluciones integrales para la industria.",
  },
  {
    title: "Misión",
    body: "Servicios de calidad con productos innovadores que optimizan procesos de forma ágil.",
  },
  {
    title: "Visión",
    body: "Liderar con innovación y diseño para impulsar el éxito de cada proyecto industrial.",
  },
];

const STRIP = [
  { src: "/photos/about-precision.webp", label: "Precisión", caption: "Maquinaria pesada y trabajo de torno" },
  { src: "/photos/team-workers.webp",    label: "Operación", caption: "Equipo técnico en planta industrial" },
  { src: "/photos/process-steel.webp",   label: "Capacidad", caption: "Soldadura estructural especializada" },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#F5A800]" />
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#F5A800]">
                Sobre IDCOM
              </span>
              <span className="h-px w-10 bg-[#F5A800]" />
            </div>
            <h2 className="mt-5 font-display font-extrabold text-5xl md:text-6xl text-[#1A1A1A] tracking-tight">
              Nosotros
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-[#7F7F7F] text-lg">
              Construimos confianza con cada proyecto. Conoce quiénes somos y qué
              nos mueve.
            </p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-16 lg:mb-20">
          {STRIP.map((p, i) => (
            <Reveal key={p.label} delay={i * 80}>
              <figure className="group relative aspect-[4/3] overflow-hidden bg-[#1A1A1A]">
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-[#1A1A1A]/30 to-transparent pointer-events-none" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-[#F5A800] font-semibold mb-1">
                    {p.label}
                  </div>
                  <div className="text-sm text-white font-medium leading-snug">
                    {p.caption}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <article className="group relative h-full bg-white border-t-[3px] border-[#F5A800] p-8 lg:p-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-300 rounded-b-2xl">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-display font-extrabold text-5xl text-[#F5A800] leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-[#1A1A1A]/10" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-[#1A1A1A] tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-4 text-[#2D2D2D] leading-relaxed">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
