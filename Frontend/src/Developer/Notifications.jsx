import React, { useState } from 'react';
import { Bell, Check, X, Trash2, Filter, Mail, DollarSign, User, FileText } from 'lucide-react';

const DeveloperNotifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'job_request',
      title: 'New Job Request',
      message: 'You have received a new job request for "React Native App Development"',
      timestamp: '2024-01-15T10:30:00Z',
      read: false,
      icon: FileText,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      type: 'payment',
      title: 'Payment Received',
      message: 'Payment of $2,500 has been received for "E-commerce Website" project',
      timestamp: '2024-01-15T09:15:00Z',
      read: false,
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      id: 3,
      type: 'message',
      title: 'New Message',
      message: 'TechCorp Inc. sent you a message regarding the project timeline',
      timestamp: '2024-01-14T16:45:00Z',
      read: true,
      icon: Mail,
      color: 'bg-purple-500'
    },
    {
      id: 4,
      type: 'review',
      title: 'New Review',
      message: 'Sarah Johnson left a 5-star review for your work on the mobile app project',
      timestamp: '2024-01-14T14:20:00Z',
      read: true,
      icon: User,
      color: 'bg-yellow-500'
    },
    {
      id: 5,
      type: 'job_request',
      title: 'Job Request Update',
      message: 'Your proposal for "WordPress Plugin Development" has been accepted',
      timestamp: '2024-01-13T11:00:00Z',
      read: false,
      icon: FileText,
      color: 'bg-blue-500'
    },
    {
      id: 6,
      type: 'payment',
      title: 'Withdrawal Processed',
      message: 'Your withdrawal request of $1,000 has been processed successfully',
      timestamp: '2024-01-12T08:30:00Z',
      read: true,
      icon: DollarSign,
      color: 'bg-green-500'
    }
  ]);

  const [filter, setFilter] = useState('all');

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev =>
      prev.filter(notification => notification.id !== id)
    );
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notification.read;
    return notification.type === filter;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInMinutes = Math.floor((now - time) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)} hours ago`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)} days ago`;
    }
  };

  const NotificationCard = ({ notification }) => {
    const Icon = notification.icon;
    
    return (
      <div className={`bg-white rounded-lg shadow-md p-4 border-l-4 ${
        notification.read ? 'border-gray-300' : 'border-[#d97757]'
      } hover:shadow-lg transition-shadow`}>
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <div className={`${notification.color} p-2 rounded-full flex-shrink-0`}>
              <Icon size={16} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className={`font-semibold truncate ${
                  notification.read ? 'text-gray-700' : 'text-gray-900'
                }`}>
                  {notification.title}
                </h4>
                {!notification.read && (
                  <div className="w-2 h-2 bg-[#d97757] rounded-full flex-shrink-0"></div>
                )}
              </div>
              <p className={`text-sm ${
                notification.read ? 'text-gray-600' : 'text-gray-800'
              } mb-2`}>
                {notification.message}
              </p>
              <p className="text-xs text-gray-500">
                {getTimeAgo(notification.timestamp)}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 flex-shrink-0">
            {!notification.read && (
              <button
                onClick={() => markAsRead(notification.id)}
                className="p-1 text-gray-400 hover:text-green-600 transition-colors"
                title="Mark as read"
              >
                <Check size={16} />
              </button>
            )}
            <button
              onClick={() => deleteNotification(notification.id)}
              className="p-1 text-gray-400 hover:text-red-600 transition-colors"
              title="Delete notification"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Notifications</h2>
          <p className="text-gray-600">
            Stay updated with your latest activities
            {unreadCount > 0 && (
              <span className="ml-2 px-2 py-1 bg-[#d97757] text-white text-xs rounded-full">
                {unreadCount} unread
              </span>
            )}
          </p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="px-4 py-2 bg-[#d97757] text-white rounded-lg hover:bg-[#c56647] transition-colors"
          >
            Mark All as Read
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-600" />
            <span className="text-gray-700">Filter:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'all', label: 'All', count: notifications.length },
              { key: 'unread', label: 'Unread', count: unreadCount },
              { key: 'job_request', label: 'Job Requests', count: notifications.filter(n => n.type === 'job_request').length },
              { key: 'payment', label: 'Payments', count: notifications.filter(n => n.type === 'payment').length },
              { key: 'message', label: 'Messages', count: notifications.filter(n => n.type === 'message').length },
              { key: 'review', label: 'Reviews', count: notifications.filter(n => n.type === 'review').length }
            ].map(filterOption => (
              <button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === filterOption.key
                    ? 'bg-[#d97757] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filterOption.label} ({filterOption.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </div>

      {filteredNotifications.length === 0 && (
        <div className="text-center py-12">
          <Bell size={48} className="text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg mb-2">No notifications found</p>
          <p className="text-gray-400">
            {filter === 'all' 
              ? "You're all caught up!" 
              : `No ${filter.replace('_', ' ')} notifications at the moment.`
            }
          </p>
        </div>
      )}

      {/* Notification Settings */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Notification Settings</h3>
        <div className="space-y-4">
          {[
            { label: 'Job Requests', description: 'Get notified when you receive new job requests' },
            { label: 'Payment Updates', description: 'Receive notifications about payments and withdrawals' },
            { label: 'Messages', description: 'Get notified when clients send you messages' },
            { label: 'Reviews', description: 'Receive notifications when clients leave reviews' }
          ].map((setting, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">{setting.label}</p>
                <p className="text-sm text-gray-600">{setting.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#d97757] peer-focus:ring-opacity-25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#d97757]"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperNotifications;
