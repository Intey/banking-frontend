import { connect } from 'react-redux'

import EventDetailView from '../views/EventDetail.jsx'
import { errorAction } from '../logics/system/actions.js'
import { saveEvent } from '../api/event.js'

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10)
  if (state.events.length === 0)
  {
    return { event: undefined } // should fetch one
  }
  else {
    let event = state.events.find( (e) => e.id === id )
    if (event === undefined)
      throw new Error(`impossible: can't go to event page with id ${ownProps.match.params.id}`)

    let author = state.users.find( (u) => u.user.username === event.author)
    return { event, author: { id: author.id, username: author.user.username } }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleError: (e) => dispatch(errorAction(e)),
    saveEvent: (event) => saveEvent(event)
  }
}

const EventDetail = connect(mapStateToProps, mapDispatchToProps)(EventDetailView)

export default EventDetail

