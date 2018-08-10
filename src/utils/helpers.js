

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

export function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

