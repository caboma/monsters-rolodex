import { Component } from 'react';
import './App.css';
import CardList from './components/cardList';
import SearchBox from './components/searchBox';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((monsters) => {
        this.setState
          (() => {
            return { monsters: monsters }
          })
      })
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField }
    })

  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    return (
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange} />

        <CardList monsters={filteredMonster} />
      </div>
    );
  }

}

export default App;
