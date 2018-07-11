import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import store from './logics/store.js'
import { fetchEvents } from './logics/event/actions.js'
import { fetchUsers } from './logics/users/actions.js'
import { fetchTransactions } from './logics/transactions/actions.js'
import { fetchGroups } from './logics/groups/actions.js'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'));

store.dispatch(fetchEvents())
store.dispatch(fetchUsers())
store.dispatch(fetchTransactions())
store.dispatch(fetchGroups())

registerServiceWorker();
