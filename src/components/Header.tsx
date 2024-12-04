import React, { useState } from 'react';
import { Bell, User, ChevronLeft } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import UserProfile from './UserProfile';
import NotificationsPanel from './NotificationsPanel';
import { notifications as initialNotifications } from '../data/notificationsData';
import { Notification } from '../types/notifications';

const Header = () => {
  const location = useLocation();
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/expenses':
        return 'Despesas';
      case '/ads':
        return 'Gerenciador de Anúncios';
      case '/integrations':
        return 'Integrações';
      default:
        return 'Home';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAsRead = (id: string) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-[#2a2435] rounded-lg transition-colors">
            <ChevronLeft className="text-gray-400" size={20} />
          </button>
          <h1 className="text-white text-lg font-medium">{getPageTitle()}</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 hover:bg-[#2a2435] rounded-lg transition-colors relative"
            >
              <Bell className="text-gray-400" size={20} />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>
            {showNotifications && (
              <NotificationsPanel
                notifications={notifications}
                onClose={() => setShowNotifications(false)}
                onMarkAsRead={handleMarkAsRead}
                onClearAll={handleClearAll}
              />
            )}
          </div>
          <button
            onClick={() => setShowUserProfile(true)}
            className="p-2 hover:bg-[#2a2435] rounded-lg transition-colors"
          >
            <User className="text-gray-400" size={20} />
          </button>
        </div>
      </header>

      {showUserProfile && <UserProfile onClose={() => setShowUserProfile(false)} />}
    </>
  );
};

export default Header;