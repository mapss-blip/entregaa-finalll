import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navigation from './Navigation';
import Postcard from './Postcard';
import '../index.css';
import { motion } from 'motion/react';

export default function PageTemplate({ flower }) {
  return (
    <div className="min-h-screen py-12 px-4 md:px-8 bg-[#EAE7DC]">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <Navigation activeId={flower.id} />
        
        <main className="relative h-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Postcard flower={flower} />
          </motion.div>
        </main>

        <footer className="flex justify-between items-center px-4 mt-8">
          <p className="text-[10px] text-[#8E8D8A] uppercase tracking-widest">© 2026 El Jardín de las Postales</p>
          <div className="flex gap-4">
            <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: flower.color }}></div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export function mountPage(flower) {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <PageTemplate flower={flower} />
    </StrictMode>,
  );
}
