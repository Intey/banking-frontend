import React from 'react'
import PropTypes from 'prop-types'

import Field from './Field.jsx'

import './TypeHintInput.css'

import { getUsersLike } from '../api/users.js'

export default class Component extends React.Component {
  constructor(props) {
    super(props)
    let user_id = this.props.user.id
    this.state = {
      dropped: false,
      variants: [],
    }
    if (user_id) {
      this.state.value = this.props.user.username
    }
  }

  onChange = (e) => {
    let value = e.target.value
    this.setState({value: value})

    if (value && value.trim() !== "") {
      getUsersLike(value)
        .then(variants => this.setState({variants: variants, dropped: true}))
    }
    else {
      this.setState({dropped: false})
    }
  }

  onSelect = (idx) => {
    let value = this.state.variants[idx].username
    this.setState({value: value, dropped: false})
    this.props.onSelected(this.state.variants[idx].id)
  }

  render() {
    let items
    if (this.state.variants.length === 0) {
      items = <li>No variants</li>
    }
    else {
      items = this.state.variants.map((v, idx) => <li key={idx} onClick={(e)=> this.onSelect(idx)}>{v.username}</li>)
    }
    let fieldProps = {...this.props}
    delete fieldProps.onSelected
    let classes = `typehint-dropdown ${this.state.dropped ? "open": ""}`
    return (
      <div className="typehint">
        <Field name={this.props.name}>
          <input {...fieldProps} value={this.state.value} onChange={this.onChange}/>
          <div className={classes}>
            <ul>
              {items}
            </ul>
          </div>
        </Field>
      </div>
    )
  }
}

Component.propTypes = {
  onSelected: PropTypes.func.isRequired,
  user: PropTypes.object
}
