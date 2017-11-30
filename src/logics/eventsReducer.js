import { RECEIVE_EVENTS, REQUEST_EVENTS } from './actions.js'

export default function events(state=[], action) {
  switch(action.type) {
    case RECEIVE_EVENTS:
      return action.payload
    default:
      return state
  }
}
