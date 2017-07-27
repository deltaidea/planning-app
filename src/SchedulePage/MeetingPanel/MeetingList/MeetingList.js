import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ContentPanel, PanelHeader, PanelContent } from '../../../ContentPanel';
import { PrimaryButton } from '../../../Button';
import BleedContainer from '../../../BleedContainer';

import './MeetingList.css';

import iconEdit from './icon-edit.png';
import iconDelete from './icon-delete.png';

export default class MeetingList extends Component {
  getParticipant(id) {
    return this.props.clients.find(x => x.id === id);
  }

  getEditUrl(id) {
    return `/meetings/${this.props.selectedDate}/${id}`;
  }

  getCreateUrl() {
    return `/meetings/${this.props.selectedDate}/new`;
  }

  render() {
    const dayMeetings =this.props.meetings.filter(x => x.date === this.props.selectedDate);

    return (
      <BleedContainer className="meeting-list">
        <ContentPanel>
          <PanelHeader>
            <span>September 22</span>
            <PrimaryButton to={this.getCreateUrl()}>Create</PrimaryButton>
          </PanelHeader>
          <PanelContent>
            {dayMeetings.length ? dayMeetings.map(meeting => (
              <div key={meeting.id} className="item">
                <div className="title-row">
                  <span className="title">{meeting.title}</span>
                  <Link to={this.getEditUrl(meeting.id)}><img src={iconEdit} className="icon edit" alt="Edit"/></Link>
                  <img onClick={() => this.props.deleteMeeting(meeting.id)} src={iconDelete} className="icon delete" alt="Delete"/>
                </div>
                <div className="participant">
                  <span>{this.getParticipant(meeting.participantId).name}</span>
                </div>
              </div>
            )) : (
              <div className="empty-list">Nothing planned</div>
            )}
          </PanelContent>
        </ContentPanel>
      </BleedContainer>
    );
  }
}
