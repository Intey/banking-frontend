import { connect } from 'react-redux'
import View from '../views/GroupList.jsx'
import { createGroup } from '../logics/groups/actions'
import { denormalize } from '../logics/groups/shape'
import { denormalizeUser } from '../logics/users/shape'

function mapStateToProps(state) {
  return {
    groups: denormalize(state),
    users: state.users.map(denormalizeUser)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onCreateGroup: (group) => {
      let participants = group.participants.map((p) => {
        return {account: p.id, parts: p.parts}
      })

      dispatch(createGroup({participants: participants, name: group.name}))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(View)
