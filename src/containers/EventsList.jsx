import { connect } from 'react-redux'
import View from '../views/EventsList.jsx'
import { filterEvents } from '../logics/filter/domain.js'
import { participate } from '../logics/event/actions.js'
import { noUserId } from '../logics/system/actions.js'

// import sort from '../logics/sorter'

function mapStateToProps(state) {
  const currentUser = parseInt(window.sessionStorage.id, 10)
  const visibleEvents = state.events.filter((e) => {
    console.log(e.name, e.private, e.participants, currentUser)
    // FIXME: birthday event match username
    const userParticipated = e.participants.find((p) => p.id === currentUser) !== undefined
    return (!e.private || (e.private && userParticipated))
  })
	return {
    currentUser,
    events: filterEvents(visibleEvents, state.filter),
    filter: 'ALL',
    sort: {},
	}
}

function createOnParticipate(dispatch) {
  return (event_id, parts) => {
    let user_id = parseInt(window.sessionStorage.id, 10)
    if (!Number.isInteger(user_id))
    {
      console.error("sessionStorage inconsistente!")
      dispatch(noUserId())
    }
    else
      dispatch(participate(event_id, user_id, parts))
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDelete: (id) => console.log("delete", id),
    onParticipate: createOnParticipate(dispatch)
  }
}

const EventsList = connect(mapStateToProps, mapDispatchToProps)(View)

export default EventsList
