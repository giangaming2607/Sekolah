import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Trash2 } from 'lucide-react';

export default function AdminInformation() {
  const { content, addInformationItem, deleteInformationItem } = useSite();
  const { informationItems } = content;
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    await addInformationItem({
      title: newTitle,
      content: newContent,
      date: new Date().toISOString().split('T')[0],
    });

    setNewTitle('');
    setNewContent('');
  };

  const handleDelete = async (id: string) => {
    await deleteInformationItem(id);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Informasi Web</h2>
        <p className="text-slate-500 text-sm">Kelola informasi atau pengumuman yang muncul di popup web utama.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Add Form */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-max">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-6 border-b border-slate-100 pb-3">Tambah Informasi Baru</h3>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Judul Informasi</label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Ex. Jadwal Libur Semester"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-2">Isi Konten</label>
              <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none whitespace-pre-wrap"
                placeholder="Masukkan informasi detail di sini..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition duration-200"
            >
              Tambah Informasi
            </button>
          </form>
        </div>

        {/* List */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-2 px-1">Daftar Informasi</h3>
          {informationItems.length === 0 ? (
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">Belum ada informasi yang diposting.</p>
            </div>
          ) : (
            informationItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative group">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors p-2"
                  title="Hapus"
                >
                  <Trash2 size={16} />
                </button>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{item.date}</p>
                <h4 className="font-bold text-slate-800 mb-2 pr-8">{item.title}</h4>
                <p className="text-sm text-slate-600 whitespace-pre-wrap">{item.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
