import React from 'react';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SidebarProfile() {
  return (
    <div className="sidebar-profile">
      <div className="sidebar-picture">
        <FontAwesomeIcon icon={faUserCircle} />
      </div>
      <div className="profile-info">
        <p className="profile-name">Brian Hughes</p>
        <p className="profile-email">hughes.brian@company.com</p>
      </div>
    </div>
  );
}
