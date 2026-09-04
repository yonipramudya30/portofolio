import React from 'react';
import { Instagram, Youtube, Twitter, Linkedin, Film } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-gradient-cinematic relative pt-20 pb-10 px-6 md:px-16 lg:px-24 overflow-hidden border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        {/* Left: Contact Card */}
        <div>
          <div className="glass-card p-8 rounded-3xl max-w-md relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/30 blur-3xl rounded-full"></div>
            <h3 className="text-sm font-bold tracking-widest text-blue-400 mb-8">CONTACT ME</h3>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-xl font-bold">@yp.creative</h4>
                <p className="text-sm text-white/50 mt-1">Available for freelance</p>
              </div>
            </div>

            <div className="space-y-4">
              <a href="#" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                <Instagram className="text-white/50 group-hover:text-pink-500" />
                <span className="font-medium text-white/70 group-hover:text-white">Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                <svg className="w-6 h-6 text-white/50 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/></svg>
                <span className="font-medium text-white/70 group-hover:text-white">TikTok</span>
              </a>
              <a href="#" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                <Youtube className="text-white/50 group-hover:text-red-500" />
                <span className="font-medium text-white/70 group-hover:text-white">YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Typography & Footer Elements */}
        <div className="flex flex-col justify-between">
          <div className="mt-10 lg:mt-0">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none opacity-10">
              THANK<br/>YOU<br/>2025
            </h2>
          </div>
          
          <div className="mt-12">
            <div className="flex items-center gap-4 text-white/30 mb-6">
              <Film className="w-5 h-5" />
              <div className="h-[1px] flex-1 bg-white/10"></div>
              <span className="text-xs font-bold tracking-widest">PAST REELS</span>
              <div className="h-[1px] flex-1 bg-white/10"></div>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
              {[1,2,3,4].map(i => (
                <div key={i} className="min-w-[120px] h-[80px] rounded-lg overflow-hidden glass-card opacity-50 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0">
                  <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?q=80&w=200`} alt="Thumbnail" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-white/30 pt-8 border-t border-white/5">
        &copy; 2025 YP Creative Portfolio. All rights reserved. Designed with precision.
      </div>
    </section>
  );
};

export default Contact;
