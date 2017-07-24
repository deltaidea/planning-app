import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

import './App.css';

import SideMenu from './SideMenu';
import ClientPage from './ClientPage';
import SchedulePage from './SchedulePage';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <SideMenu/>
        <div className="content">
          <Route exact path="/" render={() => <Redirect to="/meetings/2016-09-22"/>}/>
          <Route path="/clients" component={ClientPage}/>
          <Route path="/meetings" component={SchedulePage}/>
        </div>
      </div>
    );
  }
}
