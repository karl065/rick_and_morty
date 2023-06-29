const {User} = require('../DB_connection');

async function logout(req, res) {
  const {email, access} = req.body;
  try {
    await User.update({access: access}, {where: {email: email}});
    return res.status(200).send('Sesion Cerrada');
  } catch (error) {
    return res.status(500).send('Error al cerrar sesion');
  }
}

module.exports = {logout};
