import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const filters = ['ALL', 'DESIGN', 'VIDEO', 'AI'];

  const projects = [
    { id: 1, title: 'Neon Nights', category: 'VIDEO', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800' },
    { id: 2, title: 'Brand Identity', category: 'DESIGN', img: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800' },
    { id: 3, title: 'AI Generated Worlds', category: 'AI', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800' },
    { id: 4, title: 'Cinematic Reel', category: 'VIDEO', img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800' },
    { id: 5, title: 'App UI Kit', category: 'DESIGN', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800' },
    { id: 6, title: 'Future Concepts', category: 'AI', img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800' },
    { id: 7, title: 'Music Video', category: 'VIDEO', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800' },
    { id: 8, title: 'Typography', category: 'DESIGN', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800' },
  ];

  return (
    <section className="min-h-screen bg-[#020408] py-20 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">RECAP PROJECT <span className="text-blue-500">2025</span></h2>
        </div>
        <div className="flex gap-2 bg-white/5 p-1 rounded-xl backdrop-blur-md">
          {filters.map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-xs font-bold tracking-widest transition-all ${activeFilter === filter ? 'bg-blue-600 text-white' : 'text-white/50 hover:text-white hover:bg-white/10'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.filter(p => activeFilter === 'ALL' || p.category === activeFilter).map((project) => (
          <div key={project.id} className="group relative aspect-[4/5] rounded-2xl overflow-hidden glass-card cursor-pointer">
            <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-xs font-bold tracking-widest text-blue-400 mb-2 block">{project.category}</span>
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
