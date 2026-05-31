import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';

export default function AdminSettings() {
  const { content, updateContent } = useSite();
  const [formData, setFormData] = useState({
    schoolName: content.schoolName,
    heroTitle: content.heroTitle,
    heroSubtitle: content.heroSubtitle,
    aboutTitle: content.aboutTitle,
    aboutDescription: content.aboutDescription,
    contactAddress: content.contactAddress,
    contactPhone: content.contactPhone,
    contactEmail: content.contactEmail,
    copyrightText: content.copyrightText,
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
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Pengaturan Konten</h2>
        <p className="text-slate-500 text-sm">Ubah teks, logo, dan informasi website Anda di sini.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Section: Identitas Sekolah */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-6 border-b border-slate-100 pb-3">Identitas Sekolah</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Nama Sekolah / Title (Logo Text)</label>
              <input
                type="text"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <p className="text-[10px] text-slate-400 mt-1">Tampil di pojok kiri atas (navbar) dan footer.</p>
            </div>
          </div>
        </div>

        {/* Section: Konten Hero */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-6 border-b border-slate-100 pb-3">Hero Section (Beranda)</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Subtitle (Teks kecil di atas judul)</label>
              <input
                type="text"
                name="heroSubtitle"
                value={formData.heroSubtitle}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Judul Utama</label>
              <textarea
                name="heroTitle"
                value={formData.heroTitle}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none whitespace-pre-wrap"
              />
            </div>
          </div>
        </div>

        {/* Section: Tentang Kami */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-6 border-b border-slate-100 pb-3">Section Tentang Kami</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Judul Tentang Kami</label>
              <input
                type="text"
                name="aboutTitle"
                value={formData.aboutTitle}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Deskripsi Singkat</label>
              <textarea
                name="aboutDescription"
                value={formData.aboutDescription}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none whitespace-pre-wrap"
              />
            </div>
          </div>
        </div>

        {/* Section: Kontak */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-6 border-b border-slate-100 pb-3">Informasi Kontak</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Alamat Lengkap</label>
              <textarea
                name="contactAddress"
                value={formData.contactAddress}
                onChange={handleChange}
                rows={2}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2">Nomor Telepon</label>
                <input
                  type="text"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2">Email</label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Teks Copyright (Footer)</label>
              <input
                type="text"
                name="copyrightText"
                value={formData.copyrightText}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
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
