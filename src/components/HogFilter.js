import React from 'react'
import hogs from '../porkers_data';
import Hog from './Hog'


export default class HogFilter extends React.Component {
    constructor() {
        super()
        this.state = {
            filters: {
                All: false, 
                greased: null,
                weight: null,
                alphabet: null   
            }
        }
    }

    handleSort = (event) => {
        let filterName = event.target.value
        console.log("value: ", event.target.value)
        this.setState({
            ...this.state.filters,
            filters: {
                [filterName]: !this.state.filters[filterName]
            }
        })
    }

    applyFilters = (hog, index) => {
        if(this.state.filters.All !== true) {

        
            if (hog.greased === this.state.filters.greased){
                return this.displayHogs(hog, index)
            } else if (this.state.filters.greased === null && this.state.filters.weight == null && this.state.filters.name == null) {
                return this.displayHogs(hog, index)
            }

            if(this.state.filters.weight === true) {
                return 'test'
            }

            if (this.state.filters.alphabet === true) {
                return 'test'
            }
        } else {
            return this.displayHogs(hog, index)
        }
    }

    displayHogs = (hog, index) => {
        return (<Hog key={index} name={hog.name} specialty={hog.specialty} greased={hog.greased}
            weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
            medal={hog['highest medal achieved']} />)
    }



    render() {
        return (
        <div>
            <div className="filters">
                    <select className="ui select" onChange={this.handleSort} >
                    <option className="ui option" value="All">All</option>
                <option className="ui option" value="alphabet">A-Z</option>
                <option className="ui option"  value="weight">Biggest to Smallest</option>
                <option className="ui option"  value="greased">You want it greasy?</option>
                    </select>
            </div>
            <div className="ui link cards">
                {hogs.map((hog, index) => {
                    return this.applyFilters(hog, index)
                })}
            </div>
        </div>
        )
        
    }
}