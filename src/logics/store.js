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
import groups from './groups/reducers.js'
import selectedGroups from './builder/groups.js'

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
  groups,
  selectedGroups,
})

let debug = true

const userId = parseInt(window.sessionStorage.getItem('id'), 10) || null
const rate = parseInt(window.sessionStorage.getItem('rate'), 10) || null
const initial = {
  auth: {
    token: window.sessionStorage.getItem('token'),
    id: userId,
    rate: rate,
  },
}


let enchancer = compose;
if (debug) {
  enchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}
export default createStore(rootReducer,
  initial,
  enchancer( applyMiddleware(thunk) )
)

