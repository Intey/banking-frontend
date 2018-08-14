import { connect } from 'react-redux'

import { selectGroup } from '../logics/groups/actions.js'
import View from '../views/GroupsSidebar.jsx'

function mapDispatchToProps(dispatch) {
  return {
    onSelectGroup: selectGroup
  }
}

function mapStateToProps(state) {
  return {
    groups: state.groups,
    currentGroup: state.selectedGroup
  }
}


const GroupsSidebar = connect(mapStateToProps, mapDispatchToProps)(View)
export default GroupsSidebar
