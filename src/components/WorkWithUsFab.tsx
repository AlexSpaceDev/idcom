import { useEffect, useState } from "react";
import { Handshake } from "lucide-react";

type WorkWithUsFabProps = {
  onNavigate: (id: string) => void;
};

export default function WorkWithUsFab({ onNavigate }: WorkWithUsFabProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 400);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <button
      type="button"
      aria-label="Trabaja con nosotros"
      onClick={() => onNavigate("contacto")}
      className={`fixed right-6 bottom-24 z-30 inline-flex items-center gap-2.5 rounded-full bg-[#F5A800] text-[#1A1A1A] font-bold uppercase tracking-wider shadow-[0_10px_30px_-5px_rgba(245,168,0,0.55)] transition-all duration-500 hover:bg-[#FFB81C] hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-[#FFB81C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A] ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      } h-14 w-14 sm:h-auto sm:w-auto sm:px-5 sm:py-3.5`}
    >
      <Handshake className="w-6 h-6 sm:w-5 sm:h-5 mx-auto sm:mx-0" strokeWidth={2.2} />
      <span className="hidden sm:inline text-xs">Trabaja con nosotros</span>
    </button>
  );
}
