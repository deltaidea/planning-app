import { connect } from 'react-redux';
import MeetingList from './MeetingList';
import { deleteMeeting } from '../../../../redux/meetings';

const mapStateToProps = state => ({
  selectedDate: state.calendar.selectedDate,
  clients: state.clients,
  meetings: state.meetings
});

const mapDispatchToProps = dispatch => ({
  deleteMeeting: id => dispatch(deleteMeeting(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MeetingList);
