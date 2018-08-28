import { connect } from 'react-redux'
import View from '../views/GroupList.jsx'
import { createGroup } from '../logics/groups/actions.js'
import { denormalize } from '../logics/groups/shape.js'

function mapStateToProps(state) {
  return {
    groups: denormalize(state),
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onCreateGroup: (group) => {
      let participants = group.participants.map((p) => {
        return {account: p.account.id, parts: p.parts}
      })

      dispatch(createGroup({participants: participants, name: group.name}))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(View)
