import React, { Component } from 'react';

import './MeetingList.css';

import iconEdit from './icon-edit.png';
import iconDelete from './icon-delete.png';

export default class MeetingList extends Component {
  render() {
    return (
      <div className="meeting-list-container">
        <div className="header">
          <span className="date">September 22</span>
          <button className="button-create">Create</button>
        </div>
        <div className="meeting-list">
          <div className="item">
            <div className="title-row">
              <span className="title">Scheduling a meeting time shouldn't be hard</span>
              <img src={iconEdit} className="icon edit"/>
              <img src={iconDelete} className="icon delete"/>
            </div>
            <div className="participant">
              <span>Stella Adler</span>
            </div>
          </div>
          <div className="item">
            <div className="title-row">
              <span className="title">Democratic way to coordinate</span>
              <img src={iconEdit} className="icon edit"/>
              <img src={iconDelete} className="icon delete"/>
            </div>
            <div className="participant">
              <span>Eddy Arnold</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
