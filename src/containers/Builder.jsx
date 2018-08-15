import { connect } from 'react-redux'

import Builder from '../views/Builder'
import { createEventRequest } from '../logics/event/actions'
import { deselectGroup } from '../logics/groups/actions.js'

const mapDispatchToProps = {
  onNewEvent: createEventRequest,
  onDeselectGroup: deselectGroup,
}

function mapStateToProps(state) {
  let errors = state.errors.builder
  // normalize groups accounts to users shape
  const selectedGroups = state.selectedGroups.map((g) => {
    const {participants, ...ret} = g
    ret.participants = participants.map((p) => {
      return {
        account: state.users.find((u) => u.id === p.id),
        parts: p.parts
      }
    })
    return ret
  })

  return {
    errors: errors,
    currentUser: state.users.find((u) => u.id === state.auth.id),
    users: state.users,
    selectedGroups: selectedGroups,
  }
}

const BuilderContainer = connect(mapStateToProps, mapDispatchToProps)(Builder)

export default BuilderContainer
