import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminLayout from './pages/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';
import AdminSettings from './pages/AdminSettings';
import AdminPPDB from './pages/AdminPPDB';
import AdminRegistrations from './pages/AdminRegistrations';
import AdminInformation from './pages/AdminInformation';
import RegistrationForm from './pages/RegistrationForm';

export default function App() {
  return (
    <SiteProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daftar" element={<RegistrationForm />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="ppdb" element={<AdminPPDB />} />
            <Route path="registrations" element={<AdminRegistrations />} />
            <Route path="information" element={<AdminInformation />} />
          </Route>
        </Routes>
      </Router>
    </SiteProvider>
  );
}
