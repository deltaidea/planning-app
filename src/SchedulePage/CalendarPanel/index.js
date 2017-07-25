import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CalendarPanel from './CalendarPanel';

const mapStateToProps = state => ({
  calendar: state.calendar,
  meetings: state.meetings
});

export default withRouter(connect(mapStateToProps)(CalendarPanel));
