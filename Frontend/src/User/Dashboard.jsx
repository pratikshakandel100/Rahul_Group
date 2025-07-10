import React from "react";
import {
  Users,
  Briefcase,
  CheckCircle,
  Clock,
  DollarSign,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      name: "Active Projects",
      value: "12",
      icon: Briefcase,
      color: "bg-blue-500",
    },
    {
      name: "Hired Developers",
      value: "8",
      icon: Users,
      color: "bg-green-500",
    },
    {
      name: "Completed Jobs",
      value: "24",
      icon: CheckCircle,
      color: "bg-[#d97757]",
    },
    {
      name: "Pending Requests",
      value: "5",
      icon: Clock,
      color: "bg-yellow-500",
    },
  ];

  const recentActivity = [
    {
      action: "New developer application received",
      time: "2 hours ago",
      type: "application",
    },
    {
      action: 'Project "E-commerce Website" completed',
      time: "1 day ago",
      type: "completion",
    },
    {
      action: "Payment processed for John Smith",
      time: "2 days ago",
      type: "payment",
    },
    {
      action: 'New job posted: "Mobile App Development"',
      time: "3 days ago",
      type: "job",
    },
  ];

  const activeProjects = [
    {
      name: "E-commerce Platform",
      developer: "Alice Johnson",
      progress: 75,
      deadline: "2024-02-15",
    },
    {
      name: "Mobile App",
      developer: "Bob Wilson",
      progress: 45,
      deadline: "2024-02-20",
    },
    {
      name: "Dashboard UI",
      developer: "Carol Davis",
      progress: 90,
      deadline: "2024-02-10",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    {stat.name}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Activity
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#d97757] rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Projects */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Active Projects
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {activeProjects.map((project, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">
                      {project.name}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {project.progress}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Developer: {project.developer}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className="bg-[#d97757] h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500">
                    Deadline: {project.deadline}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
