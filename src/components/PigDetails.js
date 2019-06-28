import React, { Component } from 'react';

class PigDetails extends Component {

  render() {

    return(
      <div class="description">
        <p>Specialty: {this.props.pigDetails.specialty}</p>
        <p>Greased: {this.props.pigDetails.greased}</p>
        <p>Weight: {this.props.pigDetails['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>Medal: {this.props.pigDetails['highest medal achieved']}</p>
      </div>

    )

  }



}

export default PigDetails;
