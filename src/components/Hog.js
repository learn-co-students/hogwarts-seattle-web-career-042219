import React from 'react'
import photo1 from '../hog-imgs/piggy_smalls.jpg'
import photo2 from '../hog-imgs/augustus_gloop.jpg'
import photo3 from '../hog-imgs/cherub.jpg'
import photo4 from '../hog-imgs/galaxy_note.jpg'
import photo5 from '../hog-imgs/leggo_my_eggo.jpg'
import photo6 from '../hog-imgs/mudblood.jpg'
import photo7 from '../hog-imgs/porkchop.jpg'
import photo8 from '../hog-imgs/rainbowdash.jpg'
import photo9 from '../hog-imgs/sobriety.jpg'
import photo10 from '../hog-imgs/the_prosciutto_concern.jpg'
import photo11 from '../hog-imgs/trouble.jpg'
import photo12 from '../hog-imgs/truffleshuffle.jpg'
let photos = [photo1, photo10, photo11, photo12, photo4, photo2, photo5, photo6, photo7, photo8, photo3, photo9]


export default class Hog extends React.Component {

    constructor(){
        super()

        this.state= {
            detailsHidden: true
        }
    }

    handleClick = () => {
        this.setState( {
            detailsHidden: !this.state.detailsHidden
        })
        console.log(this.state.detailsHidden)
    }

    photo = photos[Math.floor(Math.random() * photos.length)]

    render() {
        return (
            <div className="card">
                <div className="image">
                   
                    <img src={this.photo}/>
                </div>
                    <div className="content">
                        <h4 className="header">Name: {this.props.name}</h4>
                        
                    </div>
                    {!this.state.detailsHidden? 
                    <div className="description">
                        <div className="extra content">
                            <h4>{this.props.specialty}</h4>
                            <h4>{this.props.weight}</h4>
                            <h4>{this.props.medal}</h4>
                            {this.props.greased?<h4>I'm Greasy!</h4>:<h4>I am squeaky clean</h4>}
                         
                        </div>
                    </div>:null
                    }
                    <div>
                        <button onClick={this.handleClick}className="ui button">Details</button>
                    </div>
                </div>
        )
    }
}