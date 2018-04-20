import { connect } from 'react-redux'

import Builder from '../views/Builder'
import { createEventRequest } from '../logics/event/actions'

function mapDispatchToProps(dispatch) {
  return {
    onNewEvent: (payload) => dispatch(createEventRequest(payload))
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors.builder
  }
}

const BuilderContainer = connect(mapStateToProps, mapDispatchToProps)(Builder)

export default BuilderContainer
