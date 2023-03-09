/** @format */

import React from 'react';

const Button = (props) => {
	return (
		<button
			className="dribbble-button"
			style={{
				backgroundColor: '#eb4c89',
				color: 'white',
				fontFamily: 'Comic Sans MS',
				fontSize: '24px',
				border: 'none',
				padding: '16px',
				borderRadius: '8px',
			}}
		>
			{props.label}
		</button>
	);
};

export default Button;
