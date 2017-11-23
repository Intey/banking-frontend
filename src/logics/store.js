import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import events from './eventsReducer.js'

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck &&
    getType.toString.call(functionToCheck) === '[object Function]';
}

export const ping = store => next => action => {
  if (isFunction(action))
  {
    console.log('function action', action)
  }
  else
  {
    console.log(action)
  }
  return next(action)
}

export default createStore(events, applyMiddleware(ping, thunk))

