'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function() {
  console.log('The server is running on port 3000');
});	
