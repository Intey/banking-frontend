

/**
 * Common "onChange" handler for input field
 * should be binded for component class
 * ```
 * class Compoent extents React.Component {
 *  constructor(props) {
 *    super(props)
 *    this.state = {
 *      value: 0
 *    }
 *    this.onChange = this.onChange.bind(this);
 *  }
 * }
 * ```
 * @param {Event} e - user input event.
 *
 */
export function commonOnChange(e) {
  this.setState( { [e.target.name]: e.target.value, changed: true })
}
