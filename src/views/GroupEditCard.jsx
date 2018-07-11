import React from 'react'
import PropTypes from 'prop-types'

import Field from './Field.jsx'
import { commonOnChange } from '../utils/helpers.js'

export default class GroupEditCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
    this.onChange = commonOnChange.bind(this);
  }

  render() { return (
    <div>
      <Field name="name" value={this.state.value} onChange={this.onChange}/>
    </div>
  );}
}
GroupEditCard.propTypes = {
  name: PropTypes.string,
  errors: PropTypes.object,
}

