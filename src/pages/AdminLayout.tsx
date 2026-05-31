import { useState } from 'react';
import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { Menu, X, Settings, Home, LogOut, LayoutDashboard } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export default function AdminLayout() {
  const { isAuthenticated, logout, content } = useSite();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const menuItems = [
    { path: '/admin/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/admin/settings', icon: <Settings size={20} />, label: 'Pengaturan Konten' },
    { path: '/admin/ppdb', icon: <Menu size={20} />, label: 'Pengaturan PPDB' },
    { path: '/admin/registrations', icon: <Menu size={20} />, label: 'Data Pendaftar' },
    { path: '/admin/information', icon: <Menu size={20} />, label: 'Informasi Web' },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex font-sans">
      {/* Sidebar Overlay (Mobile) */}
      {!isSidebarOpen && (
        <div 
           className="fixed inset-0 bg-slate-900/50 z-20 md:hidden"
           onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          fixed md:relative z-30 w-64 h-screen bg-slate-900 text-white transition-transform duration-300 flex flex-col`}
      >
        <div className="h-16 flex items-center px-6 border-b border-slate-800 shrink-0">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-3">S2D</div>
          <span className="font-bold tracking-wider uppercase text-sm">Admin Panel</span>
          <button className="ml-auto md:hidden" onClick={toggleSidebar}>
            <X size={20} className="text-slate-400" />
          </button>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                location.pathname === item.path 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={() => { logout(); }}
            className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <LogOut size={20} />
            Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleSidebar}
              className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-lg font-bold text-slate-800 hidden sm:block">
              {content.schoolName}
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/" target="_blank" className="text-sm font-bold text-blue-600 hover:text-blue-800 hidden sm:flex items-center gap-2">
              <Home size={16} />
              Lihat Website
            </Link>
            <div className="w-10 h-10 bg-slate-200 rounded-full border-2 border-white shadow-sm flex items-center justify-center font-bold text-slate-600">
              A
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
