import React from 'react';
import Sidebar from './Sidebar';
import './layout.css';

export default function Layout() {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="main-content">Test</div>
    </div>
  );
}
