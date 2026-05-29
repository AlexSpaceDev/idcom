import {
  Anchor,
  BadgeCheck,
  Clock,
  Fish,
  Fuel,
  Lightbulb,
  PackageOpen,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  short: string;
  image: string;
  Icon: LucideIcon;
};

export type NavLink = {
  id: string;
  label: string;
  isCatalog?: boolean;
};

export type Value = {
  name: string;
  desc: string;
  Icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    id: "cosechadoras",
    title: "Cosechadoras de Camarón",
    short: "Cosechadoras de alta eficiencia, fabricación y reparaciones.",
    image: "/photos/service-cosechadoras.webp",
    Icon: Fish,
  },
  {
    id: "reservorios",
    title: "Reservorios de Combustible",
    short: "Tanques de combustible para uso industrial y automotriz.",
    image: "/photos/service-reservorios.webp",
    Icon: Fuel,
  },
  {
    id: "plataformas",
    title: "Plataformas para Bines",
    short: "Acero estructural para carga y trabajo industrial.",
    image: "/photos/service-plataformas.webp",
    Icon: PackageOpen,
  },
  {
    id: "carretones",
    title: "Carretones de Carga Pesada",
    short: "Chasis reforzado, especificación técnica de alto rendimiento.",
    image: "/photos/service-carretones.webp",
    Icon: Truck,
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento General Industrial",
    short: "Mantenimiento preventivo, correctivo y predictivo industrial.",
    image: "/photos/service-mantenimiento.webp",
    Icon: Wrench,
  },
];

export const NAV_LINKS: NavLink[] = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "catalogo", label: "Catálogo", isCatalog: true },
  { id: "contacto", label: "Contacto" },
];

export const VALUES: Value[] = [
  { name: "Calidad", desc: "Excelencia en cada proyecto", Icon: BadgeCheck },
  { name: "Innovación", desc: "Soluciones creativas", Icon: Lightbulb },
  { name: "Responsabilidad", desc: "Compromiso total", Icon: ShieldCheck },
  { name: "Eficiencia", desc: "Resultados óptimos", Icon: Zap },
];

// Re-export icons used elsewhere for convenience
export { Anchor, Clock };
