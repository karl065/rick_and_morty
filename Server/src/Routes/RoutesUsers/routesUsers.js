const express = require('express');
const {login} = require('../../Controllers/login');
const {postUSer} = require('../../Controllers/postUser');
const {logout} = require('../../Controllers/logout');
const router = express.Router();

router.get('/login', login);
router.post('/createusers', postUSer);
router.put('/logout', logout);

module.exports = router;
