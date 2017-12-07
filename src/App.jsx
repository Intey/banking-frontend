import React from 'react';
import { connect } from 'react-redux'

import './App.css';
import EventsList from './views/EventsList'
import Menu from './views/Menu'

const mapStateToProps = state => {
  console.log('map for App', state)
  return { ...state }
}

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Banking 01050-1</h3>
        <Menu/>
      </header>
      <article className="body">
        <EventsList {...props}/>
      </article>
    </div>
  );
}

export default connect(mapStateToProps)(App)
