'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 5000, function() {
	console.log('Website is running on port 5000.');
});

