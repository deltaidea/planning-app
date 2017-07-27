import React, { Component } from 'react';
import classNames from 'classnames';
import { parseDate } from '../../../../redux/calendar';
import BleedContainer from '../../../BleedContainer';
import { ContentPanel, PanelHeader, PanelContent } from '../../../ContentPanel';
import { PrimaryButton, SecondaryButton, IconButton } from '../../../Button';

import './MeetingEditor.css';
import cancelIcon from './cancel.png';

export default class MeetingEditor extends Component {
  getReadableDate() {
    return parseDate(this.props.date).format('MMMM DD');
  }

  getParticipantName(id) {
    if (id == null) return '';
    return this.props.possibleParticipants.find(x => x.id === id).name;
  }

  getParticipantId(name) {
    const p = this.props.possibleParticipants.find(x => x.name === name);
    return p ? p.id : null
  }

  goToMeetingList() {
    this.props.history.push(`/meetings/${this.props.date}`);
  }

  changeParticipant(name) {
    const isValid = this.getParticipantId(name) !== null;
    this.props.changeValues({
      participant: name,
      isValidParticipant: isValid
    });
  }

  changeDescription(description) {
    const isValid = this.props.currentDescription.trim() !== '';
    this.props.changeValues({
      description,
      isValidDescription: isValid
    });
  }

  save() {
    let allValid = true;

    if (this.getParticipantId(this.props.currentParticipant) === null) {
      this.props.changeValues({ isValidParticipant: false });
      allValid = false;
    }

    if (this.props.currentDescription.trim() === '') {
      this.props.changeValues({ isValidDescription: false });
      allValid = false;
    }

    if (allValid) {
      this.props.onSave(
        this.props.currentDescription,
        this.getParticipantId(this.props.currentParticipant)
      );
      this.goToMeetingList();
    }
  }

  componentWillMount() {
    this.props.changeValues({
      description: this.props.description || '',
      participant: this.getParticipantName(this.props.participantId),
      isValidDescription: true,
      isValidParticipant: true
    });
  }

  render() {
    return (
      <BleedContainer className="meeting-editor">
        <ContentPanel>
          <PanelHeader>
            <span>{this.props.isNew ? 'New' : 'Edit'} meeting on {this.getReadableDate()}</span>
            <IconButton onClick={() => this.goToMeetingList()} src={cancelIcon} alt="Cancel"/>
          </PanelHeader>
          <PanelContent>
            <label>
              <div>Participant</div>
              <input
                type="text"
                value={this.props.currentParticipant}
                onChange={event => this.changeParticipant(event.target.value)}
                className={classNames({
                  invalid: !this.props.isValidParticipant
                })}
              />
              <div className="error-message">{this.props.isValidParticipant ? '' : 'Participant is required'}</div>
            </label>
            <label>
              <div>Description</div>
              <textarea
                rows="3"
                value={this.props.currentDescription}
                onChange={event => this.changeDescription(event.target.value)}
                className={classNames({
                  invalid: !this.props.isValidParticipant
                })}
              ></textarea>
              <div className="error-message">{this.props.isValidDescription ? '' : 'Description is required'}</div>
            </label>
            <div className="form-buttons">
              <SecondaryButton onClick={() => this.goToMeetingList()}>Cancel</SecondaryButton>
              <PrimaryButton onClick={() => this.save()}>Save</PrimaryButton>
            </div>
          </PanelContent>
        </ContentPanel>
      </BleedContainer>
    );
  }
}
