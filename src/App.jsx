import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import EventsList from './containers/EventsList'
import Menu from './containers/Menu'
import Auth from './views/Auth'
import Builder from './views/Builder'
import { AUTH, AUTH_ERROR } from './logics/auth/actions'
// TODO: utils
import { act } from './utils/action'

function mapStateToProps(state) {
  return { isloginin: state.token, fetching: state.auth_fetching }
}

function mapDispatchToProps(dispatch) {
  return {
    onFailed: error => dispatch(act(AUTH_ERROR, error || "unknown error")),
    onResponse: json => dispatch(act(AUTH, json.token))
  }
}

const AuthContainer = connect( state => { return state }, mapDispatchToProps)(Auth)


function Header(props) {
  return (
    <header className="app-header">
      <h3>Banking 01050-1</h3>
      <Menu/>
    </header>
  )
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
