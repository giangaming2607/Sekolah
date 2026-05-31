import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import { ArrowLeft, Upload } from 'lucide-react';

export default function RegistrationForm() {
  const { content, addRegistration } = useSite();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    birthDate: '',
    parentName: '',
    parentPhone: '',
  });

  // Simulated file uploads using random text/urls just to show state
  const [reportCard, setReportCard] = useState('');
  const [familyCard, setFamilyCard] = useState('');
  const [birthCert, setBirthCert] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newReg = {
      ...formData,
      reportCardFile: reportCard || 'uploaded-file.pdf',
      familyCardFile: familyCard || 'uploaded-file.pdf',
      birthCertificateFile: birthCert || 'uploaded-file.pdf',
      submittedAt: new Date().toISOString(),
    };

    await addRegistration(newReg);

    setIsSuccess(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-sm border border-slate-100 text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Pendaftaran Berhasil!</h2>
          <p className="text-sm text-slate-600 mb-6">Data Anda telah kami terima. Admin akan segera memverifikasi berkas Anda.</p>
          <p className="text-xs text-slate-400">Mengalihkan ke beranda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors mb-6"
        >
          <ArrowLeft size={16} /> Kembali ke Beranda
        </button>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold text-slate-800 mb-3">{content.ppdbTitle}</h1>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              {content.ppdbDescription}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-5">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Informasi Siswa</h3>
              
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Sesuai Akte Kelahiran"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Alamat Lengkap</label>
                <textarea
                  required
                  rows={3}
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Tanggal Lahir</label>
                <input
                  type="date"
                  required
                  value={formData.birthDate}
                  onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="space-y-5 mt-10">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Informasi Orang Tua / Wali</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Nama Orang Tua</label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Nomor Telepon / WA</label>
                  <input
                    type="tel"
                    required
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({...formData, parentPhone: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-5 mt-10">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Upload Berkas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                
                <div className="border border-dashed border-slate-300 rounded-2xl p-4 flex flex-col items-center justify-center text-center bg-slate-50 relative group hover:border-blue-500 transition-colors">
                  <input type="file" required onChange={(e) => setReportCard(e.target.value)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <Upload size={24} className="text-slate-400 group-hover:text-blue-500 mb-2" />
                  <p className="text-xs font-bold text-slate-700">Raport SD (Kelas 4,5,6)</p>
                  <p className="text-[10px] text-slate-500 mt-1">PDF atau Gambar</p>
                  {reportCard && <p className="text-[10px] font-bold text-emerald-600 mt-2 truncate w-full">Terunggah</p>}
                </div>

                <div className="border border-dashed border-slate-300 rounded-2xl p-4 flex flex-col items-center justify-center text-center bg-slate-50 relative group hover:border-blue-500 transition-colors">
                  <input type="file" required onChange={(e) => setFamilyCard(e.target.value)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <Upload size={24} className="text-slate-400 group-hover:text-blue-500 mb-2" />
                  <p className="text-xs font-bold text-slate-700">Kartu Keluarga</p>
                  <p className="text-[10px] text-slate-500 mt-1">PDF atau Gambar</p>
                  {familyCard && <p className="text-[10px] font-bold text-emerald-600 mt-2 truncate w-full">Terunggah</p>}
                </div>

                <div className="border border-dashed border-slate-300 rounded-2xl p-4 flex flex-col items-center justify-center text-center bg-slate-50 relative group hover:border-blue-500 transition-colors">
                  <input type="file" required onChange={(e) => setBirthCert(e.target.value)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <Upload size={24} className="text-slate-400 group-hover:text-blue-500 mb-2" />
                  <p className="text-xs font-bold text-slate-700">Akte Kelahiran</p>
                  <p className="text-[10px] text-slate-500 mt-1">PDF atau Gambar</p>
                  {birthCert && <p className="text-[10px] font-bold text-emerald-600 mt-2 truncate w-full">Terunggah</p>}
                </div>

              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-100 flex justify-end">
              <button
                type="submit"
                className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-xl text-sm uppercase tracking-wider hover:bg-blue-700 hover:shadow-lg transition-all"
              >
                Kirim Pendaftaran
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
