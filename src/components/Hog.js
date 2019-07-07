import React from 'react'

const Hog = ({pig, onHandleClick}) => {
	const {name, specialty, greased, clicked} = pig
	const image = require(`../hog-imgs/${name.split(" ").join("_").toLowerCase()}.jpg`)
	const medal = pig['highest medal achieved']
	const weightRatio = pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']

	const handleClick = () => {
		onHandleClick(name)
	}

	return (
		<div className="ui card" onClick={handleClick}>
			<div className="image" >
				<img src={image} alt="Greasy Pig"/>
			</div>
			<div className="content">
				<a className="header">{name}</a>
				<div className="meta">
				<span className="greased">{greased ? "Greased up" : "Not Greasy Enough"}</span>
			</div>
			{clicked ?
			<div className='description' >
				Medal: {medal} <br/> 
				Specialty: {specialty} <br/> 
			</div> :
			null}
			</div>
			<div className="extra content">
				<a>Weight Ratio: {weightRatio} </a> 
			</div>
		</div>
	)
}

export default Hog