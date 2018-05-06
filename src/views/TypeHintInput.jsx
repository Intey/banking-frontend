import React from 'react'
import PropTypes from 'prop-types'

import Field from './Field.jsx'

import './TypeHintInput.css'

import { getUsersLike } from '../api/users.js'

export default class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropped: false,
      variants: [],
      value: ""
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

    this.props.onChange(value)
  }

  onSelect = (idx) => {
    let value = this.state.variants[idx].username
    this.setState({value: value, dropped: false})
  }

  render() {
    let items
    if (this.state.variants.length === 0) {
      items = <li>No variants</li>
    }
    else {
      items = this.state.variants.map((v, idx) => <li key={idx} onClick={(e)=> this.onSelect(idx)}>{v.username}</li>)
    }
    let classes = `typehint-dropdown ${this.state.dropped ? "open": ""}`
    return (
      <div className="typehint">
        <Field name={this.props.name}>
          <input {...this.props} value={this.state.value} onChange={this.onChange}/>
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
  onChange: PropTypes.func.isRequired
}
