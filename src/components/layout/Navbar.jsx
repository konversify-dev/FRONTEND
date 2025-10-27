import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Kiri - Logo */}
        <div className="flex items-center space-x-2">
          {/* <img src={logo} alt="Conversify Logo" className="w-6 h-6 object-contain" /> */}
          <h1 className="text-primary-light font-bold text-lg font-montserrat">
            Conversify
          </h1>
        </div>

        {/* Tengah - Menu Navigasi */}
        <div className="flex items-center space-x-8 ml-auto mr-6">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `relative pb-1 text-sm font-semibold transition ${
                isActive
                  ? "text-gray-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-primary-light"
                  : "text-gray-700 hover:text-primary-light"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/campaign"
            className={({ isActive }) =>
              `relative pb-1 text-sm font-semibold transition ${
                isActive
                  ? "text-primary-light after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-primary-light"
                  : "text-gray-700 hover:text-primary-light"
              }`
            }
          >
            Campaign
          </NavLink>
        </div>

        {/* Kanan - User Icon */}
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 font-bold cursor-pointer hover:bg-gray-200">
          U
        </div>
      </div>
    </nav>
  );
}
