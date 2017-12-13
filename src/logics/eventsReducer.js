import { RECEIVE_EVENTS, REQUEST_EVENTS, FILTER } from './actions'
import { filterEvents } from './filter'

export default function events(state=[], action) {
  switch(action.type) {
    case RECEIVE_EVENTS:
      return action.payload
    case REQUEST_EVENTS:
      return state
    case FILTER:
      return filterEvents(state, action.filter)
    default:
      return state
  }
}
