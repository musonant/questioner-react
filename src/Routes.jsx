import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import AuthenticationPage from './pages/AuthenticationPage';
import MeetupPage from './pages/MeetupPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={AuthenticationPage} />
      <Route exact path="/signup" component={AuthenticationPage} />
      <Route exact path="/meetup/:meetupId" component={MeetupPage} />
    </Switch>
  );
};

export default Routes;
