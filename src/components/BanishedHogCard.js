import React, { Component } from "react";

class BanishedHogCard extends Component {
  state = {
    imageSrc: null
  };

  componentDidMount() {
    this.fetchGif();
  }

  fetchGif = () => {
    fetch(
      "http://api.giphy.com/v1/gifs/random?tag=bacon-sausage-pork&rating=g&api_key=y7uQOLStw37upyo5FpJwhOTaPPaqS6vU"
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        return res;
      })
      .then(res => this.setState({ imageSrc: res.data.image_original_url }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="ui centered card">
        <div className="image">
          <img onClick={this.fetchGIF} src={this.state.imageSrc} alt="bacon" />
        </div>
        <div className="content">
          <p className="header">RIP {this.props.name}</p>
        </div>
      </div>
    );
  }
}

export default BanishedHogCard;
