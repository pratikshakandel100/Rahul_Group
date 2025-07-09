import React from 'react';
import { Users, User, Star } from 'lucide-react';

const UserStats = () => {
  const users = [
    { role: 'Developer', count: 2 },
    { role: 'Designer', count: 1 },
    { role: 'Client', count: 1 },
    { role: 'Manager', count: 1 }
  ];

  const totalUsers = 5;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Users</p>
            <p className="text-xl sm:text-2xl font-bold text-gray-900">{totalUsers}</p>
          </div>
          <Users className="w-6 sm:w-8 h-6 sm:h-8 text-[#d97757]" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Developers</p>
            <p className="text-xl sm:text-2xl font-bold text-gray-900">
              {users.find(u => u.role === 'Developer')?.count || 0}
            </p>
          </div>
          <User className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Clients</p>
            <p className="text-xl sm:text-2xl font-bold text-gray-900">
              {users.find(u => u.role === 'Client')?.count || 0}
            </p>
          </div>
          <Star className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500" />
        </div>
      </div>
    </div>
  );
};

export default UserStats;
