import React, { useState } from 'react';
import { 
  BellIcon, 
  CheckIcon, 
  XMarkIcon,
  UserIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const Notifications = () => {
  const [filter, setFilter] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'application',
      title: 'New Developer Application',
      message: 'Alice Johnson applied for your React Developer position',
      time: '2 hours ago',
      read: false,
      icon: UserIcon,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      type: 'payment',
      title: 'Payment Processed',
      message: 'Payment of $2,250 to Bob Wilson has been processed successfully',
      time: '4 hours ago',
      read: false,
      icon: CurrencyDollarIcon,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 3,
      type: 'project',
      title: 'Project Completed',
      message: 'Carol Davis marked "E-commerce Website" as completed',
      time: '1 day ago',
      read: true,
      icon: BriefcaseIcon,
      color: 'bg-[#d97757] bg-opacity-20 text-[#d97757]'
    },
    {
      id: 4,
      type: 'alert',
      title: 'Payment Failed',
      message: 'Payment to David Brown failed. Please update your payment method',
      time: '2 days ago',
      read: false,
      icon: ExclamationTriangleIcon,
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 5,
      type: 'application',
      title: 'Application Withdrawn',
      message: 'Emma Wilson withdrew her application for Mobile App Developer',
      time: '3 days ago',
      read: true,
      icon: UserIcon,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 6,
      type: 'project',
      title: 'New Message',
      message: 'Frank Miller sent you a message about the Dashboard project',
      time: '3 days ago',
      read: true,
      icon: BriefcaseIcon,
      color: 'bg-[#d97757] bg-opacity-20 text-[#d97757]'
    }
  ]);

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : filter === 'unread' 
    ? notifications.filter(n => !n.read)
    : notifications.filter(n => n.type === filter);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
          <p className="text-gray-600 mt-2">
            {unreadCount > 0 ? `You have ${unreadCount} unread notifications` : 'All caught up!'}
          </p>
        </div>
        
        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="mt-4 sm:mt-0 flex items-center px-4 py-2 bg-[#d97757] text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            <CheckIcon className="w-4 h-4 mr-2" />
            Mark All as Read
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'all', name: 'All', count: notifications.length },
              { id: 'unread', name: 'Unread', count: unreadCount },
              { id: 'application', name: 'Applications', count: notifications.filter(n => n.type === 'application').length },
              { id: 'payment', name: 'Payments', count: notifications.filter(n => n.type === 'payment').length },
              { id: 'project', name: 'Projects', count: notifications.filter(n => n.type === 'project').length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                  filter === tab.id
                    ? 'border-[#d97757] text-[#d97757]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.name}
                {tab.count > 0 && (
                  <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                    filter === tab.id
                      ? 'bg-[#d97757] text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-lg shadow">
        {filteredNotifications.length === 0 ? (
          <div className="p-12 text-center">
            <BellIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No notifications found</p>
            <p className="text-gray-400 text-sm mt-2">
              {filter === 'unread' ? 'All notifications have been read' : 'Check back later for updates'}
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredNotifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`p-6 hover:bg-gray-50 transition-colors ${
                    !notification.read ? 'bg-blue-50 border-l-4 border-[#d97757]' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg ${notification.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className={`text-sm font-medium ${
                            !notification.read ? 'text-gray-900' : 'text-gray-700'
                          }`}>
                            {notification.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            {notification.time}
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-4">
                          {!notification.read && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="text-gray-400 hover:text-[#d97757] transition-colors"
                              title="Mark as read"
                            >
                              <CheckIcon className="w-4 h-4" />
                            </button>
                          )}
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                            title="Delete notification"
                          >
                            <XMarkIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
