import React from 'react'

const Scroll = (props) => {
	return(
		<div style={{ overflowY: 'scroll', height: '633px', padding: '5px'}}>
		{/*^first curly bracket is to allow javascript expressions, second curly bracket is return an object (that can have css styles)*/}
		{/*^633px is the exact amount of pixels from the top of the border to the bottom of my screen in a chrome tab fullscreen (my macbook pro 2020)*/}
		{/*need to learn a way not to hardcode these things. (ie. from where the border begins to bottom of the screen) I'm sure there's a more elegant solution that using magic numbers*/}
		{/*cos ultimately, my way only works for one specific instance (a macbook pro 2020 fullscreen tab on chrome)*/}
			{props.children}
		</div>
	)
}

export default Scroll