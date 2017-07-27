import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import MeetingEditor from './MeetingEditor';
import { changeMeetingEditor } from '../../../../redux/meeting-editor';

const mapStateToProps = state => ({
  date: state.calendar.selectedDate,
  possibleParticipants: state.clients,
  currentDescription: state.meetingEditor.description,
  currentParticipant: state.meetingEditor.participant,
  isValidParticipant: state.meetingEditor.isValidParticipant
});

const mapDispatchToProps = dispatch => ({
  changeValues: values => dispatch(changeMeetingEditor(values))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MeetingEditor));
