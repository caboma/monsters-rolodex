import { Component } from 'react'

class searchBox extends Component {
  render() {
    return (
      <input
        type={this.props.type}
        placeholder={this.props.placeholder}
        className={this.props.className}
        onChange={this.props.onChangeHandler} />
    )
  }
}
export default searchBox;