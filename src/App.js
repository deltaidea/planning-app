import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

import './App.css';

import { SideMenuContainer } from './side-menu/SideMenuContainer';
import { ClientListContainer } from './clients/ClientListContainer';
import { CalendarPageContainer } from './meetings/CalendarPageContainer';
import { MeetingPanelContainer } from './meetings/MeetingPanelContainer';
import { MeetingListContainer } from './meetings/MeetingListContainer';
import { NewMeetingContainer } from './meetings/NewMeetingContainer';
import { EditMeetingContainer } from './meetings/EditMeetingContainer';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <SideMenuContainer/>
        <Route exact path="/" render={() => <Redirect to="/meetings/2016-09-22"/>}/>
        <Route path="/clients" component={ClientListContainer}/>
        <Route path="/meetings" component={CalendarPageContainer}>
          <Route path="/:date" component={MeetingPanelContainer}>
            <Route exact path="/" component={MeetingListContainer}/>
            <Route path="/new" component={NewMeetingContainer}/>
            <Route path="/:id" component={EditMeetingContainer}/>
          </Route>
        </Route>
      </div>
    );
  }
}
