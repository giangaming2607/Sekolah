import { motion } from 'motion/react';
import { ArrowRight, Trophy } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { content } = useSite();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-slate-400">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop"
          alt="Gedung SMAN 2 Depok"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-blue-900/60 to-transparent z-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/80 backdrop-blur-md text-white text-[10px] rounded-full font-bold uppercase tracking-wider mb-3"
          >
            <Trophy size={14} className="text-white" />
            <span>{content.heroSubtitle}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 whitespace-pre-wrap"
          >
            {content.heroTitle}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 mt-6"
          >
            <Link
              to="/daftar"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-blue-900 font-bold rounded-xl text-sm transition-transform hover:scale-105 active:scale-95"
            >
              Jelajahi Kampus
            </Link>
            <a
              href="#prestasi"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-white/30 text-white font-bold rounded-xl text-sm backdrop-blur-sm transition-transform hover:scale-105 active:scale-95"
            >
              Lihat Prestasi
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70"
      >
        <span className="text-xs uppercase tracking-widest font-medium mb-2">Jelajahi</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-white/70 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
