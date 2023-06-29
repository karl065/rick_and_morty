const {User} = require('../DB_connection.js');

async function postUSer(req, res) {
  const {email, password} = req.body;
  if (!email || !password) {
    res.status(400).send('Faltan Datos!');
    console.log(email);
  } else {
    try {
      const newUser = await User.create({
        email,
        password,
      });
      return res.status(200).send('Agregado');
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
}

module.exports = {postUSer};
