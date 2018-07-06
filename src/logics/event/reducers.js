import { RECEIVE_EVENTS, CREATE_EVENT_RESPONSE } from './actions'

export default function events(state=[], action) {
  switch(action.type) {
    case RECEIVE_EVENTS:
      return action.payload
    case CREATE_EVENT_RESPONSE:
      return [...state, action.payload]
    default:
      return state
  }
}
