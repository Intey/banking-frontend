import { CREATE_EVENT_FAILS } from '../event/actions.js'
import { AUTH_ERROR } from '../auth/actions.js'
import { FETCH_FAILS as FETCH_EVENTS_FAILS} from '../event/actions.js'
import { FETCH_FAILS as FETCH_USERS_FAILS } from '../users/actions.js'
import { ERROR, NO_USER_ID } from '../system/actions.js'
import { REMOVE_ERROR } from './action.js'

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function createError(message, header) {
  return {
    message: message,
    header: header,
    key: makeid()
  }
}

export default function errors(state={ snackbar: [] }, action) {
  let snackErrors = []
  if (state.snackbar !== undefined)
    snackErrors = state.snackbar
  switch(action.type) {
    case CREATE_EVENT_FAILS:
      return {...state, builder: action.payload}
    case AUTH_ERROR:
      return {...state, auth: action.payload}
    // browser error
    case FETCH_EVENTS_FAILS:
    case FETCH_USERS_FAILS:
      let ferr = createError(action.payload.message, "Server unavailable")
      return {...state, snackbar: [...snackErrors, ferr]}
    // WTF error
    case ERROR:
      let serr = createError(action.payload, "Server Error")
      return {...state, snackbar: [...snackErrors, serr]}
    // system error
    case NO_USER_ID:
      let ierr = createError("No user found in storage", "Integration Error")
      return {...state, snackbar: [...snackErrors, ierr]}
    case REMOVE_ERROR:
      const key = action.payload
			return {...state, snackbar: [...snackErrors.filter( (e) => e.key !== key)]}
    default:
      return state
  }
}
