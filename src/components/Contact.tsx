import { motion } from 'motion/react';
import { MapPin, Phone, Mail, GraduationCap } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export default function Contact() {
  const { content } = useSite();

  return (
    <section id="kontak" className="pt-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100"
          >
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-2">Hubungi Kami</h2>
            <p className="text-slate-600 mb-8">Punya pertanyaan seputar PPDB atau kerja sama? Kirimkan pesan melalui formulir di bawah ini.</p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors"
                  placeholder="email@contoh.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Pesan</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full py-4 rounded-xl bg-brand-blue hover:bg-blue-800 text-white font-bold transition-colors"
              >
                Kirim Pesan
              </button>
            </form>
          </motion.div>
          
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="mb-10 space-y-6">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">Informasi Kontak</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-light text-brand-blue flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Alamat Kampus</h4>
                  <p className="text-slate-600 leading-relaxed text-sm whitespace-pre-wrap">{content.contactAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-light text-brand-blue flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Telepon</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{content.contactPhone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-light text-brand-blue flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{content.contactEmail}</p>
                </div>
              </div>
            </div>

            {/* Simulated Map */}
            <div className="flex-grow rounded-3xl overflow-hidden bg-slate-200 min-h-[250px] relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-2">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" alt="Map" />
                <div className="relative z-10 flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl">
                    <MapPin className="text-brand-accent mb-2" size={32} />
                    <span className="font-semibold text-slate-800">{content.schoolName}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Bar */}
      <footer className="bg-brand-blue border-t border-blue-700 py-6 md:py-4 mt-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <p className="text-[10px] text-blue-100 font-medium whitespace-nowrap"><span className="text-blue-300 mr-2">📍</span>{content.contactAddress}</p>
            <p className="text-[10px] text-blue-100 font-medium whitespace-nowrap"><span className="text-blue-300 mr-2">📞</span>{content.contactPhone}</p>
            <p className="text-[10px] text-blue-100 font-medium whitespace-nowrap"><span className="text-blue-300 mr-2">✉️</span>{content.contactEmail}</p>
          </div>
          <p className="text-[10px] font-bold text-white whitespace-nowrap">{content.copyrightText || `© ${new Date().getFullYear()} ${content.schoolName}`}</p>
        </div>
      </footer>
    </section>
  );
}
