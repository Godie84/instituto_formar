import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MainLayout } from "@/components/layout/MainLayout";
import { usePrograms } from "@/hooks/use-programs";
import { useSubmitEnrollment, enrollmentSchema, type EnrollmentInput } from "@/hooks/use-enrollment";
import { MapPin, Phone, Mail, Clock, Send, AlertCircle, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function Inscripcion() {
  const { data: programs, isLoading: isLoadingPrograms } = usePrograms();
  const { mutate, isPending } = useSubmitEnrollment();

  const form = useForm<EnrollmentInput>({
    resolver: zodResolver(enrollmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      programId: "",
      message: "",
    },
  });

  function onSubmit(data: EnrollmentInput) {
    mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  }

  return (
    <MainLayout>
      <section className="pt-32 pb-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-display font-black text-foreground mb-6">
                Proceso de <span className="text-primary">Inscripción</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Déjanos tus datos y el programa de tu interés. Un asesor académico se pondrá en contacto contigo para guiarte en tu proceso de matrícula.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            
            {/* Contact Info Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-primary text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <MapPin size={100} />
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-8">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl shrink-0">
                      <MapPin size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-1">Sede Principal</p>
                      <p className="text-white/70">Av. Principal #123, Edificio Formar<br/>Ciudad Centro, CP 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl shrink-0">
                      <Phone size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-1">Llámanos</p>
                      <p className="text-white/70">+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl shrink-0">
                      <Mail size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-1">Correo Electrónico</p>
                      <p className="text-white/70">admisiones@institutoformar.edu</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl shrink-0">
                      <Clock size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-1">Horario de Atención</p>
                      <p className="text-white/70">Lunes a Viernes: 8:00 AM - 6:00 PM<br/>Sábados: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 flex gap-4">
                <AlertCircle className="text-accent shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Requisitos Básicos</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-2">
                    <li>Copia de documento de identidad</li>
                    <li>Certificado de estudios secundarios</li>
                    <li>2 fotos tamaño carnet</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-border/50"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Nombre Completo *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: Juan Pérez" className="h-12 bg-background border-border/60 focus:bg-white transition-colors" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Teléfono / Celular *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: 555-1234" className="h-12 bg-background border-border/60 focus:bg-white transition-colors" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">Correo Electrónico *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="ejemplo@correo.com" className="h-12 bg-background border-border/60 focus:bg-white transition-colors" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="programId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">Programa de Interés *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-background border-border/60 focus:bg-white transition-colors">
                              <SelectValue placeholder={isLoadingPrograms ? "Cargando programas..." : "Selecciona un programa"} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {programs?.map((p) => (
                              <SelectItem key={p.id} value={p.id}>
                                {p.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">Mensaje o Consulta (Opcional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="¿Tienes alguna duda específica sobre horarios, costos o convalidaciones?" 
                            className="resize-none min-h-[120px] bg-background border-border/60 focus:bg-white transition-colors p-4" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full h-14 rounded-xl font-bold text-lg bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isPending ? (
                      <>
                        <Loader2 size={22} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={22} />
                        Enviar Solicitud
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-muted-foreground">
                    Al enviar este formulario aceptas nuestra política de tratamiento de datos personales.
                  </p>
                </form>
              </Form>
            </motion.div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
}
