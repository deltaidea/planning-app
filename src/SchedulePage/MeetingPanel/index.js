import React, { Component } from 'react';
import { Route } from 'react-router';

import MeetingListContainer from './MeetingListContainer';
import NewMeetingContainer from './NewMeetingContainer';
import EditMeetingContainer from './EditMeetingContainer';

export default class MeetingPanelContainer extends Component {
  render() {
    return (
      <div>
        <Route exact path="/meetings/:date/" component={MeetingListContainer}/>
        <Route exact path="/meetings/:date/new" component={NewMeetingContainer}/>
        <Route path="/meetings/:date/:id(\d+)" component={EditMeetingContainer}/>
      </div>
    );
  }
}
