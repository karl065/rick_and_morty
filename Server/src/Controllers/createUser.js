let users = [{email: 'karlos@hotmail.com', password: '1234carlos'}];

function crearUsuario(req, res) {
  users.push(req.query);
  const message = 'Agregado';
  return res.status(200).json({users, message});
}

module.exports = {users, crearUsuario};
