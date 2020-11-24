const functions = require('firebase-functions');

// load up the express framework and body-parser helper
const bodyParser = require('body-parser');

// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files

const fs = require('fs');

// To solve the cors issue
const cors = require('cors');

const dataPath = './data/passionate.json';


//
module.exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

/**
 * Get inforamation about book
 */
module.exports.getInfo = functions.https.onRequest((req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data).bookInfo);
  });
});

/**
 * Get all quotes
 */
module.exports.getAllQuotes = functions.https.onRequest((req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data).quotes);
  });
});

/**
 * Get random qoute
 */
module.exports.getRandomQuote = functions.https.onRequest((req, res) => {
  fs.readFile(dataPath, 'utf8', (err, datafile) => {
    if (err) {
      throw err;
    }
    const data = JSON.parse(datafile);
    const countQuote = data.quotes.length;
    res.send(data.quotes[getRandomInt(countQuote)]);
  });
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
