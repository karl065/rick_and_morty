const express = require('express');
const routes = require('./Routes/index.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json({limit: '10mb'});

const server = express();
const PORT = 3001;

server.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
server.use(jsonParser);
server.use(express.json({extended: true}));
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use('/rickandmorty', routes);

server.listen(PORT, () => {
  console.log('Este server esta corriendo en el puerto: ' + PORT);
});
