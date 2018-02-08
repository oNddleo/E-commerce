import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



var store = require('store');
export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route exact path='/' />
                    <Route path='/roster' />
                    <Route path='/schedule' />
                </Switch>
            </Router>
        </Provider>
    )
  }
};
