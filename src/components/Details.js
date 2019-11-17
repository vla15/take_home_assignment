import React from 'react';
import Appointment from './Appointment';

export default function Details({ physician, appointments }) {
	const hasSelection = Object.keys(physician).length > 0;
	return (
		<div className='details-section'>
			<div>
				{hasSelection ? (
					<>
						<div className='selected-physician' style={{ fontWeight: 'bold' }}>
							Dr. {physician.firstname} {physician.lastname}
						</div>
						<div className='selected-physician'>{physician.email}</div>
						<div className='appointments-section'>
							<div className='appointment-container appointment-header'>
								<div className='appointment-number'>#</div>
								<div className='appointment-name'>Name</div>
								<div className='appointment-time'>Time</div>
								<div className='appointment-type'>Kind</div>
							</div>
							{appointments.map((a, i) => (
								<Appointment key={i} {...a} pos={i + 1} />
							))}
						</div>
					</>
				) : (
					''
				)}
			</div>
		</div>
	);
}
