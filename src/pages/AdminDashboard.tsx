import { useSite } from '../context/SiteContext';

export default function AdminDashboard() {
  const { content } = useSite();
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Selamat Datang di Dashboard Admin</h2>
        <p className="text-slate-500 text-sm">Kelola konten dan pengaturan website {content.schoolName}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col gap-2 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 text-blue-50 opacity-50 transform group-hover:scale-110 transition-transform">
             <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
          </div>
          <span className="text-3xl font-extrabold text-blue-600 relative z-10">4</span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest relative z-10">Total Halaman</span>
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col gap-2 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 text-purple-50 opacity-50 transform group-hover:scale-110 transition-transform">
             <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
          </div>
          <span className="text-3xl font-extrabold text-purple-600 relative z-10">1,245</span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest relative z-10">Total Pengunjung</span>
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col gap-2 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 text-emerald-50 opacity-50 transform group-hover:scale-110 transition-transform">
             <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
          </div>
          <span className="text-3xl font-extrabold text-emerald-600 relative z-10">12</span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest relative z-10">Pesan Baru</span>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Informasi Sistem</h3>
        <ul className="text-sm text-slate-600 space-y-3">
          <li className="flex justify-between border-b border-slate-50 pb-2">
            <span className="font-medium">Status Website</span>
            <span className="text-emerald-600 font-bold">Online</span>
          </li>
          <li className="flex justify-between border-b border-slate-50 pb-2">
            <span className="font-medium">Versi Aplikasi</span>
            <span className="text-slate-500">v1.2.0</span>
          </li>
          <li className="flex justify-between border-b border-slate-50 pb-2">
            <span className="font-medium">Terakhir Update</span>
            <span className="text-slate-500">Hari ini, 09:41 AM</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
