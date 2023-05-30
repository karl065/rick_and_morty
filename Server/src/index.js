const http = require('http');
const data = require('./Utils/data.js');

const PORT = 3001;

module.exports = http
  .createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const url = req.url;
    if (url.includes('/rickandmorty/character')) {
      const idRegex = /\/rickandmorty\/character\/(\d+)/;
      const match = url.match(idRegex);

      if (match) {
        const id = match[1];
        const character = data.find(
          (character) => character.id === parseInt(id)
        );

        if (character) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(character));
        } else {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Character not found');
        }
      }
    }
  })
  .listen(PORT, 'localhost');
