import React from 'react'
import PropTypes from 'prop-types'

import Snackbar from './Snackbar.jsx'

import './ErrorLog.css'

export default function ErrorLog(props) {
  let snacks = props.errors.map( (e) => {
    return <Snackbar error={e} key={e.key} onDelete={()=>props.onDeleteError(e.key)}/>
  })
  return (
    <div className="snacks">
      {snacks}
    </div>
  )
}

ErrorLog.propTypes = {
  errors: PropTypes.array.isRequired,
  onDeleteError: PropTypes.func.isRequired
}
