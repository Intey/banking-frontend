import { connect } from 'react-redux'

import { selectGroup } from '../logics/groups/actions.js'
import View from '../views/GroupsSidebar.jsx'

const mapDispatchToProps = {
  onSelectGroup: selectGroup
}

function mapStateToProps(state) {
  return {
    groups: state.groups.filter((g) => !state.selectedGroups.includes(g)),
  }
}


const GroupsSidebar = connect(mapStateToProps, mapDispatchToProps)(View)
export default GroupsSidebar
