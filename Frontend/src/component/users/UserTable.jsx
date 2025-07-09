import React, { useState } from 'react';
import { Eye, Edit, Trash2 } from 'lucide-react';
import UserModal from './UserModal';

const UserTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      role: 'Developer',
      location: 'New York, NY',
      projects: 12,
      avatar: null
    },
    {
      id: 2,
      name: 'Sarah Smith',
      email: 'sarah.smith@example.com',
      phone: '+1 (555) 987-6543',
      role: 'Designer',
      location: 'Los Angeles, CA',
      projects: 8,
      avatar: null
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      phone: '+1 (555) 456-7890',
      role: 'Client',
      location: 'Chicago, IL',
      projects: 3,
      avatar: null
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      phone: '+1 (555) 321-0987',
      role: 'Developer',
      location: 'Austin, TX',
      projects: 15,
      avatar: null
    },
    {
      id: 5,
      name: 'Robert Wilson',
      email: 'robert.wilson@example.com',
      phone: '+1 (555) 654-3210',
      role: 'Manager',
      location: 'Seattle, WA',
      projects: 25,
      avatar: null
    }
  ];

  const getRoleColor = (role) => {
    switch (role) {
      case 'Developer': return 'bg-blue-100 text-blue-800';
      case 'Designer': return 'bg-purple-100 text-purple-800';
      case 'Client': return 'bg-green-100 text-green-800';
      case 'Manager': return 'bg-[#d97757] bg-opacity-20 text-[#d97757]';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  Projects
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#d97757] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-medium text-sm">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500 hidden sm:block">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900 hidden sm:table-cell">
                    {user.projects}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleViewUser(user)}
                        className="text-[#d97757] hover:text-[#c86a4a] transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-800 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <UserModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        user={selectedUser}
      />
    </>
  );
};

export default UserTable;
