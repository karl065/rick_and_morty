const {users} = require('../Controllers/createUser.js');

function login(req, res) {
  const {email, password} = req.query;

  let userFound = false;

  users.find((user) => {
    if (user.email === email && user.password === password) {
      userFound = true;
    }
  });

  if (userFound) {
    return res.status(200).json({
      access: true,
    });
  } else {
    return res.status(200).json({
      access: false,
      message: 'El usuario no existe',
    });
  }
}

module.exports = {login};
