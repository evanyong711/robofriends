import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
	// option 1: (single line)
	// const cardArray = robots.map((user, i) => <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>)
	// 
	// option 2: (not recommended)
	// const cardArray = robots.map(
	// 	(user, i) => {
	// 		return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
	// 	}
	// )
	
	// option 3: (best practice)
	const cardArray = robots.map((user, i) => (
		<Card 
			key={i} 
			id={robots[i].id} 
			name={robots[i].name} 
			email={robots[i].email}
		/>
	))
	// KEY NOTE: option 3 does not have a return() line
	// if the arrow function does not have curly braces after the arrow (ie. "() => ()" instead of "() => {}"), then the return function is implied
	// but that means what comes next must immediately be the object u want to return
	// you won't be able to manipulate said object
	// this cardArray function, specifically, does not need a return() since we're immediately and only returning the <Card/> component and all "manipulation" happens within the <> brackets
	// so it is safe to return() without using {}
	// otherwise, general practice is always to do () => {} syntax
	// 
	// option 4: (breakdown of each component, more detailed, more clear, but more lines)
	// const cardArray = robots.map(
	// 	(user, i) => {
	// 		return (
	// 			<Card 
	// 				key={i} 
	// 				id={robots[i].id} 
	// 				name={robots[i].name} 
	// 				email={robots[i].email}
	// 			/>
	// 		)
	// 	}
	// )
	// ^note: return() only needs brackets when returning something in multiple lines, otherwise can just immediately "return <Card ... />""
	// 
	// KEY NOTE: in all 4 options above, note that (user, i) is a syntax of the .map() function where "user" is the currentValue (in the array being passed in the function) and "i" is the index of currentValue
	// .map() actually has a third parameter it can take called arr that returns the array of the current element
	// index and arr are optional parameters but currentValue is required
	// in this case, for the function cardArray, we don't actually need to use the currentValue since it'll just return the {id: 1, ...} object in robots.js
	// look at https://www.w3schools.com/jsref/jsref_map.asp for more info
	return(
	<div>
		{ cardArray }
		{/*^I can also just return robots.map(...) directly here instead rather than instantiating a new var cardArray */}
	</div>
	)
}

// using for-standard loop:
// ^need to learn for-in and for-of loops
// ^read https://www.telerik.com/blogs/beginners-guide-loops-in-react-jsx
// ^summary: for-in uses the index of the list (ie. "for (let i in robots)") while for-of uses the actual item within said list (ie. "for (let item of robots)")
// ^both methods (like for-standard) will still need to instantiate cardArray first tho before pushing data into the array
// ^hence .map() is superior to any for loop in jsx
// const CardList = () => {
// 	let cardArray = []
// 	for (var i = 0; i < robots.length; i++) {
// 		cardArray.push(<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>)
// 	}
// 	return(
// 	<div>
// 		{ cardArray }
// 	</div>
// 	)
// }

// Not using .map() function:
// const CardList = () => {
// 	return(
// 	<div>
// 		<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
// 	    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
// 	    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
// 	    <Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
// 	    <Card id={robots[4].id} name={robots[4].name} email={robots[4].email}/>
// 	    <Card id={robots[5].id} name={robots[5].name} email={robots[5].email}/>
// 	</div>
// 	)
// }
// 
// ALTERNATIVELY:
// You can accept { robots } as a props for CardList and it'll look sommething like this:
// but obv don't forget to change line 14 in App.js to <CardList robots = { robots } />
// AND import { robots } from './robots' in App.js as well
// 
// const CardList = (props) => {
// 	// const { robots } = props
// 	// ^comment out line 25 for no warnings if I use this way
// 	return(
// 	<div>
// 		<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
// 	    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
// 	    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
// 	    <Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
// 	    <Card id={robots[4].id} name={robots[4].name} email={robots[4].email}/>
// 	    <Card id={robots[5].id} name={robots[5].name} email={robots[5].email}/>
// 	</div>
// 	)
// }
// 
// const CardList = ({ robots }) => {
// ^comment out line 3 for no warnings if I use this way
// 	return(
// 	<div>
// 		<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
// 	    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
// 	    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
// 	    <Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
// 	    <Card id={robots[4].id} name={robots[4].name} email={robots[4].email}/>
// 	    <Card id={robots[5].id} name={robots[5].name} email={robots[5].email}/>
// 	</div>
// 	)
// }


export default CardList


// look at https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/ for the differences between var, let, and const
// watch https://scrimba.com/scrim/coede4c58a4461640298cc925 too
// ^summary: vars are global unless defined within a function
// BUT NOT for loops and if statement, hence why it is problematic
// let can live within respective blocks and be unaffected by the global
// BUT two let variables of the same name cannot be declared within the same scope (unlike var), an error will be thrown
// basically a let variable cannot be redeclared
// it also does not return undefined if a let variable is called before it is initialized
// it will immediately throw an error (bad cos annoying, but good for troubleshooting cos otherwise u wouldn't know there was an error)
// const is everything a let variable is EXCEPT the fact that it can't be changed after it's been declared
// BUT if the const variable is an object (meaning a {}), then we can update the key-value pairs within the {} object without the console throwing errors
// as long as the actual variable itself isn't changed to be pointing to a whole new piece of data

// arrow functions: https://www.youtube.com/watch?v=h33Srr5J9nY
// main difference between arrow functions and normal functions: this. is redefined in standard functions whereas it stays within the scope for arrow functions
// .this in normal functions refer to the scope in which the function is called, not the the scope where it was written
// and so since the function is most likely called in main/the global scope, the this. does not have access to the class/object members of the class/object it is mostly likely trying to refer to/the author of the code most likely wanted to refer to
// .this in arrow functions is not redefined and so is the exact same as the scope in which the function is defined
// and so it can actually refer to class/object members u most prolly intended to refer to

