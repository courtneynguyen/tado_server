var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
	complete: Boolean,
	description: String,
	createdDate: Date,
	updatedDate: Date
});

module.exports = mongoose.model('Task', taskSchema);
