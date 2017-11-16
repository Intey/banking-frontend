import { RECEIVE_EVENTS, REQUEST_EVENTS } from './actions.js'

export default function events(state=[], action) {
  switch(action.type) {
    case REQUEST_EVENTS:
      console.log(action)
      break;

    case RECEIVE_EVENTS:
      console.log(action)
      break;

    default:
      return state
  }
}
