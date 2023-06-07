import React, { Component } from 'react'
import './App.css'
import SearchBox from './SearchBox'
import CardList from './CardList'
import { robots } from './robots'
// ^needs to be destructured as robots.js is export not export default (cos we're exporting multiple values)
// ^needs to be commented out unless CardList requires an argument to be passed into the function
// ^in which case need to comment out line 3 of CardList.js
// ^UPDATE: this is actually needed for to modify the state (line 10)

// const App = () => {
// 	return(
// 		<div className='tc'>
// 			<h1>Robofriends</h1>
// 			<SearchBox/>
// 	    	<CardList robots={robots}/>
//     	</div>
// 	)
// }

class App extends Component {
	constructor() {
		super()
		this.state = {
			robotsArr: robots,
			searchfield: ''
		}
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		// ^DON'T DO THIS: this.state.searchfield = {event.target.value}
		// ^but why tho? UPDATE: it throws an error. Still dk why exactly it doesn't work tho, but it deffo doesn't work
	}
	render() {
		const filteredRobots = this.state.robotsArr.filter((robotsSearch) => {
			return robotsSearch.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return(
			<div className='tc'>
				<h1 className='f1'>Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
		    	<CardList robots={filteredRobots}/>
		    	{/*<CardList robots={this.state.robotsArr}/>*/}
	    	</div>
		)
	}
}

export default App;

// good practice challenge: change this class component into a function that uses useState and event handlers
