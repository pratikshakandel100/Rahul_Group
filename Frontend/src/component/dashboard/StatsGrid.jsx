import React from 'react';
import { 
  Users, 
  FolderOpen, 
  DollarSign, 
  TrendingUp
} from 'lucide-react';

const StatsGrid = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '12,543',
      change: '+12.5%',
      changeType: 'positive',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Projects',
      value: '856',
      change: '+8.2%',
      changeType: 'positive',
      icon: FolderOpen,
      color: 'bg-[#d97757]'
    },
    {
      title: 'Monthly Revenue',
      value: '$45,250',
      change: '+15.3%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Growth Rate',
      value: '23.5%',
      change: '-2.1%',
      changeType: 'negative',
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              <p className={`text-xs sm:text-sm mt-1 ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change} from last month
              </p>
            </div>
            <div className={`p-2 sm:p-3 rounded-full ${stat.color} flex-shrink-0`}>
              <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;