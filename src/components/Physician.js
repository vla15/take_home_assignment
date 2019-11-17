import React from 'react';

export default function Physician({ _id, lastname, firstname, email, onClick, isSelected }) {
	const handleClick = e => {
		onClick(_id);
	};
	const selected = isSelected ? 'selected' : '';
	return (
		<div className={`physician-container ${selected}`}>
			<div onClick={handleClick} className='physician-row'>
				<span className='physician-icon'>○</span>
				<span className='physician-name'>
					{lastname}, {firstname}
				</span>
			</div>
		</div>
	);
}
