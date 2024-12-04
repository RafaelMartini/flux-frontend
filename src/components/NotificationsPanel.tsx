import React from 'react';
import { Notification } from '../types/notifications';
import { X, CheckCircle, AlertTriangle, Info, AlertCircle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface NotificationsPanelProps {
  notifications: Notification[];
  onClose: () => void;
  onMarkAsRead: (id: string) => void;
  onClearAll: () => void;
}

const NotificationsPanel: React.FC<NotificationsPanelProps> = ({
  notifications,
  onClose,
  onMarkAsRead,
  onClearAll
}) => {
  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'warning':
        return <AlertTriangle className="text-yellow-500" size={20} />;
      case 'error':
        return <AlertCircle className="text-red-500" size={20} />;
      default:
        return <Info className="text-blue-500" size={20} />;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="absolute top-14 right-0 w-96 bg-[#1a1625] rounded-xl shadow-lg z-50 max-h-[80vh] flex flex-col">
      <div className="p-4 border-b border-gray-800 flex justify-between items-center">
        <div>
          <h3 className="text-white font-medium">Notificações</h3>
          <p className="text-sm text-gray-400">{unreadCount} não lidas</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onClearAll}
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            Limpar todas
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="overflow-y-auto flex-1">
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-gray-400">
            Nenhuma notificação
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b border-gray-800 hover:bg-[#2a2435] transition-colors ${
                !notification.read ? 'bg-[#2a2435]/50' : ''
              }`}
              onClick={() => onMarkAsRead(notification.id)}
            >
              <div className="flex gap-3">
                {getIcon(notification.type)}
                <div className="flex-1">
                  <h4 className="text-white text-sm font-medium mb-1">
                    {notification.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">
                    {notification.message}
                  </p>
                  <span className="text-xs text-gray-500">
                    {formatDistanceToNow(notification.timestamp, {
                      addSuffix: true,
                      locale: ptBR
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationsPanel;