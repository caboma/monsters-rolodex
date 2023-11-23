import { Component } from 'react'
import './search-box.css'

class searchBox extends Component {
  render() {
    const { type, placeholder, className, onChangeHandler } = this.props;
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChangeHandler} />
    )
  }
}
export default searchBox;