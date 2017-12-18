import React from 'react';
import { connect } from 'react-redux'

import './App.css';
import EventsList from './containers/EventsList'
import Menu from './containers/Menu'
import Auth from './views/Auth'

const mapStateToProps = state => {
  return { ...state }
}

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Banking 01050-1</h3>
        <Auth/>
        <Menu/>
      </header>
      <article className="body">
        <EventsList {...props}/>
      </article>
    </div>
  );
}

export default connect(mapStateToProps)(App)
