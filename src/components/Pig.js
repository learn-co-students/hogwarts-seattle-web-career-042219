import React, { Component } from 'react';
//import hogImages from '../hog-imgs';
import PigDetails from './PigDetails'

class Pig extends Component {

  constructor(props) {
    super(props)
    this.state ={
      isClicked: false
    }
  }
  handleClick = (event) => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }
    //return <PigDetails pigDetails={this.props.pig}/>
  //genURL = () => `../hog-imgs/${this.props.pig.name}.jpg`
  getImgByName = name => {
    let formatName = name.split(" ").join("_").toLowerCase();
    return require(`../hog-imgs/${formatName}.jpg`);
  };

  render() {

    return(
      <div className="ui four wide column">
        <div className="ui card">
          <div className="image">
            <img src={this.getImgByName(this.props.pig.name)} alt="pig"/>
          </div>
          <div className="content">
            <a onClick={this.handleClick} className="header">
              {this.props.pig.name}
            </a>
          </div>
          {this.state.isClicked ? <PigDetails pigDetails={this.props.pig}/> : null}
        </div>

      </div>
    )
  }

}

export default Pig;
