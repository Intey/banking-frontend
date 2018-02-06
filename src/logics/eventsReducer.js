import { RECEIVE_EVENTS } from './actions'
export default function events(state=[], action) {
  switch(action.type) {
    case RECEIVE_EVENTS:
      return action.payload
    default:
      return state
  }
}
