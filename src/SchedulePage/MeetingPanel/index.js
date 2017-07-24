import React, { Component } from 'react';
import { Route } from 'react-router';

import MeetingList from './MeetingList';
import CreateMeeting from './CreateMeeting';
import EditMeeting from './EditMeeting';

export default class MeetingPanelContainer extends Component {
  render() {
    return (
      <div>
        <Route exact path="/meetings/:date/" component={MeetingList}/>
        <Route exact path="/meetings/:date/new" component={CreateMeeting}/>
        <Route path="/meetings/:date/:id(\d+)" component={EditMeeting}/>
      </div>
    );
  }
}
