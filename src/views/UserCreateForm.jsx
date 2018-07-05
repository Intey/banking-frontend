import React from 'react'
import PropTypes from 'prop-types'
import './UserCreateForm.css'
import Field from './Field.jsx'
import { commonOnChange } from '../utils/helpers.js'

export default class UserCreateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      rate: 1,
      password: "",
      passwordConfirm: ""
    }
    this.onChange = commonOnChange.bind(this);
  }

  create = () => {
    this.props.onCreateNewUser({
      username: this.state.username,
      rate: this.state.rate,
      password: this.state.password,
      is_superuser: false,
    })
  }

  render() {
    let errors = this.props.errors || []
    const passwordMatch = (this.state.password.trim() !== "" &&
                          this.state.password === this.state.passwordConfirm)
    const confirmError = passwordMatch ? null : "Password doesn't match"
    return (
      <React.Fragment>
        <h3>Create new User</h3>
        <Field name="username" onChange={this.onChange} value={this.state.username} error={errors.username}/>
        <Field name="rate" onChange={this.onChange} value={this.state.rate} error={errors.rate}/>
        <Field name="password" onChange={this.onChange} value={this.state.password} error={errors.password}/>
        <Field name="passwordConfirm" onChange={this.onChange} value={this.state.passwordConfirm} error={confirmError}/>
        <button disabled={!passwordMatch} onClick={this.create}>Create</button>
      </React.Fragment>
    )
  }
}

UserCreateForm.propTypes = {
  onCreateNewUser: PropTypes.func.isRequired

}

