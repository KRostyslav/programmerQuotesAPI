const appRouter = (app, fs) => {
  const dataPath = './data/passionate.json';


  /**
   * Get inforamation about book
   */
  app.get('/getInfo', (req, res) => {
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
  app.get('/getAllQuotes', (req, res) => {
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
  app.get('/getRandomQuote', (req, res) => {
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
};

module.exports = appRouter;
