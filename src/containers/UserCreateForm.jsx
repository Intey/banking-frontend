import { connect } from 'react-redux'
import UserCreateForm from '../views/UserCreateForm.jsx'
import { createUser } from '../logics/users/actions.js'

function mapStateToProps(state) {
  return {
    errors: state.errors.userForm
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onCreateNewUser: (payload) => { dispatch(createUser(payload)) }
  }
}

const CreateUserFormContainer = connect(mapStateToProps, mapDispatchToProps)(UserCreateForm)
export default CreateUserFormContainer
