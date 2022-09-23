const jwt = require('jsonwebtoken');
require('dotenv/config');

function jwtGenerator(userId) {
  const payload = {
    user: userId
  };

  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '24hr' });
}

module.exports = jwtGenerator;
