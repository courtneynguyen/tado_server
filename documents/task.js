var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
	complete: Boolean,
	description: String
});

module.exports = mongoose.model('Task', taskSchema);
