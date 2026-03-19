import { Link } from "wouter";
import { motion } from "framer-motion";
import { Clock, ChevronRight, Calculator, Monitor, Briefcase, Megaphone, Truck, HeartPulse } from "lucide-react";
import type { Program } from "@/hooks/use-programs";

const iconMap: Record<string, React.ElementType> = {
  Calculator,
  Monitor,
  Briefcase,
  Megaphone,
  Truck,
  HeartPulse,
};

interface ProgramCardProps {
  program: Program;
  index: number;
}

export function ProgramCard({ program, index }: ProgramCardProps) {
  const Icon = iconMap[program.icon] || Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl p-8 border border-border/60 shadow-lg shadow-black/5 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${program.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
      
      <div className="flex items-start justify-between mb-6">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${program.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={28} strokeWidth={2} />
        </div>
        <div className="bg-background px-3 py-1 rounded-full text-xs font-semibold text-primary flex items-center gap-1.5 border border-border">
          <Clock size={12} />
          {program.duration}
        </div>
      </div>

      <h3 className="text-xl font-display font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
        {program.title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-8">
        {program.description}
      </p>

      <Link 
        href="/inscripcion" 
        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-secondary group-hover:text-primary transition-colors"
      >
        Solicitar información
        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
