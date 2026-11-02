import React from 'react';
import { User, Code, Terminal, Database, Layers, Globe, FileText, Briefcase, GraduationCap, Zap } from 'lucide-react';

const About = ({ onShowToast }) => {
  // Skills sesuai CV
  const webSkills = [
    { name: 'HTML & CSS', level: '90%', color: 'bg-orange-400' },
    { name: 'JavaScript', level: '80%', color: 'bg-yellow-400' },
    { name: 'PHP', level: '85%', color: 'bg-indigo-400' },
    { name: 'Python', level: '80%', color: 'bg-blue-400' },
    { name: 'Django', level: '75%', color: 'bg-green-500' },
    { name: 'Tailwind CSS', level: '90%', color: 'bg-cyan-400' },
    { name: 'MySQL / SQL', level: '85%', color: 'bg-teal-400' },
    { name: 'Java (Dasar)', level: '50%', color: 'bg-red-400' },
  ];

  const tools = ['VS Code', 'Word', 'Excel', 'PowerPoint', 'ChatGPT & Gemini'];
  const otherSkills = ['Perancangan alur sistem', 'Deployment web', 'ChatGPT & Gemini'];
  const softSkills = ['Disiplin & bertanggung jawab', 'Manajemen waktu', 'Komunikasi yang baik', 'Kerja sama tim', 'Cepat belajar & adaptif'];

  return (
    <section id="about" className="min-h-screen bg-[#020408] relative px-6 py-28 md:px-16 lg:px-24 flex items-center border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Visual Half-Body */}
        <div className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/25 rounded-full blur-[100px]"></div>
          <div className="relative z-10 w-full max-w-sm rounded-3xl overflow-hidden border border-white/15 glass-card shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" 
              alt="Yoni Pramudya Working" 
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            
            {/* Info card on image */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/85 border border-white/10 backdrop-blur-md">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono text-blue-400 font-bold">STATUS</span>
                <span className="text-xs font-mono text-emerald-400 font-bold">● OPEN TO WORK</span>
              </div>
              <p className="text-[11px] text-white/80">
                Mencari posisi Junior Web Developer / Fullstack Developer di Tangerang Selatan & sekitarnya.
              </p>
              <div className="flex items-center gap-2 mt-2 text-[11px] text-white/50">
                <Globe className="w-3 h-3" />
                <a href="https://yonipramudya.github.io" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                  yonipramudya.github.io
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Skills */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 font-bold tracking-widest mb-2">
              <User className="w-4 h-4" />
              <span>PROFIL SAYA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-glow">
              ABOUT ME
            </h2>
            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              Lulusan <strong className="text-white">Teknik Informatika Universitas Pamulang</strong> dengan minat pada pengembangan website dan sistem informasi. Berpengalaman membangun proyek web dari perancangan alur sistem, tampilan frontend, pengelolaan database, hingga deployment — termasuk marketplace dan sistem pendukung keputusan. Disiplin, cepat belajar, dan terbiasa bekerja mandiri maupun dalam tim.
            </p>
            
            {/* Contact info snippet */}
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/60">
              <span className="flex items-center gap-1.5">
                <span className="text-blue-400">📱</span> 0896-0326-3148
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-blue-400">📍</span> Ciputat, Tangerang Selatan
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-blue-400">📸</span> @yonipramudya
              </span>
            </div>
          </div>

          {/* Web & Framework Skills with Progress Bar */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-blue-400 uppercase font-mono mb-4 flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>WEB & FRAMEWORK SKILLS</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {webSkills.map((skill, i) => (
                <div 
                  key={i} 
                  className="glass-card p-3 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all cursor-pointer group"
                  onClick={() => onShowToast && onShowToast(`⚡ ${skill.name}: ${skill.level} kemahiran`)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">{skill.name}</span>
                    <span className="text-[10px] font-mono text-blue-400">{skill.level}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${skill.color} opacity-80`} 
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Lainnya */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-blue-400 uppercase font-mono mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>DATABASE, TOOLS & LAINNYA</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {['MySQL', 'SQL', 'VS Code', 'Word', 'Excel', 'PowerPoint', 'Perancangan alur sistem', 'Deployment web', 'ChatGPT & Gemini'].map((tool, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80 font-mono hover:bg-blue-600/20 hover:border-blue-500/40 transition-all">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-purple-400 uppercase font-mono mb-3">SOFT SKILLS</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs text-purple-300 font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Bahasa */}
          <div className="flex gap-4">
            <div className="flex-1 p-3 rounded-xl glass-card border border-white/5">
              <p className="text-[10px] font-mono text-white/40 uppercase mb-1">BAHASA</p>
              <p className="text-sm font-bold text-white">Indonesia</p>
              <p className="text-xs text-emerald-400 font-mono">Aktif</p>
            </div>
            <div className="flex-1 p-3 rounded-xl glass-card border border-white/5">
              <p className="text-[10px] font-mono text-white/40 uppercase mb-1">BAHASA</p>
              <p className="text-sm font-bold text-white">Inggris</p>
              <p className="text-xs text-yellow-400 font-mono">TOEFL Prediction 410 (2025)</p>
            </div>
          </div>

          {/* Pendidikan & Pengalaman Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
            <div className="p-4 rounded-2xl glass-card border border-white/5">
              <h4 className="text-[11px] font-bold font-mono tracking-widest text-blue-400 uppercase mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                PENDIDIKAN
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-bold text-white">S1 Teknik Informatika</p>
                  <p className="text-xs text-white/60">Universitas Pamulang</p>
                  <p className="text-[11px] text-blue-400 font-mono">2022 – 2026</p>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <p className="text-sm font-bold text-white">Teknik Mesin</p>
                  <p className="text-xs text-white/60">SMKN 1 Tangerang Selatan</p>
                  <p className="text-[11px] text-blue-400 font-mono">2019 – 2022</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl glass-card border border-white/5">
              <h4 className="text-[11px] font-bold font-mono tracking-widest text-purple-400 uppercase mb-3 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                PENGALAMAN KERJA
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-bold text-white">Frontliner</p>
                  <p className="text-xs text-white/60">Secondstore, Second Brand Ciputat</p>
                  <p className="text-[11px] text-purple-400 font-mono">2022 · 7 bulan</p>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <p className="text-sm font-bold text-white">Asisten Mekanik</p>
                  <p className="text-xs text-white/60">CV Rama Teknik Tangsel</p>
                  <p className="text-[11px] text-purple-400 font-mono">2020 – 2021</p>
                </div>
              </div>
            </div>
          </div>

          {/* CV & Portfolio Links */}
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onShowToast && onShowToast('📄 Membuka Curriculum Vitae Yoni Pramudya...')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs uppercase tracking-widest transition-all"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Lihat / Unduh CV</span>
            </button>
            <a 
              href="https://yonipramudya.github.io" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/40 text-blue-400 font-bold text-xs uppercase tracking-widest transition-all"
            >
              <Globe className="w-4 h-4" />
              <span>yonipramudya.github.io</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
