import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { UserSlider } from "../../component/UserSlider"; // Your sidebar component
import UserHeader from "../UserHeader";

const userData = {
  name: "user",
  title: "user",
  email: "user@example.com",
  phone: "123-456-7890",
  location: "Remote",
  hourlyRate: 50,
  availability: "Available",
  bio: "Experienced developer specializing in modern web applications.",
  skills: ["React", "Node.js", "MongoDB"],
};

const UserLayout = () => {
  // Sidebar state for mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <UserHeader setIsSidebarOpen={setIsSidebarOpen} developer={userData} />

      <div className="flex pt-16">
        {" "}
        {/* pt-16 for header height */}
        {/* Sidebar */}
        <UserSlider
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

export default UserLayout;
