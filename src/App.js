import React, { Component } from "react"
import './App.css';
import {CardList} from "./components/card-list/CardList"

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
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


  render(){
  return (
    <div className="App">
      <CardList monsters={this.state.monsters}/> 
    </div>
  );
}}

export default App;
