import React, { Component } from 'react';


class Hog extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isDisplay: false
        }
    }

    handleClick = () => {
        this.setState({
            isDisplay: !this.state.isDisplay
        })
    }

    render() {
        return (
            <div className="ui four wide column">
                <div className="ui card" onClick={this.handleClick}>
                    <div className="image">
                        <img src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(' ').join('_') + '.jpg'}`)}></img>
                    </div>
                    <div className="content">
                        <div className="header">
                            <a>{this.props.hog.name}</a>
                        </div>
                        
                        <div className="description" >
                            {this.state.isDisplay?
                                <div> 
                                    <p>{this.props.hog.specialty}</p>
                                    {this.props.hog.greased ? <p>Greased</p> : <p>Not Greased</p>}
                                    <p>Weight Ratio To Fridge: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
                                    <p>Best Medal: {this.props.hog['highest medal achieved']}</p>
                                </div>
                            :null}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Hog;