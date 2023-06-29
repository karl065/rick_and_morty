const express = require('express');
const {postFav} = require('../../Controllers/postFav');
const {deleteFav} = require('../../Controllers/deleteFav');
const {getFav} = require('../../Controllers/getFavorite');
const router = express.Router();

router.get('/fav', getFav);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);
module.exports = router;
