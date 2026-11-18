import React, { useState } from 'react';
import { Lock, ShieldCheck, X, AlertCircle } from 'lucide-react';

interface AdminLoginProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Secure default password as requested: GIS_Nilai_Admin2026!
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'GIS_Nilai_Admin2026!';

    if (password === adminPassword) {
      sessionStorage.setItem('gis_admin_auth', 'true');
      setError(false);
      setPassword('');
      onLoginSuccess();
      onClose();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-[#102C46] hover:bg-gray-200 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-[#102C46] text-[#D5A64B] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Lock className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#102C46]">GIS Staff Portal</h3>
            <p className="text-xs text-gray-600">Enter secure staff password to access the Admissions CRM Dashboard.</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3.5 rounded-xl text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>Incorrect password. Please verify staff credentials.</span>
            </div>
          )}

          <div className="space-y-1">
            <label className="block text-xs font-semibold text-[#263442]">Staff Password</label>
            <input
              type="password"
              required
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#102C46]"
            />
            <p className="text-[11px] text-gray-400 pt-1">Default Demo Password: <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700">GIS_Nilai_Admin2026!</code></p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#102C46] hover:bg-[#1a3d5e] text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-[#D5A64B]" />
            <span>Access CRM Dashboard</span>
          </button>
        </form>
      </div>
    </div>
  );
};
