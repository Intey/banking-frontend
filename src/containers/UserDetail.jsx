import { connect } from 'react-redux'
import UserDetail from '../views/UserDetail.jsx'

function mapStateToProps({ users }, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10)
  let user = users.find( (e) => e.id === id )
  user = {
    name: user.user.username,
    isAdmin: user.user.is_superuser,
    balance: user.balance,
    rate: user.rate,
    id: user.id
  }
  return { user: user }
}


export default connect(mapStateToProps)(UserDetail)
