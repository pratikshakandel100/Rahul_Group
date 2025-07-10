import { AdminHeader } from "../../AdminHeader";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
  
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
        <AdminHeader />
      </header>

      {/* Content below Header */}
      <div className="flex flex-1 pt-[64px]"> 
        
        {/* Fixed Sidebar */}
        <aside className="w-64 fixed top-[64px] bottom-0 left-0 bg-white border-r z-40">
          <Sidebar />
        </aside>

        {/* Main content area */}
        <main className="ml-64 w-full p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
