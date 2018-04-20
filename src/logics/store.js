import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import events from './event/reducers'
import filter from './filter/reducers'
import sort from './sort/reducers'
import fetching from './fetchingReducer'
import { auth as token } from './auth/reducers'
import errors from './errors/reducer'

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

const rootReducer = combineReducers({
  events,
  filter,
  sort,
  fetching,
  token,
  errors,
})

let debug = true

let initial = {
  token: window.sessionStorage.getItem('token')
}

let enchancer = compose;
if (debug) {
  enchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}
export default createStore(rootReducer,
  initial,
  enchancer( applyMiddleware(ping, thunk) )
)

