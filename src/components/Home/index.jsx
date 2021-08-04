import React from 'react';
import {
  faBars,
  faEnvelope,
  faSearch,
  faTags,
  faBell,
  faUserCircle,
  faCog,
  faEllipsisV,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <div className="header-left">
          <div className="navigation">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div className="header-right">
          <div className="search">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="tags">
            <FontAwesomeIcon icon={faTags} />
          </div>
          <div className="envelope">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="welcome-text">
          <div className="my-profile">
            <FontAwesomeIcon icon={faUserCircle} />
          </div>
          <div className="my-profile-info">
            <div className="welcome-big">
              <p>Welcome back, Brian!</p>
            </div>
            <div className="welcome-small">
              <span>
                <FontAwesomeIcon icon={faBell} />
              </span>
              <p>You have 2 new messages and 15 new tasks</p>
            </div>
          </div>
        </div>
        <div className="welcome-buttons">
          <button type="button">
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            Messages
          </button>
          <button type="button" className="settings">
            <span>
              <FontAwesomeIcon icon={faCog} />
            </span>
            Settings
          </button>
        </div>
      </div>
      <div className="home-tabs">
        <ul>
          <li>Home</li>
          <li>Budget</li>
          <li>Team</li>
        </ul>
      </div>
      <div className="home-summary">
        <div className="card-box summary">
          <div className="card-header">
            <div className="card-title">
              <p>Summary</p>
            </div>
            <div className="card-icon">
              <FontAwesomeIcon icon={faEllipsisV} />
            </div>
          </div>
          <div className="card-major">
            <p>21</p>
            <span>Due Tasks</span>
          </div>
          <div className="card-minor">
            <p>
              Completed: <strong>13</strong>
            </p>
          </div>
        </div>
        <div className="card-box overdue">
          <div className="card-header">
            <div className="card-title">
              <p>Overdue</p>
            </div>
            <div className="card-icon">
              <FontAwesomeIcon icon={faEllipsisV} />
            </div>
          </div>
          <div className="card-major">
            <p>17</p>
            <span>Due Tasks</span>
          </div>
          <div className="card-minor">
            <p>
              From yesterday: <strong>9</strong>
            </p>
          </div>
        </div>
        <div className="card-box issues">
          <div className="card-header">
            <div className="card-title">
              <p>Issues</p>
            </div>
            <div className="card-icon">
              <FontAwesomeIcon icon={faEllipsisV} />
            </div>
          </div>
          <div className="card-major">
            <p>24</p>
            <span>Due Tasks</span>
          </div>
          <div className="card-minor">
            <p>
              Closed today: <strong>19</strong>
            </p>
          </div>
        </div>
        <div className="card-box features">
          <div className="card-header">
            <div className="card-title">
              <p>Features</p>
            </div>
            <div className="card-icon">
              <FontAwesomeIcon icon={faEllipsisV} />
            </div>
          </div>
          <div className="card-major">
            <p>38</p>
            <span>Due Tasks</span>
          </div>
          <div className="card-minor">
            <p>
              Implemented: <strong>16</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="git-summary">
        <div className="card-box-bigger">
          <div className="git-title">
            <div className="git-main">
              <p>Github Issues Summary</p>
            </div>
            <div className="git-sub">
              <ul>
                <li>Last Week</li>
                <li>This Week</li>
              </ul>
            </div>
          </div>
          <div className="git-details">
            <div className="git-left">
              <FontAwesomeIcon icon={faChartBar} />
            </div>
            <div className="git-right">
              <div className="git-right-title">
                <p>Overview</p>
              </div>
              <div className="git-right-box1">
                <div className="git-box-large issue">
                  <p>214</p>
                  <span>New Issues</span>
                </div>
                <div className="git-box-large closed">
                  <p>75</p>
                  <span>Closed</span>
                </div>
              </div>
              <div className="git-right-box2">
                <div className="git-box-small">
                  <p>3</p>
                  <span>Fixed</span>
                </div>
                <div className="git-box-small">
                  <p>4</p>
                  <span>Won't Fix</span>
                </div>
                <div className="git-box-small">
                  <p>8</p>
                  <span>Re-opened</span>
                </div>
                <div className="git-box-small">
                  <p>6</p>
                  <span>Needs Triage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tasks-summary" />
    </div>
  );
}
