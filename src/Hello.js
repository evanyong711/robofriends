import React from 'react';
import './Hello.css'


// This one is the component expressed as a Class
class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello World</h1>
				<p>{this.props.greeting}</p>
			</div>
		);
	}
}


// This one is the component expressed as a function
const Hello2 = (props) => {
	return (
	<div>
		<h1>Hello World</h1>
		<p>{props.greeting}</p>
	</div>
	);
}

export default Hello2;