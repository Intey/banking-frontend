import { SORT } from './actions'

export default function sortReducer(state={ type:'ASC', field: '' }, action) {
  switch(action.type) {
    case SORT:
      return { type: action.payload.type, field: action.payload.filed }
    default:
      return state
  }
}
