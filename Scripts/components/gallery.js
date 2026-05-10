import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const nextImage = () => {
    setSelectedImage((prev) => (prev === null || prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev === null || prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="mt-4">
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="aspect-square overflow-hidden border border-[#D1CAB0] cursor-pointer hover:border-[#8E8D8A] transition-colors bg-[#F5F1E9]"
            onClick={() => setSelectedImage(idx)}
          >
            <img 
              src={img.url} 
              alt={img.caption}
              className="w-full h-full object-cover mix-blend-multiply opacity-80"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
        <div className="aspect-square border border-[#D1CAB0] flex items-center justify-center text-xs opacity-50 bg-[#F5F1E9]">
          +
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <button 
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft size={64} />
            </button>

            <button 
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight size={64} />
            </button>

            <div
              className="max-w-5xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={images[selectedImage].url} 
                alt={images[selectedImage].caption}
                className="max-w-full max-h-[85vh] object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <p className="text-white text-center mt-6 font-serif italic text-xl tracking-wide">
                {images[selectedImage].caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
