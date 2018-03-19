import { connect } from 'react-redux'

import Builder from '../views/Builder'
import { createEventRequest } from '../logics/event/actions'
import { act } from '../utils/action'

function mapDispatchToProps(dispatch) {
  return {
    onNewEvent: (payload) => dispatch(createEventRequest(payload))
  }
}

const BuilderContainer = connect(state => state, mapDispatchToProps)(Builder)
export default BuilderContainer
