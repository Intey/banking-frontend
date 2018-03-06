import { FILTER } from './actions'

export default function filter(state = 'ALL', action) {
  switch(action.type) {
    case FILTER:
      return action.filter
    default:
      return state
  }
}
