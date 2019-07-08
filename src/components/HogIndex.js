import React, { Component } from 'react';
import Hog from './Hog'

const style = {
    display: 'inline-block',
    position: 'absolute',
    right: '45%'
}

class HogIndex extends Component {

    handleChange = (event) => {
        this.props.onHandleChange(event.target.value)
    }

    render() {
        console.log('In hogIndex render', this.props.hogs)
        return (
            <div>
                <div>
                    <select className="ui select" onChange={this.handleChange} style={style} defaultValue='allHogs'>
                        <option value="greased">Filter Greased Hogs</option>
                        <option value="name">Sort By Name</option>
                        <option value="weight">Sort By Weight</option>
                        <option value="allHogs">Show All Hogs</option>
                    </select>
                </div><br></br><br></br>
                <div className="ui grid container">
                    {this.props.hogs.map((hog, index) => {
                    return <Hog key={index} hog={hog}/>
                    })}
                </div>
            </div>
        )
    }
}

export default HogIndex;