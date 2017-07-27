import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { editMeeting } from '../../../redux/meetings';
import MeetingEditor from './MeetingEditor';

class MeetingEditorContainer extends Component {
  getMeeting() {
    return this.props.meetings.find(x => x.id === this.props.match.params.id);
  }

  saveMeeting(description, participantId) {
    this.props.editMeeting(this.getMeeting().id, this.props.selectedDate, description, participantId);
  }

  render() {
    if (!this.getMeeting()) return (
      <Redirect to={`/meetings/${this.props.selectedDate}`}/>
    );

    return (
      <MeetingEditor
        description={this.getMeeting().description}
        participantId={this.getMeeting().participantId}
        onSave={(...args) => this.saveMeeting(...args)}
      />
    );
  }
}

const mapStateToProps = state => ({
  meetings: state.meetings,
  selectedDate: state.calendar.selectedDate
});

const mapDispatchToProps = dispatch => ({
  editMeeting: (...args) => dispatch(editMeeting(...args))
})

export default connect(mapStateToProps, mapDispatchToProps)(MeetingEditorContainer);
