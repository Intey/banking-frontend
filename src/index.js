import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Builder from './views/Builder'
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import store from './logics/store.js'
import { fetchEvents } from './logics/event/actions'
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path="/" component={App}>
          <Route path="/new" component={Builder}/>
        </Route>
      </Router>
    </Provider>
  ,
  document.getElementById('root'));

store.dispatch(fetchEvents())

registerServiceWorker();
