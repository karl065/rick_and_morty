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
        const [, id] = match;
        const character = data.find(
          (character) => character.id === parseInt(id)
        );

        const statusCode = character ? 200 : 404;
        const contentType = character ? 'application/json' : 'text/plain';
        const response = character
          ? JSON.stringify(character)
          : 'Character not found';

        res.statusCode = statusCode;
        res.setHeader('Content-Type', contentType);
        res.end(response);
      }
    }
  })
  .listen(PORT, 'localhost');
