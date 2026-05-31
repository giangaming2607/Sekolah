import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSite } from '../context/SiteContext';

export default function AdminLogin() {
  const [error, setError] = useState('');
  const { login } = useSite();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login();
      navigate('/admin/dashboard');
    } catch (e: any) {
      setError(e.message || 'Gagal masuk. Silakan coba lagi.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white mb-4">
             <span className="font-bold text-xl">S2D</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Admin Login</h1>
          <p className="text-sm text-slate-500 mt-2">Masuk ke panel admin menggunakan akun Google Anda</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 text-center">
            {error}
          </div>
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition duration-200 mt-4 flex items-center justify-center gap-2"
        >
          Masuk dengan Google
        </button>
        
        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-blue-600 font-semibold hover:underline">Kembali ke Halaman Depan</a>
        </div>
      </div>
    </div>
  );
}
