const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const AppointmentsModel = new Schema({
	time: Date,
	kind: String,
	name: String,
	physicianId: ObjectId,
});

module.exports = mongoose.model('Appointments', AppointmentsModel);
