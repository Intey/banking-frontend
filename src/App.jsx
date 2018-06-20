import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router'

import './App.css';

import AuthContainer from './containers/Auth'
import EventsList from './containers/EventsList'
import Builder from './containers/Builder'
import Header from './views/Header'
import EventDetail from './containers/EventDetail.jsx'

function mapStateToProps(state) {
  return {
    isloginin: state.auth.token,
    fetching: state.auth_fetching,
    events: state.events
  }
}

function Loader() {
  return (
    <h1>Loading...</h1>
  )
}

function App({isloginin, fetching, events}) {
  let EventDetailComp = null
  if (events.length === 0) {
    EventDetailComp = Loader // progress fetcher
  } else {
    EventDetailComp = EventDetail
  }
  return (
    <Router>
      { isloginin ?
          <div className="app">
            <Header/>
            <Switch>
              <Route exact path="/" component={EventsList}/>
              <Route path="/new" component={Builder}/>
              <Route path="/events/:id" component={EventDetailComp}/>
            </Switch>
          </div>
          :
          <AuthContainer/>
      }
    </Router>
  )
}

export default connect(mapStateToProps)(App)
