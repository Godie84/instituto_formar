import { Link } from "wouter";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white/80 pt-16 pb-8 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 inline-block">
              <div className="bg-primary/20 p-2 rounded-xl text-accent border border-primary/30">
                <GraduationCap size={24} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-widest leading-none text-white/60">
                  INSTITUTO TÉCNICO
                </span>
                <span className="text-xl font-display font-black leading-none text-white">
                  FORMAR
                </span>
              </div>
            </Link>
            <p className="text-sm mt-4 leading-relaxed">
              Formando profesionales competentes y comprometidos con el desarrollo productivo y social desde hace más de 15 años.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-accent transition-colors">Inicio</Link></li>
              <li><Link href="/nosotros" className="hover:text-accent transition-colors">Nosotros</Link></li>
              <li><Link href="/programas" className="hover:text-accent transition-colors">Programas Técnicos</Link></li>
              <li><Link href="/inscripcion" className="hover:text-accent transition-colors">Proceso de Inscripción</Link></li>
            </ul>
          </div>

          {/* Programas */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              Programas Destacados
            </h3>
            <ul className="space-y-3">
              <li><Link href="/programas" className="hover:text-secondary transition-colors">Técnico en Sistemas</Link></li>
              <li><Link href="/programas" className="hover:text-secondary transition-colors">Administración de Empresas</Link></li>
              <li><Link href="/programas" className="hover:text-secondary transition-colors">Contabilidad y Finanzas</Link></li>
              <li><Link href="/programas" className="hover:text-secondary transition-colors">Marketing Digital</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent shrink-0 mt-0.5" />
                <span className="text-sm">Av. Principal #123, Edificio Formar, Ciudad Centro.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent shrink-0" />
                <span className="text-sm">admisiones@institutoformar.edu</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Instituto Técnico Formar. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
