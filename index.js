var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

var mongodb = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://54.68.100.209/tado');

var User = require('./documents/user.js');
var Task = require('./documents/task.js');

app.post('/tasks', function(req, res){
	console.log(req.body.task);

	var task = new Task({
		complete: req.body.task.completed,
		description: req.body.task.description,
		createdDate: new Date(),
		updatedDate: new Date()
	});
	task.save(function(err, task2){
		console.log(err);
		console.log(task2);
	});
	res.send('Success');
});

app.post('/tasks', function(req, res){
	return Task.find();
});

app.post('/user', function(req, res){

	var password = md5(req.body.password);
	var user = new User({
		email: req.body.email,
		password: password,
		tasks: []
	});
	user.save(function(err, user2){
		console.log(err);
		console.log(user2);
	});
	res.send('Success');
});

app.listen(8888, function(){
	console.log('app listening on port 8888');
});
