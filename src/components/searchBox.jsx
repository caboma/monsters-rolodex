import { Component } from 'react'

class searchBox extends Component {
  render() {
    return (
      <input type="search" placeholder="Enter monster's name" className="search-box" onChange={this.props.onChangeHandler} />
    )
  }
}
export default searchBox;