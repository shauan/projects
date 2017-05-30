import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      people: [],
    }
    this.getPeople = this.getPeople.bind(this);
  }

  getPeople() {
    return axios.get("http://swapi.co/api/people")
    .then((response) => {
      console.log(response.data.results);
      this.setState( { people: response.data.results})
    })
  }

  componentDidMount() {
    this.getPeople()
  }

  render(){
  const {people} = this.state;
    return (
      <div className="App">
        <div className="container">
          <div className="col-md-12 text-left">
            <List people={people} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
