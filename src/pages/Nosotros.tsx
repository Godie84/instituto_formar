import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { Target, Eye, Shield, Users, Award, BookOpen } from "lucide-react";

export function Nosotros() {
  return (
    <MainLayout>
      {/* HEADER PAGE */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://pixabay.com/get/g771f075195530e705f5054efba977c9fc7b92a9beb993d5dfcb236c73c1a57b799c34d2aa56cbf47e6d4e373419ec3c72194c2bfd1216eb0858267929a62d7b0_1280.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6">
              Nuestra <span className="text-accent">Institución</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Conoce la historia, misión y los valores que impulsan la excelencia en el Instituto Técnico Formar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISION Y VISION */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-10 md:p-12 shadow-xl shadow-black/5 border border-border/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target size={120} />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Nuestra Misión</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Formar técnicos profesionales altamente competentes, éticos y comprometidos con el desarrollo productivo y social del país, a través de programas educativos innovadores, prácticos y alineados a las exigencias del mercado laboral contemporáneo.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary rounded-3xl p-10 md:p-12 shadow-xl shadow-primary/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Eye size={120} className="text-white" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-8">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">Nuestra Visión</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Ser la institución técnica de referencia a nivel regional para el año 2030, reconocida por la excelencia académica, la innovación tecnológica de sus espacios y el alto índice de empleabilidad y emprendimiento de sus egresados.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="py-24 bg-white border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                {/* modern university building exterior */}
                <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop" alt="Campus 1" className="rounded-2xl w-full h-64 object-cover" />
                {/* computer lab with students */}
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" alt="Campus 2" className="rounded-2xl w-full h-64 object-cover mt-8" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-2">Trayectoria</h2>
              <h3 className="text-3xl md:text-4xl font-display font-black text-foreground mb-6">
                15 años formando a los <br/>líderes del mañana
              </h3>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  El <strong>Instituto Técnico Formar</strong> nació en 2009 con la firme convicción de que la educación técnica es el motor fundamental para el desarrollo económico de nuestra región.
                </p>
                <p>
                  Comenzamos con solo dos programas y 50 estudiantes en unas instalaciones modestas. Hoy, contamos con un campus moderno equipado con laboratorios de última generación, más de 6 programas acreditados y una comunidad de cientos de estudiantes y egresados.
                </p>
                <p>
                  A lo largo de estos años, hemos mantenido inalterable nuestro compromiso principal: ofrecer educación de calidad accesible que conecte directamente a nuestros jóvenes con las oportunidades reales de la industria.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-2">Principios</h2>
            <h3 className="text-3xl md:text-4xl font-display font-black text-foreground">
              Valores Institucionales
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Excelencia", desc: "Buscamos siempre la máxima calidad en nuestros procesos educativos y administrativos." },
              { icon: Users, title: "Compromiso", desc: "Dedicación total al éxito profesional y personal de cada uno de nuestros estudiantes." },
              { icon: BookOpen, title: "Innovación", desc: "Actualización constante de nuestros métodos y tecnologías para estar a la vanguardia." },
              { icon: Shield, title: "Integridad", desc: "Actuamos con transparencia, ética y honestidad en todas nuestras acciones institucionales." }
            ].map((valor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl text-center border border-border/40 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-background flex items-center justify-center text-primary mb-6">
                  <valor.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{valor.title}</h4>
                <p className="text-muted-foreground text-sm">{valor.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
