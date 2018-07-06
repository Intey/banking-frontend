import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import events from './event/reducers'
import filter from './filter/reducers'
import sort from './sort/reducers'
import fetching from './fetchingReducer'
import { auth } from './auth/reducers'
import errors from './errors/reducer'
import users from './users/reducers'
import transactions from './transactions/reducers'

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck &&
    getType.toString.call(functionToCheck) === '[object Function]';
}

export const ping = store => next => action => {
	console.log('LOG')
  console.log('Current state:', store.getState())

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
  auth,
  errors,
  users,
  transactions,
})

let debug = true

let initial = {
  auth: {
    token: window.sessionStorage.getItem('token'),
    id: window.sessionStorage.getItem('id'),
    rate: window.sessionStorage.getItem('rate'),
  },
}


let enchancer = compose;
if (debug) {
  enchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}
export default createStore(rootReducer,
  initial,
  enchancer( applyMiddleware(ping, thunk) )
)

