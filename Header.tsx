import React from "react";
import { Search, Bell, User } from "lucide-react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Title Section */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 font-poppins">{title}</h1>
          <p className="text-sm text-gray-600 font-montserrat">
            Manage your transport operations efficiently
          </p>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 transition"
            />
          </div>

          {/* Notification */}
          <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="text-sm leading-tight">
              <p className="font-medium text-gray-900 font-poppins">Admin User</p>
              <p className="text-gray-600 font-montserrat">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
