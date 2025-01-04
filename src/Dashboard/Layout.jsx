import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
const Layout = () => {
  return (
    <div style={{ display: 'flex',minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, backgroundColor: '#f8f9fa' }}>
        <Navbar />
        <div style={{ display: 'flex', padding: '20px', flexDirection: 'column',}}>
          <div style={{ flexGrow: 1 }}>
            <Outlet />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Layout;
