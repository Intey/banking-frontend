import React from 'react'
import './Field.css'

import PropTypes from 'prop-types'

export default function Field({name, error=undefined, children=undefined, ...props}) {
  let maybeError = (
    error ?
    <span className="field-error">{error}</span>
    :
    null
  )
  if (children === undefined || children === null)
    children = <input className={`event-${name}`} name={name} {...props}/>

  let fieldClasses = `field ${error? 'error-field':''}`
  return (
    <div className={fieldClasses}>
      <label className="label" htmlFor={name}>{name}</label>
      <div className="child">
        {children}
      </div>
      {maybeError}
    </div>
  )
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  error: PropTypes.string,
}
