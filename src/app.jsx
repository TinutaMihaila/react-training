import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Http from './classes/Http';
import Users from './modules/users';

injectTapEventPlugin();

export default class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div id="body">
          <Route exact={true} path='/' component={Users} />
        </div>
      </Router>
    )
  }
}
