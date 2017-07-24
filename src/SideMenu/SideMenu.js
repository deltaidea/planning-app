import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './SideMenu.css';
import photoUrl from './profile-photo.png';
import iconSettings from './icon-settings.png';
import iconUpload from './icon-upload.png';
import iconSchedule from './icon-schedule.png';
import iconClient from './icon-client.png';

export class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu">
        <div className="header">
          <div className="profile-photo-container">
            <img src={photoUrl} className="profile-photo"/>
          </div>
          <div className="actions">
            <span className="action"><img src={iconSettings}/></span>
            <span className="action"><img src={iconUpload}/></span>
          </div>
        </div>
        <div className="navigation">
          <NavLink className="navigation-item" activeClassName="active" to="/meetings">
            <img src={iconSchedule} className="icon"/>
            <span className="name">Schedule</span>
            <span className="counter">8</span>
          </NavLink>
          <NavLink className="navigation-item" activeClassName="active" to="/clients">
            <img src={iconClient} className="icon"/>
            <span className="name">My clients</span>
          </NavLink>
        </div>
      </div>
    );
  }
}