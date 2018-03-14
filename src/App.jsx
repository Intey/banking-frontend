import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

import EventsList from './containers/EventsList'
import Header from './views/Header'
import Builder from './views/Builder'
import AuthContainer from './containers/Auth'

function mapStateToProps(state) {
  return { isloginin: state.token, fetching: state.auth_fetching }
}

function MainHOC(authorized) {
  return () => (authorized ?
    <EventsList/>
    :
    <AuthContainer/>
  )
}

function App({isloginin, fetching}) {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Route path="/" render={MainHOC(isloginin)}/>
        <Route path="/new" component={Builder}/>
      </div>
    </Router>
  );
}

export default connect(mapStateToProps)(App)
