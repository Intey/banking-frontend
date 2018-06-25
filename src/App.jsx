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
import ErrorLog from './containers/ErrorLog.jsx'

function Loader() {
  return (
    <h1>Loading...</h1>
  )
}

function App(props) {
  let EventDetailComp = null
  if (props.events.length === 0) {
    EventDetailComp = Loader // progress fetcher
  } else {
    EventDetailComp = EventDetail
  }
  return (
    <Router>
      { props.isloginin ?
          <div className="app">
            <Header/>
            <Switch>
              <Route exact path="/" component={EventsList}/>
              <Route path="/new" component={Builder}/>
              <Route path="/events/:id" component={EventDetailComp}/>
            </Switch>
            <ErrorLog errors={props.errors}/>
          </div>
          :
          <AuthContainer/>
      }
    </Router>
  )
}

function mapStateToProps(state) {
  return {
    isloginin: state.auth.token,
    fetching: state.auth_fetching,
    events: [...state.events],
    errors: [...state.errors.snackbar]
  }
}

export default connect(mapStateToProps)(App)
