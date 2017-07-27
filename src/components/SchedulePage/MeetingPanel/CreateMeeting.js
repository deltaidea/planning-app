import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMeeting } from '../../../redux/meetings';
import MeetingEditor from './MeetingEditor';

class MeetingEditorContainer extends Component {
  render() {
    return (
      <MeetingEditor
        isNew={true}
        onSave={(description, participantId) => this.props.createMeeting(this.props.selectedDate, description, participantId)}
      />
    );
  }
}

const mapStateToProps = state => ({
  selectedDate: state.calendar.selectedDate
});

const mapDispatchToProps = dispatch => ({
  createMeeting: (...args) => dispatch(createMeeting(...args))
})

export default connect(mapStateToProps, mapDispatchToProps)(MeetingEditorContainer);
