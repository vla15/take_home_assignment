import React from 'react';
import Physician from './Physician';

export default function LeftBar({ physicians, onClick, selected }) {
	//get list of physicians
	return (
		<div className='leftbar-section'>
			<div className='leftbar-header'>
				<h1>Notable</h1>
				<h2>PHYSICIANS</h2>
			</div>
			{physicians.map(p => (
				<Physician key={p._id} {...p} onClick={onClick} isSelected={selected === p._id} />
			))}
			<div className='leftbar-footer'>
				<button className='logout-btn' type='button'>
					Logout
				</button>
			</div>
		</div>
	);
}
