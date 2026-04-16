import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Redux/authSlice';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get auth token from Redux store
  const { token } = useSelector(state => state.auth);
  const isLoggedIn = !!token;

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      await fetch("https://psb-computer-training-center-back-e-nine.vercel.app/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem('token');
      localStorage.removeItem('user');
      dispatch(logout());
      navigate("/");

    } catch (error) {
      console.error("Logout failed:", error);
      dispatch(logout());
      navigate("/");
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admission', path: '/admission' },
    { name: 'Course', path: '/course' }
  ];

  const authLinks = isLoggedIn
    ? [{ name: 'Logout', action: handleLogout }]
    : [
        { name: 'Login', path: '/login' },
        { name: 'Register', path: '/register' }
      ];

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-500 shadow-lg w-full z-50 fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-white text-2xl font-extrabold tracking-wide hover:text-blue-200 transition-colors duration-300"
        >
          PSB
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium text-lg">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative group transition-all duration-300 px-2 py-1 rounded-lg ${
                    isActive
                      ? 'text-white bg-blue-800 shadow-md'
                      : 'hover:text-blue-200 hover:bg-blue-600/50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          {/* Auth Links */}
          {authLinks.map((link, idx) => (
            <li key={idx}>
              {link.path ? (
                <NavLink
                  to={link.path}
                  className="transition-all duration-300 px-2 py-1 rounded-lg hover:text-blue-200 hover:bg-blue-600/50"
                >
                  {link.name}
                </NavLink>
              ) : (
                <button
                  onClick={link.action}
                  className="transition-all duration-300 px-2 py-1 rounded-lg hover:text-blue-200 hover:bg-blue-600/50"
                >
                  {link.name}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className={`md:hidden text-white text-2xl p-2 rounded-lg transition-all duration-300 hover:bg-blue-600 ${
            open ? 'bg-blue-600 rotate-90' : 'rotate-0'
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out bg-gradient-to-b from-blue-600 to-blue-700 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-3 text-white text-lg font-medium">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block transition-all duration-300 py-3 px-4 rounded-lg ${
                    isActive
                      ? 'text-white bg-blue-800 shadow-md border-l-4 border-white'
                      : 'hover:text-blue-200 hover:bg-blue-600/50 hover:border-l-4 hover:border-blue-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          {/* Auth Links */}
          {authLinks.map((link, idx) => (
            <li key={idx}>
              {link.path ? (
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="block transition-all duration-300 py-3 px-4 rounded-lg hover:text-blue-200 hover:bg-blue-600/50"
                >
                  {link.name}
                </NavLink>
              ) : (
                <button
                  onClick={() => {
                    link.action();
                    setOpen(false);
                  }}
                  className="block w-full text-left transition-all duration-300 py-3 px-4 rounded-lg hover:text-blue-200 hover:bg-blue-600/50"
                >
                  {link.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
