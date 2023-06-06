const axios = require('axios');

const url = 'https://rickandmortyapi.com/api/character/';

async function getCharById(req, res) {
  const id = req.params.id;
  try {
    const {data} = await axios.get(url + id);

    if (data.name) {
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status,
      };
      return res.status(200).json(character);
    } else {
      return res.status(404).json({message: 'Not fount'});
    }
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

module.exports = {getCharById};
