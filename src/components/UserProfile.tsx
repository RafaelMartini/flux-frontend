import React, { useState } from 'react';
import { User, Mail, Phone, Camera, Key } from 'lucide-react';

interface UserProfileProps {
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onClose }) => {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '(11) 99999-9999',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1a1625] rounded-xl p-6 w-full max-w-md">
        <h2 className="text-white text-xl font-semibold mb-6">Perfil do Usuário</h2>
        
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <img
              src={profileData.photo}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors">
              <Camera size={16} className="text-white" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-gray-400 text-sm flex items-center gap-2">
              <User size={16} />
              Nome
            </label>
            <input
              type="text"
              value={profileData.name}
              onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
              className="w-full bg-[#2a2435] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 text-sm flex items-center gap-2">
              <Mail size={16} />
              Email
            </label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
              className="w-full bg-[#2a2435] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 text-sm flex items-center gap-2">
              <Phone size={16} />
              Celular
            </label>
            <input
              type="tel"
              value={profileData.phone}
              onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
              className="w-full bg-[#2a2435] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-[#2a2435] text-purple-400 px-4 py-2 rounded-lg hover:bg-[#332d40] transition-colors">
            <Key size={16} />
            Solicitar Troca de Senha
          </button>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Cancelar
          </button>
          <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;