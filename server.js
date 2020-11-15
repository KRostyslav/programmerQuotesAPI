// load up the express framework and body-parser helper
const bodyParser = require('body-parser');

// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files

const fs = require('fs');

// To solve the cors issue
const cors = require('cors');

const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this is where we'll handle our various routes from
const routes = require('./routes/routes.js')(app, fs);

app.use(cors());

// finally, launch our server on port 3001.
const server = app.listen(port, () => {
  console.log('listening on port %s...', server.address().port);
  console.log('todo list RESTful API server started on: ' + port);
});
