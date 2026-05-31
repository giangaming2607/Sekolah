import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { content } = useSite();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Program Akademik', href: '#akademik' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Prestasi', href: '#prestasi' },
    { name: 'Berita', href: '#berita' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white border-b border-slate-200 h-16 flex items-center shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${isScrolled ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'}`}>
              <GraduationCap size={20} />
            </div>
            <div>
              <h1 className={`font-bold text-lg leading-tight uppercase ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                {content.schoolName}
              </h1>
              <p className={`text-[10px] tracking-widest font-semibold ${isScrolled ? 'text-slate-500' : 'text-white/70'}`}>
                JAWA BARAT, INDONESIA
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`font-medium text-sm transition-colors ${
                      isScrolled ? 'text-slate-600 hover:text-brand-blue' : 'text-slate-100 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              to="/daftar"
              className={`px-5 py-2 rounded-full text-xs font-bold transition-transform hover:scale-105 active:scale-95 ${
                isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600'
              }`}
            >
              DAFTAR SEKARANG
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-brand-blue' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100">
          <ul className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block font-medium text-slate-700 hover:text-brand-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#kontak"
                className="block w-full text-center mt-4 px-5 py-3 rounded-full bg-brand-blue text-white font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
