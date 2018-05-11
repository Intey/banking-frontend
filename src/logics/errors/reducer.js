import { CREATE_EVENT_FAILS } from '../event/actions.js'

export default function errors(state={}, action) {
  switch(action.type) {
    case CREATE_EVENT_FAILS:
      return { ...state, builder: action.payload }
    default:
      return state
  }
}
