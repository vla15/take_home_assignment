const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhysicianModel = new Schema({
	firstname: String,
	lastname: String,
	email: String,
});

module.exports = mongoose.model('Physician', PhysicianModel);
