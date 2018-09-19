import { connect } from 'react-redux'
import View from '../views/Profile.jsx'

function mapStateToProps(state) {
  let user = state.users.find((u) => u.id === state.auth.id)
  let transactions = []
  let groups = []
  let events = []
  if (user)
  {
    user = { id: user.id, username: user.user.username }
    transactions = state.transactions.filter((t) => t.account.id === user.id)
    groups = state.groups.filter((g) => g.participants.find((p)=> p.account === user.id))
    events = state.events.filter((e) => e.author === user.id)
  }

  else
    user = {id: -1, username: "not found"}
	return {
    user,
    transactions,
    groups,
    events
	}
}
function mapDispatchToProps(dispatch) {
  return {
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(View)

export default Container
