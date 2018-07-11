import { connect } from 'react-redux'
import View from '../views/GroupList.jsx'
import { createGroup } from '../api/groups.js'

function mapStateToProps(state) {
	return { groups: state.groups }
}

function mapDispatchToProps(dispatch) {
  return {
    onCreateGroup: createGroup
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(View)
