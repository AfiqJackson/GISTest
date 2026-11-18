import React, { useState } from 'react';
import { Lock, ShieldCheck, X, AlertCircle, UserPlus, LogIn, CheckCircle2, Loader2 } from 'lucide-react';
import { authenticateStaff, registerStaffUser, StaffUser } from '../utils/auth';

interface AdminLoginProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: StaffUser) => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  // Login form state
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register form state
  const [regUsername, setRegUsername] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    setLoading(true);

    try {
      const res = await authenticateStaff(loginId, loginPassword);
      setLoading(false);
      if (res.success && res.user) {
        onLoginSuccess(res.user);
        onClose();
      } else {
        setError(res.message);
      }
    } catch (err: any) {
      setLoading(false);
      setError(err?.message || 'Login failed. Please check connection.');
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (regPassword !== regConfirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (regPassword.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);

    try {
      const res = await registerStaffUser({
        username: regUsername,
        email: regEmail,
        password: regPassword,
      });

      setLoading(false);
      if (res.success && res.user) {
        setSuccessMsg('Account registered successfully in Supabase! Logging you in...');
        setTimeout(() => {
          onLoginSuccess(res.user!);
          onClose();
        }, 1000);
      } else {
        setError(res.message);
      }
    } catch (err: any) {
      setLoading(false);
      setError(err?.message || 'Registration failed.');
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

        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-14 h-14 bg-[#102C46] text-[#D5A64B] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <Lock className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-extrabold text-[#102C46]">GIS Staff Portal</h3>
          <p className="text-xs text-gray-600">Supabase Global CRM Authentication.</p>
        </div>

        {/* Mode Tabs */}
        <div className="flex bg-[#F4F1EA] p-1 rounded-2xl mb-6">
          <button
            onClick={() => { setMode('login'); setError(''); setSuccessMsg(''); }}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              mode === 'login' ? 'bg-[#102C46] text-white shadow-xs' : 'text-gray-600 hover:text-[#102C46]'
            }`}
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Staff Login</span>
          </button>
          <button
            onClick={() => { setMode('register'); setError(''); setSuccessMsg(''); }}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              mode === 'register' ? 'bg-[#102C46] text-white shadow-xs' : 'text-gray-600 hover:text-[#102C46]'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Register Staff</span>
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3.5 rounded-xl text-xs flex items-center gap-2 mb-4">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3.5 rounded-xl text-xs flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Login Form */}
        {mode === 'login' ? (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-[#263442]">Username or Email</label>
              <input
                type="text"
                required
                placeholder="e.g. admin or staff@gisnilai.edu.my"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#102C46]"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-[#263442]">Password</label>
              <input
                type="password"
                required
                placeholder="Enter password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#102C46]"
              />
              <p className="text-[11px] text-gray-400 pt-1">Master Account: <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700">admin</code> / <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700">GIS_Nilai_Admin2026!</code></p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#102C46] hover:bg-[#1a3d5e] text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin text-[#D5A64B]" />
              ) : (
                <ShieldCheck className="w-4 h-4 text-[#D5A64B]" />
              )}
              <span>{loading ? 'Authenticating...' : 'Login to CRM Dashboard'}</span>
            </button>
          </form>
        ) : (
          /* Register Form */
          <form onSubmit={handleRegisterSubmit} className="space-y-3">
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-[#263442]">Username</label>
              <input
                type="text"
                required
                placeholder="e.g. m_afiq"
                value={regUsername}
                onChange={(e) => setRegUsername(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#102C46]"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-[#263442]">Email Address</label>
              <input
                type="email"
                required
                placeholder="staff@gisnilai.edu.my"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#102C46]"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-[#263442]">Password (Min. 6 chars)</label>
              <input
                type="password"
                required
                placeholder="Create password"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#102C46]"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-[#263442]">Confirm Password</label>
              <input
                type="password"
                required
                placeholder="Confirm password"
                value={regConfirmPassword}
                onChange={(e) => setRegConfirmPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#102C46]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#102C46] hover:bg-[#1a3d5e] text-white py-3 rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin text-[#D5A64B]" />
              ) : (
                <UserPlus className="w-4 h-4 text-[#D5A64B]" />
              )}
              <span>{loading ? 'Registering Staff...' : 'Register & Login'}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
