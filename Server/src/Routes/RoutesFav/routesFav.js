const express = require('express');
const {postFav, deleteFav} = require('../../Controllers/handleFavorites.js');
const router = express.Router();

router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);
module.exports = router;
