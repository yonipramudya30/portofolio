import React, { useState } from 'react';
import {
  User, Phone, Mail, MapPin, Globe, Instagram, Github,
  GraduationCap, Briefcase, Code, Wrench, Heart,
  Languages, Download, ExternalLink, ChevronRight,
  Terminal, Database, Layers, Zap, GitBranch, Star,
  CheckCircle2, Calendar, Building2, Award, Printer
} from 'lucide-react';

const Resume = ({ onShowToast }) => {
  const [activeTab, setActiveTab] = useState('semua');

  const handlePrint = () => {
    window.print();
    if (onShowToast) onShowToast('🖨️ Membuka dialog cetak / simpan sebagai PDF...');
  };

  const skills = {
    web: [
      { name: 'HTML', level: 90 }, { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 80 }, { name: 'PHP', level: 85 },
      { name: 'Python', level: 80 }, { name: 'Django', level: 75 },
      { name: 'Tailwind CSS', level: 90 }, { name: 'Java (Dasar)', level: 50 },
    ],
    db: ['MySQL', 'SQL'],
    tools: ['VS Code', 'Word', 'Excel', 'PowerPoint'],
    other: ['Perancangan alur sistem', 'Deployment web', 'ChatGPT & Gemini'],
    soft: ['Disiplin & bertanggung jawab', 'Manajemen waktu', 'Komunikasi yang baik', 'Kerja sama tim', 'Cepat belajar & adaptif'],
  };

  const projects = [
    {
      title: 'Wandlings.co — Website Marketplace',
      type: 'Proyek Freelance / KKP',
      url: 'https://wandlings.pythonanywhere.com',
      tech: ['Django', 'Tailwind CSS', 'HTML', 'CSS', 'Python'],
      points: [
        'Membangun website marketplace untuk brand Wandlings dari tahap awal dengan Django sebagai framework utama.',
        'Mengembangkan tampilan responsif dengan Tailwind CSS dan menghubungkan frontend dengan backend untuk menampilkan serta mengelola produk.',
      ],
    },
    {
      title: 'Sistem Pembayaran SPP Online',
      type: 'Kuliah Kerja Praktek (KKP) · 2024',
      url: null,
      note: 'MA Plus Peradaban Insani',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
      points: [
        'Merancang dan merintis sistem pembayaran SPP online dengan metode Waterfall, dari analisis kebutuhan sampai pengujian dan deployment.',
        'Menangani frontend serta fitur data siswa, kelas, petugas, SPP, transaksi, dan laporan pembayaran.',
      ],
    },
    {
      title: 'Implementasi Metode MOORA untuk Sistem Pendukung Keputusan dalam Menentukan Siswa Berisiko Putus Sekolah di MA Peradaban Insani',
      type: 'Skripsi · S1 Teknik Informatika',
      url: null,
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Metode MOORA'],
      points: [
        'Menggunakan metode MOORA untuk menilai dan merangking siswa yang berisiko putus sekolah sebagai dasar keputusan pihak sekolah.',
        'Merancang alur sistem, database, fitur penilaian, proses perhitungan, dan hasil rekomendasi dalam aplikasi web.',
      ],
    },
  ];

  const experience = [
    {
      role: 'Frontliner',
      company: 'Secondstore, Second Brand Ciputat',
      period: '2022 · 7 bulan',
      color: 'blue',
      points: [
        'Melayani pelanggan secara langsung dan mendukung operasional harian toko.',
        'Berkoordinasi dengan tim, membuat dan menjadwalkan konten sosial media, serta membantu menyusun dokumen fungsional dan teknis.',
      ],
    },
    {
      role: 'Asisten Mekanik',
      company: 'CV Rama Teknik Tangsel',
      period: '2020 – 2021',
      color: 'purple',
      points: [
        'Membantu teknisi senior dalam perawatan dan perbaikan mesin.',
        'Memeriksa alat dan komponen secara rutin dengan teliti, serta bekerja sama dengan tim teknisi.',
      ],
    },
  ];

  const education = [
    {
      degree: 'S1 Teknik Informatika',
      school: 'Universitas Pamulang',
      period: '2022 – 2026',
      color: 'blue',
    },
    {
      degree: 'Teknik Mesin',
      school: 'SMKN 1 Tangerang Selatan',
      period: '2019 – 2022',
      color: 'purple',
    },
  ];

  const getLevelColor = (lvl) => {
    if (lvl >= 85) return 'bg-blue-500';
    if (lvl >= 70) return 'bg-indigo-500';
    return 'bg-slate-500';
  };

  return (
    <section id="resume" className="min-h-screen bg-[#020408] py-28 px-4 sm:px-6 md:px-16 lg:px-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 font-bold tracking-widest mb-2">
              <User className="w-4 h-4" />
              <span>CURRICULUM VITAE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              RESUME <span className="text-blue-500">LENGKAP</span>
            </h2>
            <p className="text-white/60 text-sm mt-2">Data sesuai CV terbaru · Fresh Graduate 2026</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              <Printer className="w-4 h-4 text-blue-400" />
              <span>Cetak / PDF</span>
            </button>
            <button
              onClick={() => onShowToast && onShowToast('📄 Mengunduh file CV Yoni Pramudya...')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-500/25"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>
        </div>

        {/* ===== CV CARD ===== */}
        <div className="glass-card rounded-3xl border border-white/15 overflow-hidden shadow-2xl print:shadow-none print:border print:border-gray-200">

          {/* TOP HEADER STRIP */}
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/30 border-b border-white/10 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-blue-500/50 shadow-xl flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
                  alt="Yoni Pramudya"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Title */}
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Yoni Pramudya</h1>
                <p className="text-blue-400 font-bold text-sm mt-1 tracking-wider uppercase">
                  Fresh Graduate Teknik Informatika · Web Development
                </p>
                <p className="text-white/70 text-sm mt-2 max-w-2xl leading-relaxed">
                  Lulusan Teknik Informatika Universitas Pamulang dengan minat pada pengembangan website dan sistem informasi.
                  Berpengalaman membangun proyek web dari perancangan alur sistem, tampilan frontend, pengelolaan database, hingga deployment —
                  termasuk marketplace dan sistem pendukung keputusan. Disiplin, cepat belajar, dan terbiasa bekerja mandiri maupun dalam tim.
                </p>
              </div>
            </div>

            {/* Contact Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-6">
              {[
                { icon: Phone, text: '0896-0326-3148', href: 'tel:0896-0326-3148' },
                { icon: Mail, text: 'yonipramudya9@gmail.com', href: 'mailto:yonipramudya9@gmail.com' },
                { icon: MapPin, text: 'Ciputat, Tangerang Selatan', href: null },
                { icon: Instagram, text: '@yonipramudya', href: 'https://instagram.com/yonipramudya' },
                { icon: Globe, text: 'yonipramudya.github.io', href: 'https://yonipramudya.github.io' },
              ].map((item, i) => {
                const IconComp = item.icon;
                const content = (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-white/10 transition-all group">
                    <IconComp className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span className="text-[11px] text-white/80 truncate font-mono">{item.text}</span>
                  </div>
                );
                return item.href ? (
                  <a key={i} href={item.href} target="_blank" rel="noreferrer">{content}</a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </div>
          </div>

          {/* BODY — Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

            {/* LEFT SIDEBAR */}
            <div className="lg:col-span-4 border-r border-white/10 p-6 sm:p-8 space-y-8 bg-white/2">

              {/* KEAHLIAN — Web & Framework */}
              <div>
                <h3 className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-400 uppercase mb-4">
                  <Code className="w-3.5 h-3.5" />
                  WEB & FRAMEWORK
                </h3>
                <div className="space-y-3">
                  {skills.web.map((s, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-white/90 font-medium">{s.name}</span>
                        <span className="text-white/40 font-mono">{s.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full ${getLevelColor(s.level)} transition-all`}
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DATABASE & TOOLS */}
              <div>
                <h3 className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-purple-400 uppercase mb-3">
                  <Database className="w-3.5 h-3.5" />
                  DATABASE & TOOLS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[...skills.db, ...skills.tools].map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-white/70 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* LAINNYA */}
              <div>
                <h3 className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase mb-3">
                  <Wrench className="w-3.5 h-3.5" />
                  LAINNYA
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.other.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-white/70 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* SOFT SKILLS */}
              <div>
                <h3 className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-yellow-400 uppercase mb-3">
                  <Heart className="w-3.5 h-3.5" />
                  SOFT SKILLS
                </h3>
                <ul className="space-y-2">
                  {skills.soft.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-white/70">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* BAHASA */}
              <div>
                <h3 className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-3">
                  <Languages className="w-3.5 h-3.5" />
                  BAHASA
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/90 font-medium">Indonesia</span>
                    <span className="text-[11px] text-emerald-400 font-mono font-bold">Aktif</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/90 font-medium">Inggris</span>
                    <span className="text-[11px] text-yellow-400 font-mono font-bold">TOEFL 410 (2025)</span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT MAIN CONTENT */}
            <div className="lg:col-span-8 p-6 sm:p-8 space-y-10">

              {/* PROYEK */}
              <div>
                <h3 className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-400 uppercase mb-5">
                  <Terminal className="w-3.5 h-3.5" />
                  PROYEK
                </h3>
                <div className="space-y-6">
                  {projects.map((proj, i) => (
                    <div key={i} className="relative pl-4 border-l-2 border-blue-500/40 hover:border-blue-400 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-white leading-snug">{proj.title}</h4>
                          <p className="text-[11px] font-mono text-blue-400 mt-0.5">{proj.type}</p>
                          {proj.note && <p className="text-[11px] text-white/50 italic">{proj.note}</p>}
                        </div>
                        {proj.url && (
                          <a
                            href={proj.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1 text-[11px] font-mono text-blue-400 hover:text-blue-300 hover:underline flex-shrink-0 mt-1"
                          >
                            <ExternalLink className="w-3 h-3" />
                            {proj.url.replace('https://', '')}
                          </a>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {proj.tech.map((t, j) => (
                          <span key={j} className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 border border-blue-500/20 text-blue-300">
                            {t}
                          </span>
                        ))}
                      </div>

                      <ul className="space-y-1">
                        {proj.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-white/65 leading-relaxed">
                            <ChevronRight className="w-3.5 h-3.5 text-blue-400/60 flex-shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* PENGALAMAN KERJA */}
              <div>
                <h3 className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-purple-400 uppercase mb-5">
                  <Briefcase className="w-3.5 h-3.5" />
                  PENGALAMAN KERJA
                </h3>
                <div className="space-y-5">
                  {experience.map((exp, i) => (
                    <div key={i} className="relative pl-4 border-l-2 border-purple-500/40">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 mb-1">
                        <div>
                          <h4 className="text-sm font-bold text-white">{exp.role}</h4>
                          <p className="text-xs text-white/60">{exp.company}</p>
                        </div>
                        <span className="flex items-center gap-1 text-[11px] font-mono text-purple-400">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-1 mt-2">
                        {exp.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-white/65 leading-relaxed">
                            <ChevronRight className="w-3.5 h-3.5 text-purple-400/60 flex-shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* PENDIDIKAN */}
              <div>
                <h3 className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase mb-5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  PENDIDIKAN
                </h3>
                <div className="space-y-4">
                  {education.map((edu, i) => (
                    <div key={i} className="relative pl-4 border-l-2 border-emerald-500/40 flex items-center justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                        <p className="text-xs text-white/60">{edu.school}</p>
                      </div>
                      <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 flex-shrink-0">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* FOOTER STRIP */}
          <div className="border-t border-white/10 px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40 font-mono bg-white/2">
            <span>Yoni Pramudya · yonipramudya9@gmail.com · 0896-0326-3148</span>
            <span>yonipramudya.github.io · Ciputat, Tangerang Selatan · 2026</span>
          </div>

        </div>

        {/* Print Info */}
        <p className="text-center text-xs text-white/30 mt-6 font-mono">
          Tekan <kbd className="px-2 py-0.5 rounded border border-white/20 text-white/40 text-[11px]">Cetak / PDF</kbd> untuk menyimpan CV ini sebagai file PDF
        </p>

      </div>

      {/* Print Styles injected via style tag */}
      <style>{`
        @media print {
          body { background: white !important; color: black !important; }
          header, footer, .fixed, button, [data-no-print] { display: none !important; }
          #resume { padding: 0 !important; border: none !important; }
          .glass-card { background: white !important; border: 1px solid #e5e7eb !important; box-shadow: none !important; }
          .text-white, .text-white\\/90, .text-white\\/80, .text-white\\/70 { color: #111 !important; }
          .text-white\\/60, .text-white\\/50, .text-white\\/40 { color: #666 !important; }
          .text-blue-400, .text-blue-500 { color: #2563eb !important; }
          .text-purple-400 { color: #7c3aed !important; }
          .text-emerald-400 { color: #059669 !important; }
          .text-yellow-400 { color: #d97706 !important; }
          .border-white\\/10 { border-color: #e5e7eb !important; }
          .bg-white\\/5, .bg-white\\/2, .bg-gradient-cinematic { background: #f9fafb !important; }
          .bg-blue-500\\/10 { background: #dbeafe !important; }
          .border-blue-500\\/20 { border-color: #bfdbfe !important; }
          .border-blue-500\\/40 { border-color: #93c5fd !important; }
          .border-purple-500\\/40 { border-color: #d8b4fe !important; }
          .border-emerald-500\\/40 { border-color: #6ee7b7 !important; }
        }
      `}</style>
    </section>
  );
};

export default Resume;
