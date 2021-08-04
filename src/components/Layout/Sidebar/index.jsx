import React from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarProfile from './SidebarProfile';
import SidebarMenu from './SidebarMenu';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <SidebarHeader />
      <SidebarProfile />
      <SidebarMenu />
    </div>
  );
}
