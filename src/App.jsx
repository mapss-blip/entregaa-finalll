import { motion } from 'motion/react';
import { FLOWERS } from './data';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-8 bg-[#EAE7DC]">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <header className="text-center space-y-4">
          <h1 className="font-display text-5xl md:text-7xl italic text-[#5B6D5B] font-light">
            Florilegio Botánico
          </h1>
          <p className="font-sans uppercase text-xs tracking-[0.4em] text-[#8E8D8A]">
            Colección de Postales de Primavera
          </p>
        </header>

        <Navigation />

        <main className="grid md:grid-cols-2 gap-8">
          {FLOWERS.map((flower) => {
            const href = `/${flower.id === 'rose' ? 'rosa' : flower.id === 'tulip' ? 'tulipan' : flower.id === 'sunflower' ? 'girasol' : 'lavanda'}.html`;
            
            return (
              <motion.a
                key={flower.id}
                href={href}
                whileHover={{ y: -10 }}
                className="group relative bg-[#FFFDF7] p-6 border border-[#D1CAB0] shadow-xl overflow-hidden block"
              >
                <div className="aspect-[4/3] overflow-hidden mb-6 border border-[#D1CAB0] relative bg-[#F5F1E9]">
                  <img 
                    src={flower.heroImage} 
                    alt={flower.name}
                    className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                </div>
                
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="font-display text-3xl italic text-[#5B6D5B] mb-1">{flower.name}</h2>
                    <p className="font-sans uppercase text-[10px] tracking-widest text-[#8E8D8A]">{flower.scientificName}</p>
                  </div>
                  <div className="text-xs italic opacity-40 font-serif">Ver Postal →</div>
                </div>

                <div className="absolute top-4 right-4 w-12 h-14 border-2 border-double border-[#D1CAB0] opacity-20 rotate-12 flex items-center justify-center text-[6px] uppercase tracking-tighter text-center">
                  Flower<br/>Post
                </div>
              </motion.a>
            );
          })}
        </main>

        <footer className="flex justify-between items-center px-4 mt-12 pt-8 border-t border-[#D1CAB0]/30">
          <p className="text-[10px] text-[#8E8D8A] uppercase tracking-widest">© 2026 El Jardín de las Postales</p>
          <div className="flex gap-2">
            {FLOWERS.map(f => (
              <div key={f.id} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: f.color }}></div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}