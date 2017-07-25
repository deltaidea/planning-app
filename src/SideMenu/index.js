import { withRouter } from 'react-router';

import { connect } from 'react-redux';
import { SideMenu } from './SideMenu';

const mapStateToProps = state => ({
  meetingsCount: state.meetings.length,
  selectedDate: state.calendar.selectedDate
});

export default withRouter(connect(mapStateToProps)(SideMenu));
