import { Component  } from "react"
import SearchBox from "./Components/Search-box/Search-box.component";
import CardList from "./Components/Card-list/Card-list.component";
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }


  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response) => Response.json())
    .then((users) => this.setState(() =>{return {monsters: users}}))
  }

  onSearchChange = (event) =>{
          const searchField = event.target.value.toLocaleLowerCase();
          
          this.setState(() =>{
            return { searchField }
          });
        }

  render() {

    const { monsters, searchField } = this.state
    const { onSearchChange } = this
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          onSearchHandler={onSearchChange}
          placeholder={"filter monster"}
          className={"monster-search-box"}
          type={'search'}
        />
        <CardList Monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App