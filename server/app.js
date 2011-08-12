var express = require('express');
var app = require('express').createServer();
var mongo = require('mongodb');
var db = new mongo.Db( 'innotate' , new mongo.Server( 'localhost', 27017, {}), {});
db.open(function(err) { });
app.use(express.bodyParser());

app.get('/login', function(req, res) {
	if (req.param('username') != req.param('password')) {
		res.send({'status':'SUCCESS'});
	} else {
		res.send({'status':'FAIL'});
	}
});

app.get('/annotations', function(req, res) {
	var episode = req.param('episode');
	db.collection('annotations', function(err, collection) {
		collection.find().toArray(function(err, results) {
			res.send(results);
		});
	});
});

app.get('/annotations/user', function(req, res) {
	var user = req.body.userid;

});

app.post('/annotations/add', function(req, res) {
	db.collection('annotations', function(err, collection) {
		collection.insert(req.body, function(err, docs) {
			console.log("Inserted: " + docs);
		});
	});
});

app.listen(3000);
