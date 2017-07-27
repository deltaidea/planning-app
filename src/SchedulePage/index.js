import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

import BleedContainer from '../BleedContainer';
import CalendarPanel from './CalendarPanel';
import MeetingPanel from './MeetingPanel';

class SchedulePageContainer extends Component {
  render() {
    return (
      <BleedContainer>
        <CalendarPanel/>
        <Route exact path="/meetings" render={() => <Redirect to={`/meetings/${this.props.selectedDate}`}/>}/>
        <Route path="/meetings/:date(\d{4}-\d{2}-\d{2})" component={MeetingPanel}/>
      </BleedContainer>
    );
  }
}

const mapStateToProps = state => ({
  selectedDate: state.calendar.selectedDate
});

export default connect(mapStateToProps)(SchedulePageContainer);
