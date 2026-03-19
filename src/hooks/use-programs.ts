import { useQuery } from "@tanstack/react-query";

export type Program = {
  id: string;
  title: string;
  duration: string;
  description: string;
  icon: string;
  color: string;
};

const PROGRAMS_DATA: Program[] = [
  {
    id: "contabilidad",
    title: "Técnico en Contabilidad",
    duration: "18 meses",
    description: "Domina los procesos contables, tributarios y financieros esenciales para el funcionamiento de cualquier empresa moderna.",
    icon: "Calculator",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: "sistemas",
    title: "Técnico en Sistemas Informáticos",
    duration: "18 meses",
    description: "Aprende soporte técnico, redes, mantenimiento de equipos y fundamentos de programación para el mundo digital.",
    icon: "Monitor",
    color: "from-primary to-secondary"
  },
  {
    id: "administracion",
    title: "Técnico en Administración de Empresas",
    duration: "12 meses",
    description: "Desarrolla habilidades en gestión de recursos, talento humano y planeación estratégica para liderar organizaciones.",
    icon: "Briefcase",
    color: "from-purple-500 to-indigo-400"
  },
  {
    id: "marketing",
    title: "Técnico en Marketing Digital",
    duration: "12 meses",
    description: "Conviértete en un experto en redes sociales, SEO, SEM y estrategias de comercialización en internet.",
    icon: "Megaphone",
    color: "from-orange-500 to-amber-400"
  },
  {
    id: "logistica",
    title: "Técnico en Logística y Distribución",
    duration: "18 meses",
    description: "Gestiona la cadena de suministro, inventarios, almacenamiento y transporte de mercancías a nivel nacional e internacional.",
    icon: "Truck",
    color: "from-slate-600 to-gray-500"
  },
  {
    id: "enfermeria",
    title: "Técnico en Enfermería Básica",
    duration: "24 meses",
    description: "Fórmate para brindar atención integral en salud, primeros auxilios y asistencia a pacientes en instituciones médicas.",
    icon: "HeartPulse",
    color: "from-rose-500 to-pink-400"
  }
];

export function usePrograms() {
  return useQuery({
    queryKey: ["programs"],
    queryFn: async () => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return PROGRAMS_DATA;
    },
  });
}
