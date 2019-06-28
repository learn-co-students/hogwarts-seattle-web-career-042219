import React, { Component } from 'react';
import Pig from './Pig';
import Filters from './Filters';
//import hogImages from './hog-imgs'


class Pigs extends Component {


  constructor(props) {
    super(props)
    this.state = {
      pigsArray: this.props.pigsData,
      filter: 'all'
    }

  }
  //let filteredArray = [];

  changeFilter = (filterType) => {

    console.log("1st");
    // this.setState({
    //   filter: filterType
    // })
    this.setState({filter: filterType}, () => {
       this.changeFilterType();
     })




  }



  changeFilterType = () => {
    if (this.state.filter === 'all') {
      console.log("2nd");
      this.setState({
        pigsArray: this.props.pigsData
      })
    } else if (this.state.filter === 'greased') {
      console.log("3rd");
      this.setState({
        pigsArray: this.props.pigsData.filter(pig =>
          pig.greased
        )
      })
    } else if (this.state.filter === 'weight') {

    } else {
      
    }
  }






  displayPig = () => {
    const pigArray = this.state.pigsArray.map((pigData, index) =>
        <Pig key={index} pig={pigData}/>
    );
    return pigArray;

  }

  render() {
    console.log('render called');
    return(
      <div>
        <Filters onChangeFilter={this.changeFilter}/>
        <div className="ui grid container">
          {this.state.pigsArray.map((pigData, index) =>
            <Pig key={index} pig={pigData}/>

          )}

        </div>

    </div>
    )

  }



}

export default Pigs;
