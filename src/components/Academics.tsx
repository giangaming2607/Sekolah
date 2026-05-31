import { motion } from 'motion/react';
import { Microscope, Globe2, BookOpen, ChevronRight, Music, Users, Tent, Activity } from 'lucide-react';

export default function Academics() {
  const programs = [
    {
      id: 'ipa',
      title: 'MIPA',
      subtitle: 'Sains & Matematika',
      desc: 'Fokus pada penalaran logis, observasi empiris, dan riset sains.',
      icon: 'A',
      color: 'bg-blue-50',
      iconBg: 'bg-blue-600'
    },
    {
      id: 'ips',
      title: 'IPS',
      subtitle: 'Sosial & Ekonomi',
      desc: 'Mempelajari dinamika kemasyarakatan, kesejarahan, serta sosial.',
      icon: 'B',
      color: 'bg-indigo-50',
      iconBg: 'bg-indigo-600'
    },
    {
      id: 'bahasa',
      title: 'Bahasa',
      subtitle: 'Sastra & Budaya',
      desc: 'Pendalaman linguistik dan kebudayaan domestik maupun asing.',
      icon: 'C',
      color: 'bg-purple-50',
      iconBg: 'bg-purple-600'
    }
  ];

  const ekstrakurikuler = [
    { name: 'Pramuka', icon: <Tent className="w-6 h-6" /> },
    { name: 'OSIS & MPK', icon: <Users className="w-6 h-6" /> },
    { name: 'PMR', icon: <Activity className="w-6 h-6" /> },
    { name: 'Paskibra', icon: <ChevronRight className="w-6 h-6" /> },
    { name: 'Klub Seni', icon: <Music className="w-6 h-6" /> },
  ];

  return (
    <section id="akademik" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Academic Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
             className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4"
          >
             Pilih Jurusan
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Program Akademik
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-sm"
          >
            Kurikulum kami dirancang untuk membekali setiap pelajar dengan pengetahuan komprehensif agar siap bersaing di Perguruan Tinggi favorit.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {programs.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col`}
            >
              <div className={`p-4 ${program.color} rounded-2xl flex items-center gap-4 mb-4`}>
                <div className={`w-10 h-10 ${program.iconBg} rounded-xl flex items-center justify-center text-white font-bold text-lg`}>
                  {program.icon}
                </div>
                <div>
                  <p className="text-base font-bold text-slate-800">{program.title}</p>
                  <p className="text-xs text-slate-500 italic">{program.subtitle}</p>
                </div>
              </div>
              <p className="text-sm text-slate-500">
                {program.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Extracurricular Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12 overflow-hidden relative">
          {/* Deco circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 border-r border-slate-100 pr-0 lg:pr-8">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4"
              >
                Kegiatan Ekstrakurikuler
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-600 mb-6"
              >
                Kembangkan minat, bakat, kepemimpinan, serta pertemanan sejati melalui puluhan ekstrakurikuler yang aktif dan bersemangat.
              </motion.p>
              <motion.button 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-brand-accent font-semibold flex items-center gap-1 hover:gap-3 transition-all"
              >
                Lihat Semua Ekskul <ChevronRight size={18} />
              </motion.button>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {ekstrakurikuler.map((ekskul, idx) => (
                <motion.div
                  key={ekskul.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors group cursor-pointer"
                >
                  <div className="text-slate-400 group-hover:text-white/80 transition-colors">
                    {ekskul.icon}
                  </div>
                  <span className="font-heading font-semibold text-slate-800 group-hover:text-white">{ekskul.name}</span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-brand-light border border-blue-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-brand-blue hover:text-white transition-colors group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold group-hover:bg-white group-hover:text-brand-blue transition-colors">
                  +15
                </div>
                <span className="font-heading font-semibold text-brand-blue group-hover:text-white">Lainnya</span>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
