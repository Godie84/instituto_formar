import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, GraduationCap, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/programas", label: "Programas" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-primary p-2 rounded-xl text-accent group-hover:scale-105 transition-transform duration-300 shadow-md">
              <GraduationCap size={28} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className={`text-sm font-bold tracking-widest leading-none ${isScrolled || location !== "/" ? "text-foreground" : "text-white/90"}`}>
                INSTITUTO TÉCNICO
              </span>
              <span className={`text-2xl font-display font-black leading-none ${isScrolled || location !== "/" ? "text-primary" : "text-white"}`}>
                FORMAR
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = location === link.href;
              const textColor = isScrolled || location !== "/" 
                ? (isActive ? "text-primary" : "text-foreground/80 hover:text-primary")
                : (isActive ? "text-accent" : "text-white/90 hover:text-white");
                
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium text-sm transition-colors relative ${textColor}`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${isScrolled || location !== "/" ? "bg-primary" : "bg-accent"}`}
                      initial={false}
                    />
                  )}
                </Link>
              );
            })}
            <Link 
              href="/inscripcion"
              className={`
                px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2
                ${isScrolled || location !== "/" 
                  ? "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5" 
                  : "bg-accent text-primary-foreground hover:bg-white hover:text-primary hover:shadow-lg hover:-translate-y-0.5"
                }
              `}
            >
              Inscripción
              <ChevronRight size={16} />
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-md ${isScrolled || location !== "/" ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border/50 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl font-medium text-lg ${
                    location === link.href
                      ? "bg-primary/5 text-primary"
                      : "text-foreground/80 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/inscripcion"
                className="mx-4 mt-2 bg-primary text-white px-4 py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 shadow-md"
              >
                Inscribirme Ahora
                <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
