const express = require('express');
const {login} = require('../../Controllers/login');
const {crearUsuario} = require('../../Controllers/createUser');
const router = express.Router();

router.get('/login', login);
router.post('/createusers', crearUsuario);

module.exports = router;
