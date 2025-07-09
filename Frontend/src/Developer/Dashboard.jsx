import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "./Header";
import DeveloperJobRequests from "./JobRequests";
import DeveloperReviews from "./Reviews";
import DeveloperProfile from "./Profile";
import DeveloperPayments from "./Payments";
import DeveloperJobs from "./Jobs";
import DeveloperNotifications from "./Notifications";
import {
  FiTrendingUp,
  FiDollarSign,
  FiStar,
  FiBriefcase,
} from "react-icons/fi";

const DashboardOverview = () => {
  const stats = [
    {
      label: "Total Earnings",
      value: "$12,450",
      icon: FiDollarSign,
      color: "bg-green-500",
    },
    {
      label: "Active Jobs",
      value: "8",
      icon: FiBriefcase,
      color: "bg-blue-500",
    },
    {
      label: "Average Rating",
      value: "4.8",
      icon: FiStar,
      color: "bg-yellow-500",
    },
    {
      label: "Completion Rate",
      value: "95%",
      icon: FiTrendingUp,
      color: "bg-[#d97757]",
    },
  ];

  return (
    <div className="p-4 sm:p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Dashboard Overview
        </h2>
        <p className="text-gray-600">
          Welcome back! Here's what's happening with your projects.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800 mt-1">
                    {stat.value}
                  </p>
                </div>
                <div className={`${stat.color} p-3 rounded-full`}>
                  <Icon size={24} className="text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="w-2 h-2 bg-[#d97757] rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">
                  New job request received
                </p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DeveloperDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const developer = {
    name: "John Doe",
    title: "Full Stack Developer",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    skills: ["React", "Node.js", "Python", "MongoDB"],
    hourlyRate: 75,
    availability: "Available",
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />;
      case "job-requests":
        return <DeveloperJobRequests />;
      case "my-jobs":
        return <DeveloperJobs />;
      case "reviews":
        return <DeveloperReviews />;
      case "profile":
        return <DeveloperProfile developer={developer} />;
      case "payments":
        return <DeveloperPayments />;
      case "notifications":
        return <DeveloperNotifications />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <Header 
        setIsSidebarOpen={setIsSidebarOpen} 
        developer={developer}
      />

      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content Area */}
      <main className={`
        pt-16 transition-all duration-300 min-h-screen
        ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-64'}
      `}>
        <div className="bg-gray-50">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default DeveloperDashboard;
