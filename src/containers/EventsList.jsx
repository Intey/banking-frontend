import { connect } from 'react-redux'
import View from '../views/EventsList'
import { filterEvents } from '../logics/filter'
// import sort from '../logics/sorter'

function mapStateToProps(state) {
  console.log('map for container', state)
	return {
    events: filterEvents(state.events, state.filter),
    filter: 'ALL',
    sort: {}
	}
}

const EventsList = connect(mapStateToProps)(View)

export default EventsList
