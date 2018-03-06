import { RECEIVE_EVENTS, REQUEST_EVENTS } from './event/actions'

export default function fething(state=false, action) {
  switch(action.type) {
    case RECEIVE_EVENTS:
      return false
    case REQUEST_EVENTS:
      return true
    default:
      return state
  }
}
