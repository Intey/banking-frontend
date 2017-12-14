import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import events from './eventsReducer.js'
import filter from './filterReducer.js'
import sort from './sortReducer.js'
import fetching from './fetchingReducer.js'

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck &&
    getType.toString.call(functionToCheck) === '[object Function]';
}

export const ping = store => next => action => {
	console.log('LOG. Current state')
  console.log(store.getState())

  if (isFunction(action))
  {
    // console.log('function action', action)
  }
  else
  {
    console.log('action', action)
  }
	console.log('END LOG')
  return next(action)
}

const rootReducer = combineReducers({events, filter, sort, fetching})
export default createStore(rootReducer, applyMiddleware(ping, thunk))

