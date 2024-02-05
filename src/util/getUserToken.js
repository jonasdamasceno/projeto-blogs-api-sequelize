const jwt = require('jsonwebtoken');

const getUserFromToken = async (authorization) => {
  const token = authorization.split(' ')[1];
  const secret = process.env.JWT_SECRET;
  const decoded = jwt.verify(token, secret);
  return decoded.data;
};

module.exports = getUserFromToken;