import React from 'react';
import { PenTool, Video, Image as ImageIcon, MonitorPlay } from 'lucide-react';

const About = () => {
  return (
    <section className="min-h-screen bg-[#020408] relative px-6 py-20 md:px-16 lg:px-24 flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: Image with blue glow */}
        <div className="relative order-2 lg:order-1 flex justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/30 rounded-full blur-[100px]"></div>
          <div className="relative z-10 w-full max-w-sm rounded-2xl overflow-hidden border border-white/10 glass-card">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" alt="Half Body" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>

        {/* Right: Content */}
        <div className="order-1 lg:order-2 space-y-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-glow">ABOUT ME</h2>
            <p className="text-white/60 leading-relaxed max-w-lg text-sm md:text-base">
              I'm a passionate content creator and software enthusiast dedicated to blending aesthetics with functionality. 
              My journey involves crafting cinematic visual experiences and translating them into modern digital products.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-widest text-blue-400 mb-4">SOFTWARE SKILLS</h3>
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-xl glass-card flex items-center justify-center hover:bg-blue-500/20 transition-colors cursor-pointer group">
                <ImageIcon className="text-white/50 group-hover:text-blue-400" />
              </div>
              <div className="w-14 h-14 rounded-xl glass-card flex items-center justify-center hover:bg-orange-500/20 transition-colors cursor-pointer group">
                <PenTool className="text-white/50 group-hover:text-orange-400" />
              </div>
              <div className="w-14 h-14 rounded-xl glass-card flex items-center justify-center hover:bg-purple-500/20 transition-colors cursor-pointer group">
                <Video className="text-white/50 group-hover:text-purple-400" />
              </div>
              <div className="w-14 h-14 rounded-xl glass-card flex items-center justify-center hover:bg-gray-100/20 transition-colors cursor-pointer group">
                <MonitorPlay className="text-white/50 group-hover:text-white" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-white/10">
            <div>
              <h3 className="text-xs font-bold tracking-widest text-white/40 mb-2">EDUCATION</h3>
              <p className="text-sm font-medium">B.Sc Digital Media</p>
              <p className="text-xs text-white/50 mt-1">University of Arts, 2024</p>
            </div>
            <div>
              <h3 className="text-xs font-bold tracking-widest text-white/40 mb-2">EXPERIENCE</h3>
              <p className="text-sm font-medium">Creative Director</p>
              <p className="text-xs text-white/50 mt-1">Studio YP, 2022-Present</p>
            </div>
            <div>
              <h3 className="text-xs font-bold tracking-widest text-white/40 mb-2">LANGUAGE</h3>
              <p className="text-sm font-medium">English, ID</p>
              <p className="text-xs text-white/50 mt-1">Native / Bilingual</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
