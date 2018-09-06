import { connect } from 'react-redux'
import View from '../views/Profile.jsx'

function mapStateToProps(state) {
  let user = state.users.find((u) => u.id === state.auth.id)
  if (user)
    user = { id: user.id, username: user.user.username }
  else
    user = {id: -1, username: "not found"}
	return {
    user: user
	}
}
function mapDispatchToProps(dispatch) {
  return {
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(View)

export default Container
