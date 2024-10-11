import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col font-mullish min-h-screen">
      {" "}
      {/* Changed h-full to min-h-screen */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1 ml-0 lg:ml-52 transition-all duration-300 ease-in-out ">
        {" "}
        {/* Fixed background color syntax */}
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 bg-[#f4f4f9] rounded-md shadow-md">
          {" "}
          {/* Added white background and styles */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
