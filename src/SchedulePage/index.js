import React, { Component } from 'react';
import { Route } from 'react-router';

import CalendarPanel from './CalendarPanel';
import MeetingPanel from './MeetingPanel';

export default class SchedulePageContainer extends Component {
  render() {
    return (
      <div>
        <CalendarPanel/>
        <Route path="/meetings/:date(\d{4}-\d{2}-\d{2})" component={MeetingPanel}/>
      </div>
    );
  }
}
