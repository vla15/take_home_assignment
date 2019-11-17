import React from 'react';
import moment from 'moment';

export default function Appointment({ time, kind, name, pos }) {
	const isEven = pos % 2 === 0 ? true : false;
	return (
		<div className='appointment-container' style={{ backgroundColor: isEven ? 'lightgrey' : 'white' }}>
			<div className='appointment-number'>{pos}</div>
			<div className='appointment-name'>{name}</div>
			<div className='appointment-time'>{moment(time).format('LT')}</div>
			<div className='appointment-type'>{kind}</div>
		</div>
	);
}
