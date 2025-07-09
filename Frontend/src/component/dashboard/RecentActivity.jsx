import React from 'react';
import { Activity } from 'lucide-react';

const RecentActivity = () => {
  const recentActivities = [
    {
      id: 1,
      user: 'John Doe',
      action: 'submitted a new project proposal',
      time: '2 hours ago',
      type: 'project'
    },
    {
      id: 2,
      user: 'Sarah Smith',
      action: 'completed profile verification',
      time: '4 hours ago',
      type: 'user'
    },
    {
      id: 3,
      user: 'Mike Johnson',
      action: 'made a payment of $2,500',
      time: '6 hours ago',
      type: 'payment'
    },
    {
      id: 4,
      user: 'Emily Davis',
      action: 'updated project requirements',
      time: '8 hours ago',
      type: 'project'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <Activity className="w-5 h-5 text-gray-500" />
      </div>
      <div className="space-y-4">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
              activity.type === 'project' ? 'bg-[#d97757]' :
              activity.type === 'user' ? 'bg-blue-500' : 'bg-green-500'
            }`}></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">
                <span className="font-medium">{activity.user}</span> {activity.action}
              </p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;