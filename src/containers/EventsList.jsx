import { connect } from 'react-redux'
import View from '../views/EventsList.jsx'
import { filterEvents } from '../logics/filter/domain.js'
import { participate } from '../logics/event/actions.js'
import { noUserId } from '../logics/system/actions.js'

// import sort from '../logics/sorter'

function mapStateToProps(state) {
	return {
    events: filterEvents(state.events, state.filter),
    filter: 'ALL',
    sort: {},
	}
}

function createOnParticipate(dispatch) {
  return (event_id, parts) => {
    let user_id = parseInt(window.sessionStorage.id)
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
