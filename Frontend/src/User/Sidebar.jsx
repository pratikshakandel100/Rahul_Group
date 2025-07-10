import {useState} from 'react';
import { 
  Home, 
  Users, 
  Briefcase, 
  FileText,
  User,
  CreditCard,
  Bell,
  PlusCircle,
  X
} from 'lucide-react';

import {useNavigate} from "react-router-dom"

const Sidebar = () => 
  {

      const [activeTab, setActiveTab] = useState("dashboard");
      const [sidebarOpen, setSidebarOpen] = useState(false);
      const [isMobile, setIsMobile] = useState(false);

       const closeSidebar = () => {
    setSidebarOpen(false);
  };

    const router = useNavigate()
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'hire-developer', name: 'Hire Developer', icon: Users },
    { id: 'post-job', name: 'Post Job', icon: PlusCircle },
    { id: 'my-requests', name: 'My Requests', icon: Briefcase },
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'payments', name: 'Payments', icon: CreditCard },
    { id: 'notifications', name: 'Notifications', icon: Bell },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    router(`/user/${tabId}`)
    if (isMobile) {
      closeSidebar();
    }
  };

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col bg-white">
      {/* Sidebar Header */}
      <div className="p-4 flex items-center justify-between flex-shrink-0">
        <div>
          <h2 className="text-lg font-bold text-gray-800">Navigation</h2>
          <p className="text-xs text-gray-600">Choose a section</p>
        </div>
        {isMobile && (
          <button
            onClick={closeSidebar}
            className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <div className="py-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full flex items-center px-4 py-3 text-left hover:bg-orange-50 transition-colors duration-200 ${
                  activeTab === item.id 
                    ? 'bg-orange-100 border-r-4 border-[#d97757] text-[#d97757]' 
                    : 'text-gray-700 hover:text-[#d97757]'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 flex-shrink-0">
        <div className="text-xs text-gray-500 text-center">
          © 2024 DevHire Platform
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
