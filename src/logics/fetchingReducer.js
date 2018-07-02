import { RECEIVE_EVENTS, REQUEST_EVENTS } from './event/actions'
import { FETCH_FAILS as FETCH_EVENTS_FAILS} from './event/actions.js'
import { FETCH_FAILS as FETCH_USERS_FAILS } from './users/actions.js'

export default function fething(state=false, action) {
  switch(action.type) {
    case RECEIVE_EVENTS:
      return false
    case REQUEST_EVENTS:
      return true
    case FETCH_EVENTS_FAILS:
    case FETCH_USERS_FAILS:
      return false
    default:
      return state
  }
}
