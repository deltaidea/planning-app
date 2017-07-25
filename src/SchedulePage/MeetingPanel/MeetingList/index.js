import { connect } from 'react-redux';
import MeetingList from './MeetingList';

const mapStateToProps = state => ({
  clients: state.clients,
  meetings: state.meetings
});

export default connect(mapStateToProps)(MeetingList);
