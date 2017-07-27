import { withRouter } from 'react-router';

import { connect } from 'react-redux';
import { SideMenu } from './SideMenu';

const mapStateToProps = state => ({
  meetingsCount: state.meetings.length
});

export default withRouter(connect(mapStateToProps)(SideMenu));
