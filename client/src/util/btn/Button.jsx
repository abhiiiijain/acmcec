import React from 'react'
import PropTypes from 'prop-types';
import './button.scss'
export const ButtonPrimary = ({ color, text, onClick, className }) => {
	return (
		<button
			onClick={onClick}
			style={{ backgroundColor: color }}
			className={` ButtonPrimary ${className}`}
		>
			{text}
		</button>
	);
};


ButtonPrimary.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
	onClick: PropTypes.func,
};
export default ButtonPrimary