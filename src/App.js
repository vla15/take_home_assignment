import React from 'react';
import LeftBar from './components/LeftBar';
import Details from './components/Details';
import './App.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			physicians: [],
			appointments: [],
			selectedPhysician: {},
		};
	}

	onClick = physicianId => {
		console.log('whats the physician id', physicianId);
		fetch(`http://localhost:3001/appointments/${physicianId}`)
			.then(res => res.json())
			.then(json => {
				const { result } = json;
				const { physicians } = this.state;
				const selectedPhysician = physicians.filter(p => p._id === physicianId)[0];
				this.setState({
					appointments: result,
					selectedPhysician,
				});
			});
	};

	componentDidMount() {
		fetch('http://localhost:3001/physicians')
			.then(res => res.json())
			.then(json => {
				const { result } = json;
				this.setState({
					physicians: result,
				});
			});
	}

	render() {
		const { physicians, appointments, selectedPhysician } = this.state;
		return (
			<div className='App'>
				<LeftBar physicians={physicians} onClick={this.onClick} selected={selectedPhysician._id} />
				<Details appointments={appointments} physician={selectedPhysician} />
			</div>
		);
	}
}

export default App;
