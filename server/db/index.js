// const mongoose = require('mongoose');
// const Physician = require('../model/physicians');
// const Appointment = require('../model/appointments');

// const physicians = [
// 	{ firstname: 'Julius', lastname: 'Hibbert', email: 'hibbert@notablehealth.com' },
// 	{ firstname: 'Algernop', lastname: 'Krieger', email: 'krieger@notablehealth.com' },
// 	{ firstname: 'Nick', lastname: 'Rivera', email: 'rivera@notablehealth.com' },
// ];

// const appointmentNames = ['Sterling Archer', 'Cyril Figis', 'Ray Gilette', 'Lana Kane', 'Pam Poovey'];
// const appointmentTimes = [
// 	new Date('November 16, 2019 08:00:00'),
// 	new Date('November 16, 2019 08:30:00'),
// 	new Date('November 16, 2019 09:00:00'),
// 	new Date('November 16, 2019 09:30:00'),
// 	new Date('November 16, 2019 10:00:00'),
// ];
// const appointmentType = ['New Patient', 'Follow-up'];

// const db = async () => {
// 	await mongoose.connect('mongodb://localhost:27017/notable_health', {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	});
// 	await Physician.collection.drop();
// 	await Appointment.collection.drop();
// 	await physicians.forEach(p => {
// 		const { firstname, lastname, email } = p;
// 		Physician.create({
// 			firstname,
// 			lastname,
// 			email,
// 		});
// 	});

// 	await physicians.forEach(p => {
// 		const appointmentSizeRnd = Math.floor(Math.random() * 5);
// 		Array(appointmentSizeRnd)
// 			.fill(0)
// 			.forEach(async () => {
// 				const nameRnd = Math.floor(Math.random() * appointmentNames.length);
// 				const timeRnd = Math.floor(Math.random() * appointmentTimes.length);
// 				const typeRnd = Math.floor(Math.random() * appointmentType.length);
// 				const physRnd = Math.floor(Math.random() * physicians.length);
// 				try {
// 					const physician = await Physician.findOne({ firstname: physicians[physRnd].firstname });
// 					const { _id } = physician;
// 					console.log(_id);
// 					await Appointment.create({
// 						name: appointmentNames[nameRnd],
// 						kind: appointmentType[typeRnd],
// 						time: appointmentTimes[timeRnd],
// 						physicianId: _id,
// 					});
// 				} catch (err) {
// 					console.log('review this err', err);
// 				}
// 			});
// 	});
// };
// db();
