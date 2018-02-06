import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import events from './eventsReducer'
import filter from './filterReducer'
import sort from './sortReducer'
import fetching from './fetchingReducer'
import token from './auth/reducer'

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

const rootReducer = combineReducers({events, filter, sort, fetching, token})
export default createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ping, thunk)
)

