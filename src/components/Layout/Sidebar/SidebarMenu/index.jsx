import React from 'react';
import { faChartBar, faFile, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SidebarMenu() {
  return (
    <div className="sidebar-menu">
      <div className="menu-header">
        <p className="menu-title">
          Dashboards        
        </p>
        <p className="menu-desc">  
          Unique dashboard designs      
        </p>
      </div>
      <div className="menu-items">
        <ul>
          <li><span><FontAwesomeIcon icon={faFile} /></span>Project</li>
          <li><span><FontAwesomeIcon icon={faChartBar} /></span>Analytics</li>
        </ul>
      </div>

      <div className="menu-header">
        <p className="menu-title">
          Applications        
        </p>
        <p className="menu-desc">  
          Custom made application designs     
        </p>
      </div>
      <div className="menu-items">
        <ul>
          <li><span><FontAwesomeIcon icon={faFile} /></span>Academy</li>
          <li><span><FontAwesomeIcon icon={faChartBar} /></span>Calendar</li>
          <li><span><FontAwesomeIcon icon={faChartBar} /></span>Chat</li>
        </ul>
      </div>
    </div>
  );
}
