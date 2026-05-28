import { MessageCircle } from "lucide-react";

export default function WhatsappFab() {
  return (
    <a
      href="https://wa.me/593991022732"
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-30 h-14 w-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] hover:scale-105 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="relative w-7 h-7" strokeWidth={2.2} />
    </a>
  );
}
