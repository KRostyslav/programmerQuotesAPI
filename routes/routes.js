const appRouter = (app, fs) => {
  // // variables
  const dataPath = './data/passionate.json';

  // READ
  app.get('/data', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = appRouter;
