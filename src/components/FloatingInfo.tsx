import { useState } from 'react';
import { Info, X } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export default function FloatingInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const { content } = useSite();
  const { informationItems, ppdbTitle, ppdbDescription, ppdbBrochureUrl } = content;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 active:scale-95 transition-all"
        title="Pusat Informasi"
      >
        <Info size={24} />
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 z-50 transition-opacity backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer Content */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100 shrink-0">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Info className="text-blue-600" />
            Pusat Informasi
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
          
          {/* PPDB Highlight */}
          <div className="mb-8">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Informasi PPDB</h3>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
              {ppdbBrochureUrl && (
                <div className="h-48 w-full bg-slate-200">
                  <img src={ppdbBrochureUrl} alt="Brosur PPDB" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-5">
                <h4 className="font-bold text-slate-800 mb-2">{ppdbTitle}</h4>
                <p className="text-sm text-slate-600 mb-4">{ppdbDescription}</p>
                <a 
                  href="/daftar" 
                  className="block w-full py-2.5 bg-blue-600 text-white text-center rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-blue-700 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>
          </div>

          {/* General Information List */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Pengumuman Terbaru</h3>
            {informationItems.length === 0 ? (
               <p className="text-sm text-slate-500 text-center py-4 bg-white rounded-xl border border-slate-100">Tidak ada pengumuman.</p>
            ) : (
              <div className="space-y-4">
                {informationItems.map((item) => (
                  <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{new Date(item.date).toLocaleDateString('id-ID')}</p>
                    <h5 className="font-bold text-slate-800 mb-2">{item.title}</h5>
                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{item.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
