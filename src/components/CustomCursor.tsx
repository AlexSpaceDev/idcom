import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const INTERACTIVE_SELECTOR =
  'button, a, [role="button"], input, textarea, select, label';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const isOverRef = useRef(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const hoverCapable = window.matchMedia("(hover: hover)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (hoverCapable && !reducedMotion) setEnabled(true);
  }, []);

  useGSAP(
    () => {
      const el = cursorRef.current;
      if (!enabled || !el) return;

      gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 0 });

      const xTo = gsap.quickTo(el, "x", {
        duration: 0.35,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(el, "y", {
        duration: 0.35,
        ease: "power3.out",
      });

      let firstMove = true;

      const onMove = (e: MouseEvent) => {
        if (firstMove) {
          firstMove = false;
          gsap.set(el, { x: e.clientX, y: e.clientY });
          gsap.to(el, { opacity: 1, duration: 0.3, ease: "power2.out" });
        } else {
          xTo(e.clientX);
          yTo(e.clientY);
        }

        const target = e.target as Element | null;
        const interactive = target?.closest?.(INTERACTIVE_SELECTOR);

        if (interactive && !isOverRef.current) {
          isOverRef.current = true;
          gsap.to(el, {
            scale: 2.6,
            backgroundColor: "rgba(245, 168, 0, 0.22)",
            borderColor: "transparent",
            duration: 0.3,
            ease: "power2.out",
          });
        } else if (!interactive && isOverRef.current) {
          isOverRef.current = false;
          gsap.to(el, {
            scale: 1,
            backgroundColor: "transparent",
            borderColor: "#F5A800",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      };

      const onLeave = () => {
        gsap.to(el, { opacity: 0, duration: 0.2, ease: "power2.out" });
        firstMove = true;
      };
      const onEnter = () => {
        if (!firstMove) gsap.to(el, { opacity: 1, duration: 0.2 });
      };

      window.addEventListener("mousemove", onMove);
      document.addEventListener("mouseleave", onLeave);
      document.addEventListener("mouseenter", onEnter);

      return () => {
        window.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseleave", onLeave);
        document.removeEventListener("mouseenter", onEnter);
      };
    },
    { dependencies: [enabled] }
  );

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[60] h-3 w-3 rounded-full border-2"
      style={{
        borderColor: "#F5A800",
        backgroundColor: "transparent",
        willChange: "transform",
      }}
    />
  );
}
