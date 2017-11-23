import React from 'react';
import { connect } from 'react-redux'

import './App.css';
import EventList from './views/EventsList'

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Banking 01050-1</h3>
      </header>
      <article>
        <EventList {...props}/>
      </article>
    </div>
  );
}

export default connect(mapStateToProps)(App)
