import { connect } from 'react-redux'

import ErrorLog from '../views/ErrorLog.jsx'

import { REMOVE_ERROR } from '../logics/errors/action.js'
import { act } from '../utils/action.js'

function mapStateToProps(state) {
  return {
    errors: state.errors.snackbar
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDeleteError: (key) => dispatch(act(REMOVE_ERROR, key))
  }
}

const ErrorLogComponent = connect(mapStateToProps, mapDispatchToProps)(ErrorLog)

export default ErrorLogComponent

