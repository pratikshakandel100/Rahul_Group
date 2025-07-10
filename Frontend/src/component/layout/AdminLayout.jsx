import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../AdminHeader"        // Your header component
import {AdminSidebar} from "../../component/Sidebar";       // Your sidebar component


const developerData = {
  name: "admin",
  title: "Admin",
  email: "admin@example.com",
  phone: "123-456-7890",
  location: "Remote",
  hourlyRate: 50,
  availability: "Available",
  bio: "Experienced developer specializing in modern web applications.",
  skills: ["React", "Node.js", "MongoDB"]
};

const AdminLayout = () => {
  // Sidebar state for mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <div className="min-h-screen bg-gray-50">
  

      <AdminHeader setIsSidebarOpen={setIsSidebarOpen} developer={developerData} />



      <div className="flex pt-16"> {/* pt-16 for header height */}
        {/* Sidebar */}
        <AdminSidebar
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

export default AdminLayout;