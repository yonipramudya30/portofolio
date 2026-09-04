import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-cinematic flex flex-col relative px-6 py-8 md:px-16 lg:px-24">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-16 z-10">
        <div className="text-3xl font-black tracking-tighter text-white">YP.</div>
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase text-white/70">
          <li className="text-white cursor-pointer hover:text-white transition-colors">Home</li>
          <li className="cursor-pointer hover:text-white transition-colors">About</li>
          <li className="cursor-pointer hover:text-white transition-colors">Work</li>
          <li className="cursor-pointer hover:text-white transition-colors">Contact</li>
        </ul>
        <button className="md:hidden text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </nav>

      {/* Content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Column */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-red-600 rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative h-[500px] w-full max-w-md mx-auto bg-red-900 rounded-[2rem] overflow-hidden border border-red-500/30">
            {/* Placeholder Image */}
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover opacity-80 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 to-transparent"></div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center items-start space-y-8">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-widest text-blue-400 mb-4 backdrop-blur-sm">
              CONTENT CREATOR
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
              PORTFOLIO<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-glow">2025</span>
            </h1>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-xs mt-8">
            <button className="glass-card py-4 px-8 rounded-xl font-bold tracking-widest hover:bg-white/10 hover:border-blue-500/50 transition-all text-left flex justify-between items-center group">
              <span>START</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </button>
            <button className="glass-card py-4 px-8 rounded-xl font-bold tracking-widest hover:bg-white/10 hover:border-white/30 transition-all text-left flex justify-between items-center group text-white/70 hover:text-white">
              <span>OPTIONS</span>
            </button>
            <button className="glass-card py-4 px-8 rounded-xl font-bold tracking-widest hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-400 transition-all text-left flex justify-between items-center group text-white/50">
              <span>EXIT</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Background Decorative */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Hero;
