import { Component } from 'react';
import './card-list.css'
import Card from '../card/card';

class cardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className='card-list'>
        {
          monsters.map((monster) => {

            return (
              <Card monsters={monster} />
            )

          })
        }
      </div>
    )
  }
}

export default cardList;