import { connect } from 'react-redux'
import View from '../views/GroupList.jsx'
import { createGroup } from '../logics/groups/actions.js'

function mapStateToProps(state) {
  let { groups } = state;
  groups = groups.map((g) => {
    let {participants, ...rest} = g
    return {
      ...rest,
      participants: participants.map((p) => {
        let user = state.users.find((u) => u.id === p.account)
        if (!user)
          user = {id: p.account, user: { username: 'notfound'} }
        return {
          ...p,
          account: { id: user.id, username: user.user.username },
        }
      })
    }
  })
	return { groups: groups, users: state.users }
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
