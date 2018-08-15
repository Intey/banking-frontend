import {GROUP_SELECTED, GROUP_DESELECTED} from '../groups/actions.js'

export default function selectedGroups(state=[], action) {
  switch(action.type) {
    case GROUP_SELECTED:
      return [...state, action.payload]
    case GROUP_DESELECTED:
      return state.filter((p) => action.payload.id !== p.id)
    default:
      return state
  }
}
