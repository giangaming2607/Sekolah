import { motion } from 'motion/react';
import { Target, Lightbulb, GraduationCap, Quote } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export default function About() {
  const { content } = useSite();

  return (
    <section id="tentang" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Info & Vision Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{content.aboutTitle}</h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg whitespace-pre-wrap">
              {content.aboutDescription}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col items-start text-left">
                <div className="w-12 h-12 bg-blue-100 border-4 border-white shadow-md rounded-full flex flex-col items-center justify-center text-blue-600 mb-4">
                  <Target size={20} />
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-1">Visi Kami</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">Menjadi institusi pendidikan terbaik yang mencetak lulusan berprestasi global, religius, dan berwawasan lingkungan.</p>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col items-start text-left">
                <div className="w-12 h-12 bg-blue-100 border-4 border-white shadow-md rounded-full flex flex-col items-center justify-center text-blue-600 mb-4">
                  <Lightbulb size={20} />
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-1">Misi Kami</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">Menyelenggarakan pembelajaran aktif, inovatif, kreatif, efektif, dan menanamkan nilai-nilai karakter bangsa secara konsisten.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop" 
                alt="Siswa Belajar" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full">
                    <GraduationCap size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-heading font-bold">1000+</h4>
                    <p className="text-white/80 font-medium">Lulusan Terbaik Tiap Tahun</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -top-6 -right-6 w-full h-full border-2 border-brand-light rounded-3xl"></div>
          </motion.div>
        </div>

        {/* Principal Welcome */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <div className="w-24 h-24 rounded-full bg-blue-100 border-4 border-white shadow-md overflow-hidden mb-4">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop" 
              alt="Kepala Sekolah" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Drs. Wawan Ridwan</h3>
          <p className="text-xs text-blue-600 font-semibold mb-6 italic">Kepala Sekolah SMAN 2 Depok</p>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
            "Membangun generasi emas yang cerdas secara intelektual dan luhur budi pekerti melalui pendidikan berkualitas berbasis kearifan lokal. Selamat datang di portal resmi kami."
          </p>
          <div className="mt-8">
             <button className="text-blue-600 text-xs font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-800">HUBUNGI KAMI</button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
