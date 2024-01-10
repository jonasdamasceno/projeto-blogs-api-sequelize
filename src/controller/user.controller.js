const jwt = require('jsonwebtoken');
const { createUser } = require('../service/user.service');

const { JWT_SECRET } = process.env;

const createUserController = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    await createUser(displayName, email, password, image);
    const jwtConfig = { expiresIn: '7d' };
    const token = jwt.sign({ data: { email } }, JWT_SECRET, jwtConfig);
    return res.status(201).json({ token });
  } catch (error) {
    console.error('Error generating authentication token:', error);
    return res.status(500).json({ message: 'Internal Server Error ' });
  }
};

module.exports = { createUserController };
