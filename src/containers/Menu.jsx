import { connect } from 'react-redux'
import View from '../views/Menu'
import { setFilter } from '../logics/filter/actions'
import {filterTypes } from '../logics/filter/domain'

function mapStateToProps(state) {
	return {
    filter: 'ALL',
    sort: {}
	}
}
function mapDispatchToProps(dispatch) {
  return {
    onEventDateSort: () => dispatch(setFilter(filterTypes.all)),
    onEventNameSort: () => dispatch(setFilter(filterTypes.all)),
    onEventFilterMy: () => dispatch(setFilter(filterTypes.my)),
    onEventFilterReset: () => dispatch(setFilter(filterTypes.all)),
  }
}

const EventsList = connect(mapStateToProps, mapDispatchToProps)(View)

export default EventsList
