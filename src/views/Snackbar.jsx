import React from 'react'
import PropTypes from 'prop-types'

import './Snackbar.css'

export default class Snackbar extends React.Component {
  componentDidMount = () => {
    let timeout = this.props.timeout
    if (!timeout)
      timeout = 2
    setTimeout(this.props.onDelete, timeout * 1000) //seconds
  }

  render() { return (
    <div className="snackbar">
      <div className="header">{this.props.error.header}</div>
      <div className="body">
        {this.props.error.message}
      </div>
    </div>
  );}
}


let errorShape = PropTypes.shape({
  message: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired
})

Snackbar.propTypes = {
  onDelete: PropTypes.func.isRequired,
  error: errorShape.isRequired
}
