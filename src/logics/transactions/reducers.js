import { TRANSACTIONS_RESPONSE } from './actions.js'

export default function transactions(state=[], action) {
  switch(action.type) {
    case TRANSACTIONS_RESPONSE:
      return [...state, ...action.payload]
      break;
    default:
      return state
  }
}
