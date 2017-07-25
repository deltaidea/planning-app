import React, { Component } from 'react';

import './MeetingList.css';

import iconEdit from './icon-edit.png';
import iconDelete from './icon-delete.png';

export default class MeetingList extends Component {
  getParticipant(id) {
    return this.props.clients.find(x => x.id === id);
  }

  getDate() {
    return this.props.location.pathname.split('/').pop();
  }

  render() {
    const dayMeetings =this.props.meetings.filter(x => x.date === this.getDate());

    return (
      <div className="meeting-list-container">
        <div className="header">
          <span className="date">September 22</span>
          <button className="button-create">Create</button>
        </div>
        <div className="meeting-list">
          {dayMeetings.length ? dayMeetings.map(meeting => (
            <div key={meeting.id} className="item">
              <div className="title-row">
                <span className="title">{meeting.title}</span>
                <img src={iconEdit} className="icon edit"/>
                <img src={iconDelete} className="icon delete"/>
              </div>
              <div className="participant">
                <span>{this.getParticipant(meeting.participantId).name}</span>
              </div>
            </div>
          )) : (
            <div className="empty-list">Nothing planned</div>
          )}
        </div>
      </div>
    );
  }
}
