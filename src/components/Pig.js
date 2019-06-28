

import React from "react";

export default class Pig extends React.Component {


render(){
  const {name, image, specialty, greased} = this.props.pig;



  return(

    <div className="card">
            <div className="content">
              <a className="header">
                {name}
              </a>
              <div className="image">
              <img src={require(`../hog-imgs/${name.split(" ").join("_").toLowerCase()}.jpg`)} />
              </div>

              <div className="description">
                <p>Specialty: {specialty}</p>
                <p>Greased: {greased?'I am a greasy piggy': 'I needed greasing...'}</p>
              </div>
            </div>
          </div>

            )}
          }
