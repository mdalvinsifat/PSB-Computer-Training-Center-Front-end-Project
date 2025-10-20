import React, { useState } from 'react';
import {
  HomeIcon,
  UsersIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  UserPlusIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { FaDiscourse } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../Redux/authSlice';

const AdminNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/admin/overview');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  const dispatch = useDispatch();
const navigate = useNavigate();

const handleLogout = async () => {
  try {
    const token = localStorage.getItem("token");
    
    await fetch("http://localhost:3000/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
localStorage.removeItem('token')
localStorage.removeItem('user')
dispatch(logout())

    navigate("/login");
  } catch (error) {
    console.error("Logout failed:", error);
    dispatch(logout());
    navigate("/login");
  }
};


  const navItems = [
    { href: "/admin/overview", icon: HomeIcon, label: "Overview" },
    { href: "/admin/users", icon: UsersIcon, label: "Users" },
    { href: "/admin/courses", icon: FaDiscourse, label: "Courses" },
    { href: "/admin/guest", icon: UserGroupIcon, label: "Guest List" },
    { href: "/admin/create/guest", icon: UserPlusIcon, label: "Create Guest" },
    { href: "/admin/admissions", icon: UserPlusIcon, label: "Admission" },

  ];

  const handleNavClick = (href) => {
    setActiveItem(href);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-6 left-6 z-50">
        <button
          onClick={toggleNavbar}
          className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Navigation */}
      <div className={`
        fixed lg:static top-0 left-0 h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col shadow-2xl 
        transform transition-all duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'}
        w-80 lg:w-72
        border-r border-gray-700
      `}>
        
        {/* Brand Section */}
        <div className="px-6 py-6 border-b border-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                <Cog6ToothIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Admin Panel
                </h1>
                <p className="text-xs text-gray-400">Administrator Access</p>
              </div>
            </div>
            <button 
              className="lg:hidden p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-8 space-y-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeItem === item.href;
            
            return (
              <a 
                key={item.href}
                href={item.href} 
                className={`
                  flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-200 group
                  ${isActive 
                    ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-l-4 border-purple-500 text-white shadow-lg' 
                    : 'hover:bg-gray-700/50 text-gray-300 hover:text-white'
                  }
                `}
                onClick={() => handleNavClick(item.href)}
              >
                <div className={`
                  p-2 rounded-lg transition-colors duration-200
                  ${isActive 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                    : 'bg-gray-700/50 group-hover:bg-purple-500/20 text-gray-400 group-hover:text-purple-300'
                  }
                `}>
                  <IconComponent className="h-5 w-5" />
                </div>
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                )}
              </a>
            );
          })}
        </nav>

        {/* User & Logout Section */}
        <div className="p-4 border-t border-gray-700/50">
         

          {/* Logout Button */}
          <button className="
            flex items-center justify-center space-x-3 
            w-full px-4 py-3 
            bg-gradient-to-r from-red-600/20 to-red-500/20 
            hover:from-red-600/30 hover:to-red-500/30
            text-red-400 hover:text-red-300 
            border border-red-500/30 hover:border-red-400/50
            rounded-xl 
            transition-all duration-200
            group
            mt-2
          " onClick={handleLogout}>
            <ArrowRightOnRectangleIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Logout</span>
          </button>
        </div>

        {/* Version Info */}
        <div className="px-4 py-3 border-t border-gray-700/50">
          <p className="text-center text-xs text-gray-500">v2.1.0 • Admin Panel</p>
        </div>
      </div>
    </>
  );
};

export default AdminNav;