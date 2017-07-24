import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

import CalendarPanel from './CalendarPanel';
import MeetingPanel from './MeetingPanel';

import './SchedulePage.css';

export default class SchedulePageContainer extends Component {
  render() {
    return (
      <div className="schedule-container">
        <div className="schedule-left">
          <CalendarPanel/>
        </div>
        <div className="schedule-right">
          <Route exact path="/meetings" render={() => <Redirect to="/meetings/2016-09-22"/>}/>
          <Route path="/meetings/:date(\d{4}-\d{2}-\d{2})" component={MeetingPanel}/>
        </div>
      </div>
    );
  }
}
