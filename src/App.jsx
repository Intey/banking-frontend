import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router'

import './App.css';

import AuthContainer from './containers/Auth'
import EventsList from './containers/EventsList'
import Builder from './containers/Builder'
import Header from './views/Header'
import EventDetail from './views/EventDetail.jsx'

function mapStateToProps(state) {
  return { isloginin: state.auth.token, fetching: state.auth_fetching }
}

function App({isloginin, fetching}) {
  return (
    <Router>
      { isloginin ?
          <div className="app">
            <Header/>
            <Switch>
              <Route exact path="/" component={EventsList}/>
              <Route path="/new" component={Builder}/>
              <Route path="/events/:id" component={EventDetail}/>
            </Switch>
          </div>
          :
          <AuthContainer/>
      }
    </Router>
  )
}

export default connect(mapStateToProps)(App)
