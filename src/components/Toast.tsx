import { useEffect } from "react";
import { Check } from "lucide-react";

type ToastProps = {
  message: string;
  onClose: () => void;
};

export default function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(onClose, 3200);
    return () => clearTimeout(t);
  }, [message, onClose]);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        message
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-[#1A1A1A] text-white px-5 py-3.5 rounded-lg shadow-2xl flex items-center gap-3 border border-[#F5A800]/40">
        <span className="h-6 w-6 rounded-full bg-[#F5A800] grid place-items-center flex-shrink-0">
          <Check className="w-4 h-4 text-[#1A1A1A]" strokeWidth={3} />
        </span>
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}
