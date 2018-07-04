import React from 'react'
import PropTypes from 'prop-types'

import Field from './Field.jsx'

import { commonOnChange } from '../utils/helpers.js'


export default class UserDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: props.user
    }
    this.onChange = commonOnChange.bind(this);
  }


  render() {
    let user = this.state.user
    if (!user) return <h1>User not found</h1>

    return (
      <React.Fragment>
        <Field name="name">
          <input type="text" name="name" value={user.name} onChange={this.onChange} placeholder="name"/>
        </Field>
        <Field name="rate">
          <span>{user.rate}</span>
        </Field>
        <Field name="balance">
          <span>{user.balance}</span>
        </Field>
        <button onClick={this.save}>save</button>
      </React.Fragment>
  );}
}

UserDetail.propTypes = {
  user: PropTypes.object
}
