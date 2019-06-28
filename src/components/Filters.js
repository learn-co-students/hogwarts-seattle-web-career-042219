import React, { Component } from 'react';


class Filters extends Component {


  handleChangeFilter = (event) => {
    this.props.onChangeFilter(event.target.value);

  }

  render() {

    return(

      <div>
        <select style={{marginBottom: 30}} onChange={this.handleChangeFilter} name="type" id="type">
          <option value="all">All</option>
          <option value="greased">Greased</option>
          <option value="weight">Weight</option>
          <option value="alphabet">Alphabet</option>
        </select>

      </div>


    )

  }

}

export default Filters;
