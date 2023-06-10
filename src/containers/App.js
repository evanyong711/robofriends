import React, { Component } from 'react'
import './App.css'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
// import { robots } from '../robots'
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
		super();
		this.state = {
			robotsArr: [],
			searchfield: ''
		}
	}
	componentDidMount() {
	// ^don't need arrow functions here since it is an inbuilt component of react. same as constructor()
		fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ robotsArr: users }))
		// fetch('https://jsonplaceholder.typicode.com/users')
		// 	.then(response => {
		// 		return response.json()
		// 	})
		// 	.then(users => {
		// 		this.setState({ robotsArr: users })
		// 	})
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		// ^DON'T DO THIS: this.state.searchfield = {event.target.value}
		// ^but why tho? UPDATE: it throws an error. Still dk why exactly it doesn't work tho, but it deffo doesn't work
	}
	render() {
		// const { robotsArr, searchfield } = this.state
		// ^then after that can remove all instances of "this.state" in the render() method
		const filteredRobots = this.state.robotsArr.filter((robotsSearch) => {
			return robotsSearch.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return !this.state.robotsArr.length ?
		<h1 className='tc f1 ma7'>Loading</h1> :
		(
			<div className='tc'>
				<h1 className='f1'>Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
				    	<CardList robots={filteredRobots}/>
				    	{/*<CardList robots={this.state.robotsArr}/>*/}
				    	{/*^this option has no search feature. old line of code I suspect*/}
			    	</ErrorBoundary>
		    	</Scroll>
	    	</div>
		)
		// if (this.state.robotsArr.length === 0) {
		// // ^alternatively can just write: if (!this.state.robotsArr.length) {}
		// 	return <h1 className='tc f1 ma7'>Loading</h1>
		// 	// margin is the space between element borders and the next element
		// 	// padding is the space between the element's contents (between the content of the elements and the elements' borders)
		// 	// margin is between elements, padding is within elements
		// 	// use 'ba', 'ma7', and 'pa7' in the className to see/experiment
		// }
		// else {
		// 	return(
		// 		<div className='tc'>
		// 			<h1 className='f1'>Robofriends</h1>
		// 			<SearchBox searchChange={this.onSearchChange}/>
		// 			<Scroll>
		// 				<ErrorBoundary>
		// 		    		<CardList robots={filteredRobots}/>
		// 		    		{/*<CardList robots={this.state.robotsArr}/>*/}
		// 		    		{/*^this option has no search feature. old line of code I suspect*/}
		// 				</ErrorBoundary>
		// 	    	</Scroll>
		//     	</div>
		// 	)
		// }
	}
}
// ^if I console.log() for each method of the class, it runs twice. I have no idea why. Only onSearchChange() does not output twice
// so each method is actually run twice every render. it doesn't affect anything tho, only speed/efficiency, which is only impt for when the app/website gets bigger
// but would still be good practice to figure out why for future reference

export default App

// good practice challenge: change this class component into a function that uses useState and event handlers
