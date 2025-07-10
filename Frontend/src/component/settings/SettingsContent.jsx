import React, { useState } from 'react';
import { Save } from 'lucide-react';

const SettingsContent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: false
  });
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('english');

  const renderProfileSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
              defaultValue="Admin"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
              defaultValue="User"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
              defaultValue="admin@devhire.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
              defaultValue="+1 (555) 123-4567"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d97757] focus:border-transparent"
              defaultValue="DevHire platform administrator with 5+ years of experience in project management and team leadership."
            />
          </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-[#d97757] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <button className="bg-[#d97757] text-white px-4 py-2 rounded-lg hover:bg-[#c86a4a] transition-colors">
                Change Avatar
              </button>
              <p className="text-xs text-gray-500 mt-1">JPG, PNG or GIF (max 2MB)</p>
            </div>
          </div>
          <button className="mt-4 sm:mt-0 bg-[#d97757] text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#c86a4a] transition-colors">
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex-1">
      {renderProfileSettings()}
    </div>
  );
};

export default SettingsContent;
