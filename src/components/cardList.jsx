
import { Component } from 'react'

class cardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {
          monsters.map((monster) => {
            return (<h1 key={monster.id}> {monster.name}</h1>)

          })
        }
      </div>
    )
  }
}

export default cardList;