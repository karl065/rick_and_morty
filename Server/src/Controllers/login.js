const {User} = require('../DB_connection.js');

async function login(req, res) {
  const {email, password} = req.query;

  if (!email || !password) {
    res.status(400).send('Faltan Datos!');
  } else {
    try {
      const {dataValues} = await User.findOne({where: {email: email}});
      if (dataValues) {
        if (dataValues.password !== password) {
          return res.status(403).send('Constraseña incorrecta');
        }
        await User.update({access: true}, {where: {email: email}});
        const {access} = await User.findOne({where: {email: email}});

        return res.status(200).json({access: access});
      }
      return res.status(404).send('Usuario no encontrado');
    } catch (error) {
      return res.status(500).send('Usuario no encontrado');
    }
  }
}

module.exports = {login};
