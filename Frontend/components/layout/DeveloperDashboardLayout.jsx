import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header"        // Your header component
import Sidebar from "../../components/Sidebar";       // Your sidebar component

// Example developer object, replace with context or props as needed
const developerData = {
  name: "John Doe",
  title: "Full Stack Developer",
  email: "john@example.com",
  phone: "123-456-7890",
  location: "Remote",
  hourlyRate: 50,
  availability: "Available",
  bio: "Experienced developer specializing in modern web applications.",
  skills: ["React", "Node.js", "MongoDB"]
};

const DeveloperDashboardLayout = () => {
  // Sidebar state for mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // For Sidebar active tab (if not using react-router NavLink)
  // const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header setIsSidebarOpen={setIsSidebarOpen} developer={developerData} />

      {/* Layout: Sidebar + Main Content */}
      <div className="flex pt-16"> {/* pt-16 for header height */}
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          // activeTab={activeTab}
          // setActiveTab={setActiveTab}
        />

        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-4rem)] p-4 sm:p-6 lg:ml-64 transition-all">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DeveloperDashboardLayout;
