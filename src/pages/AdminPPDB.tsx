import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';

export default function AdminPPDB() {
  const { content, updateContent } = useSite();
  const [formData, setFormData] = useState({
    ppdbTitle: content.ppdbTitle,
    ppdbDescription: content.ppdbDescription,
    ppdbBrochureUrl: content.ppdbBrochureUrl,
  });
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIsSaved(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateContent(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Pengaturan PPDB</h2>
        <p className="text-slate-500 text-sm">Kelola informasi penerimaan peserta didik baru dan brosur.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-6 border-b border-slate-100 pb-3">Informasi PPDB</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Judul PPDB</label>
              <input
                type="text"
                name="ppdbTitle"
                value={formData.ppdbTitle}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Deskripsi PPDB</label>
              <textarea
                name="ppdbDescription"
                value={formData.ppdbDescription}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none whitespace-pre-wrap"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">URL Brosur / Gambar Ilustrasi</label>
              <input
                type="text"
                name="ppdbBrochureUrl"
                value={formData.ppdbBrochureUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <p className="text-[10px] text-slate-400 mt-1">Masukkan link gambar untuk ditampilkan sebagai brosur (misal imgur, unsplash, dsb).</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 bg-white p-4 rounded-3xl shadow-sm border border-slate-100 sticky bottom-4">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition duration-200"
          >
            Simpan Perubahan
          </button>
          
          {isSaved && (
             <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-100">
               ✓ Perubahan berhasil disimpan
             </span>
          )}
        </div>
      </form>
    </div>
  );
}
