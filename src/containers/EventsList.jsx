import { connect } from 'react-redux'
import View from '../views/EventsList'
import { filterEvents } from '../logics/filter/domain'
// import sort from '../logics/sorter'

function mapStateToProps(state) {
	return {
    events: filterEvents(state.events, state.filter),
    filter: 'ALL',
    sort: {}
	}
}
function mapDispatchToProps(dispatch) {
  return {
    onDelete: (id) => console.log("delete", id),
    onParticipate: (id, count) => console.log("participate", id, count)
  }
}

const EventsList = connect(mapStateToProps, mapDispatchToProps)(View)

export default EventsList
