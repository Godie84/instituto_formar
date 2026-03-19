import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden relative bg-background">
      {/* Decorative background texture element */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/pattern-dots.png)`, backgroundSize: '200px' }}
      />
      <Navbar />
      <main className="flex-grow z-10 w-full flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}
