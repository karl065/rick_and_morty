const express = require('express');
const {getCharById} = require('../../Controllers/getCharById');
const router = express.Router();

router.get('/character/:id', getCharById);

module.exports = router;
