import React, { useState, useRef, useEffect } from 'react';
import { 
  Bell, 
  User, 
  Menu,
  Search,
  Settings,
  LogOut,
  ChevronDown
} from 'lucide-react';

const Header = ({ toggleSidebar, activeTab, sidebarOpen, isMobile }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const profileMenuRef = useRef(null);
  const notificationRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getPageTitle = (tab) => {
    const titles = {
      'dashboard': 'Dashboard',
      'hire-developer': 'Hire Developer',
      'post-job': 'Post Job',
      'my-requests': 'My Requests',
      'profile': 'Profile',
      'payments': 'Payments',
      'notifications': 'Notifications'
    };
    return titles[tab] || 'Dashboard';
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
    }
  };

  const notifications = [
    { id: 1, message: 'New developer application received', time: '2 min ago', unread: true },
    { id: 2, message: 'Payment processed successfully', time: '1 hour ago', unread: true },
    { id: 3, message: 'Project milestone completed', time: '3 hours ago', unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3 lg:px-6 h-16 flex-shrink-0 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between h-full max-w-full">
        {/* Left Section */}
        <div className="flex items-center flex-1 min-w-0">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className={`
              lg:hidden p-2 rounded-md transition-colors duration-200 mr-3 flex-shrink-0
              ${sidebarOpen 
                ? 'text-[#d97757] bg-orange-50' 
                : 'text-gray-600 hover:text-[#d97757] hover:bg-gray-100'
              }
            `}
            aria-label="Toggle sidebar"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          {/* Logo and Title */}
          <div className="flex items-center space-x-4 flex-1 min-w-0">
            <div className="flex items-center space-x-3 min-w-0">
              <div className="w-8 h-8 bg-[#d97757] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">DH</span>
              </div>
              <div className="min-w-0">
                <h1 className="text-xl font-semibold text-gray-800 truncate">
                  {getPageTitle(activeTab)}
                </h1>
                <p className="text-sm text-gray-600 hidden sm:block truncate">
                  DevHire Galaxy
                </p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md ml-8">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search developers, projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d97757] focus:border-transparent text-sm transition-colors duration-200"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-gray-600 hover:text-[#d97757] hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <Bell className="w-6 h-6" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id}
                      className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                        notification.unread ? 'bg-blue-50 border-l-2 border-[#d97757]' : ''
                      }`}
                    >
                      <p className="text-sm text-gray-900">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile Menu */}
          <div className="relative" ref={profileMenuRef}>
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="w-8 h-8 bg-[#d97757] rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="hidden md:block text-left">
                <span className="text-gray-700 font-medium text-sm">John Doe</span>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                showProfileMenu ? 'rotate-180' : ''
              }`} />
            </button>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  <User className="w-4 h-4 mr-3" />
                  Profile Settings
                </button>
                
                <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  <Settings className="w-4 h-4 mr-3" />
                  Account Settings
                </button>
                
                <hr className="my-2" />
                
                <button className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                  <LogOut className="w-4 h-4 mr-3" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
