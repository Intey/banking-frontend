import { RECEIVE_EVENTS, REQUEST_EVENTS } from './actions.js'

export default function events(state=[], action) {
  switch(action.type) {
    case REQUEST_EVENTS:
      console.log('REQUEST_EVENTS reduce', action)
      return { ...state, onload: true }

    case RECEIVE_EVENTS:
      console.log('RECEIVE_EVENTS reduce', action)
      return { events: action.payload }

    default:
      return state
  }
}
