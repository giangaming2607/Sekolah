import { motion } from 'motion/react';
import { Calendar, ArrowUpRight, MessageSquareQuote } from 'lucide-react';

export default function News() {
  const newsItem = [
    {
      title: 'Penerimaan Peserta Didik Baru (PPDB) Tahun 2026 Segera Dibuka',
      date: '12 Mei 2026',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
      category: 'Akademik'
    },
    {
      title: 'Tim Basket Putra Meraih Juara 1 Tingkat Provinsi',
      date: '08 Mei 2026',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop',
      category: 'Olahraga'
    },
    {
      title: 'Pameran Karya Seni Tahunan "Semarak Budaya" Berlangsung Meriah',
      date: '02 Mei 2026',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop',
      category: 'Seni & Budaya'
    }
  ];

  const testimonials = [
    {
      quote: "Pengalaman belajar di SMAN 2 Depok sangat luar biasa. Guru-gurunya sangat suportif dan fasilitas laboratoriumnya lengkap, sehingga membantu saya lolos SNBP di Universitas Indonesia kedokteran.",
      name: "Sabrina Putri",
      role: "Alumni Angkatan 2025",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "Ekstrakurikuler OSIS banyak mengajarkan saya arti kepemimpinan. Sekolah tidak hanya fokus ke nilai rapor, tapi benar-benar membentuk karakter diri yang percaya diri.",
      name: "Bima Arya",
      role: "Ketua OSIS 2025/2026",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="berita" className="py-24 bg-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* News Lineup */}
        <div className="flex justify-between items-center mb-8 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Berita & Pengumuman</h4>
            <h2 className="text-2xl font-bold text-slate-800">
              Kabar Terkini
            </h2>
          </div>
          <a href="#" className="text-xs text-blue-600 font-bold hover:text-blue-800 transition-colors">
            Semua Berita →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {newsItem.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex flex-col gap-3 group cursor-pointer hover:shadow-md transition-all"
            >
              <div className="h-40 bg-slate-100 rounded-2xl overflow-hidden mb-2 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded border border-white/50 text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                  {item.category}
                </div>
              </div>
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{item.date}</p>
              <h5 className="text-sm font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
                {item.title}
              </h5>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Kata Mereka</h2>
            <p className="text-slate-600">Pengalaman nyata dari siswa dan alumni kami selama menempuh pendidikan di SMAN 2 Depok.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testi, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative"
              >
                <div className="text-slate-300 absolute top-8 right-8">
                  <MessageSquareQuote size={40} />
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10 italic">
                  "{testi.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={testi.avatar} alt={testi.name} className="w-14 h-14 rounded-full object-cover border-2 border-brand-light" />
                  <div>
                    <h4 className="font-heading font-bold text-slate-900">{testi.name}</h4>
                    <p className="text-slate-500 text-sm">{testi.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
