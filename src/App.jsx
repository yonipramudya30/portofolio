import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import cvImage from './assets/cv-yoni.png';
import { Gamepad2, Volume2, VolumeX, Settings, X, Sparkles, ExternalLink, Github, RefreshCw, FileText } from 'lucide-react';

function App() {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isExitOpen, setIsExitOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedReel, setSelectedReel] = useState(null);
  const [toastMsg, setToastMsg] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(true);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3500);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#020408] text-white w-full overflow-hidden font-sans">
      {/* Floating Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#020408]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div onClick={() => scrollTo('home')} className="flex items-center gap-2 cursor-pointer group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-black text-white text-lg">
              YP
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter text-white group-hover:text-blue-400 transition-colors">
                YONI PRAMUDYA
              </span>
              <span className="text-[10px] font-mono tracking-widest text-white/50 -mt-1">
                IT & CREATIVE DEV
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('home')} className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white">Home</button>
            <button onClick={() => scrollTo('about')} className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white">Tentang</button>
            <button onClick={() => scrollTo('projects')} className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white">Proyek</button>
            <button onClick={() => scrollTo('resume')} className="text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>CV / Resume</button>
            <button onClick={() => scrollTo('contact')} className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white">Kontak</button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsGameOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 hover:bg-blue-600 hover:text-white text-xs font-mono font-bold transition-all"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>PLAY GAME</span>
            </button>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-xl glass-card text-white/70 hover:text-white"
            >
              {soundEnabled ? <Volume2 className="w-5 h-5 text-blue-400" /> : <VolumeX className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <Hero
        onOpenGame={() => setIsGameOpen(true)}
        onOpenOptions={() => setIsOptionsOpen(true)}
        onOpenExit={() => setIsExitOpen(true)}
        onScrollTo={scrollTo}
      />
      <About onShowToast={showToast} onOpenCV={() => setIsCVOpen(true)} />
      <Projects onSelectProject={(p) => setSelectedProject(p)} />
      <Resume onShowToast={showToast} onOpenCV={() => setIsCVOpen(true)} />
      <Contact
        onShowToast={showToast}
        onSelectReel={(r) => setSelectedReel(r)}
        onScrollTo={scrollTo}
      />

      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900/90 text-white border border-blue-500/40 shadow-2xl backdrop-blur-md">
          <Sparkles className="w-5 h-5 text-blue-400" />
          <span className="text-xs sm:text-sm font-medium">{toastMsg}</span>
          <button onClick={() => setToastMsg('')} className="ml-2 text-white/40 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl border border-white/20 shadow-2xl bg-slate-950">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider bg-blue-600/80 text-white mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">{selectedProject.title}</h3>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-2">DESKRIPSI PROYEK</h4>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">{selectedProject.description}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-3">FITUR KUNCI & TEKNOLOGI</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-white/10 border border-white/10 text-white/90">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-white/70 list-disc list-inside">
                  {selectedProject.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4">
                {selectedProject.liveUrl ? (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] py-3 bg-blue-600 hover:bg-blue-500 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 text-white shadow-lg shadow-blue-500/25"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Preview
                  </a>
                ) : (
                  <button
                    onClick={() => showToast('ℹ️ Proyek sistem internal (offline): ' + selectedProject.title)}
                    className="flex-1 min-w-[140px] py-3 bg-white/10 hover:bg-white/15 text-white/60 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo Offline
                  </button>
                )}
                <button
                  onClick={() => showToast('📂 Repository GitHub: ' + selectedProject.title)}
                  className="flex-1 min-w-[140px] py-3 glass-card hover:bg-white/10 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 text-white/80"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mini-Game Modal */}
      {isGameOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-xl glass-card rounded-2xl border border-blue-500/40 p-8 text-center bg-slate-950">
            <h3 className="text-2xl font-black font-mono text-blue-400 mb-2">CYBER BUG SLAYER // ARCADE</h3>
            <p className="text-white/70 text-sm mb-6">Mode arcade retro aktif! Anda dapat memainkan game lengkap di file run_me.html langsung.</p>
            <div className="flex justify-center gap-4">
              <button onClick={() => setIsGameOpen(false)} className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-xs uppercase">
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Options Modal */}
      {isOptionsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md glass-card rounded-2xl border border-white/20 p-6 bg-slate-950">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">PENGATURAN</h3>
              <button onClick={() => setIsOptionsOpen(false)}><X className="w-5 h-5 text-white/60" /></button>
            </div>
            <p className="text-xs text-white/60 mb-6">Pengaturan audio dan tema visual aktif.</p>
            <button onClick={() => setIsOptionsOpen(false)} className="w-full py-2.5 bg-blue-600 font-bold rounded-xl text-xs uppercase">
              Simpan & Tutup
            </button>
          </div>
        </div>
      )}

      {/* Exit Modal */}
      {isExitOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md glass-card rounded-2xl border border-red-500/30 p-6 text-center bg-slate-950">
            <h3 className="text-2xl font-bold mb-2">Ingin Keluar?</h3>
            <p className="text-white/60 text-sm mb-6">Yoni siap diajak berkolaborasi untuk proyek impian Anda! 🚀</p>
            <button onClick={() => { setIsExitOpen(false); scrollTo('contact'); }} className="w-full py-3 bg-blue-600 font-bold rounded-xl text-sm mb-3">
              Hubungi Yoni Sekarang
            </button>
            <button onClick={() => setIsExitOpen(false)} className="text-xs text-white/40">Tutup</button>
          </div>
        </div>
      )}

      {/* CV Image Modal */}
      {isCVOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-md"
          onClick={() => setIsCVOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsCVOpen(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={cvImage}
              alt="CV Yoni Pramudya"
              className="w-full rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="flex gap-3 mt-4 justify-center pb-2">
              <a
                href={cvImage}
                download="CV-Yoni-Pramudya.png"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-sm text-white flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/25"
              >
                <FileText className="w-4 h-4" />
                Unduh CV
              </a>
              <button
                onClick={() => setIsCVOpen(false)}
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm text-white/70 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
