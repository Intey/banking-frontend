import React from 'react'
import './Field.css'

export default function Field({name, error=undefined, children=undefined, ...props}) {
  let maybeError = (
    error !== undefined ?
    <span className="field-error">{error}</span>
    :
    null
  )
  if (children === undefined || children === null)
    children = <input className={`event-${name}`} name={name} {...props}/>

  let fieldClasses = `field ${error? 'error-field':''}`
  return (
    <div className={fieldClasses}>
      <label className="label" for={name}>{name}</label>
      <div class="child">
        {children}
      </div>
      {maybeError}
    </div>
  )
}
