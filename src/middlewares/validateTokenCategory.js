const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const extractToken = (baererToken) => baererToken.split(' ')[1];

const validateToken = (req, res, next) => {
  const baererToken = req.header('Authorization');
  if (!baererToken) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = extractToken(baererToken);
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;
