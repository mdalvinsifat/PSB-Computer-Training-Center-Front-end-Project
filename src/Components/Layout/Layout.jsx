import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-15 min-h-screen bg-gray-50">
        {children}
      </main>
    </div>
  );
};

export default Layout;