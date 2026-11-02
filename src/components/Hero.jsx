import React from 'react';
import { Play, Compass, Sliders, LogOut, Terminal } from 'lucide-react';

const Hero = ({ onOpenGame, onOpenOptions, onOpenExit, onScrollTo }) => {
  return (
    <section id="home" className="min-h-screen bg-gradient-cinematic flex flex-col justify-center relative px-6 pt-28 pb-16 md:px-16 lg:px-24 overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column: Visual Portrait */}
        <div className="lg:col-span-5 relative group order-2 lg:order-1 flex justify-center">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-700"></div>
          <div className="relative h-[440px] sm:h-[480px] w-full max-w-sm rounded-[2rem] overflow-hidden border border-white/15 glass-card shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
              alt="Yoni Pramudya" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-slate-950/80 border border-white/10 backdrop-blur-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-[11px] font-mono text-emerald-400 font-bold">OPEN TO WORK · FRESH GRADUATE</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs font-mono text-blue-400 mb-1">UNIVERSITAS PAMULANG · 2022–2026</p>
              <h3 className="text-xl font-bold text-white">Yoni Pramudya</h3>
              <p className="text-xs text-white/60">Teknik Informatika · Web Development</p>
            </div>
          </div>
        </div>

        {/* Right Column: Title & Interactive Game Menu */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start space-y-6 order-1 lg:order-2">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-bold font-mono tracking-widest text-blue-400 mb-4 backdrop-blur-md">
              <Terminal className="w-3.5 h-3.5" />
              <span>FRESH GRADUATE TEKNIK INFORMATIKA · WEB DEVELOPMENT</span>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tight">
              PORTFOLIO<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 text-glow">
                2026
              </span>
            </h1>
            <p className="text-white/70 max-w-lg mt-4 text-sm sm:text-base leading-relaxed">
              Lulusan Teknik Informatika Universitas Pamulang dengan minat pada pengembangan website dan sistem informasi. Berpengalaman membangun proyek web dari perancangan alur sistem, tampilan frontend, pengelolaan database, hingga deployment.
            </p>
          </div>

          {/* Game Style Menu Buttons (Fully Interactive!) */}
          <div className="flex flex-col gap-3.5 w-full max-w-sm pt-4">
            {/* START / PLAY GAME */}
            <button 
              onClick={onOpenGame}
              className="glass-card py-4 px-6 rounded-2xl font-bold tracking-widest text-left flex justify-between items-center group border border-blue-500/40 bg-gradient-to-r from-blue-600/20 to-transparent hover:from-blue-600/30 hover:translate-y-[-2px] transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-black">START GAME</span>
                  <span className="text-[10px] text-blue-300 font-mono tracking-normal">Mainkan Arcade Bug Slayer</span>
                </div>
              </div>
              <span className="text-blue-400 font-mono text-sm opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                [PLAY]
              </span>
            </button>

            {/* EXPLORE PORTFOLIO */}
            <button 
              onClick={() => onScrollTo('about')}
              className="glass-card py-4 px-6 rounded-2xl font-bold tracking-widest text-left flex justify-between items-center group text-white/90 hover:text-white border-white/10 hover:translate-y-[-2px] transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 text-white/70 flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-colors">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-black">JELAJAHI PORTFOLIO</span>
                  <span className="text-[10px] text-white/50 font-mono tracking-normal">Lihat Skill & Proyek Unggulan</span>
                </div>
              </div>
              <span className="text-white/40 group-hover:text-white font-mono text-sm transition-colors">
                ↓
              </span>
            </button>

            {/* OPTIONS / SETTINGS */}
            <button 
              onClick={onOpenOptions}
              className="glass-card py-3.5 px-6 rounded-2xl font-bold tracking-widest text-left flex justify-between items-center group text-white/70 hover:text-white border-white/10 hover:translate-y-[-2px] transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 text-white/50 flex items-center justify-center group-hover:text-white transition-colors">
                  <Sliders className="w-4 h-4" />
                </div>
                <span className="text-sm">OPTIONS / SETTINGS</span>
              </div>
              <span className="text-white/30 group-hover:text-white font-mono text-xs">
                [CONFIG]
              </span>
            </button>

            {/* EXIT */}
            <button 
              onClick={onOpenExit}
              className="glass-card py-3 px-6 rounded-2xl font-bold tracking-widest text-left flex justify-between items-center group text-white/50 hover:text-red-400 hover:border-red-500/40 hover:bg-red-500/10 hover:translate-y-[-2px] transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 text-white/30 flex items-center justify-center group-hover:text-red-400 transition-colors">
                  <LogOut className="w-4 h-4" />
                </div>
                <span className="text-sm">EXIT</span>
              </div>
              <span className="text-white/20 group-hover:text-red-400 font-mono text-xs">
                [ESC]
              </span>
            </button>
          </div>

          {/* Quick Stats Badges */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 w-full max-w-md">
            <div>
              <p className="text-2xl font-black text-white">3+</p>
              <p className="text-[11px] text-white/50 font-mono uppercase">Proyek Utama</p>
            </div>
            <div>
              <p className="text-2xl font-black text-blue-400">Ciputat</p>
              <p className="text-[11px] text-white/50 font-mono uppercase">Tangerang Selatan</p>
            </div>
            <div>
              <p className="text-2xl font-black text-purple-400">UNPAM</p>
              <p className="text-[11px] text-white/50 font-mono uppercase">S1 Informatika</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
