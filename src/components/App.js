import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Pig  from './Pig'
import PigBrowser from './PigBrowser';
import Filter from './Filter'
class App extends Component {

  constructor(){
    super()
    this.state = {
      pigs: hogs,
      checked: 'on'
}
}

  onSort = (sortByThis) => {
    if(sortByThis==='Name'){
    let alphabeticalHogs = hogs.sort(function(a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
      this.setState({
      alphabeticalHogs})

    }else {
      sortByThis==='Weight'
      let hogsByWeight = hogs.sort(function(a, b) {
      var numA = a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
      var numB = b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
      return (numA < numB) ? -1 : (numA > numB) ? 1 : 0;
      });
      this.setState({
      hogsByWeight})

      console.log(hogsByWeight)}

  }

  filterPigs = e => {
  console.log('state after checked:', this.state.checked)
  this.state.checked==='on'? this.setState({checked: 'off'}): this.setState({checked: 'on'})
  console.log(this.state.checked)
  if (this.state.checked==='on'){
    let filteredHogs =  hogs.filter(hog => hog.greased===true)

    this.setState({
      pigs: filteredHogs
    })
  }else{
    this.setState({pigs: hogs})
  }}




  render() {
    return (
      <div>
      <Nav/>
      <div className="App">

        <header>
          <h1 className="ui dividing header">React HogWarts</h1>
        </header>
        <br>
        </br>

        <div>
          <Filter checked={this.state.checked} onFilterPigs={this.filterPigs} onSort={this.onSort}/>
        </div>

        <div className="ui grid container">
            <div className="ui eight wide column">
                <PigBrowser pigArray={this.state.pigs}  />
            </div>
          </div>
        </div>
      </div>


    )
  }
}







export default App;
