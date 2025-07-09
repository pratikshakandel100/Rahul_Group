import React, { useState } from 'react';
import { CameraIcon, PencilIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Tech Solutions Inc.',
    location: 'New York, USA',
    bio: 'Experienced project manager with a passion for connecting businesses with talented developers. I have successfully managed over 50 projects and helped companies scale their development teams.',
    website: 'https://johndoe.com',
    linkedin: 'https://linkedin.com/in/johndoe',
    timezone: 'America/New_York'
  });

  const [tempData, setTempData] = useState(profileData);

  const handleEdit = () => {
    setIsEditing(true);
    setTempData(profileData);
  };

  const handleSave = () => {
    setProfileData(tempData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData(profileData);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const stats = [
    { label: 'Projects Posted', value: '24' },
    { label: 'Developers Hired', value: '18' },
    { label: 'Success Rate', value: '95%' },
    { label: 'Member Since', value: '2022' }
  ];

  return (
    <div className="p-6 max-w-7 xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
        <p className="text-gray-600 mt-2">Manage your account information and preferences.</p>
      </div>

      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="relative">
              <div className="w-24 h-24 bg-[#d97757] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {profileData.name.split(' ').map(n => n[0]).join('')}
              </div>
              <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50">
                <CameraIcon className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{profileData.name}</h3>
                  <p className="text-gray-600">{profileData.company}</p>
                  <p className="text-sm text-gray-500">{profileData.location}</p>
                </div>
                
                <div className="mt-4 sm:mt-0">
                  {!isEditing ? (
                    <button
                      onClick={handleEdit}
                      className="flex items-center px-4 py-2 bg-[#d97757] text-white rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      <PencilIcon className="w-4 h-4 mr-2" />
                      Edit Profile
                    </button>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSave}
                        className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <CheckIcon className="w-4 h-4 mr-2" />
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <XMarkIcon className="w-4 h-4 mr-2" />
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-gray-200 px-6 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-[#d97757]">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Form */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Personal Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={isEditing ? tempData.name : profileData.name}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${
                  isEditing ? 'focus:ring-2 focus:ring-[#d97757] focus:border-transparent' : 'bg-gray-50'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={isEditing ? tempData.email : profileData.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${
                  isEditing ? 'focus:ring-2 focus:ring-[#d97757] focus:border-transparent' : 'bg-gray-50'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={isEditing ? tempData.phone : profileData.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${
                  isEditing ? 'focus:ring-2 focus:ring-[#d97757] focus:border-transparent' : 'bg-gray-50'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={isEditing ? tempData.company : profileData.company}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${
                  isEditing ? 'focus:ring-2 focus:ring-[#d97757] focus:border-transparent' : 'bg-gray-50'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={isEditing ? tempData.location : profileData.location}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${
                  isEditing ? 'focus:ring-2 focus:ring-[#d97757] focus:border-transparent' : 'bg-gray-50'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
              <select
                name="timezone"
                value={isEditing ? tempData.timezone : profileData.timezone}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${
                  isEditing ? 'focus:ring-2 focus:ring-[#d97757] focus:border-transparent' : 'bg-gray-50'
                }`}
              >
                <option value="America/New_York">Eastern Time (ET)</option>
                <option value="America/Chicago">Central Time (CT)</option>
                <option value="America/Denver">Mountain Time (MT)</option>
                <option value="America/Los_Angeles">Pacific Time (PT)</option>
                <option value="Europe/London">London (GMT)</option>
                <option value="Europe/Paris">Paris (CET)</option>
                <option value="Asia/Tokyo">Tokyo (JST)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
              <input
                type="url"
                name="website"
                value={isEditing ? tempData.website : profileData.website}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${
                  isEditing ? 'focus:ring-2 focus:ring-[#d97757] focus:border-transparent' : 'bg-gray-50'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
              <input
                type="url"
                name="linkedin"
                value={isEditing ? tempData.linkedin : profileData.linkedin}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${
                  isEditing ? 'focus:ring-2 focus:ring-[#d97757] focus:border-transparent' : 'bg-gray-50'
                }`}
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
            <textarea
              name="bio"
              rows={4}
              value={isEditing ? tempData.bio : profileData.bio}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${
                isEditing ? 'focus:ring-2 focus:ring-[#d97757] focus:border-transparent' : 'bg-gray-50'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-lg shadow mt-6">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Security Settings</h3>
          
          <div className="space-y-4">
            <button className="w-full sm:w-auto px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Change Password
            </button>
            <button className="w-full sm:w-auto px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors ml-0 sm:ml-4">
              Enable Two-Factor Authentication
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
