const characters = require('./RoutesCharacters/routesCharacters.js');
const favorites = require('./RoutesFav/routesFav.js');
const users = require('./RoutesUsers/routesUsers.js');

const router = require('express').Router();

router.use('/', characters);
router.use('/', favorites);
router.use('/', users);

module.exports = router;
