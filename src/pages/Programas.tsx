import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { usePrograms } from "@/hooks/use-programs";

export function Programas() {
  const { data: programs, isLoading } = usePrograms();

  return (
    <MainLayout>
      {/* HEADER PAGE */}
      <section className="pt-32 pb-20 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6">
              Oferta <span className="text-accent">Académica</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Descubre nuestros programas técnicos diseñados para convertirte en el profesional que las empresas necesitan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROGRAMAS LIST */}
      <section className="py-24 bg-background min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 flex flex-wrap gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-border/50 shadow-sm">
            <p className="text-muted-foreground font-medium px-2">
              Mostrando <strong className="text-foreground">{programs?.length || 0}</strong> programas disponibles
            </p>
            {/* Future placeholder for filters if needed */}
            <div className="flex gap-2">
              <span className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">Todos</span>
              <span className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-muted/80 cursor-pointer transition-colors">Tecnología</span>
              <span className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-muted/80 cursor-pointer transition-colors">Negocios</span>
            </div>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-80 bg-muted/50 animate-pulse rounded-3xl"></div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs?.map((program, index) => (
                <ProgramCard key={program.id} program={program} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
