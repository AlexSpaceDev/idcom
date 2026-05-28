import { useEffect, useState, type ReactNode } from "react";
import { Clock, Mail, MessageCircle, Phone, Send } from "lucide-react";
import Reveal from "./Reveal";
import { SERVICES } from "../data/services";

type ContactoProps = {
  preselectedService: string | null;
  onConsumeSelection: () => void;
  onToast: (msg: string) => void;
};

type FormState = {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  servicio: string;
  mensaje: string;
};

const EMPTY: FormState = {
  nombre: "",
  email: "",
  telefono: "",
  empresa: "",
  servicio: "",
  mensaje: "",
};

const INPUT_BASE =
  "w-full bg-white border border-[#7F7F7F]/40 rounded-lg px-4 py-3 text-[#1A1A1A] placeholder:text-[#7F7F7F] focus:outline-none focus:border-[#F5A800] focus:ring-2 focus:ring-[#F5A800]/30 transition";

export default function Contacto({
  preselectedService,
  onConsumeSelection,
  onToast,
}: ContactoProps) {
  const [form, setForm] = useState<FormState>(EMPTY);

  useEffect(() => {
    if (preselectedService) {
      setForm((f) => ({ ...f, servicio: preselectedService }));
      onConsumeSelection();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preselectedService]);

  const set =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onToast("Mensaje enviado. Te contactaremos pronto.");
    setForm(EMPTY);
  };

  const infoItems: { Icon: typeof Phone; label: string; value: ReactNode }[] = [
    { Icon: Phone, label: "Celular", value: "+593-991022732" },
    { Icon: Mail, label: "Correos", value: "ventas@idcom.com.ec" },
    {
      Icon: Clock,
      label: "Horarios",
      value: (
        <>
          <div>Lunes - Viernes: 8:00 AM - 6:00 PM</div>
          <div>Sábados: 8:00 AM - 12:00 PM</div>
        </>
      ),
    },
  ];

  return (
    <section id="contacto" className="bg-[#F2F2F2] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#F5A800]" />
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#F5A800]">
                Hablemos
              </span>
              <span className="h-px w-10 bg-[#F5A800]" />
            </div>
            <h2 className="mt-5 font-display font-extrabold text-5xl md:text-6xl text-[#1A1A1A] tracking-tight">
              Contacto
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-[#7F7F7F] text-lg">
              Estamos aquí para ayudarte con tu próximo proyecto de Metalmecánica.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16">
          <Reveal>
            <div className="space-y-6">
              {infoItems.map((it) => {
                const I = it.Icon;
                return (
                  <div
                    key={it.label}
                    className="flex gap-5 bg-white p-6 rounded-xl border-l-[3px] border-[#F5A800] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                  >
                    <div className="h-12 w-12 flex-shrink-0 rounded-full bg-[#F5A800] grid place-items-center">
                      <I className="w-6 h-6 text-[#1A1A1A]" strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-[#7F7F7F] font-semibold">
                        {it.label}
                      </div>
                      <div className="mt-1 text-[#1A1A1A] font-semibold leading-relaxed">
                        {it.value}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="bg-[#1A1A1A] text-white p-6 rounded-xl">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#F5A800] font-semibold mb-3">
                  Atención inmediata
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Para consultas urgentes, escríbenos directamente por WhatsApp y
                  un asesor te responderá en horario laboral.
                </p>
                <a
                  href="https://wa.me/593991022732"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1FBE5A] px-4 py-2.5 font-bold text-white uppercase tracking-wider text-xs transition-colors rounded"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form
              onSubmit={submit}
              className="bg-white p-7 sm:p-10 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border-t-[3px] border-[#F5A800]"
            >
              <h3 className="font-display font-extrabold text-2xl text-[#1A1A1A] tracking-tight mb-1">
                Envíanos un Mensaje
              </h3>
              <p className="text-[#7F7F7F] text-sm mb-7">
                Completa el formulario y te contactaremos lo antes posible.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nombre" required>
                  <input
                    value={form.nombre}
                    onChange={set("nombre")}
                    required
                    type="text"
                    className={INPUT_BASE}
                    placeholder="Tu nombre completo"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    value={form.email}
                    onChange={set("email")}
                    required
                    type="email"
                    className={INPUT_BASE}
                    placeholder="tu@email.com"
                  />
                </Field>
                <Field label="Teléfono">
                  <input
                    value={form.telefono}
                    onChange={set("telefono")}
                    type="tel"
                    className={INPUT_BASE}
                    placeholder="+593..."
                  />
                </Field>
                <Field label="Empresa">
                  <input
                    value={form.empresa}
                    onChange={set("empresa")}
                    type="text"
                    className={INPUT_BASE}
                    placeholder="Nombre de tu empresa"
                  />
                </Field>
                <Field label="Servicio de Interés" required className="sm:col-span-2">
                  <select
                    value={form.servicio}
                    onChange={set("servicio")}
                    required
                    className={INPUT_BASE + " appearance-none bg-no-repeat bg-[right_1rem_center]"}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='none' stroke='%237F7F7F' stroke-width='2' d='M1 1l5 5 5-5'/></svg>\")",
                    }}
                  >
                    <option value="" disabled>
                      Seleccione un servicio
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                    <option value="otro">Otro</option>
                  </select>
                </Field>
                <Field label="Mensaje" required className="sm:col-span-2">
                  <textarea
                    value={form.mensaje}
                    onChange={set("mensaje")}
                    required
                    rows={5}
                    className={INPUT_BASE + " resize-none"}
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </Field>
              </div>
              <button
                type="submit"
                className="mt-7 w-full inline-flex items-center justify-center gap-2 bg-[#F5A800] hover:bg-[#FFB81C] px-6 py-4 font-bold text-[#1A1A1A] uppercase tracking-wider text-sm transition-colors rounded-lg"
              >
                Enviar Mensaje
                <Send className="w-4 h-4" />
              </button>
              <p className="mt-4 text-[11px] text-[#7F7F7F] text-center">
                Tus datos están protegidos. Sólo los usamos para responder a tu consulta.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
};

function Field({ label, required, children, className = "" }: FieldProps) {
  return (
    <label className={`block ${className}`}>
      <span className="block mb-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A]">
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
