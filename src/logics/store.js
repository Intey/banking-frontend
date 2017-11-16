import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import events from './eventsReducer.js'

import EventList from '../views/EventsList.js'

export default createStore(events, applyMiddleware(thunk))

