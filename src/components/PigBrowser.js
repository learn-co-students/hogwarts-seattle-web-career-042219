import React from "react";
import Pig from './Pig'

export default class PigBrowser extends React.Component {

render(){
  return(
    <div className="ui card ">
    {this.props.pigArray.map((pig, index)=>{
      return <Pig key={index} pig={pig} />
    })}

    </div>

)}
}

// {this.props.pigArray.map((pig, index)=>{
//   return  <Pig key={index} pig={pig}/>
// })}
