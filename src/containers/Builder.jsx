import { connect } from 'react-redux'

import Builder from '../views/Builder'
import { createEventRequest } from '../logics/event/actions'
import { deselectGroup } from '../logics/groups/actions.js'
import { denormalizeGroup } from '../logics/groups/shape.js'

const mapDispatchToProps = {
  onNewEvent: createEventRequest,
  onDeselectGroup: deselectGroup,
}

function mapStateToProps(state) {
  let errors = state.errors.builder
  // normalize groups accounts to users shape
  const selectedGroups = state.selectedGroups.map((g) => denormalizeGroup(g, state.users))
  let currentUser
  const user = state.users.find((u) => u.id === state.auth.id)
  if (user)
    currentUser = { id: user.id, username: user.user.username }
  return {
    errors: errors,
    currentUser: currentUser,
    users: state.users.map((u) => { return { id: u.id, username: u.user.username } }),
    selectedGroups: selectedGroups,
  }
}

const BuilderContainer = connect(mapStateToProps, mapDispatchToProps)(Builder)

export default BuilderContainer
