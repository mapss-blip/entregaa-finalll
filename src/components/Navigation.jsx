import { FLOWERS } from '../data';

export default function Navigation({ activeId }) {
  return (
    <nav className="flex flex-wrap justify-center gap-4 mb-8">
      <a
        href="/"
        className={`px-6 py-2 transition-all uppercase tracking-widest text-xs font-bold ${
          !activeId 
            ? 'bg-[#FFFDF7] border-b-2 border-[#8E8D8A] text-[#8E8D8A]' 
            : 'text-[#8E8D8A] opacity-60 hover:opacity-100 hover:bg-[#FFFDF7]/50'
        }`}
      >
        Inicio
      </a>
      {FLOWERS.map((flower) => {
        const href = `/${flower.id === 'rose' ? 'rosa' : flower.id === 'tulip' ? 'tulipan' : flower.id === 'sunflower' ? 'girasol' : 'lavanda'}.html`;

        return (
          <a
            key={flower.id}
            href={href}
            className={`px-6 py-2 transition-all uppercase tracking-widest text-xs font-bold ${
              activeId === flower.id 
                ? 'bg-[#FFFDF7] border-b-2 border-[#8E8D8A] text-[#8E8D8A]' 
                : 'text-[#8E8D8A] opacity-60 hover:opacity-100 hover:bg-[#FFFDF7]/50'
            }`}
          >
            {flower.name}
          </a>
        );
      })}
    </nav>
  );
}
