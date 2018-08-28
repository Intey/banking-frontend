import { connect } from 'react-redux'

import { selectGroup } from '../logics/groups/actions.js'
import View from '../views/GroupsSidebar.jsx'
import { denormalizeGroup } from '../logics/groups/shape.js'

const mapDispatchToProps = {
  onSelectGroup: selectGroup
}

function mapStateToProps(state) {
  // leave only selected and non empty groups
  let groups = state.groups.filter((g) => (!state.selectedGroups.find((sg) => sg.id === g.id) && g.participants.length > 0))
  return {
    groups: groups.map((g)=> denormalizeGroup(g, state.users)),
  }
}


const GroupsSidebar = connect(mapStateToProps, mapDispatchToProps)(View)
export default GroupsSidebar
