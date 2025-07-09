import React from "react";
import { FiMenu, FiBell, FiUser, FiLogOut } from "react-icons/fi";

export const AdminHeader = () => {
  return (
    <header className=" bg-white shadow-sm border-b border-gray-200 px-4 py-3 z-40">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-gray-800">
            Developer Dashboard
          </h1>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
            <FiBell size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-[#d97757] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>

          {/* Profile dropdown */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-gray-800">
               "John Doe"
              </p>
              <p className="text-xs text-gray-500">
                 "Full Stack Developer"
              </p>
            </div>
            <div className="relative">
              <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors">
                <div className="w-8 h-8 bg-[#d97757] rounded-full flex items-center justify-center">
                  <FiUser size={16} className="text-white" />
                </div>
              </button>
            </div>
          </div>

          {/* Logout */}
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <FiLogOut size={20} className="text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

