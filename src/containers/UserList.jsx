import { connect } from 'react-redux'

import UserList from '../views/UserList.jsx'

function mapStateToProps(state) {
  return {
    users: state.users.map( u => {
      return {
        username: u.user.username,
        isAdmin: u.user.is_superuser,
        balance: u.balance,
        rate: u.rate,
        id: u.id
      }
    })
  }
}

const UserListContainer = connect(mapStateToProps)(UserList)
export default UserListContainer
