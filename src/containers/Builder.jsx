import { connect } from 'react-redux'

import Builder from '../views/Builder'
import { createEventRequest } from '../logics/event/actions'

function mapDispatchToProps(dispatch) {
  return {
    onNewEvent: (payload) => dispatch(createEventRequest(payload))
  }
}

function mapStateToProps(state) {
  let errors = state.errors.builder
  return {
    errors: errors,
    currentUser: state.users.find((u) => u.id === state.auth.id),
    users: state.users,
  }
}

const BuilderContainer = connect(mapStateToProps, mapDispatchToProps)(Builder)

export default BuilderContainer
