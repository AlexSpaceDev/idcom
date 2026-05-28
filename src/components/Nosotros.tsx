import Reveal from "./Reveal";

const CARDS = [
  {
    title: "¿Quiénes Somos?",
    body: "IDCOM es una empresa especializada en ingeniería mecánica, diseño y construcciones industriales. Con años de experiencia en el sector, ofrecemos soluciones integrales para la industria.",
  },
  {
    title: "Misión",
    body: "Dar al cliente los mejores servicios, calidad, variedad, con productos innovadores. Brindarles soluciones que optimicen procesos de manera ágil y oportuna.",
  },
  {
    title: "Visión",
    body: "Ser líderes en innovación y diseño para lograr los mejores resultados. Implementar soluciones que impulsen el éxito de las empresas.",
  },
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
