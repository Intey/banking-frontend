import React from 'react'
import PropTypes from 'prop-types'

import Field from './Field.jsx'

import './TypeHintInput.css'

export default class TypeHintInput extends React.Component {
  constructor(props) {
    super(props)
    let value = ""
    if (this.props.user && this.props.user.id) {
      value = this.props.user.username
    }

    this.state = {
      dropped: false,
      variants: [],
      value: value,
    }
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.user)
      this.setState({ value: "", variants: []})
  }

  onChange = (e) => {
    let value = e.target.value
    this.setState({value: value})

    if (value && value.trim() !== "") {
      const users = this.props.users.filter((u) => u.user.username.toLowerCase().startsWith(value))
      this.setState({variants: users, dropped: users.length > 0})
    }
    else {
      this.setState({dropped: false})
    }
  }

  onSelect = (v) => {
    let value = v.user.username
    this.setState({value: value, dropped: false})
    this.props.onSelected(v)
  }

  render() {
    let items
    if (this.state.variants.length === 0) {
      items = <li>No variants</li>
    }
    else {
      items = this.state.variants.map((v, idx) => <li key={idx} onClick={(e)=> this.onSelect(v)}>{v.user.username}</li>)
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

TypeHintInput.propTypes = {
  onSelected: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  user: PropTypes.object,
  users: PropTypes.array.isRequired,
}
