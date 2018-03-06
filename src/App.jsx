import React from 'react';
import { connect } from 'react-redux'

import './App.css';
import EventsList from './containers/EventsList'
import Menu from './containers/Menu'
import Auth from './views/Auth'
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

function App(props) {
  let container
  if (props.isloginin) {
    container =
      <article className="body">
        <EventsList {...props}/>
      </article>
  }
  else {
    container = <AuthContainer/>
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>Banking 01050-1</h3>
        <Menu/>
      </header>
      {container}
    </div>
  );
}

export default connect(mapStateToProps)(App)
