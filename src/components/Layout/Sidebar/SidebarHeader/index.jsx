import React from 'react';
import {
  faBell,
  faIgloo,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SidebarHeader() {
  return (
    <div className="sidebar-header">
      <div className="header-logo">
        <FontAwesomeIcon icon={faIgloo} />
      </div>
      <div className="header-subicons">
        <div className="notify-icon">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="Profile-icon">
          <FontAwesomeIcon icon={faUserCircle} />
        </div>
      </div>
    </div>
  );
}
