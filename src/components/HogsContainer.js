import React, {Component} from 'react'
import Hog from './Hog'

class HogsContainer extends Component {
	
	state = {
		hogs: [].concat(this.props.hogs),
		filter: "All",
		greased: false
	}

	// componentDidMount() {
	// 	this.setState(prevState => prevState.hogs.map(pig => [pig.clicked = false]))
	// }

	handleClick = (name) => {
		this.setState(prevState => prevState.hogs.map(pig => {
			if (name === pig.name) {
				pig.clicked = !pig.clicked 
			}
		}))
	}

	handleChangeType = (ev) => {
		const greasedOnly = ev.target.value
		this.setState({greased: !this.state.greased}, () => {
			this.filterHogs()
		})
	}

	handleChange = (ev) => {
		const newFilter = ev.target.value
		this.setState(prevState => ({filter: newFilter}), () => {
			this.filterHogs()
		})
	}

	filterHogs = () => {
		if (this.state.filter === "Alphabetical") {
			const alphabeticalHogs = this.props.hogs.sort((a, b) => {
				return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
			})
			this.setState({
				hogs: alphabeticalHogs
			})
			this.renderHogs()
		} else if (this.state.filter === "Weight") {
			const byWeightHogs = this.props.hogs.sort((a, b) => {
				const aWeight = a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
				const bWeight = b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
				return (bWeight < aWeight) ? -1 : (bWeight > aWeight) ? 1 : 0;
			})
			this.setState({
				hogs: byWeightHogs
			})
		} else {
			console.log(this.props)
		}
		
		if (this.state.greased) {
			const greasy = this.state.hogs.filter(pig => pig.greased===true)
			this.setState({
      			hogs: greasy
    		})
		} else {
			this.setState({
      			hogs: this.props.hogs
    		})
		}

	}


	renderHogs = () => {
		return this.state.hogs.map(pig => 
			<div className="ui four wide column" key={pig.name} id={pig.name} > 
				<Hog pig={pig} onHandleClick={this.handleClick} />
			</div>
		)
	}

	render() {
		return (
			<div>
				<div className="filters">
					<label htmlFor="greased">Greased only?: </label>
					<input onChange={this.handleChangeType} type="checkbox" id="greased" value={this.state.greased}/><br/>

					<label htmlFor="filter">  Filter By: </label>
					<select className="ui select" id="filter" onChange={this.handleChange} >
						<option className="ui option" value="All">All</option>
						<option className="ui option" value="Alphabetical">A-Z</option>
						<option className="ui option"  value="Weight">Largest to Smallest</option>
					</select>
				</div>
				<br/>
				<div className="ui grid container">
					{this.renderHogs()}
				</div>
			</div>
		)
	}
}

export default HogsContainer