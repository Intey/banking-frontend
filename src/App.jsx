import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router'

import './App.css';

import AuthContainer from './containers/Auth'
import EventsList from './containers/EventsList'
import Builder from './containers/Builder'
import Header from './containers/Header'
import EventDetail from './containers/EventDetail.jsx'
import ErrorLog from './containers/ErrorLog.jsx'
import UserList from './containers/UserList.jsx'
import UserDetail from './containers/UserDetail.jsx'

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
  let UserDetailComp = null
  if (props.users.length === 0) {
    UserDetailComp = Loader
  } else {
    UserDetailComp = UserDetail
  }
  return (
    <Router>
      { props.isloginin ?
          <div className="app">
            <Header/>
            <Switch>
              {/* exact - prevent show EventList on all pages */}
              <Route exact path="/" component={EventsList}/>
              <Route path="/new" component={Builder}/>
              <Route path="/events/:id" component={EventDetailComp}/>
              {/* exact - prevent show UserList on "/users/:id" */}
              <Route exact path="/users/" component={UserList}/>
              <Route path="/users/:id" component={UserDetailComp}/>
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
    errors: [...state.errors.snackbar],
    users: [...state.users]
  }
}

export default connect(mapStateToProps)(App)
