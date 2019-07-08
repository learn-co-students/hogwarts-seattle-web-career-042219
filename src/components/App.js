import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogIndex from './HogIndex';

class App extends Component {

  constructor() {
    super()
    this.state = {
      hogs: hogs
    }
  }

  greasedHogs = () => {
    return hogs.filter(hog => {
      return hog.greased === true
    })
  }

  alphabetizedHogs = () => {
    return hogs.slice().sort(function (a, b) {
      return a.name.localeCompare(b.name)
    })
  }

  weightHogs = () => {
    return hogs.slice().sort(function (first, second) {
      return first['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - second['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    })
  }

  handleChange = (event) => {
    if (event === 'greased') {
      this.setState({
        hogs: this.greasedHogs()
      })
    } else if (event === 'name') {
      this.setState({
        hogs: this.alphabetizedHogs()
      })
    } else if (event === 'weight') {
      this.setState({
        hogs: this.weightHogs()
      })
    } else if (event === 'allHogs') {
      this.setState({
        hogs: hogs
      })
    } else {
      this.setState({
        hogs: hogs
      })
    }
  }

  render() {
    return (
      <div>
        <div className="App">
            < Nav />
        </div>
        <div>
            <HogIndex className="ui eight wide column" hogs={this.state.hogs}  onHandleChange={this.handleChange}/>
        </div>
      </div>
    )
  }
}

export default App;
