import React, { useState } from 'react';
import { FolderGit2, Search, ArrowRight, X, ExternalLink } from 'lucide-react';

const Projects = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const filters = ['ALL', 'WEB APP', 'SPK / SISTEM', 'SKRIPSI'];

  // Proyek NYATA sesuai CV
  const projects = [
    {
      id: 1,
      title: 'Wandlings.co — Website Marketplace',
      category: 'WEB APP',
      img: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800',
      liveUrl: 'https://wandlings.pythonanywhere.com',
      description: 'Website marketplace untuk brand Wandlings, dibangun dari tahap awal menggunakan Django sebagai framework utama. Mengembangkan tampilan responsif dengan Tailwind CSS dan menghubungkan frontend dengan backend untuk menampilkan serta mengelola produk.',
      techStack: ['Django', 'Tailwind CSS', 'HTML', 'CSS', 'Python'],
      type: 'Proyek Freelance / KKP',
      features: [
        'Membangun website marketplace dari tahap awal menggunakan Django',
        'Tampilan responsif dengan Tailwind CSS yang terkoneksi ke backend',
        'Menampilkan & mengelola produk secara dinamis dari database',
        'Live di: wandlings.pythonanywhere.com'
      ]
    },
    {
      id: 2,
      title: 'Sistem Pembayaran SPP Online',
      category: 'WEB APP',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
      liveUrl: null,
      description: 'Dirancang dan dirintis untuk MA Plus Peradaban Insani dalam program Kuliah Kerja Praktek (KKP). Menggunakan metode Waterfall dari analisis kebutuhan sampai pengujian dan deployment, mencakup fitur data siswa, kelas, petugas, SPP, transaksi, dan laporan pembayaran.',
      techStack: ['PHP', 'MySQL', 'HTML', 'CSS'],
      type: 'Kuliah Kerja Praktek (KKP) · 2024',
      features: [
        'Perancangan sistem menggunakan metode Waterfall (analisis → deployment)',
        'Fitur data siswa, kelas, petugas, SPP, dan transaksi terintegrasi',
        'Laporan pembayaran yang dapat dicetak dan diekspor',
        'Validasi input real-time untuk mencegah data duplikasi'
      ]
    },
    {
      id: 3,
      title: 'Implementasi Metode MOORA untuk Sistem Pendukung Keputusan (SPK)',
      category: 'SKRIPSI',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
      liveUrl: null,
      description: 'Skripsi: Implementasi Metode MOORA untuk Sistem Pendukung Keputusan dalam Menentukan Siswa Berisiko Putus Sekolah di MA Peradaban Insani. Merancang alur sistem, database, fitur penilaian, proses perhitungan, dan hasil rekomendasi dalam aplikasi web.',
      techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Metode MOORA'],
      type: 'Skripsi S1 Teknik Informatika',
      features: [
        'Metode MOORA untuk menilai & merangking siswa berisiko putus sekolah',
        'Perancangan alur sistem, ERD, dan database lengkap',
        'Fitur penilaian kriteria, normalisasi data, dan proses perhitungan',
        'Visualisasi hasil rekomendasi yang dapat diakses pihak sekolah'
      ]
    },
  ];

  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeFilter === 'ALL' || p.category === activeFilter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="min-h-screen bg-[#020408] py-28 px-6 md:px-16 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 font-bold tracking-widest mb-2">
              <FolderGit2 className="w-4 h-4" />
              <span>PORTFOLIO PROYEK</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              RECAP PROJECT <span className="text-blue-500">2026</span>
            </h2>
            <p className="text-white/60 text-sm mt-2 max-w-md">
              Proyek nyata yang dikerjakan selama studi — dari KKP, skripsi, hingga freelance. Klik untuk melihat detail lengkap.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-white/5 p-1.5 rounded-2xl backdrop-blur-md border border-white/10">
            {filters.map(filter => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all ${
                  activeFilter === filter 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-10 max-w-md">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari proyek atau teknologi (e.g. Django, PHP, MOORA...)"
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none text-xs text-white placeholder-white/40"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid — Full Width Horizontal Cards */}
        <div className="space-y-6">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id}
              onClick={() => onSelectProject && onSelectProject(project)}
              className="group flex flex-col md:flex-row gap-0 rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-blue-500/50 hover:translate-y-[-2px] transition-all cursor-pointer shadow-xl"
            >
              {/* Image */}
              <div className="relative md:w-72 lg:w-80 flex-shrink-0 h-52 md:h-auto overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950 hidden md:block"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent md:hidden"></div>
                
                {/* Category Badge on image */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-black/70 border border-white/15 text-blue-400 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Numbering */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-blue-600/80 text-white text-xs font-black flex items-center justify-center">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[11px] font-mono text-blue-400 font-bold uppercase tracking-widest">{project.type}</span>
                    <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-blue-300 transition-colors mt-0.5 leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 text-[11px] font-mono font-bold hover:bg-blue-600 hover:text-white transition-all flex-shrink-0"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Preview: {project.liveUrl.replace('https://', '')}
                    </a>
                  )}
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-2xl line-clamp-2 group-hover:line-clamp-none transition-all">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/8 border border-white/10 text-white/80 group-hover:border-blue-500/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* See Detail CTA */}
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-bold">
                  <span>LIHAT DETAIL PROYEK</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-white/50 text-sm">
            Tidak ada proyek yang sesuai dengan pencarian. Coba kata kunci lain!
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
