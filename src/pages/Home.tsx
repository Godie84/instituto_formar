import { Link } from "wouter";
import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { usePrograms } from "@/hooks/use-programs";
import { Users, Award, BookOpen, Target, ArrowRight, CheckCircle2, GraduationCap } from "lucide-react";

export function Home() {
  const { data: programs, isLoading } = usePrograms();
  const featuredPrograms = programs?.slice(0, 3) || [];

  return (
    <MainLayout>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-primary">
        {/* Abstract Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-accent font-semibold text-sm mb-6">
                <Award size={16} />
                <span>Inscripciones Abiertas 2025</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white leading-[1.1] mb-6">
                Construye tu <span className="text-accent">futuro profesional</span> con excelencia
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
                Programas técnicos de alta demanda laboral. Fórmate en el Instituto Técnico Formar y da el siguiente paso en tu carrera con nuestra metodología práctica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/programas" 
                  className="px-8 py-4 rounded-xl font-bold bg-accent text-primary-foreground text-center shadow-lg shadow-accent/20 hover:bg-white hover:text-primary hover:-translate-y-1 transition-all duration-300"
                >
                  Explorar Programas
                </Link>
                <Link 
                  href="/inscripcion" 
                  className="px-8 py-4 rounded-xl font-bold bg-white/10 text-white text-center backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Inscríbete Ahora
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-[2rem] blur-3xl transform rotate-3"></div>
              {/* students in campus studying together */}
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                alt="Estudiantes" 
                className="relative z-10 w-full h-auto rounded-[2rem] shadow-2xl border-4 border-white/10 object-cover aspect-[4/3]"
              />
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 z-20"
              >
                <div className="bg-secondary/20 p-3 rounded-full text-secondary">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-bold uppercase">Certificación</p>
                  <p className="text-sm font-bold text-foreground">Avalada Nacionalmente</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 bg-background relative -mt-8 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Users, num: "+500", label: "Egresados", color: "text-secondary" },
              { icon: Target, num: "15", label: "Años de experiencia", color: "text-primary" },
              { icon: BookOpen, num: "6", label: "Programas técnicos", color: "text-accent" },
              { icon: Award, num: "95%", label: "Inserción laboral", color: "text-secondary" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-xl shadow-black/5 border border-border/50 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`mb-3 ${stat.color} bg-background p-3 rounded-full group-hover:scale-110 transition-transform`}>
                  <stat.icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-black text-foreground mb-1">{stat.num}</h3>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROGRAMS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-2">Nuestra Oferta</h2>
              <h3 className="text-3xl md:text-4xl font-display font-black text-foreground">
                Programas de <span className="text-primary">Excelencia</span>
              </h3>
              <p className="text-muted-foreground mt-4 text-lg">
                Diseñados para responder a las necesidades actuales del mercado laboral, combinando teoría y mucha práctica.
              </p>
            </div>
            <Link 
              href="/programas" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-border font-semibold text-foreground hover:border-primary hover:text-primary transition-colors shrink-0"
            >
              Ver todos los programas
              <ArrowRight size={18} />
            </Link>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-80 bg-muted animate-pulse rounded-2xl"></div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPrograms.map((program, index) => (
                <ProgramCard key={program.id} program={program} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* smiling confident student looking at camera */}
              <img 
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=2069&auto=format&fit=crop" 
                alt="Por qué elegirnos" 
                className="rounded-3xl shadow-2xl w-full object-cover aspect-square"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-2">Ventajas</h2>
              <h3 className="text-3xl md:text-4xl font-display font-black text-foreground mb-6">
                ¿Por qué estudiar en <br/><span className="text-primary">Instituto Formar</span>?
              </h3>
              
              <div className="space-y-8 mt-10">
                {[
                  { title: "Metodología Práctica", desc: "Aprende haciendo. El 70% de nuestras clases se desarrollan en talleres y laboratorios simulando entornos reales." },
                  { title: "Plana Docente Experta", desc: "Profesores que laboran activamente en sus campos, trayendo experiencia real y actual al salón de clases." },
                  { title: "Bolsa de Empleo", desc: "Convenios con más de 50 empresas de la región que buscan activamente a nuestros egresados." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                        <CheckCircle2 size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <GraduationCap size={64} className="mx-auto text-accent mb-6" strokeWidth={1.5} />
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6">
              Impulsa tu carrera hoy mismo
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              No esperes más para adquirir las habilidades que las empresas están buscando. Las plazas son limitadas.
            </p>
            <Link 
              href="/inscripcion" 
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl font-bold text-lg bg-accent text-primary-foreground shadow-2xl shadow-accent/30 hover:scale-105 hover:bg-white hover:text-primary transition-all duration-300"
            >
              Comenzar Proceso de Inscripción
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
