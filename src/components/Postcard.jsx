import { motion } from 'motion/react';
import Gallery from './Gallery';

export default function Postcard({ flower }) {
  return (
    <div className="max-w-5xl mx-auto bg-[#FFFDF7] shadow-[20px_20px_60px_rgba(0,0,0,0.1)] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row border border-[#D1CAB0] postcard-texture">
      
      {/* Decorative Stamp Element */}
      <div className="absolute top-8 right-8 w-24 h-28 border-4 border-double border-[#D1CAB0] p-1 flex items-center justify-center rotate-3 hidden md:flex">
        <div className="w-full h-full bg-[#EAE7DC] flex items-center justify-center text-[10px] text-center font-sans uppercase tracking-tighter opacity-50 px-2 leading-none">
          Sello Postal<br/>Flower Post
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-0">
        {/* Left Side: Hero Image and Gallery */}
        <div className="md:w-1/2 flex flex-col pr-0 md:pr-12 md:border-r border-[#D1CAB0]">
          <div className="space-y-8">
            <motion.div 
              className="aspect-[4/5] overflow-hidden border border-[#D1CAB0] relative bg-[#F5F1E9]"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={flower.heroImage} 
                alt={flower.name} 
                className="w-full h-full object-cover mix-blend-multiply opacity-90"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <Gallery images={flower.gallery} />
          </div>
        </div>

        {/* Right Side: Information */}
        <div className="md:w-1/2 flex flex-col pl-0 md:pl-12 pt-12 md:pt-4 relative min-h-[500px]">
          <header className="mb-12">
            <h2 className="font-display text-5xl md:text-6xl italic text-[#5B6D5B] mb-1 font-light">
              {flower.name}
            </h2>
            <p className="font-sans uppercase text-[10px] tracking-[0.3em] text-[#8E8D8A] font-bold">
              {flower.scientificName}
            </p>
          </header>

          <div className="space-y-8 flex-1">
            <section className="border-b border-[#EAE7DC] pb-4">
              <h4 className="font-sans uppercase text-[9px] tracking-[0.2em] font-bold text-[#8E8D8A] mb-2">Descripción</h4>
              <p className="text-sm leading-relaxed text-[#666]">{flower.description}</p>
            </section>

            <section className="border-b border-[#EAE7DC] pb-4">
              <h4 className="font-sans uppercase text-[9px] tracking-[0.2em] font-bold text-[#8E8D8A] mb-2">Significado</h4>
              <p className="text-sm italic text-[#777]">{flower.meaning}</p>
            </section>

            <section>
              <h4 className="font-sans uppercase text-[9px] tracking-[0.2em] font-bold text-[#8E8D8A] mb-2">Origen</h4>
              <p className="text-sm italic text-[#777]">{flower.origin}</p>
            </section>
          </div>

          {/* Decorative Postcard Lines */}
          <div className="mt-12 space-y-4 opacity-50">
            <div className="w-full h-[1px] bg-[#EAE7DC]"></div>
            <div className="w-full h-[1px] bg-[#EAE7DC]"></div>
            <div className="w-3/4 h-[1px] bg-[#EAE7DC]"></div>
          </div>

          <div className="absolute bottom-0 right-0 opacity-10 text-6xl rotate-[-15deg] font-sans font-black pointer-events-none select-none">
            POSTAL
          </div>
        </div>
      </div>
    </div>
  );
}
