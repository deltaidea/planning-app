import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CalendarPanel from './CalendarPanel';
import { formatMoment } from '../../redux/calendar';

const mapStateToProps = (state, props) => ({
  calendar: state.calendar,
  meetings: state.meetings,
  goToDate: moment => props.history.push('/meetings/' + formatMoment(moment))
});

export default withRouter(connect(mapStateToProps)(CalendarPanel));
