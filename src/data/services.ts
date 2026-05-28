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
    short:
      "Producimos y vendemos cosechadoras de alta eficiencia. Fabricación y reparaciones especializadas.",
    Icon: Fish,
  },
  {
    id: "reservorios",
    title: "Reservorios de Combustible",
    short:
      "Suministramos tanques de combustible diseñados para aplicaciones industriales y automotrices.",
    Icon: Fuel,
  },
  {
    id: "plataformas",
    title: "Plataformas para Bines",
    short:
      "Fabricamos plataformas de acero estructural para carga y trabajo industrial.",
    Icon: PackageOpen,
  },
  {
    id: "carretones",
    title: "Carretones de Carga Pesada",
    short:
      "Carretones robustos con chasis reforzado y especificaciones técnicas de alto rendimiento.",
    Icon: Truck,
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento General Industrial",
    short:
      "Soluciones de mantenimiento integral (preventivo, correctivo, predictivo) para equipos y sistemas industriales.",
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
