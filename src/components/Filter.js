import React, { Component } from 'react';


class Filter extends Component {



  handleChangeType = (e) => {
    this.props.onFilterPigs(e)

      }

  handleOnSort = (e) => {

    this.props.onSort(e.target.value)
  }

  render(){
    return (
      <div className="ui form">
        <h3>Pig Info</h3>
        <div className="ui checkbox">
          <input onClick={this.handleChangeType} type="checkbox" name="greased" value={this.props.checked}/>
          <label>Is this piggy greasy?</label>
          <select onChange={this.handleOnSort} name="type" id="type">
            <option value=""></option>
            <option value="Name">Name</option>
            <option value="Weight">Weight</option>
          </select>
        </div>
        <br>
        </br>


      </div>

    )
  }


}

export default Filter
