import React, { Component } from 'react';
import Leaderboard from './Leaderboard';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      campers: [],
      sortedBy: 'recent'
    }
  }

  sortBy(sortedBy) {
    let campers = [...this.state.campers];
    campers = campers.sort((a, b) => {
      return b[sortedBy] - a[sortedBy];
    });
    this.setState({campers, sortedBy});
  }

  componentDidMount() {
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(res => this.setState({campers: res.data}))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Camper Leaderboard</h1>
        </header>
        <Leaderboard campers={this.state.campers} sortedBy={this.state.sortedBy} sortBy={this.sortBy.bind(this)}/>
      </div>
    );
  }
}

export default App;
