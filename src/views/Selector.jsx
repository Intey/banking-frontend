import React from 'react'
import PropTypes from 'prop-types'

import './Selector.css'

/**
 * Dropdown selector. This widget shows input and matched variants as dropdown
 * list.
 * This widget show matched variants, correspond to current input text. Matches
 * selected by `filter` function and displayed by `variantToString` function.
 * When use select one variant from dropdown - `onSelected` will be called with
 * this variant.
 *
 * @param {array} variants - variants objects, from which will be selected needed variant.
 * `onSelected` will be called with one of this elements
 * @param {function} variantToString - function, that render variant in react component
 * @param {function} filter - filter function, to filter matching variants and
 * display them in dropdown.
 * @param {function} onSelect - called when variant will be selected
 */
export default class Selector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: -1,
      text: "",
      selected: false,
    }
  }

  onChange = (e) => {
    const str = e.target.value
    this.setState({ text: str, selected: false })
  }

  onSelect = (selected) => {
    this.setState({text: this.props.variantToString(selected), selected: true})
    this.props.onSelected(selected)
  }

  renderDropdown = (variants) => {
    if (variants.length <= 0) return <div className="dropdown"><span>no variants match</span></div>
    const views = variants.map((v) =>
      <li onClick={()=>this.onSelect(v)} key={v.id}>{this.props.variantToString(v)}</li>)
    return (
      <div className="dropdown">
        <ul>
          {views}
        </ul>
      </div>
    )
  }

  render() {
    let dropdown = null
    if (!this.state.selected && this.state.text !== "") {
      const variants = this.props.variants.filter((v) => this.props.filter(v, this.state.text))
      dropdown = this.renderDropdown(variants)
    }
    return (
      <div className="selector">
        <input type="text" name="variant" value={this.state.text}
          onChange={this.onChange}/>
        {dropdown}
      </div>
  )}
}

Selector.propTypes = {
  variants: PropTypes.array.isRequired,
  variantToString: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
}

