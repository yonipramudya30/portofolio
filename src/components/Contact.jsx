import React, { useState } from 'react';
import { Mail, MessageCircle, Send, Film, ArrowUp, Github, Instagram, Play, Phone, MapPin, Globe, Copy, Check } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Contact = ({ onShowToast, onSelectReel, onScrollTo }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const pastReels = [
    { id: 1, title: 'Wandlings.co — Marketplace Showcase', img: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=400' },
    { id: 2, title: 'Sistem SPP Online Demo', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400' },
    { id: 3, title: 'MOORA SPK — Skripsi Demo', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400' },
    { id: 4, title: 'Portfolio GitHub Pages', img: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=400' },
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      if (onShowToast) onShowToast('⚠️ Harap isi semua formulir terlebih dahulu!');
      return;
    }
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      if (onShowToast) onShowToast('✅ Pesan berhasil dikirim! Yoni akan merespons secepatnya.');
    }, 800);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('yonipramudya9@gmail.com').then(() => {
      setEmailCopied(true);
      if (onShowToast) onShowToast('📋 Email yonipramudya9@gmail.com berhasil disalin!');
      setTimeout(() => setEmailCopied(false), 2500);
    });
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText('0896-0326-3148');
    if (onShowToast) onShowToast('📋 Nomor 0896-0326-3148 berhasil disalin!');
  };

  return (
    <section id="contact" className="bg-gradient-cinematic relative pt-24 pb-12 px-6 md:px-16 lg:px-24 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left: Contact Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden border border-white/15 shadow-2xl">
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-blue-600/30 blur-3xl rounded-full"></div>
              
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                  HUBUNGI SAYA
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-bold">
                  OPEN TO WORK
                </span>
              </div>
              
              {/* Profile */}
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/20 shadow-md bg-slate-800 flex-shrink-0">
                  <img 
                    src={profileImg} 
                    alt="Yoni Pramudya" 
                    className="w-full h-full object-cover" 
                    style={{ objectPosition: 'center 38%' }}
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Yoni Pramudya</h4>
                  <p className="text-xs text-blue-400 font-mono mt-0.5">Fresh Graduate Teknik Informatika</p>
                  <p className="text-xs text-white/50 mt-0.5">Universitas Pamulang · 2026</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-2.5">

                {/* Phone */}
                <button 
                  onClick={copyPhoneToClipboard}
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase font-mono">Telepon / WhatsApp</p>
                      <p className="text-xs font-semibold text-white/90">0896-0326-3148</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">Salin</span>
                </button>

                {/* Email */}
                <button 
                  onClick={copyEmailToClipboard}
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase font-mono">Email</p>
                      <p className="text-xs font-semibold text-white/90">yonipramudya9@gmail.com</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-blue-400 flex items-center gap-1">
                    {emailCopied ? <><Check className="w-3 h-3" /> Disalin!</> : 'Salin'}
                  </span>
                </button>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/6289603263148?text=Halo%20Yoni,%20saya%20tertarik%20mengajak%20kolaborasi!" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-emerald-600/20 border border-white/10 hover:border-emerald-500/40 transition-colors group text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors flex-shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase font-mono">WhatsApp Direct</p>
                      <p className="text-xs font-semibold text-white/90">Chat Langsung di WhatsApp</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">Chat →</span>
                </a>

                {/* Domisili */}
                <div className="flex items-center gap-3 px-3.5 py-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase font-mono">Domisili</p>
                    <p className="text-xs font-semibold text-white/90">Ciputat, Tangerang Selatan</p>
                  </div>
                </div>

                {/* Portfolio GitHub */}
                <a 
                  href="https://yonipramudya.github.io" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/10 text-white/70 flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-colors flex-shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase font-mono">Portfolio</p>
                      <p className="text-xs font-semibold text-white/90">yonipramudya.github.io</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-white/50 group-hover:text-blue-400">Buka →</span>
                </a>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[10px] font-mono text-white/40 uppercase mb-3">MEDIA SOSIAL</p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/yonipramudya"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 p-3 rounded-xl glass-card flex flex-col items-center justify-center gap-1 text-white/60 hover:text-white hover:border-blue-500/50 hover:bg-white/10 transition-all"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-[10px] font-mono">GitHub</span>
                  </a>
                  <a
                    href="https://instagram.com/yonipramudya"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 p-3 rounded-xl glass-card flex flex-col items-center justify-center gap-1 text-white/60 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all"
                    title="@yonipramudya"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-[10px] font-mono">@yonipramudya</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Contact Form & Showcase */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Contact Message Form */}
            <div className="glass-card p-8 rounded-3xl border border-white/15 shadow-2xl mb-10">
              <h3 className="text-xl font-bold text-white mb-1">Kirim Pesan Langsung</h3>
              <p className="text-xs text-white/60 mb-6">
                Punya tawaran pekerjaan, project kolaborasi, atau pertanyaan? Yuk ceritakan di sini!
              </p>
              
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-white/60 mb-1.5 uppercase">Nama Anda</label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Budi Santoso"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none text-sm text-white placeholder-white/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-white/60 mb-1.5 uppercase">Email Anda</label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="nama@perusahaan.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none text-sm text-white placeholder-white/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-white/60 mb-1.5 uppercase">Pesan / Kebutuhan Proyek</label>
                  <textarea 
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Halo Yoni, saya butuh bantuan untuk membangun website/sistem..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none text-sm text-white placeholder-white/30 resize-none transition-colors"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-white/40">
                    Atau WA langsung: <a href="https://wa.me/6289603263148" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline font-semibold">0896-0326-3148</a>
                  </p>
                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="px-7 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{formSubmitting ? 'Mengirim...' : 'Kirim Pesan'}</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Project Showcase / Past Reels */}
            <div>
              <div className="flex items-center gap-4 text-white/40 mb-4">
                <Film className="w-4 h-4 text-blue-400" />
                <div className="h-[1px] flex-1 bg-white/10"></div>
                <span className="text-xs font-mono font-bold tracking-widest uppercase">PREVIEW PROYEK PILIHAN</span>
                <div className="h-[1px] flex-1 bg-white/10"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {pastReels.map(reel => (
                  <div 
                    key={reel.id}
                    onClick={() => onSelectReel && onSelectReel(reel)}
                    className="group relative h-24 rounded-2xl overflow-hidden glass-card cursor-pointer border border-white/10 hover:border-blue-500/50 transition-all"
                  >
                    <img src={reel.img} alt={reel.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-[10px] font-bold text-white leading-tight line-clamp-2">{reel.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40 font-mono">
          <div>
            &copy; 2026 Yoni Pramudya · Teknik Informatika, Universitas Pamulang. All rights reserved.
          </div>
          <button
            onClick={() => onScrollTo && onScrollTo('home')}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <span>KEMBALI KE ATAS</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Contact;
