import { connect } from 'react-redux'

import UserList from '../views/UserList'

import { denormalizeUser } from '../logics/users/shape'

function mapStateToProps(state) {
  return {
    users: state.users.map(denormalizeUser)
  }
}

const UserListContainer = connect(mapStateToProps)(UserList)
export default UserListContainer
