import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      name: 'Laboratorium Sains Terpadu',
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop',
      size: 'col-span-1 md:col-span-2 row-span-2'
    },
    {
      name: 'Perpustakaan Interaktif',
      image: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=600&auto=format&fit=crop',
      size: 'col-span-1 row-span-1'
    },
    {
      name: 'Ruang Multimedia & Komputer',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
      size: 'col-span-1 row-span-1'
    },
    {
      name: 'Masjid Raya Sekolah',
      image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=600&auto=format&fit=crop',
      size: 'col-span-1 md:col-span-2 row-span-1'
    },
    {
      name: 'Aula Serbaguna',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
      size: 'col-span-1 row-span-2'
    },
  ];

  return (
    <section id="fasilitas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4"
            >
              Fasilitas Modern
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg"
            >
              Dukungan fasilitas berstandar tinggi untuk melahirkan inovasi dan kreativitas pelajar tanpa batas.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors">
              <Play size={18} className="text-brand-accent fill-brand-accent" />
              Video Tour Sekolah
            </a>
          </motion.div>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[600px] mb-24">
          {facilities.map((fasilitas, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${fasilitas.size}`}
            >
              <img 
                src={fasilitas.image} 
                alt={fasilitas.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-white font-heading font-bold text-xl md:text-2xl">{fasilitas.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Banner */}
        <div id="prestasi">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-600 rounded-3xl p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative shadow-sm text-white"
          >
            <div className="relative z-10 max-w-xl flex flex-col">
              <h4 className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-4">Wall of Fame</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prestasi Membanggakan
              </h2>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Tahun ini siswa kami menjuarai Olimpiade Sains Nasional (OSN), kejuaraan Futsal Provinsi, dan beragam karya seni tingkat daerah.
              </p>
              <button className="px-6 py-2.5 bg-white text-blue-600 font-bold rounded-xl text-xs uppercase hover:bg-slate-50 transition-colors w-max">
                Lihat Semua Prestasi
              </button>
            </div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4 w-full md:w-auto">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md text-center">
                <div className="text-3xl font-extrabold text-white mb-1">24+</div>
                <div className="text-blue-200 text-xs font-bold uppercase tracking-wide">Medali OSN</div>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md text-center">
                <div className="text-3xl font-extrabold text-white mb-1">100%</div>
                <div className="text-blue-200 text-xs font-bold uppercase tracking-wide">Kelulusan</div>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md text-center">
                <div className="text-3xl font-extrabold text-white mb-1">85%</div>
                <div className="text-blue-200 text-xs font-bold uppercase tracking-wide">Masuk PTN</div>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md text-center">
                <div className="text-3xl font-extrabold text-white mb-1">50+</div>
                <div className="text-blue-200 text-xs font-bold uppercase tracking-wide">Piala Olahraga</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
