import React from 'react';
import Sidebar from './Sidebar';
import Home from '../Home';
import './layout.css';

export default function Layout({ main }) {
  return (
    <div className="layout-container">
      <Sidebar />
      <Home />
    </div>
  );
}
