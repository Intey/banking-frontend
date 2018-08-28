import React from 'react'
import PropTypes from 'prop-types'

import './GroupsSidebar.css'

import groupShape from '../logics/groups/shape.js'

export default class GroupsSidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      selected: null
    }
  }

  onToggle = () => {
    const open = this.state.open
    this.setState({open: !open})
  }

  renderGroupItem = (group) => {
    return (
      <span className="group-item"
        onClick={()=>this.props.onSelectGroup(group)}
        key={group.id}>{group.name}</span>
    )
  }

  render() {
    return <div className={`groups-sidebar ${this.state.open? "open": "closed"}`}>
      <div className="sidebar-edge" onClick={this.onToggle}>
        <div className="button">{this.state.open? ">": "<"}</div>
      </div>
      <div className="sidebar-body">
        <div className="groups-list">
          { this.props.groups.map((g) => this.renderGroupItem(g)) }
        </div>
      </div>

    </div>
  }
}


GroupsSidebar.propTypes = {
  groups: PropTypes.arrayOf(groupShape).isRequired,
  onSelectGroup: PropTypes.func.isRequired,
}
