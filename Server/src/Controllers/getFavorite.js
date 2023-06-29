const {Favorite} = require('../DB_connection');

async function getFav(res) {
  try {
    const fav = await Favorite.findAll();
    return res.status(200).json(fav);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {getFav};
