import React from 'react';
import { connect } from 'react-redux'

import './App.css';
import EventsList from './containers/EventsList'
import Menu from './containers/Menu'
import Auth from './views/Auth'

function mapStateToProps(state) {
  return { isloginin: state.token }
}

function mapDispatchToProps(dispatch) {
  return {
    onFailed: error => {
      console.log("GOT ERROR", error)
      dispatch({ type: 'ERROR', payload: error || null})
    },
    onResponse: json => dispatch({ type: 'AUTH', payload: json.token }),
    onRequestStart: ()=> dispatch({ type: 'AUTH-FETCH' })
  }
}

const AuthContainer = connect( state => { return state }, mapDispatchToProps)(Auth)

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Banking 01050-1</h3>
        <AuthContainer/>
        <Menu/>
      </header>
      <article className="body">
        <EventsList {...props}/>
      </article>
    </div>
  );
}

export default connect(mapStateToProps)(App)
