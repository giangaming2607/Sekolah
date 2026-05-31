import React from 'react';
import { useSite } from '../context/SiteContext';

export default function AdminRegistrations() {
  const { content } = useSite();
  const { registrations } = content;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Data Pendaftar PPDB</h2>
        <p className="text-slate-500 text-sm">Kelola dan lihat data calon peserta didik baru yang telah mendaftar.</p>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Nama Peserta</th>
                <th className="py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Tgl Lahir</th>
                <th className="py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Nama Orang Tua</th>
                <th className="py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">No. Telp</th>
                <th className="py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Berkas</th>
                <th className="py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Tgl Daftar</th>
              </tr>
            </thead>
            <tbody>
              {registrations.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500 text-sm">
                    Belum ada data pendaftar.
                  </td>
                </tr>
              ) : (
                registrations.map((reg) => (
                  <tr key={reg.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-4">
                      <p className="font-bold text-slate-800 text-sm">{reg.name}</p>
                      <p className="text-xs text-slate-500 truncate max-w-xs">{reg.address}</p>
                    </td>
                    <td className="py-4 px-4 text-sm text-slate-600">{reg.birthDate}</td>
                    <td className="py-4 px-4 text-sm text-slate-600">{reg.parentName}</td>
                    <td className="py-4 px-4 text-sm text-slate-600">{reg.parentPhone}</td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex gap-2 justify-center">
                        {reg.reportCardFile && <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded" title="Raport">R</span>}
                        {reg.familyCardFile && <span className="px-2 py-1 bg-purple-50 text-purple-600 text-[10px] font-bold rounded" title="Kartu Keluarga">KK</span>}
                        {reg.birthCertificateFile && <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded" title="Akte Kelahiran">AK</span>}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right text-sm text-slate-600">
                      {new Date(reg.submittedAt).toLocaleDateString('id-ID')}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
