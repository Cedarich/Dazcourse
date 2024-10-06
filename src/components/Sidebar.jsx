import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Logo from "../assests/svgs/Logo.svg";
import daz from "../assests/svgs/daz.svg";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-52 bg-white/30 backdrop-blur-md shadow-md transform transition-transform duration-500 ease-in-out lg:translate-x-0 flex flex-col ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } z-50`}
    >
      <div className="p-6 flex-grow relative">
        {/* Close Button for Mobile, positioned next to the logo */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 absolute top-10 left-4 text-gray-600 hover:text-gray-900 rounded-lg transition-transform duration-300 transform hover:scale-110 active:scale-95"
        >
          <IoMdClose className="h-6 w-6 transition-transform duration-300" />
        </button>

        {/* Logo Section */}
        <div className="flex items-center mb-8 gap-1">
          <img src={Logo} alt="Logo" className="h-5" />
          <img src={daz} alt="Daz" className="h-4" />
        </div>

        {/* Sidebar Links */}
        <nav className="space-y-6">
          {[
            { to: "/dashboard", icon: <MdDashboard />, label: "Dashboard" },
            { to: "/explore", icon: <FaRegCompass />, label: "Explore" },
            {
              to: "/learning",
              icon: <LiaLaptopCodeSolid />,
              label: "Learning",
            },
            { to: "/settings", icon: <CiSettings />, label: "Settings" },
          ].map(({ to, icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-3 rounded-lg transition-transform duration-300 ease-in-out transform scale-105 shadow-md"
                  : "flex items-center space-x-3 text-gray-600 p-3 rounded-lg hover:bg-[#5541d7] hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              }
            >
              {icon}
              <span className="font-semibold text-sm">{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
