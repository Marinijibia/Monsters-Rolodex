import { Component  } from "react"

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }


  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response) => Response.json())
    .then((users) => this.setState(() =>{return {monsters: users}}, ()=>{console.log(this.state)}))
  }


  render() {
    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="search monsters" onChange={(event) =>{
          const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(
              event.target.value.toLocaleLowerCase()
            );
          });

          this.setState(() =>{
            return {monsters: filteredMonsters}
          }, () =>{
            console.log(this.state)
          })
        }}/>
         {this.state.monsters.map((monster) => {
          return (
            <div>
              <h3>{ monster.name}</h3>
            </div>
          )
         })}
      </div>
    );
  }
}

export default App