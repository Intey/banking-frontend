import { CREATE_EVENT_FAILS } from '../event/actions.js'
import { AUTH_ERROR } from '../auth/actions.js'

export default function errors(state={}, action) {
  switch(action.type) {
    case CREATE_EVENT_FAILS:
      return {...state, builder: action.payload}
    case AUTH_ERROR:
      return {...state, auth: action.payload}
    default:
      return state
  }
}
