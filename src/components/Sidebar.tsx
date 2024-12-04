import React from 'react';
import { Home, Clock, Package, Settings, LogOut, Link2 } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-[#1a1625] flex flex-col items-center py-4 space-y-8">
      <div className="text-white font-bold text-xl">
        FLUX
      </div>
      
      <nav className="flex flex-col space-y-6">
        <Link to="/" className={`p-3 ${location.pathname === '/' ? 'text-white bg-[#2a2435]' : 'text-gray-500'} hover:bg-[#2a2435] rounded-lg transition-colors`}>
          <Home size={20} />
        </Link>
        <Link to="/expenses" className={`p-3 ${location.pathname === '/expenses' ? 'text-white bg-[#2a2435]' : 'text-gray-500'} hover:bg-[#2a2435] rounded-lg transition-colors`}>
          <Clock size={20} />
        </Link>
        <Link to="/ads" className={`p-3 ${location.pathname === '/ads' ? 'text-white bg-[#2a2435]' : 'text-gray-500'} hover:bg-[#2a2435] rounded-lg transition-colors`}>
          <Package size={20} />
        </Link>
        <Link to="/integrations" className={`p-3 ${location.pathname === '/integrations' ? 'text-white bg-[#2a2435]' : 'text-gray-500'} hover:bg-[#2a2435] rounded-lg transition-colors`}>
          <Link2 size={20} />
        </Link>
        <button className="p-3 text-gray-500 hover:bg-[#2a2435] rounded-lg transition-colors">
          <Settings size={20} />
        </button>
      </nav>

      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="p-3 text-gray-500 hover:bg-[#2a2435] rounded-lg transition-colors"
          title="Sair"
        >
          <LogOut size={20} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;