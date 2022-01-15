import React, { Component } from "react"
import './App.css';
import {CardList} from "./components/card-list/CardList"
import SearchBox from './components/searchbox/SearchBox'

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchfield: '',
    }
  }
  componentDidMount(){
    // grabbing data 
    fetch('https://jsonplaceholder.typicode.com/users')
    // turning the data into json
    .then(response => response.json())
    // returns an array with the users
    .then(users => this.setState({monsters: users}))
  }
  
  handleChange = e => this.setState({searchfield: e.target.value})

  render(){
    const { monsters, searchfield } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()))

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder={'Search Monsters'} handleChange={this.handleChange}/>
      <CardList monsters={filteredMonsters}/> 
    </div>
  );
}}

export default App;
