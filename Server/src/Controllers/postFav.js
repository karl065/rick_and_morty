const {Favorite} = require('../DB_connection.js');

async function postFav(req, res) {
  const {id, name, origin, status, image, species, gender} = req.body;
  if (!name || !origin || !status || !image || !species || !gender) {
    return res.status(401).send('Faltan Datos');
  }
  try {
    const newFav = await Favorite.create({
      id,
      name,
      origin,
      status,
      image,
      species,
      gender,
    });
    return res.status(200).send(newFav);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}

module.exports = {postFav};
