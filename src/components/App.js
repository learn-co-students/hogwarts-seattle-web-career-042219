import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogFilter from './HogFilter'


class App extends Component {
  render() {
    return (
      <div className="App">
        < Nav />
        <HogFilter/>
      </div>
    )
  }
}

export default App;
